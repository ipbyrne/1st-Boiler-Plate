AdminUsers = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentPage = parseInt(this.props.page) || 1;
    var recordsPerPage = 1;
    Tracker.autorun(function (){
      userSearchkeyword = Session.get('article-search-query');
      var skipCount = (currentPage - 1) * recordsPerPage; // 1 records per page
      usersHandle = Meteor.subscribeWithPagination("users",userSearchkeyword, recordsPerPage, skipCount);
    });

    // Check for Admin User
    if(Meteor.user()){
      var admin = Meteor.user();
      var username = Meteor.user().profile.name;
      if(Meteor.user().profile.role === "Admin") {
        admin = true;
      }
    } else {
      var admin = false;
    }

    return {
      currentUser: Meteor.user(),
      isAdmin: admin,
      users: Meteor.users.findFromPublication("users",{},{sort:{"profile.role": 1}}).fetch(),
      usersCount: Counts.get('users'),
      prevPageClass: currentPage != 1 ? "" : "disabled",
      nextPageClass: currentPage < Counts.get('users')/recordsPerPage ? "" : "disabled"
    };
  },

  renderNavbar () {
    return <AdminNavbar href="/admin/users"/>;
  },

  renderUsers() {
    return this.data.users.map((user) => {
      return <AdminUserItem key={user._id} user={user}/>;
    });
  },

  nextPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage < Counts.get('users')/recordsPerPage) {
      FlowRouter.go("/admin/users/" + (currentPage + 1));
    }
  },

  prevPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage != 1) {
      FlowRouter.go("/admin/users/" + (currentPage - 1));
    }
  },

  updateUserSearch() {
    Session.set("user-search-query", $('.search-bar2').val());
  },

  renderEditUserModals() {
    return this.data.users.map((user) => {
      return <AdminEditUserItem key={user._id} user={user}/>;
    });
  },

  sendInvitation(event) {
    event.preventDefault();

    var user = {
			email: ReactDOM.findDOMNode(this.refs.email).value,
			password: "password123",
			profile: {
				role: $("#user-roles").find( 'option:selected' ).val(),
				name: ''
			}
		}
		var email = ReactDOM.findDOMNode(this.refs.email).value;
		if($("#user-roles").find( 'option:selected' ).val() != "" && ReactDOM.findDOMNode(this.refs.email).value != "") {
			Meteor.call("createNewUser", user, function(error) {
				if(error) {
					toastr.error("Failed to Add Member... " + error);
				} else {
					toastr.success("Member Added Successfully");
					Meteor.call('resetNewUserPassword', email);
					// Close Modal
					$("#user-roles").prop('selectedIndex', 0);
					$('#signup-email').val("");
					$('#send-invitation-modal').modal('toggle');
				}
			});
		} else {
			toastr.error("You must select a user role and fill out all of the user fields.");
		}
  },

  render() {
    // Set SEO
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);

    return (
      <div>
        {this.renderNavbar()}
        <div id="adminContentContainer">

          <div className="modal fade" id="send-invitation-modal" tabIndex="-1" role="dialog" aria-labelledby="send-invitation-modal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="send-invitation">Send Invitation</h4>
                </div>
                <form id="send-invite-form" onSubmit={this.sendInvitation}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Email Address</label>
        							<input ref="email" type="text" name="email" id="signup-email" className="form-control"/>
                    </div>
                    <div>
                      <label htmlFor="roles">User Role</label>
                      <select ref="role" name="roles" className="form-control" id="user-roles">
                        <option value="">Select a role...</option>
                        <option value="admin">Admin</option>
        								<option value="Member">Member</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-success">Send Invitation</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {this.renderEditUserModals()}

          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Users ({this.data.usersCount})</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-12">
            			<div className="col-md-9">
            				<input onKeyUp={this.updateUserSearch} type="text" name="searchbar" className="search-bar2 fa form-control" placeholder="&#xF002;    Search Users" />
            				<br/>
            				<br/>
            			</div>
            			<div className="col-md-3 text-center">
                    <button className="btn btn-success" data-toggle="modal" data-target="#send-invitation-modal">Add Member</button>
            				<br/>
            				<br/>
            			</div>
            			<div className="col-xs-12">
            				<table className="table table-bordered">
            					<thead>
            						<tr>
            							<th>Name</th>
            							<th>Email</th>
            							<th>Role</th>
            						</tr>
            					</thead>
            					<tbody>
            						{this.renderUsers()}
            					</tbody>
            				</table>
            				<br/>
                    <nav>
                      <ul className="pager">
                        <li className="prevPageClass">
                          <a id="prevPage" className={this.data.prevPageClass} onClick={this.prevPage}>
                            <span aria-hidden="true">&larr;</span> Previous
                          </a>
                        </li>
                        <li className="nextPageClass">
                          <a id="nextPage" className={this.data.nextPageClass} onClick={this.nextPage}>
                            Next <span aria-hidden="true">&rarr;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
            			</div>
            		</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

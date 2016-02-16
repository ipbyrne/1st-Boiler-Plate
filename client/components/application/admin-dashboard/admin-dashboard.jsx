AdminDashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Deps.autorun(function (){
      articleSearchkeyword = Session.get('article-search-query');
    	articlesHandle = Meteor.subscribeWithPagination("articles", articleSearchkeyword, 10);

      userSearchKeyword = Session.get('user-search-query');
    	usersHandle = Meteor.subscribeWithPagination('users', userSearchKeyword, 10);
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
      loading: ! articlesHandle.ready(),
      currentUser: Meteor.user(),
      isAdmin: admin,
      users: Meteor.users.find({},{sort:{"profile.role": 1}}).fetch(),
      userCount: Counts.get('users'),
      articles: Articles.find({},{sort: {submitted: -1}}).fetch(),
      articleCount: Counts.get('articles')
    };
  },

  renderUsers() {
    return this.data.users.map((user) => {
      return <AdminUserItem key={user._id} user={user}/>;
    });
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

  updateUserSearch() {
    Session.set("user-search-query", $('.search-bar').val());
  },

  renderArticles() {
    return this.data.articles.map((article) => {
      return <AdminArticleItem key={article._id} article={article}/>;
    });
  },

  updateArticleSearch() {
    Session.set("article-search-query", $('.search-bar2').val());
  },

  render() {
    if(this.data.loading){
      return (
        <Loading />
      )
    } else {
      // Set SEO
      var SEOtitle = "Dashboard";
      DocHead.setTitle(SEOtitle);

      return (
        <div>
          {this.data.isAdmin ?
            <div className="row">

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

          		<h4 className="page-header">Users</h4>
          		<p>There are {this.data.userCount} users and {this.data.articleCount} articles.</p>
          		<div className="col-md-6">
          			<div className="col-md-9">
          				<input onKeyUp={this.updateUserSearch} type="text" name="searchbar" className="search-bar fa form-control" placeholder="&#xF002;    Search Users" />
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
          							<th>Email Address</th>
          							<th className="text-center">Role</th>
          							<th width="96"></th>
          						</tr>
          					</thead>
          					<tbody>
          						{this.renderUsers()}
          					</tbody>
          				</table>
          				<br/>
          			</div>
          		</div>
          		<div className="col-md-6">
          			<div className="col-md-9">
          				<input onKeyUp={this.updateArticleSearch} type="text" name="searchbar" className="search-bar2 fa form-control" placeholder="&#xF002;    Search Articles" />
          				<br/>
          				<br/>
          			</div>
          			<div className="col-md-3 text-center">
          				<a href="/submit-article"><button className="btn btn-success">Add an Article</button></a>
          				<br/>
          				<br/>
          			</div>
          			<div className="col-xs-12">
          				<table className="table table-bordered">
          					<thead>
          						<tr>
          							<th>Article Title</th>
          							<th className="text-center">Date</th>
          							<th width="96"></th>
          						</tr>
          					</thead>
          					<tbody>
          						{this.renderArticles()}
          					</tbody>
          				</table>
          				<br/>
          			</div>
          		</div>
            </div>
          :
            ""
        	}
        </div>
      )
    }
  }
});

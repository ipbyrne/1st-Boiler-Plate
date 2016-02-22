AdminProfile = React.createClass({

  renderNavbar () {
    return <AdminNavbar />;
  },

  handleSubmit(event) {
    event.preventDefault();

    var userId = Meteor.user()._id;
		var newUserEmail = $('#email').val();
		var name = $('#name').val();

    if(newUserEmail == "") {
      newUserEmail = Meteor.user().emails[0].address;
    }

    if(name == "") {
      name = Meteor.user().profile.name;
    }

		// Close Modal
		Meteor.call("editUser", userId, newUserEmail, name, function(error) {
			if(error) {
				toastr.error("Failed to Update User... " + error);
			} else {
				toastr.success("Member Updated Successfully");
			}
		});
  },

  //Events
  handleSubmit2(event) {
    event.preventDefault();

    var oldPassword = ReactDOM.findDOMNode(this.refs.oldPassword).value;
    var newPassword = ReactDOM.findDOMNode(this.refs.newPassword).value;
    var newPassword2 = ReactDOM.findDOMNode(this.refs.newPassword2).value;

    if(newPassword === newPassword2){
			Accounts.changePassword(oldPassword, newPassword, function(error) {
				if(error) {
					toastr.error('Failed to change password...'+ error);
				} else {
					toastr.success('Password Changed Successfully');
				}
			});
		} else {
			toastr.error("Passwords do not match");
		}

    var oldPassword = ReactDOM.findDOMNode(this.refs.oldPassword).value = "";
    var newPassword = ReactDOM.findDOMNode(this.refs.newPassword).value = "";
    var newPassword2 = ReactDOM.findDOMNode(this.refs.newPassword2).value = "";
  },


  render() {
    const name = Meteor.user().profile.name;
    const email = Meteor.user().emails[0].address;
    // Set SEO
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);

    return (
      <div>
        {this.renderNavbar()}
        <div id="adminContentContainer">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Profile</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-4 col-md-offset-4">
                  <h4 className="page-header text-center">UPDATE YOUR INFO</h4>
                  <form onSubmit={this.handleSubmit} id="change-name">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="name" className="form-control" id="name" placeholder={name}/>
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="text" name="email" className="form-control" id="email" placeholder={email}/>
                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-success">UPDATE INFO</button>
                    </div>
                  </form>
                  <h4 className="page-header text-center">CHANGE YOUR PASSWORD</h4>
            			<form id="reset-password" className="reset-password" onSubmit={this.handleSubmit2}>
            				<div className="form-group">
            					<label htmlFor="newPassword">Old Password</label>
            					<input ref="oldPassword" type="password" name="newPassword" className="form-control" />
            				</div>
            				<div className="form-group">
            					<label htmlFor="newPassword">New Password</label>
            					<input ref="newPassword" type="password" name="newPassword" className="form-control" />
            				</div>
            				<div className="form-group">
            					<label htmlFor="password">Repeat New Password</label>
            					<input ref="newPassword2" type="password" name="repeatNewPassword" className="form-control" />
            				</div>
            				<div className="form-group text-center">
            					<button type="submit" className="btn btn-success">CHANGE PASSWORD</button>
            				</div>
            			</form>
            		</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

AdminEditUserItem = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  handleSubmit(event) {
    event.preventDefault();

    var userId = this.props.user._id;
		var newUserEmail = $('#email'+userId).val();
		var name = $('#name'+userId).val();

    if(newUserEmail == "") {
      newUserEmail = this.props.user.emails[0].address;
    }

    if(name == "") {
      name = this.props.user.profile.name;
    }

		// Close Modal
		Meteor.call("editUser", userId, newUserEmail, name, function(error) {
			if(error) {
				toastr.error("Failed to Update User... " + error);
			} else {
				toastr.success("Member Updated Successfully");
        $('#edit-user-modal'+userId).modal('toggle');
			}
		});
  },

  resetPassword() {
    Meteor.call('resetUserPassword', this.props.user._id, this.props.user.emails[0].address, function(error) {
			if(error) {
					toastr.error("Failed to Reset Password... " + error);
				} else {
					toastr.success("Password Reset Email Sent Successfully");
				}
		});
  },

  render() {
    const email = this.props.user.emails[0].address;
    const name = this.props.user.profile.name;
    const userRole = this.props.user.profile.role;
    const userId = this.props.user._id;
    const dataTarget = "#edit-user-modal"+userId;
    const userOptionClass = "userRole" + this.props.user._id;
    const userModalID = "edit-user-modal" + this.props.user._id;
    const userFormID = "edit-user-form" + this.props.user._id;
    const userEmailID = "email" + this.props.user._id;
    const userNameID = "name" + this.props.user._id;

    return (
      <div className="modal fade" id={userModalID} tabIndex="-1" role="dialog" aria-labelledby="send-invitation-modal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="send-invitation">Edit User</h4>
            </div>
            <form onSubmit={this.handleSubmit} id={userFormID}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="text" name="email" id={userEmailID} className="form-control" placeholder={email}/>
                  <label>Name</label>
                  <input type="text" name="name" id={userNameID} className="form-control" placeholder={name}/>
                  <br/>
                  <button onClick={this.resetPassword} type="button" className="btn btn-warning reset-password">Reset Password</button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-success edit-user-form">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

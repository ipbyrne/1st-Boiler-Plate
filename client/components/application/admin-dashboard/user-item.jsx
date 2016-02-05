AdminUserItem = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Check if Email is Yours
    var isYours = false;
    if(Meteor.user().emails[0].address === this.props.user.emails[0].address) {
      isYours = true;
    }
    return {
      isYours: isYours
    };
  },

  deleteUser() {
    if(confirm('Are you sure?')) {
			Meteor.call('deleteUser', this.props.user._id, function(error) {
        if(error) {
          toastr.error("Error: " + error);
        } else {
          toastr.success("Member Deleted!")
        }
      });
		}
  },

  updateUserRole(event) {
    var userId = this.props.user._id;
    var role = $( event.target ).find( 'option:selected' ).val();


		Meteor.call('setUserRole', userId, role, function(error) {
			if(error) {
				toastr.error("Failed to change role... " + error);
			} else {
				toastr.success("Role Changed Successfully");
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
    const userEmailID = "email" + this.props.user._id;
    const userNameID = "name" + this.props.user._id;

    return (
      <tr>
        <td className="text-left text-middle">{email}{this.data.isYours ? <label className="btn btn-sm btn-warning pull-right">You!</label>: "" }</td>
        <td>
          <select onChange={this.updateUserRole} name="userRole" id={userOptionClass} className="form-control" value={userRole} >
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
        </td>
        <td>
          <button className="btn btn-info" data-toggle="modal" data-target={dataTarget}><i className="fa fa-pencil"></i></button>
          <button onClick={this.deleteUser} className="delete-user btn btn-danger"><i className="fa fa-times"></i></button>
        </td>
      </tr>
    );
  }
});

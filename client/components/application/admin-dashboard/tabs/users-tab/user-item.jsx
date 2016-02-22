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

  deleteUser(event) {
    event.preventDefault();
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
    const deleteButtonStyle = {
      color: '#D9534F'
    };

    return (
      <tr>
        <td>{name}</td>
        <td className="text-left text-middle">{email}{this.data.isYours ? <label className="btn btn-sm btn-warning pull-right">You!</label>: "" }<small> - <a data-toggle="modal" data-target={dataTarget}>Edit</a> - <a style={deleteButtonStyle} onClick={this.deleteUser}>Delete</a></small></td>
        <td>
          <select onChange={this.updateUserRole} name="userRole" id={userOptionClass} className="form-control" value={userRole} >
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
          </select>
        </td>
      </tr>
    );
  }
});

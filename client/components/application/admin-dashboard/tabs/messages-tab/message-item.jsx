AdminMessagesMessageItem = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      isNew: this.props.message.new
    };
  },

  deleteMessage(event) {
    event.preventDefault();

    if(confirm('Are you sure?')) {
      Meteor.call('deleteMessage', this.props.message._id, function(error) {
        if(error) {
          toastr.error("Failed to delete message... "+error);
        } else {
          toastr.success("Message Deleted!");
        }
      });
    }
  },

  render() {
    const name = this.props.message.name;
    const email = this.props.message.email;
    const message = this.props.message.message;
    const submitted = moment(this.props.message.submitted).format("MMM Do YY");
    const messageURL = "/admin/message/" + this.props.message._id;
    const deleteButtonStyle = {
      color: '#D9534F'
    };

    return (
      <tr>
        <td className="text-left text-middle">{name}<small> - <a href={messageURL}>View</a> - <a style={deleteButtonStyle} onClick={this.deleteMessage}>Delete</a></small>{this.data.isNew ? <strong> - New</strong> : "" }</td>
        <td>{email}</td>
        <td>{submitted}</td>
      </tr>
    );
  }
});

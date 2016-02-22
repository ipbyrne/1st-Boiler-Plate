AdminCommentsCommentItem = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired
  },

  deleteComment (event) {
    event.preventDefault();

    if(confirm("Are You Sure?")) {
      Meteor.call("deleteComment", this.props.comment._id, function(error) {
        if(error){
          toastr.error("Error: " + error);
        } else {
          toastr.success("Article Deleted!");
        }
      });
    }
  },

  render() {
    const author = this.props.comment.username;
    const comment = this.props.comment.body;
    const submitted = moment(this.props.comment.submitted).format("MMM Do YY");
    const article = Articles.findOne(this.props.comment.articleId);
    const articleURL = "/article/" + this.props.comment.articleSlug;
    const articleTitle = this.props.comment.articleTitle;
    const deleteButtonStyle = {
      color: '#D9534F'
    };

    return (
      <tr>
        <td>{author}</td>
        <td>{comment} <small> - <a style={deleteButtonStyle} onClick={this.deleteComment}>Delete</a></small></td>
        <td>{articleTitle} <small> - <a href={articleURL}>View</a></small></td>
        <td>{submitted}</td>
      </tr>
    );
  }
});

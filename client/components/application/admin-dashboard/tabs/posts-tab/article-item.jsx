AdminPostsArticleItem = React.createClass({
  propTypes: {
    article: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      isDraft: this.props.article.draft
    };
  },

  deleteArticle (event) {
    event.preventDefault();

    if(confirm("Are You Sure?")) {
      Meteor.call("deleteArticle", this.props.article._id, function(error) {
        if(error){
          toastr.error("Error: " + error);
        } else {
          toastr.success("Article Deleted!");
        }
      });
    }
  },

  render() {
    const title = this.props.article.title;
    const author = this.props.article.username;
    const submitted = moment(this.props.article.submitted).format("MMM Do YY");
    const articleURL = "/article/" + this.props.article.slug;
    const editArticleURL = "/article/edit/" + this.props.article.slug;
    const deleteButtonStyle = {
      color: '#D9534F'
    };

    return (
      <tr>
        <td className="text-left text-middle">{title}{this.data.isDraft ? <strong> - Draft</strong> : "" }<small> - <a href={articleURL}>View</a> - <a href={editArticleURL}>Edit</a> - <a style={deleteButtonStyle} onClick={this.deleteArticle}>Delete</a></small></td>
        <td>{author}</td>
        <td>{submitted}</td>
      </tr>
    );
  }
});

{/* <a href={editArticleURL}><button className="btn btn-info"><i className="fa fa-pencil"></i></button></a>
<button onClick={this.deleteArticle} className="delete-article btn btn-danger"><i className="fa fa-times"></i></button> */}

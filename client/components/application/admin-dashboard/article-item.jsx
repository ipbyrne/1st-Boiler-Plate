AdminArticleItem = React.createClass({
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
    const submitted = moment(this.props.article.submitted).format("MMM Do YY");
    const editArticleURL = "/articles/edit/" + this.props.article.slug;

    return (
      <tr>
        <td className="text-left text-middle">{title}{this.data.isDraft ? <label className="btn btn-sm btn-warning pull-right">Draft</label> : "" }</td>
        <td>{submitted}</td>
        <td>
          <a href={editArticleURL}><button className="btn btn-info"><i className="fa fa-pencil"></i></button></a>
          <button onClick={this.deleteArticle} className="delete-article btn btn-danger"><i className="fa fa-times"></i></button>
        </td>
      </tr>
    );
  }
});

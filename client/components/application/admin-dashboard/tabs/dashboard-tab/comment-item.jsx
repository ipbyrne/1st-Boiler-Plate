AdminDashCommentItem = React.createClass({

  render() {
    const username = this.props.comment.username;
    const submitted = moment(this.props.comment.submitted).format("MMM Do YY");
    const body = this.props.comment.body;
    const article = Articles.findOne(this.props.comment.articleId);
    const articleURL = "/article/" + this.props.comment.articleSlug;

    return (
      <div>
        <p className="text-left text-middle"><a href={articleURL}>{username}</a></p>
        <p><small>{body}</small></p>
        <p><small>{submitted}</small></p>
        <hr/>
      </div>
    );
  }
});

AdminDashArticleItem = React.createClass({
  propTypes: {
    article: React.PropTypes.object.isRequired
  },
  
  render() {
    const title = this.props.article.title;
    const submitted = moment(this.props.article.submitted).format("MMM Do YY");
    const articleURL = "/article/" + this.props.article.slug;

    return (
      <div>
        <p className="text-left text-middle"><a href={articleURL}>{title}</a></p>
        <p><small>{submitted}</small></p>
        <hr/>
      </div>
    );
  }
});

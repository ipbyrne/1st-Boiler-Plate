ArticleList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      articles: Articles.find({draft:false},{sort: {submitted: -1}}).fetch()
    };
  },

  renderArticles() {
    return this.data.articles.map((article) => {
      return <ArticleItem key={article._id} article={article}/>;
    });
  },

  updateSearch() {
    Session.set("article-search-query", $('.search-bar').val());
  },

  render() {
    return (
			<div>
				{this.data.currentUser ?
          <div className="row">
            <div className="col-sm-9">
						  <input onKeyUp={this.updateSearch} type="text" name="searchbar" className="search-bar fa form-control" placeholder="&#xF002;    Search Articles" />
            </div>
            <div className="col-sm-3 text-center">
              <a href="/submit-article"><button className="btn btn-success">Add Article</button></a>
            </div>
					</div>
			  :
          <div className="row">
  					<div className="col-sm-12">
  						<input onKeyUp={this.updateSearch} type="text" name="searchbar" className="search-bar2 fa form-control" placeholder="&#xF002;    Search Articles" />
  					</div>
          </div>
				}
        <br/>
        <div className="row">
          {this.renderArticles()}
        </div>
			</div>
    )
  }
});

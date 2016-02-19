ArticleList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentPage = parseInt(this.props.page) || 1;
    var recordsPerPage = 1;
    Tracker.autorun(function (){
      articleSearchkeyword = Session.get('article-search-query');
      var skipCount = (currentPage - 1) * recordsPerPage; // 1 records per page

      articlesHandle = Meteor.subscribeWithPagination("articles", articleSearchkeyword, recordsPerPage, skipCount);
    });

    return {
      loading: ! articlesHandle.ready(),
      currentUser: Meteor.user(),
      articles: Articles.findFromPublication("articles", {draft:false},{sort: {submitted: -1}}).fetch(),
      prevPageClass: currentPage >= Counts.get('articles')/recordsPerPage ? "" : "disabled",
      nextPageClass: currentPage < Counts.get('articles')/recordsPerPage ? "" : "disabled"
    };
  },

  renderArticles() {
    return this.data.articles.map((article) => {
      return <ArticleItem key={article._id} article={article}/>;
    });
  },

  nextPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage < Counts.get('articles')/recordsPerPage) {
      FlowRouter.go("/articles/" + (currentPage + 1));
    }
  },

  prevPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage >= Counts.get('articles')/recordsPerPage) {
      FlowRouter.go("/articles/" + (currentPage - 1));
    }
  },

  updateSearch() {
    Session.set("article-search-query", $('.search-bar').val());
  },

  render() {
    // Set SEO
    var SEOtitle = "Articles";
    DocHead.setTitle(SEOtitle);

    if(this.data.loading) {
      return (
        <Loading />
      )
    } else {
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
          <nav>
            <ul className="pager">
              <li className="prevPageClass">
                <a id="prevPage" className={this.data.prevPageClass} onClick={this.prevPage}>
                  <span aria-hidden="true">&larr;</span> Previous
                </a>
              </li>
              <li className="nextPageClass">
                <a id="nextPage" className={this.data.nextPageClass} onClick={this.nextPage}>
                  Next <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>
          </nav>
  			</div>
      )
    }
  }
});

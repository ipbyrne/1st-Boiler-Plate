AdminPosts = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentPage = parseInt(this.props.page) || 1;
    var recordsPerPage = 1;
    Tracker.autorun(function (){
      articleSearchkeyword = Session.get('article-search-query');
      var skipCount = (currentPage - 1) * recordsPerPage; // 1 records per page
      articlesHandle = Meteor.subscribeWithPagination("articles",articleSearchkeyword, recordsPerPage, skipCount);
    });

    // Check for Admin User
    if(Meteor.user()){
      var admin = Meteor.user();
      var username = Meteor.user().profile.name;
      if(Meteor.user().profile.role === "Admin") {
        admin = true;
      }
    } else {
      var admin = false;
    }

    return {
      currentUser: Meteor.user(),
      isAdmin: admin,
      articles: Articles.findFromPublication("articles",{},{sort: {submitted: -1}}).fetch(),
      articleCount: Counts.get('articles'),
      prevPageClass: currentPage != 1 ? "" : "disabled",
      nextPageClass: currentPage < Counts.get('articles')/recordsPerPage ? "" : "disabled"
    };
  },

  renderNavbar () {
    return <AdminNavbar href="/admin/posts"/>;
  },

  renderArticles() {
    return this.data.articles.map((article) => {
      return <AdminPostsArticleItem key={article._id} article={article}/>;
    });
  },

  nextPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage < Counts.get('articles')/recordsPerPage) {
      FlowRouter.go("/admin/posts/" + (currentPage + 1));
    }
  },

  prevPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage != 1) {
      FlowRouter.go("/admin/posts/" + (currentPage - 1));
    }
  },

  updateArticleSearch() {
    Session.set("article-search-query", $('.search-bar2').val());
  },

  render() {
    // Set SEO
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);

    return (
      <div>
        {this.renderNavbar()}
        <div id="adminContentContainer">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Posts ({this.data.articleCount})</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-12">
            			<div className="col-md-9">
            				<input onKeyUp={this.updateArticleSearch} type="text" name="searchbar" className="search-bar2 fa form-control" placeholder="&#xF002;    Search Articles" />
            				<br/>
            				<br/>
            			</div>
            			<div className="col-md-3 text-center">
            				<a href="/submit-article"><button className="btn btn-success">Add an Article</button></a>
            				<br/>
            				<br/>
            			</div>
            			<div className="col-xs-12">
            				<table className="table table-bordered">
            					<thead>
            						<tr>
            							<th>Article Title</th>
            							<th>Author</th>
            							<th>Date</th>
            						</tr>
            					</thead>
            					<tbody>
            						{this.renderArticles()}
            					</tbody>
            				</table>
            				<br/>
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
            		</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

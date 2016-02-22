AdminComments = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentPage = parseInt(this.props.page) || 1;
    var recordsPerPage = 1;
    Tracker.autorun(function (){
      commentSearchkeyword = Session.get('comment-search-query');
      var skipCount = (currentPage - 1) * recordsPerPage; // 1 records per page
      commentsHandle = Meteor.subscribeWithPagination("comments", commentSearchkeyword, recordsPerPage, skipCount);
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
      comments: Comments.findFromPublication("comments",{},{sort: {submitted: -1}}).fetch(),
      commentCount: Counts.get('comments'),
      prevPageClass: currentPage != 1 ? "" : "disabled",
      nextPageClass: currentPage < Counts.get('comments')/recordsPerPage ? "" : "disabled"
    };
  },

  renderNavbar () {
    return <AdminNavbar />;
  },

  renderComments() {
    return this.data.comments.map((comment) => {
      return <AdminCommentsCommentItem key={comment._id} comment={comment}/>;
    });
  },

  updateCommentSearch() {
    Session.set("comment-search-query", $('.search-bar2').val());
  },

  nextPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage < Counts.get('comments')/recordsPerPage) {
      FlowRouter.go("/admin/comments/" + (currentPage + 1));
    }
  },

  prevPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage != 1) {
      FlowRouter.go("/admin/comments/" + (currentPage - 1));
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
                <h4>Comments ({this.data.commentCount})</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-12">
            			<div className="col-md-12">
            				<input onKeyUp={this.updateCommentSearch} type="text" name="searchbar" className="search-bar2 fa form-control" placeholder="&#xF002;    Search Comments" />
            				<br/>
            				<br/>
            			</div>
            			<div className="col-xs-12">
            				<table className="table table-bordered">
            					<thead>
            						<tr>
            							<th>Author</th>
            							<th>Comment</th>
                          <th>Response To</th>
            							<th>Date</th>
            						</tr>
            					</thead>
            					<tbody>
            						{this.renderComments()}
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

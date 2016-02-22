AdminDashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Tracker.autorun(function (){
      articleSearchkeyword = Session.get('article-search-query');
      commentSearchkeyword = Session.get('comment-search-query');
    	articlesHandle = Meteor.subscribeWithPagination("articles", articleSearchkeyword, 2, 0);
      commentsHandle = Meteor.subscribeWithPagination("comments", commentSearchkeyword, 2, 0);
      messagesHandle = Meteor.subscribeWithPagination("contact-messages");
      usersHandle = Meteor.subscribeWithPagination('users', "", 2, 0);
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
      articles: Articles.findFromPublication("articles",{draft: false},{sort: {submitted: -1}}).fetch(),
      articleCount: Counts.get('articles'),
      comments: Comments.findFromPublication("comments",{},{sort: {submitted: -1}}).fetch(),
      commentCount: Counts.get('comments'),
      userCount: Counts.get('users'),
      messageCount: Counts.get('contact-messages')
    };
  },

  renderNavbar () {
    return <AdminNavbar href="/admin/dashboard"/>;
  },

  renderArticles() {
    return this.data.articles.map((article) => {
      return <AdminDashArticleItem key={article._id} article={article}/>;
    });
  },

  renderComments() {
    return this.data.comments.map((comment) => {
      return <AdminDashCommentItem key={comment._id} comment={comment}/>;
    });
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
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>At a Glance</h4>
                </div>
                <div className="panel-body">
                  <div className="col-xs-6">
                    <p><strong>Posts: <a href="/admin/posts">{this.data.articleCount}</a></strong></p>
                  </div>
                  <div className="col-xs-6">
                    <p><strong>Messages: <a href="/admin/messages">{this.data.messageCount}</a></strong></p>
                  </div>
                  <br/>
                  <div className="col-xs-6">
                    <p><strong>Comments: <a href="/admin/comments">{this.data.commentCount}</a></strong></p>
                  </div>
                  <div className="col-xs-6">
                    <p><strong>Users: <a href="/admin/users">{this.data.userCount}</a></strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Activity</h4>
                </div>
                <div className="panel-body">
                  <div className="col-xs-12">
                    <h5><strong>Posts:</strong></h5>
                    {this.renderArticles()}

                    <h5><strong>Comments:</strong></h5>
                    {this.renderComments()}
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

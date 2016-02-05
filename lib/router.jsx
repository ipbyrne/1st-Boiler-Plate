// Home Page
FlowRouter.route('/', {
  action() {
    var SEOtitle = "Home Page";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(Homepage);
  }
});
// Sign Up Page
FlowRouter.route('/sign-up', {
  action() {
    var SEOtitle = "Sign Up";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(SignUp);
  }
});
// Sign In Page
FlowRouter.route('/sign-in', {
  action() {
    var SEOtitle = "Sign In";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(SignIn);
  }
});
// Change Password Page
FlowRouter.route('/change-password', {
  action() {
    var SEOtitle = "Change Password";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(ChangePassword);
  }
});
// Article List Page
FlowRouter.route('/articles', {
  action() {
    var SEOtitle = "Articles";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(ArticleList);
  }
});
// Article Page
FlowRouter.route('/articles/:slug', {
  subscriptions: function() {
    this.register('articles', Meteor.subscribe('articles'));
  },
  action(params, queryParams) {
    var article = Articles.findOne({slug: params.slug});
    var SEOtitle = article.title;
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(ArticlePage, {articleSlug: params.slug});
  }
});
// Submit Article Page
FlowRouter.route('/submit-article', {
  action() {
    var SEOtitle = "Submit an Article";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(ArticleSubmitPage);
  }
});
// Edit Article Page
FlowRouter.route('/articles/edit/:_id', {
  subscriptions: function() {
    this.register('articles', Meteor.subscribe('articles'));
  },
  action(params, queryParams) {
    var SEOtitle = "Edit Article";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(ArticleEditPage, {articleId: params._id});
  }
});
// Admin Dashboard Page
FlowRouter.route('/dashboard', {
  action() {
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);
    ReactLayout.render(AdminDashboard);
  }
});

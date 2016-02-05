// Home Page
FlowRouter.route('/', {
  action() {
    ReactLayout.render(Homepage);
  }
});
// Sign Up Page
FlowRouter.route('/sign-up', {
  action() {
    ReactLayout.render(SignUp);
  }
});
// Sign In Page
FlowRouter.route('/sign-in', {
  action() {
    ReactLayout.render(SignIn);
  }
});
// Change Password Page
FlowRouter.route('/change-password', {
  action() {
    ReactLayout.render(ChangePassword);
  }
});
// Article List Page
FlowRouter.route('/articles', {
  action() {
    ReactLayout.render(ArticleList);
  }
});
// Article Page
FlowRouter.route('/articles/:_id', {
  subscriptions: function() {
    this.register('articles', Meteor.subscribe('articles'));
  },
  action(params, queryParams) {
    ReactLayout.render(ArticlePage, {articleId: params._id});
  }
});
// Submit Article Page
FlowRouter.route('/submit-article', {
  action() {
    ReactLayout.render(ArticleSubmitPage);
  }
});
// Edit Article Page
FlowRouter.route('/articles/edit/:_id', {
  subscriptions: function() {
    this.register('articles', Meteor.subscribe('articles'));
  },
  action(params, queryParams) {
    ReactLayout.render(ArticleEditPage, {articleId: params._id});
  }
});
// Admin Dashboard Page
FlowRouter.route('/dashboard', {
  action() {
    ReactLayout.render(AdminDashboard);
  }
});

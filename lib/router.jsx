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
FlowRouter.route('/articles/:slug', {
  action(params, queryParams) {
    ReactLayout.render(ArticlePage, {articleSlug: params.slug});
  }
});
// Submit Article Page
FlowRouter.route('/submit-article', {
  action() {
    ReactLayout.render(ArticleSubmitPage);
  }
});
// Edit Article Page
FlowRouter.route('/articles/edit/:slug', {
  action(params, queryParams) {
    ReactLayout.render(ArticleEditPage, {articleSlug: params.slug});
  }
});
// Admin Dashboard Page
FlowRouter.route('/dashboard', {
  action() {
    ReactLayout.render(AdminDashboard);
  }
});

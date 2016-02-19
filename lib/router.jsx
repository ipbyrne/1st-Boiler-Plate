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
FlowRouter.route('/articles/:page?', {
  action(params, queryParams) {
    var recordsPerPage = 2;
    //if(params.page > Counts.get('articles')/recordsPerPage) {
      ReactLayout.render(ArticleList, {page: params.page});
    //} else {
      //ReactLayout.render(Page404);
    //}
  }
});
// Article Page
FlowRouter.route('/article/:slug', {
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
// 404 Route error
FlowRouter.notFound = {
    action: function() {
      ReactLayout.render(Page404);
    }
};

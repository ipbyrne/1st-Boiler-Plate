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
FlowRouter.route('/article/edit/:slug', {
  action(params, queryParams) {
    ReactLayout.render(ArticleEditPage, {articleSlug: params.slug});
  }
});
// Admin Dashboard Routes
// Dashboard Page
FlowRouter.route('/admin/dashboard', {
  action() {
    if(Meteor.user().profile.role === "Admin") {
      ReactLayout.render(AdminDashboard);
    } else {
      ReactLayout.render(AdminProfile);
    }
  }
});
// Posts Page
FlowRouter.route('/admin/posts/:page?', {
  action(params, queryParams) {
    ReactLayout.render(AdminPosts, {page: params.page});
  }
});
// Comments Page
FlowRouter.route('/admin/comments/:page?', {
  action(params, queryParams) {
    ReactLayout.render(AdminComments, {page: params.page});
  }
});
// Users Page
FlowRouter.route('/admin/users/:page?', {
  action(params, queryParams) {
    ReactLayout.render(AdminUsers, {page: params.page});
  }
});
// Profile Page
FlowRouter.route('/admin/profile', {
  action() {
    ReactLayout.render(AdminProfile);
  }
});
// 404 Route error
FlowRouter.notFound = {
    action: function() {
      ReactLayout.render(Page404);
    }
};

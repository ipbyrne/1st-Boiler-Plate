Meteor.startup(function () {
	// Load Navbar
	ReactDOM.render(<Navbar />, document.getElementById('navbar-target'));

	Session.set("user-search-query", '');
	Session.set("article-search-query", '');
	Session.set("comment-search-query", '');
});

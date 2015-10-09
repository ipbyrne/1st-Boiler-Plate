Deps.autorun(function() {
	// Code to get user collection count
	Meteor.call('getUserCount', function(err, res){
	 if(!err) Session.set("user-count", res);
	});
	// Subscriptions go here:
	// Sub for admin dashboard
	userSearchKeyword = Session.get('user-search-query');
	usersHandle = Meteor.subscribeWithPagination('users', userSearchKeyword, 10);
});
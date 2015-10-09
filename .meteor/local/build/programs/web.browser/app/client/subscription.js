(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/subscription.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Deps.autorun(function () {                                             // 1
	// Code to get user collection count                                  //
	Meteor.call('getUserCount', function (err, res) {                     // 3
		if (!err) Session.set("user-count", res);                            // 4
	});                                                                   //
	// Subscriptions go here:                                             //
	// Sub for admin dashboard                                            //
	userSearchKeyword = Session.get('user-search-query');                 // 8
	usersHandle = Meteor.subscribeWithPagination('users', userSearchKeyword, 10);
                                                                       //
	// Sub for Articles & Comments                                        //
	articleSearchkeyword = Session.get('article-search-query');           // 12
	articlesHandle = Meteor.subscribeWithPagination("articles", articleSearchkeyword, 5);
	// Subscribe with Pagination                                          //
	//commentsHandle = Meteor.subscribeWithPagination("comments", 10);    //
	// Subscribe with out Pagination to get comment Counts.               //
	Meteor.subscribe('comments');                                         // 17
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/article-list.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleList.events({                                          // 1
	'keyup .search-bar': function () {                                    // 2
		Session.set("article-search-query", $('.search-bar').val());         // 3
	},                                                                    //
	'click .load-more': function () {                                     // 5
		articlesHandle.loadNextPage();                                       // 6
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/articles/article-page.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Template.articlePage.helpers({                                         // 2
	comments: function () {                                               // 3
		Session.set('articleId', this._id);                                  // 4
		return Comments.find({});                                            // 5
	},                                                                    //
	commentCount: function () {                                           // 7
		return Comments.find({ articleId: this._id }).count();               // 8
	},                                                                    //
	gravatarImgUrl: function () {                                         // 10
		//Need to return article author email inorder to retrieve gravatar code.
		var userImageUrl = Gravatar.imageUrl($('#user').text());             // 12
		return userImageUrl;                                                 // 13
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

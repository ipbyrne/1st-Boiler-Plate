(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/articles/article-item.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleItem.helpers({                                         // 1
	gravatarImgUrl: function () {                                         // 2
		//Need to return article author email inorder to retrieve gravatar code.
		var userImageUrl = Gravatar.imageUrl($('#user').text());             // 4
		return userImageUrl;                                                 // 5
	},                                                                    //
	commentCount: function () {                                           // 7
		return Comments.find({ articleId: this._id }).count();               // 8
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

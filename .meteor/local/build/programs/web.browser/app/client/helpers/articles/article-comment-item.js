(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/articles/article-comment-item.js                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleCommentItem.helpers({                                  // 1
	gravatarImgUrl: function () {                                         // 2
		//Need to return article author email inorder to retrieve gravatar code.
		var userImageUrl = Gravatar.imageUrl($('#user').text());             // 4
		return userImageUrl;                                                 // 5
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

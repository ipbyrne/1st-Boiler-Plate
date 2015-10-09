(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/comments/article-comment-submit.js           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleCommentSubmit.events({                                 // 1
	'click button#submit-article-comment': function () {                  // 2
                                                                       //
		var commentBody = $('#article-comment').val();                       // 4
                                                                       //
		var comment = {                                                      // 6
			body: commentBody,                                                  // 7
			articleId: Session.get('articleId'),                                // 8
			submitted: new Date(),                                              // 9
			likes: 0,                                                           // 10
			likers: [],                                                         // 11
			user: Meteor.userId(),                                              // 12
			useremail: Meteor.user().emails[0].address                          // 13
		};                                                                   //
                                                                       //
		Meteor.call('commentInsert', comment);                               // 16
                                                                       //
		document.getElementById('article-comment').value = '';               // 18
		console.log(commentBody);                                            // 19
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/comments/article-comment-item.js             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleCommentItem.events({                                   // 1
	'click .article-item-upvote': function (e) {                          // 2
		e.preventDefault();                                                  // 3
		var commentId = Comments.findOne({ _id: this._id });                 // 4
		if ($.inArray(Meteor.userId(), commentId.likers) !== -1) {           // 5
			if (confirm('Are you sure you?')) {                                 // 6
				Meteor.call('unlikeComment', this._id);                            // 7
			}                                                                   //
		} else {                                                             //
			Meteor.call('likeComment', this._id);                               // 10
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

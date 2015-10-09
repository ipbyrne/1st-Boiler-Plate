Template.articleCommentItem.events({
	'click .article-item-upvote':function(e) {
		e.preventDefault();
		var commentId = Comments.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), commentId.likers) !== -1){
			if(confirm('Are you sure you?')) {
				Meteor.call('unlikeComment', this._id);
			} 
		} else {
			Meteor.call('likeComment', this._id);
		}	
	}
});
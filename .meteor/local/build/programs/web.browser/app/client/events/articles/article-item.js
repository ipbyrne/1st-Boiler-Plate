(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/article-item.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleItem.events({                                          // 1
	'click .article-item-upvote': function (e) {                          // 2
		e.preventDefault();                                                  // 3
		var articleId = Articles.findOne({ _id: this._id });                 // 4
		if ($.inArray(Meteor.userId(), articleId.likers) !== -1) {           // 5
			if (confirm('Are you sure you?')) {                                 // 6
				Meteor.call('unlikeArticle', this._id);                            // 7
			}                                                                   //
		} else {                                                             //
			Meteor.call('likeArticle', this._id);                               // 10
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

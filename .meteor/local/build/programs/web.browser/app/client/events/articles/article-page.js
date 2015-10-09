(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/article-page.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articlePage.events({                                          // 1
	'click .article-item-upvote': function (e) {                          // 2
		e.preventDefault();                                                  // 3
		var articleId = Articles.findOne({ _id: this._id });                 // 4
		if ($.inArray(Meteor.userId(), articleId.likers) !== -1) {           // 5
			if (confirm('Are you sure you?')) {                                 // 6
				Meteor.call('unlikeArticle', this._id, function (error) {          // 7
					if (error) {                                                      // 8
						toastr.error("Failed to UnLike Article... " + error);            // 9
					} else {                                                          //
						toastr.warning("Article UnLiked.");                              // 11
					}                                                                 //
				});                                                                //
			}                                                                   //
		} else {                                                             //
			Meteor.call('likeArticle', this._id, function (error) {             // 16
				if (error) {                                                       // 17
					toastr.error("Failed to Like Article... " + error);               // 18
				} else {                                                           //
					toastr.success("Article Liked.");                                 // 20
				}                                                                  //
			});                                                                 //
		}                                                                    //
	},                                                                    //
	'click .load-more': function () {                                     // 25
		commentsHandle.loadNextPage();                                       // 26
	},                                                                    //
	'click .edit-article': function () {                                  // 28
		console.log('test');                                                 // 29
	},                                                                    //
	'click .delete-article': function () {                                // 31
		console.log('test');                                                 // 32
		if (confirm('Are you sure?')) {                                      // 33
			Meteor.call('deleteArticle', this._id, function (error) {           // 34
				if (error) {                                                       // 35
					toastr.error("Failed to Delete... " + error);                     // 36
				} else {                                                           //
					toastr.success("Article Deleted.");                               // 38
					Router.go('/articles');                                           // 39
				}                                                                  //
			});                                                                 //
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

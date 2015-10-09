(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/edit-article.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.articleEditPage.events({                                      // 1
	'click button.submit': function (template) {                          // 2
		var articleId = this._id;                                            // 3
		var articleRoute = '/articles/' + articleId;                         // 4
		var url = $('#url').val();                                           // 5
		var title = $('#title').val();                                       // 6
		var body = $('.body').code();                                        // 7
		var thumbnailURL = $('#thumbnailURL').val();                         // 8
                                                                       //
		Meteor.call('articleUpdate', articleId, title, body, thumbnailURL, function (error) {
			if (error) {                                                        // 11
				toastr.error("Failed to Save Article... " + error);                // 12
			} else {                                                            //
				toastr.success("Article Saved.");                                  // 14
				document.getElementById('title').value = '';                       // 15
				document.getElementById('summernote').value = '';                  // 16
				document.getElementById('thumbnailURL').value = '';                // 17
				Router.go(articleRoute);                                           // 18
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

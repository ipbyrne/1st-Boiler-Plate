(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/submit-article.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.submitArticle.events({                                        // 1
	'click button.submit': function (template) {                          // 2
		var title = $('#title').val();                                       // 3
		var body = $('.body').code();                                        // 4
		var thumbnailURL = $('#thumbnailURL').val();                         // 5
                                                                       //
		if (Meteor.user() != null) {                                         // 8
			Meteor.call('articleInsert', title, body, thumbnailURL, function (error) {
				if (error) {                                                       // 10
					toastr.error("Failed to Publish Article... " + error);            // 11
				} else {                                                           //
					toastr.success("Article Published!");                             // 13
					document.getElementById('title').value = '';                      // 14
					document.getElementById('summernote').value = '';                 // 15
					document.getElementById('thumbnailURL').value = '';               // 16
					Router.go('/articles');                                           // 17
				}                                                                  //
			});                                                                 //
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/articles/submit-article.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.submitArticle.events({                                        // 1
	'click button.submit': function (template) {                          // 2
		var url = $('#url').val();                                           // 3
		var title = $('#title').val();                                       // 4
		var body = $('.body').code();                                        // 5
		var thumbnailURL = $('#thumbnailURL').val();                         // 6
                                                                       //
		Meteor.call('articleInsert', title, body, thumbnailURL);             // 8
		document.getElementById('title').value = '';                         // 9
		document.getElementById('summernote').value = '';                    // 10
		document.getElementById('thumbnailURL').value = '';                  // 11
		Router.go('/articles');                                              // 12
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

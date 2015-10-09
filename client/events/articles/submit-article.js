Template.submitArticle.events({
	'click button.submit': function(template) {
		var url = $('#url').val();
		var title = $('#title').val();
		var body = $('.body').code();
		var thumbnailURL = $('#thumbnailURL').val();
		
		Meteor.call('articleInsert', title, body, thumbnailURL);
		document.getElementById('title').value = '';
		document.getElementById('summernote').value = '';
		document.getElementById('thumbnailURL').value = '';
		Router.go('/articles');
	}
});
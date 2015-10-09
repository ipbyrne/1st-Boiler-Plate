(function(){
Template.__checkName("submitArticle");
Template["submitArticle"] = new Template("Template.submitArticle", (function() {
  var view = this;
  return HTML.Raw('<div class="col-xs-12">\n		<div class="form-group">\n			<label>Title</label>\n			<input type="text" name="title" id="title" class="form-control">\n			<br>\n			<label>Body</label>\n			<div id="summernote" class="body"></div>\n			<br>\n			<br>\n			<label>Thumbnail URL</label>\n			<input type="text" name="thumbnail" id="thumbnailURL" class="form-control">\n		</div>\n		<br>\n		<button class="btn submit btn-primary pull-right">Submit</button>\n	</div>');
}));

}).call(this);

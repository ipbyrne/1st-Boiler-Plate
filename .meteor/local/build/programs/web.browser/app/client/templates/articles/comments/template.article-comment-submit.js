(function(){
Template.__checkName("articleCommentSubmit");
Template["articleCommentSubmit"] = new Template("Template.articleCommentSubmit", (function() {
  var view = this;
  return [ HTML.TEXTAREA({
    name: "article-comment",
    id: "article-comment",
    "class": "form-control"
  }), HTML.Raw('\n	<br>\n	<button id="submit-article-comment" class="btn btn-primary pull-right">Submit</button>\n	<br>\n	<br>') ];
}));

}).call(this);

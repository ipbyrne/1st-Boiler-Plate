(function(){
Template.__checkName("articleCommentItem");
Template["articleCommentItem"] = new Template("Template.articleCommentItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-xs-12"
  }, "\n		", HTML.DIV("\n			", Blaze.View("lookup:body", function() {
    return Spacebars.mustache(view.lookup("body"));
  }), "\n		"), "\n		", HTML.DIV({
    "class": "col-xs-9"
  }, "\n			", HTML.DIV({
    id: "user",
    "class": "hide"
  }, Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), "\n			", HTML.IMG({
    "class": "img-circle",
    width: "25",
    src: function() {
      return Spacebars.mustache(view.lookup("gravatarImgUrl"));
    }
  }), "\n			", HTML.A({
    "class": ""
  }, "- ", Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), ", ", Blaze.View("lookup:submitted", function() {
    return Spacebars.mustache(view.lookup("submitted"));
  }), "\n		"), HTML.Raw("\n		<br>\n		"), HTML.DIV({
    "class": "col-xs-3"
  }, "\n			", HTML.DIV({
    "class": "btn-group pull-right"
  }, "\n				", HTML.A(HTML.BUTTON({
    "class": "article-item-upvote btn btn-default"
  }, HTML.Raw('<i class="fa fa-heart"></i>'), " ", Blaze.View("lookup:likes", function() {
    return Spacebars.mustache(view.lookup("likes"));
  }))), "\n				", Blaze.If(function() {
    return Spacebars.call(view.lookup("itemBelongsToYou"));
  }, function() {
    return [ "\n					", HTML.A({
      href: "#"
    }, HTML.BUTTON({
      "class": "btn btn-danger delete-comment"
    }, "Delete")), "\n				" ];
  }), "\n			"), "\n		"), HTML.Raw("\n		<br>\n		<hr>\n	"));
}));

}).call(this);

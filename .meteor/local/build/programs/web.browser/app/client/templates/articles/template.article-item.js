(function(){
Template.__checkName("articleItem");
Template["articleItem"] = new Template("Template.articleItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-md-12 article-item-div"
  }, "\n		", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "articlePage");
    }
  }, "\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.DIV({
    "class": "panel panel-default"
  }, "\n					", HTML.DIV({
    "class": "panel-heading"
  }, "\n						", HTML.H2(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n					"), "\n					", HTML.DIV({
    "class": "panel-body"
  }, "\n						", HTML.DIV({
    "class": "col-sm-2 col-sm-offset-10 text-center"
  }, "\n							", HTML.IMG({
    "class": "img-thumbnail",
    src: function() {
      return Spacebars.mustache(view.lookup("thumb"));
    }
  }), "\n						"), "\n						", HTML.DIV({
    "class": "col-sm-10 push-left"
  }, "\n							", HTML.DIV({
    id: "body-preview"
  }, "\n								", Spacebars.include(view.lookupTemplate("markdown"), function() {
    return Blaze.View("lookup:body", function() {
      return Spacebars.mustache(view.lookup("body"));
    });
  }), "\n								", HTML.Raw('<div id="fade"></div>'), "\n							"), "\n						"), "\n						\n						", HTML.Raw('<div class="col-xs-12">\n							<h4>- Read More -</h4>\n						</div>'), "\n					"), "\n					", HTML.DIV({
    "class": "panel-footer"
  }, "\n						", HTML.Raw("<br>"), "\n						", HTML.DIV({
    "class": "col-xs-12"
  }, "\n							", HTML.DIV({
    id: "user",
    "class": "hide"
  }, Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), "\n							", HTML.IMG({
    "class": "img-circle",
    width: "25",
    src: function() {
      return Spacebars.mustache(view.lookup("gravatarImgUrl"));
    }
  }), "\n							", HTML.A({
    "class": "article-item-name",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "userPage");
    }
  }, "by ", Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), "   ", HTML.BUTTON({
    "class": "article-item-upvote btn btn-default btn-sm"
  }, HTML.Raw('<i class="fa fa-heart"></i>'), " ", Blaze.View("lookup:likes", function() {
    return Spacebars.mustache(view.lookup("likes"));
  })), "   ", HTML.BUTTON({
    "class": "article-item-comment btn btn-default btn-sm",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "articlePage");
    }
  }, HTML.Raw('<i class="fa fa-comment"></i>'), " ", Blaze.View("lookup:commentCount", function() {
    return Spacebars.mustache(view.lookup("commentCount"));
  }), " "), "   ", HTML.SPAN({
    "class": "article-item-date"
  }, Blaze.View("lookup:submitted", function() {
    return Spacebars.mustache(view.lookup("submitted"));
  })), "\n						"), "\n						", HTML.Raw("<br>"), "\n						", HTML.Raw("<br>"), "\n					"), "\n				"), "\n			"), "\n		"), "\n	");
}));

}).call(this);

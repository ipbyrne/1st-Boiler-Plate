(function(){
Template.__checkName("articleList");
Template["articleList"] = new Template("Template.articleList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, "\n			", HTML.DIV({
    "class": "col-xs-12"
  }, "\n				", HTML.Raw('<div class="col-sm-9">\n					<input type="text" name="searchbar" class="search-bar fa form-control" placeholder="&#xF002;    Search Articles">\n					<br>\n					<br>\n				</div>'), "\n				", HTML.DIV({
    "class": "col-sm-3 text-center"
  }, "\n					", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n					", HTML.A({
      href: "/submit-article"
    }, HTML.BUTTON({
      "class": "btn btn-success"
    }, "Submit Article")), "\n					" ];
  }, function() {
    return [ "\n						", HTML.P("Please ", HTML.A({
      href: "/sign-in"
    }, "Log In"), " to submit an article."), "\n					" ];
  }), "\n					", HTML.Raw("<br>"), "\n					", HTML.Raw("<br>"), "\n				"), "\n				", HTML.Raw("<br>"), "\n				", HTML.Raw("<br>"), "\n				", HTML.Raw("<br>"), "\n				", Blaze.Each(function() {
    return Spacebars.call(view.lookup("articles"));
  }, function() {
    return [ "\n					", Spacebars.include(view.lookupTemplate("articleItem")), "\n				" ];
  }), "\n				", Blaze.If(function() {
    return Spacebars.call(view.lookup("articleLimitReached"));
  }, function() {
    return [ "\n					", HTML.DIV({
      "class": "col-xs-12 text-center"
    }, "\n						", HTML.BUTTON({
      "class": "btn btn-primary load-more"
    }, "Load More"), "\n					"), "\n				" ];
  }), "\n			"), "\n		"), "\n	");
}));

}).call(this);

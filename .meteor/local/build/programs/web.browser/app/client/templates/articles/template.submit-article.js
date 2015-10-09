(function(){
Template.__checkName("submitArticle");
Template["submitArticle"] = new Template("Template.submitArticle", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-xs-12"
  }, "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n			", HTML.DIV({
      "class": "form-group"
    }, "\n				", HTML.LABEL("Title"), "\n				", HTML.INPUT({
      type: "text",
      name: "title",
      id: "title",
      "class": "form-control"
    }), "\n				", HTML.BR(), "\n				", HTML.LABEL("Body"), "\n				", HTML.DIV({
      id: "summernote",
      "class": "body"
    }), "\n				", HTML.BR(), "\n				", HTML.BR(), "\n				", HTML.LABEL("Thumbnail URL"), "\n				", HTML.INPUT({
      type: "text",
      name: "thumbnail",
      id: "thumbnailURL",
      "class": "form-control"
    }), "\n			"), "\n			", HTML.BR(), "\n			", HTML.BUTTON({
      "class": "btn submit btn-primary pull-right"
    }, "Submit"), "\n		" ];
  }, function() {
    return [ "\n			", HTML.H1("Whoops, you must be ", HTML.A({
      href: "/sign-in"
    }, "Logged In"), " to do this!"), "\n		" ];
  }), "\n	");
}));

}).call(this);

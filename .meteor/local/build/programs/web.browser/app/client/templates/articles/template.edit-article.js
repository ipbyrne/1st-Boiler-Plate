(function(){
Template.__checkName("articleEditPage");
Template["articleEditPage"] = new Template("Template.articleEditPage", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-xs-12"
  }, "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("itemBelongsToYou"));
  }, function() {
    return [ "\n			", HTML.H2("Edit Article"), "\n			", HTML.HR(), "\n			", HTML.DIV({
      "class": "form-group"
    }, "\n				", HTML.LABEL("Title"), "\n				", HTML.INPUT({
      type: "text",
      name: "title",
      id: "title",
      "class": "form-control",
      value: function() {
        return Spacebars.mustache(view.lookup("title"));
      }
    }), "\n				", HTML.BR(), "\n				", HTML.LABEL("Body"), "\n				", HTML.DIV({
      id: "summernote",
      "class": "body"
    }, Spacebars.include(view.lookupTemplate("markdown"), function() {
      return Blaze.View("lookup:body", function() {
        return Spacebars.mustache(view.lookup("body"));
      });
    })), "\n				", HTML.BR(), "\n				", HTML.BR(), "\n				", HTML.LABEL("Thumbnail URL"), "\n				", HTML.INPUT({
      type: "text",
      name: "thumbnail",
      id: "thumbnailURL",
      "class": "form-control",
      value: function() {
        return Spacebars.mustache(view.lookup("thumb"));
      }
    }), "\n			"), "\n			", HTML.BR(), "\n			", HTML.BUTTON({
      "class": "btn submit btn-primary pull-right"
    }, "Save"), "\n		" ];
  }, function() {
    return [ "\n			", HTML.H1("Whoops, this doesn't belong to you! Time to head ", HTML.A({
      href: "/"
    }, "home!")), "\n		" ];
  }), "\n	");
}));

}).call(this);

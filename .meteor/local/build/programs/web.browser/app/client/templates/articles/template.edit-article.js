(function(){
Template.__checkName("articleEditPage");
Template["articleEditPage"] = new Template("Template.articleEditPage", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-xs-12"
  }, HTML.Raw("\n		<h2>Edit Article</h2>\n		<hr>\n		"), HTML.DIV({
    "class": "form-group"
  }, "\n			", HTML.Raw("<label>Title</label>"), "\n			", HTML.INPUT({
    type: "text",
    name: "title",
    id: "title",
    "class": "form-control",
    value: function() {
      return Spacebars.mustache(view.lookup("title"));
    }
  }), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<label>Body</label>"), "\n			", HTML.DIV({
    id: "summernote",
    "class": "body"
  }, Spacebars.include(view.lookupTemplate("markdown"), function() {
    return Blaze.View("lookup:body", function() {
      return Spacebars.mustache(view.lookup("body"));
    });
  })), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<label>Thumbnail URL</label>"), "\n			", HTML.INPUT({
    type: "text",
    name: "thumbnail",
    id: "thumbnailURL",
    "class": "form-control",
    value: function() {
      return Spacebars.mustache(view.lookup("thumb"));
    }
  }), "\n		"), HTML.Raw('\n		<br>\n		<button class="btn submit btn-primary pull-right">Save</button>\n	'));
}));

}).call(this);

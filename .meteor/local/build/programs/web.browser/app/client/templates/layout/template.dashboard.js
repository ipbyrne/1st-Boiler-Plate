(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n		", HTML.DIV({
    "class": "col-md-12"
  }, "\n			", HTML.Raw("<h3>Dashboard</h3>"), "\n			", Spacebars.include(view.lookupTemplate("adminDashboard")), "\n		"), "\n	");
}));

}).call(this);

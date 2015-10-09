(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n		", HTML.DIV({
    "class": "col-md-12"
  }, "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n				", HTML.H3("Dashboard"), "\n				", Spacebars.include(view.lookupTemplate("adminDashboard")), "\n			" ];
  }, function() {
    return [ "\n				", HTML.H1("Whoops, you belong to here! Time to head ", HTML.A({
      href: "/"
    }, "home!")), "\n			" ];
  }), "\n		"), "\n	");
}));

}).call(this);

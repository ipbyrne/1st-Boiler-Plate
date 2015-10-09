(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n		", HTML.DIV({
    "class": "container-fluid"
  }, "\n			", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n			", HTML.Raw('<div class="navbar-header">\n				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n					<span class="sr-only">Toggle navigation</span>\n					<span class="icon-bar"></span>\n					<span class="icon-bar"></span>\n					<span class="icon-bar"></span>\n				</button>\n				<a class="navbar-brand" href="/">Application Name</a>\n			</div>'), "\n			\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n				", HTML.DIV({
      "class": "collapse navbar-collapse",
      id: "bs-example-navbar-collapse-1"
    }, "\n					", HTML.UL({
      "class": "nav navbar-nav"
    }, "\n						", HTML.LI(HTML.A({
      href: "/"
    }, "Index")), "\n						", HTML.LI(HTML.A({
      href: "/articles"
    }, "Articles")), "\n						", Blaze.If(function() {
      return Spacebars.call(view.lookup("isAdmin"));
    }, function() {
      return [ "\n							", HTML.LI(HTML.A({
        href: "/dashboard"
      }, "Dashboard")), "\n						" ];
    }, function() {
      return "\n							\n						";
    }), "\n					"), "\n					", HTML.UL({
      "class": "nav navbar-nav navbar-right"
    }, "\n						", HTML.LI({
      "class": "dropdown"
    }, "\n							", HTML.A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, Blaze.View("lookup:currentUser.emails.0.address", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "emails", "0", "address"));
    }), " ", HTML.SPAN({
      "class": "caret"
    })), "\n							", HTML.UL({
      "class": "dropdown-menu",
      role: "menu"
    }, "\n								", HTML.LI(HTML.A({
      href: "/reset-password"
    }, "Change Password")), "\n								", HTML.LI({
      "class": "logout"
    }, HTML.A({
      href: "#"
    }, "Logout")), "\n							"), "\n						"), "\n					"), "\n				"), HTML.Comment(" /.navbar-collapse "), "\n			" ];
  }, function() {
    return [ "\n				", HTML.Comment(" Collect the nav links, forms, and other content for toggling "), "\n				", HTML.DIV({
      "class": "collapse navbar-collapse",
      id: "bs-example-navbar-collapse-1"
    }, "\n					", HTML.UL({
      "class": "nav navbar-nav"
    }, "\n						", HTML.LI(HTML.A({
      href: "/"
    }, "Index")), "\n						", HTML.LI(HTML.A({
      href: "/articles"
    }, "Articles")), "\n					"), "\n					", HTML.UL({
      "class": "nav navbar-nav navbar-right"
    }, "\n						", HTML.LI(HTML.A({
      href: "/sign-up"
    }, "Sign Up")), "\n						", HTML.LI(HTML.A({
      href: "/sign-in"
    }, "Sign In")), "\n					"), "\n				"), HTML.Comment(" /.navbar-collapse "), "\n			" ];
  }), "\n		"), HTML.Raw("<!-- /.container-fluid -->\n	"));
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);

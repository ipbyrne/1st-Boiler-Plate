(function(){
Template.__checkName("adminDashboard");
Template["adminDashboard"] = new Template("Template.adminDashboard", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n		", Spacebars.include(view.lookupTemplate("sendInvitationModal")), "\n	\n		", HTML.H4({
      "class": "page-header"
    }, "Users"), "\n		", HTML.DIV({
      "class": "col-sm-9"
    }, "\n			", HTML.INPUT({
      type: "text",
      name: "searchbar",
      "class": "search-bar fa form-control",
      placeholder: [ HTML.CharRef({
        html: "&#xF002;",
        str: ""
      }), "    Search Users" ]
    }), "\n			", HTML.BR(), "\n			", HTML.BR(), "\n		"), "\n		", HTML.DIV({
      "class": "col-sm-3 text-center"
    }, "\n			", HTML.BUTTON({
      "class": "btn btn-success",
      "data-toggle": "modal",
      "data-target": "#send-invitation-modal"
    }, "Add Member"), "\n			", HTML.BR(), "\n			", HTML.BR(), "\n		"), "\n		", HTML.TABLE({
      "class": "table table-bordered"
    }, "\n			", HTML.THEAD("\n				", HTML.TR("\n					", HTML.TH("Email Address"), "\n					", HTML.TH({
      "class": "text-center"
    }, "Role"), "\n					", HTML.TH({
      width: "96"
    }), "\n				"), "\n			"), "\n			", HTML.TBODY("\n				", Blaze.Each(function() {
      return Spacebars.call(view.lookup("users"));
    }, function() {
      return [ "\n					", HTML.TR("\n						", HTML.TD({
        "class": "text-left text-middle"
      }, Blaze.View("lookup:emails.0.address", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("emails"), "0", "address"));
      }), Blaze.If(function() {
        return Spacebars.call(view.lookup("belongsToYou"));
      }, function() {
        return HTML.LABEL({
          "class": "btn btn-sm btn-warning pull-right"
        }, "You!");
      })), "\n						", HTML.TD("\n							", HTML.SELECT({
        name: "userRole",
        id: "userRole",
        "class": "form-control",
        value: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "role"));
        }
      }, "\n								", HTML.OPTION(HTML.Attrs({
        value: "Admin"
      }, function() {
        return Spacebars.attrMustache(view.lookup("userRole"));
      }), "Admin"), "\n								", HTML.OPTION(HTML.Attrs({
        value: "Member"
      }, function() {
        return Spacebars.attrMustache(view.lookup("userRole"));
      }), "Member"), "\n							"), "\n						"), "\n						", HTML.TD("\n							", HTML.BUTTON({
        "class": "btn btn-info",
        "data-toggle": "modal",
        "data-target": function() {
          return [ "#edit-user-modal", Spacebars.mustache(view.lookup("_id")) ];
        }
      }, HTML.I({
        "class": "fa fa-pencil"
      })), "\n							", HTML.BUTTON({
        "class": "delete-user btn btn-danger"
      }, HTML.I({
        "class": "fa fa-times"
      })), "\n						"), "\n					"), "\n					", Spacebars.include(view.lookupTemplate("editUserModal")), "\n				" ];
    }), "\n			"), "\n		"), "\n		", Blaze.If(function() {
      return Spacebars.call(view.lookup("userLimitReached"));
    }, function() {
      return [ "\n			", HTML.DIV({
        "class": "col-xs-12 text-center"
      }, "\n				", HTML.BUTTON({
        "class": "btn btn-primary load-more"
      }, "Load More"), "\n			"), "\n		" ];
    }), "\n	" ];
  });
}));

}).call(this);

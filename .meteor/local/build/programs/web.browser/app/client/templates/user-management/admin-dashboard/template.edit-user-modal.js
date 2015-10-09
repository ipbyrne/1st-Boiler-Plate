(function(){
Template.__checkName("editUserModal");
Template["editUserModal"] = new Template("Template.editUserModal", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal fade",
    id: function() {
      return [ "edit-user-modal", Spacebars.mustache(view.lookup("_id")) ];
    },
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "send-invitation-modal",
    "aria-hidden": "true"
  }, "\n    ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-content"
  }, "\n        ", HTML.Raw('<div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title" id="send-invitation">Edit User</h4>\n        </div>'), "\n        ", HTML.FORM({
    id: function() {
      return [ "edit-user-form", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, "\n          ", HTML.DIV({
    "class": "modal-body"
  }, "\n            ", HTML.DIV({
    "class": "form-group"
  }, "\n              ", HTML.Raw("<label>Email Address</label>"), "\n							", HTML.INPUT({
    type: "text",
    name: "email",
    id: function() {
      return [ "email", Spacebars.mustache(view.lookup("_id")) ];
    },
    "class": "form-control",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("emails"), "0", "address"));
    }
  }), "\n							", HTML.Raw("<br>"), "\n							", HTML.Raw('<button type="button" class="btn btn-warning reset-password">Reset Password</button>'), "\n            "), "\n          "), "\n          ", HTML.Raw('<div class="modal-footer">\n            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n            <button type="submit" class="btn btn-success edit-user-form">Save</button>\n          </div>'), "\n        "), "\n      "), "\n    "), "\n  ");
}));

}).call(this);

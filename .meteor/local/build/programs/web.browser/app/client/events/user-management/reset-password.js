(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/reset-password.js                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.resetPassword.onRendered(function () {                        // 1
  Modules.client.resetPassword({                                       // 2
    form: "#reset-password",                                           // 3
    template: Template.instance()                                      // 4
  });                                                                  //
});                                                                    //
                                                                       //
Template.resetPassword.events({                                        // 8
  'submit form': function (event) {                                    // 9
    return event.preventDefault();                                     //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

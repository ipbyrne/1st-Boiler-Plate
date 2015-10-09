(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/recover-password.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.recoverPassword.onRendered(function () {                      // 1
  Modules.client.recoverPassword({                                     // 2
    form: "#recover-password",                                         // 3
    template: Template.instance()                                      // 4
  });                                                                  //
});                                                                    //
                                                                       //
Template.recoverPassword.events({                                      // 8
  'submit form': function (event) {                                    // 9
    return event.preventDefault();                                     //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

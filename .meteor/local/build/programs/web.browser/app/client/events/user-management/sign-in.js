(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/sign-in.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.signIn.events({                                               // 1
	'submit .sign-in-form': function (e) {                                // 2
		e.preventDefault();                                                  // 3
		var user = $('#signin-username').val();                              // 4
		var password = $('#signin-password').val();                          // 5
                                                                       //
		Meteor.loginWithPassword(user, password, function (error) {          // 7
			if (error) {                                                        // 8
				toastr.error("Sign In Failed... " + error);                        // 9
			} else {                                                            //
				toastr.success("Signed In Successfully");                          // 11
				Router.go('/');                                                    // 12
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

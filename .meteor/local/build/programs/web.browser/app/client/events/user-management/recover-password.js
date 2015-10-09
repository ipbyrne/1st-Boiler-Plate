(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/recover-password.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.recoverPassword.events({                                      // 1
	'submit form': function (e) {                                         // 2
		e.preventDefault();                                                  // 3
		var options = {                                                      // 4
			email: $('#forgot-password-email').val()                            // 5
		};                                                                   //
		Accounts.forgotPassword(options, function (error) {                  // 7
			if (error) {                                                        // 8
				toastr.error("Failed to send Reset Password email " + error);      // 9
			} else {                                                            //
				toastr.success("Password Reset Email Sent!");                      // 11
				Router.go('/');                                                    // 12
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

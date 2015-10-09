(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/reset-password.js                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.resetPassword.events({                                        // 1
	'submit form': function (e) {                                         // 2
		e.preventDefault();                                                  // 3
		var oldPassword = $('#old-password').val();                          // 4
		var newPassword = $('#new-password').val();                          // 5
		var newPasswordTwo = $('#new-password2').val();                      // 6
                                                                       //
		if (newPassword === newPasswordTwo) {                                // 8
			Accounts.changePassword(oldPassword, newPassword, function (error) {
				if (error) {                                                       // 10
					toastr.error('Failed to change password...' + error);             // 11
				} else {                                                           //
					toastr.success('Password Changed Successfully');                  // 13
					Router.go('/');                                                   // 14
				}                                                                  //
			});                                                                 //
		} else {                                                             //
			toastr.error("Passwords do not match");                             // 18
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

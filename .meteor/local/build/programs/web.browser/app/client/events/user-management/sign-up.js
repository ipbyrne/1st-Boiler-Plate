(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/sign-up.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.signUp.events({                                               // 1
	'submit .sign-up-form': function (e) {                                // 2
		e.preventDefault();                                                  // 3
		var userCount = Session.get("user-count");                           // 4
		console.log(Session.get("user-count"));                              // 5
                                                                       //
		if (userCount > 0) {                                                 // 7
			var memberUser = {                                                  // 8
				email: $('#signup-email').val(),                                   // 9
				password: $('#signup-password').val(),                             // 10
				profile: {                                                         // 11
					role: 'Member'                                                    // 12
				}                                                                  //
			};                                                                  //
                                                                       //
			Accounts.createUser(memberUser, function (error) {                  // 16
				if (error) {                                                       // 17
					toastr.error("Sign Up Failed... " + error);                       // 18
				} else {                                                           //
					toastr.success("Signed Up Successfully");                         // 20
					Router.go('/');                                                   // 21
				}                                                                  //
			});                                                                 //
		} else {                                                             //
			var adminUser = {                                                   // 26
				email: $('#signup-email').val(),                                   // 27
				password: $('#signup-password').val(),                             // 28
				profile: {                                                         // 29
					role: 'Admin'                                                     // 30
				}                                                                  //
			};                                                                  //
                                                                       //
			Accounts.createUser(adminUser, function (error) {                   // 34
				if (error) {                                                       // 35
					toastr.error("Sign Up Failed... " + error);                       // 36
				} else {                                                           //
					toastr.success("Signed Up Successfully");                         // 38
					Router.go('/');                                                   // 39
				}                                                                  //
			});                                                                 //
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

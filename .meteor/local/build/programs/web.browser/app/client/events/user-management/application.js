(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/application.js                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.body.events({                                                 // 1
	'click li.logout': function () {                                      // 2
		Meteor.logout(function (error) {                                     // 3
			if (error) {                                                        // 4
				toastr.error("Failed to Log Out... " + error);                     // 5
			} else {                                                            //
				toastr.success("Logged Out Successfully");                         // 7
				Router.go('/');                                                    // 8
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

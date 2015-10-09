(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/admin-dashboard/send-invitation-modal //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.sendInvitationModal.events({                                  // 1
	'submit #send-invite-form': function (e) {                            // 2
		e.preventDefault();                                                  // 3
		var user = {                                                         // 4
			email: $('#signup-email').val(),                                    // 5
			password: Random.id(),                                              // 6
			profile: {                                                          // 7
				role: $("#user-roles").find('option:selected').val()               // 8
			}                                                                   //
		};                                                                   //
		if ($("#user-roles").find('option:selected').val() != "" && $('#signup-email').val() != "") {
			Meteor.call("createNewUser", user, function (error) {               // 12
				if (error) {                                                       // 13
					toastr.error("Failed to Add Member... " + error);                 // 14
				} else {                                                           //
					toastr.success("Member Added Successfully");                      // 16
					// Close Modal                                                    //
					$("#user-roles").prop('selectedIndex', 0);                        // 18
					$('#signup-email').val("");                                       // 19
					$('#send-invitation-modal').modal('toggle');                      // 20
				}                                                                  //
			});                                                                 //
		} else {                                                             //
			toastr.error("You must select a user role and fill out all of the user fields.");
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

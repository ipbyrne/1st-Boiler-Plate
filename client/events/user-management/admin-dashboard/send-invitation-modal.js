Template.sendInvitationModal.events({
	'submit #send-invite-form': function(e) {
		e.preventDefault();
		var user = {
			email: $('#signup-email').val(),
			password: Random.id(),
			profile: {
				role: $("#user-roles").find( 'option:selected' ).val()
			}
		}
		if($("#user-roles").find( 'option:selected' ).val() != "" && $('#signup-email').val() != "") {
			Meteor.call("createNewUser", user, function(error) {
				if(error) {
					toastr.error("Failed to Add Member... " + error);
				} else {
					toastr.success("Member Added Successfully");
					// Close Modal
					$("#user-roles").prop('selectedIndex', 0);
					$('#signup-email').val("");
					$('#send-invitation-modal').modal('toggle');
				}
			});
		} else {
			toastr.error("You must select a user role and fill out all of the user fields.");
		}
	}
});	
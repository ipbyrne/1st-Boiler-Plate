(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/admin-dashboard/edit-user-modal.js    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.editUserModal.events({                                        // 1
	'submit form': function (e) {                                         // 2
		e.preventDefault();                                                  // 3
                                                                       //
		var userId = this._id;                                               // 5
		var newUserEmail = $('#email' + this._id).val();                     // 6
		var oldEmail = this.emails[0].address;                               // 7
                                                                       //
		if (newUserEmail != '') {                                            // 9
			// Close Modal                                                      //
			$('#edit-user-modal' + this._id).modal('toggle');                   // 11
			Meteor.call("editUser", userId, newUserEmail, oldEmail, function (error) {
				if (error) {                                                       // 13
					toastr.error("Failed to Update User... " + error);                // 14
				} else {                                                           //
					toastr.success("Member Updated Successfully");                    // 16
				}                                                                  //
			});                                                                 //
		} else {                                                             //
			toastr.error("You can't leave any fields blank");                   // 20
		}                                                                    //
	},                                                                    //
	'click button.reset-password': function () {                          // 24
                                                                       //
		Meteor.call('resetUserPassword', this._id, this.emails[0].address, function (error) {
			if (error) {                                                        // 27
				toastr.error("Failed to Reset Password... " + error);              // 28
			} else {                                                            //
				toastr.success("Password Reset Email Sent Successfully");          // 30
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

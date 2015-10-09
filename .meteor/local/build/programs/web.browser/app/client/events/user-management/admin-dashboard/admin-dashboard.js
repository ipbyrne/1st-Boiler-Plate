(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/events/user-management/admin-dashboard/admin-dashboard.js    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.adminDashboard.events({                                       // 1
	'change [name="userRole"]': function (event) {                        // 2
		var role = $(event.target).find('option:selected').val();            // 3
		var userId = this._id;                                               // 4
                                                                       //
		Meteor.call('setUserRole', userId, role, function (error) {          // 6
			if (error) {                                                        // 7
				toastr.error("Failed to change role... " + error);                 // 8
			} else {                                                            //
				toastr.success("Role Changed Successfully");                       // 10
			}                                                                   //
		});                                                                  //
	},                                                                    //
	'keyup .search-bar': function () {                                    // 14
		Session.set("user-search-query", $('.search-bar').val());            // 15
	},                                                                    //
	'click button.delete-user': function () {                             // 17
		if (confirm('Are you sure?')) {                                      // 18
			Meteor.call('deleteUser', this._id);                                // 19
		}                                                                    //
	},                                                                    //
	'click .load-more': function () {                                     // 22
		usersHandle.loadNextPage();                                          // 23
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/user-management/admin-dashboard.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.adminDashboard.helpers({                                      // 1
	users: function () {                                                  // 2
		return Meteor.users.find({}, { sort: { "profile.role": 1 } });       // 3
	},                                                                    //
	userRole: function () {                                               // 5
		if (this.profile.role === 'Member' && this.profile.role != 'Admin') {
			return "selected";                                                  // 7
		}                                                                    //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

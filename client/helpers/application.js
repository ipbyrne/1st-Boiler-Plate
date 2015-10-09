// Global Helpers.
Template.registerHelper("isAdmin", function () {
    if(Meteor.user().profile.role === 'Admin') {
			return true;
		} else {
			return false;
		}
});

Template.registerHelper("belongsToYou", function () {
    if(this._id === Meteor.userId()) {
			return true
		} else {
			return false
		}
});
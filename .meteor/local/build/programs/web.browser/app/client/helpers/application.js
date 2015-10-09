(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/application.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Global Helpers.                                                     //
Template.registerHelper("isAdmin", function () {                       // 2
	if (Meteor.user().profile.role === 'Admin') {                         // 3
		return true;                                                         // 4
	} else {                                                              //
		return false;                                                        // 6
	}                                                                     //
});                                                                    //
                                                                       //
Template.registerHelper("belongsToYou", function () {                  // 10
	if (this._id === Meteor.userId()) {                                   // 11
		return true;                                                         // 12
	} else {                                                              //
		return false;                                                        // 14
	}                                                                     //
});                                                                    //
                                                                       //
Template.registerHelper("itemBelongsToYou", function () {              // 18
	if (this.user === Meteor.userId()) {                                  // 19
		return true;                                                         // 20
	} else {                                                              //
		return false;                                                        // 22
	}                                                                     //
});                                                                    //
                                                                       //
// Helpers for Load More Buttons to Display.                           //
Template.registerHelper('userLimitReached', function () {              // 27
	if (Meteor.users.find().count() >= 10) {                              // 28
		return true;                                                         // 29
	}                                                                     //
});                                                                    //
                                                                       //
Template.registerHelper('articleLimitReached', function () {           // 33
	if (Articles.find().count() >= 5) {                                   // 34
		return true;                                                         // 35
	}                                                                     //
});                                                                    //
                                                                       //
Template.registerHelper('commentLimitReached', function () {           // 39
	if (Comments.find({ articleId: this._id }).count() >= 10) {           // 40
		return true;                                                         // 41
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

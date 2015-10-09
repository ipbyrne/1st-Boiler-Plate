(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
	// Admin Dashboard                                                    //
	getUserCount: function () {                                           // 3
		count = Meteor.users.find().count();                                 // 4
		return count;                                                        // 5
	},                                                                    //
	setUserRole: function (userId, role) {                                // 7
		Meteor.users.update({ _id: userId }, { $set: { "profile.role": role } });
	},                                                                    //
	editUser: function (userId, newEmail, oldEmail) {                     // 10
		Accounts.addEmail(userId, newEmail, false);                          // 11
		Accounts.removeEmail(userId, oldEmail);                              // 12
	},                                                                    //
	resetUserPassword: function (userId, email) {                         // 14
		Accounts.sendResetPasswordEmail(userId, email);                      // 15
	},                                                                    //
	createNewUser: function (user) {                                      // 17
		Accounts.createUser(user);                                           // 18
		// Send Email Code                                                   //
	},                                                                    //
	deleteUser: function (userId) {                                       // 21
		Meteor.users.remove(userId);                                         // 22
	},                                                                    //
	// Article Methods                                                    //
	articleInsert: function (title, body, thumnailURL) {                  // 25
		var articleId = Articles.insert({                                    // 26
			title: title,                                                       // 27
			body: body,                                                         // 28
			thumb: thumnailURL,                                                 // 29
			likes: 0,                                                           // 30
			likers: [],                                                         // 31
			comments: [],                                                       // 32
			submitted: new Date(),                                              // 33
			user: Meteor.userId(),                                              // 34
			useremail: Meteor.user().emails[0].address                          // 35
		});                                                                  //
	},                                                                    //
	articleUpdate: function (articleId, title, body, thumbnailURL) {      // 38
		Articles.update({ _id: articleId }, { $set: {                        // 39
				title: title,                                                      // 40
				body: body,                                                        // 41
				thumb: thumbnailURL }                                              // 42
		});                                                                  //
	},                                                                    //
	likeArticle: function (articleId) {                                   // 45
		Articles.update({ _id: articleId }, { $inc: { likes: 1 } });         // 46
		Articles.update({ _id: articleId }, { $addToSet: { likers: Meteor.userId() } });
	},                                                                    //
	unlikeArticle: function (articleId) {                                 // 49
		Articles.update({ _id: articleId }, { $inc: { likes: -1 } });        // 50
		Articles.update({ _id: articleId }, { $pull: { likers: Meteor.userId() } });
	},                                                                    //
	deleteArticle: function (articleId) {                                 // 53
		Articles.remove({ _id: articleId });                                 // 54
		Comments.remove({ articleId: articleId });                           // 55
	},                                                                    //
	// Comment Methods                                                    //
	commentInsert: function (comment) {                                   // 58
		Comments.insert(comment);                                            // 59
	},                                                                    //
	likeComment: function (commentId) {                                   // 61
		Comments.update({ _id: commentId }, { $inc: { likes: 1 } });         // 62
		Comments.update({ _id: commentId }, { $addToSet: { likers: Meteor.userId() } });
	},                                                                    //
	unlikeComment: function (commentId) {                                 // 65
		Comments.update({ _id: commentId }, { $inc: { likes: -1 } });        // 66
		Comments.update({ _id: commentId }, { $pull: { likers: Meteor.userId() } });
	},                                                                    //
	deleteComment: function (commentId) {                                 // 69
		Comments.remove({ _id: commentId });                                 // 70
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=methods.js.map

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
                                                                       //
		if (Meteor.user() != null) {                                         // 27
			var articleId = Articles.insert({                                   // 28
				title: title,                                                      // 29
				body: body,                                                        // 30
				thumb: thumnailURL,                                                // 31
				likes: 0,                                                          // 32
				likers: [],                                                        // 33
				comments: [],                                                      // 34
				submitted: new Date(),                                             // 35
				user: Meteor.userId(),                                             // 36
				useremail: Meteor.user().emails[0].address                         // 37
			});                                                                 //
		}                                                                    //
	},                                                                    //
	articleUpdate: function (articleId, title, body, thumbnailURL) {      // 41
		Articles.update({ _id: articleId }, { $set: {                        // 42
				title: title,                                                      // 43
				body: body,                                                        // 44
				thumb: thumbnailURL }                                              // 45
		});                                                                  //
	},                                                                    //
	likeArticle: function (articleId) {                                   // 49
		Articles.update({ _id: articleId }, { $inc: { likes: 1 } });         // 50
		Articles.update({ _id: articleId }, { $addToSet: { likers: Meteor.userId() } });
	},                                                                    //
	unlikeArticle: function (articleId) {                                 // 53
		Articles.update({ _id: articleId }, { $inc: { likes: -1 } });        // 54
		Articles.update({ _id: articleId }, { $pull: { likers: Meteor.userId() } });
	},                                                                    //
	deleteArticle: function (articleId) {                                 // 57
		Articles.remove({ _id: articleId });                                 // 58
		Comments.remove({ articleId: articleId });                           // 59
	},                                                                    //
	// Comment Methods                                                    //
	commentInsert: function (comment) {                                   // 62
		console.log(comment);                                                // 63
		Comments.insert(comment);                                            // 64
	},                                                                    //
	likeComment: function (commentId) {                                   // 66
		Comments.update({ _id: commentId }, { $inc: { likes: 1 } });         // 67
		Comments.update({ _id: commentId }, { $addToSet: { likers: Meteor.userId() } });
	},                                                                    //
	unlikeComment: function (commentId) {                                 // 70
		Comments.update({ _id: commentId }, { $inc: { likes: -1 } });        // 71
		Comments.update({ _id: commentId }, { $pull: { likers: Meteor.userId() } });
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=methods.js.map

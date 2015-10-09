Meteor.publish("users", function (userSearchKeyword, limit) {
		userSearchQuery = new RegExp( userSearchKeyword, 'i' );
    return Meteor.users.find({$or: [{"emails.address": userSearchQuery}]}, {limit: limit});
});
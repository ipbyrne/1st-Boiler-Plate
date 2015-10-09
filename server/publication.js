Meteor.publish("users", function (userSearchKeyword, limit) {
		userSearchQuery = new RegExp( userSearchKeyword, 'i' );
    return Meteor.users.find({$or: [{"emails.address": userSearchQuery}]}, {limit: limit});
});

Meteor.publish("articles", function (articleSearchKeyword, limit) {
	articleSearchQuery = new RegExp( articleSearchKeyword, 'i' );
	return Articles.find({$or: [{body: articleSearchQuery}, {_id: articleSearchQuery}, {title: articleSearchQuery}, {submitted: articleSearchQuery}, {useremail: articleSearchQuery}]}, {limit:limit});
});

Meteor.publish("comments", function() {
	return Comments.find();
});
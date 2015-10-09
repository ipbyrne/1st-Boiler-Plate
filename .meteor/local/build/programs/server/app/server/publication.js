(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publication.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish("users", function (userSearchKeyword, limit) {          // 1
	// Publish Collection Count                                           //
	Counts.publish(this, 'users', Meteor.users.find(), { noReady: true });
	userSearchQuery = new RegExp(userSearchKeyword, 'i');                 // 4
	return Meteor.users.find({ $or: [{ "emails.address": userSearchQuery }] }, { limit: limit });
});                                                                    //
                                                                       //
Meteor.publish("articles", function (articleSearchKeyword, limit) {    // 8
	// Publish Collection Count                                           //
	Counts.publish(this, 'articles', Articles.find(), { noReady: true });
                                                                       //
	articleSearchQuery = new RegExp(articleSearchKeyword, 'i');           // 12
	return Articles.find({ $or: [{ body: articleSearchQuery }, { _id: articleSearchQuery }, { title: articleSearchQuery }, { submitted: articleSearchQuery }, { useremail: articleSearchQuery }] }, { limit: limit });
});                                                                    //
                                                                       //
Meteor.publish("comments", function (limit) {                          // 16
	return Comments.find({}, { limit: limit });                           // 17
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publication.js.map

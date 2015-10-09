(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publication.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish("users", function (userSearchKeyword, limit) {          // 1
	userSearchQuery = new RegExp(userSearchKeyword, 'i');                 // 2
	return Meteor.users.find({ $or: [{ "emails.address": userSearchQuery }] }, { limit: limit });
});                                                                    //
                                                                       //
Meteor.publish("articles", function (articleSearchKeyword, limit) {    // 6
	articleSearchQuery = new RegExp(articleSearchKeyword, 'i');           // 7
	return Articles.find({ $or: [{ body: articleSearchQuery }, { _id: articleSearchQuery }, { title: articleSearchQuery }, { submitted: articleSearchQuery }, { useremail: articleSearchQuery }] }, { limit: limit });
});                                                                    //
                                                                       //
Meteor.publish("comments", function () {                               // 11
	return Comments.find();                                               // 12
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publication.js.map

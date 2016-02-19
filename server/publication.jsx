FindFromPublication.publish("users", function (userSearchKeyword, limit) {
		// Publish Collection Count
		Counts.publish(this, 'users', Meteor.users.find(), { noReady: true });
		userSearchQuery = new RegExp( userSearchKeyword, 'i' );
    return Meteor.users.find({
			$or: [
				{"emails.address": userSearchQuery}
			]
		}, {
			limit: limit
		});
});

FindFromPublication.publish("articles", function (articleSearchKeyword, limit, skipCount) {
	// Publish Collection Count
	Counts.publish(this, 'articles', Articles.find(), { noReady: true });

	var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

	articleSearchQuery = new RegExp( articleSearchKeyword, 'i' );
	return Articles.find({
		$or: [
			{body: articleSearchQuery},
			{_id: articleSearchQuery},
			{title: articleSearchQuery},
			{submitted: articleSearchQuery},
			{useremail: articleSearchQuery}
		]
	}, {
		limit:limit,
		skip: skipCount
	});
});
FindFromPublication.publish("article", function (slug) {
	return Articles.find({slug: slug});
});

FindFromPublication.publish("comments", function(limit) {
	return Comments.find({},{limit: limit});
});

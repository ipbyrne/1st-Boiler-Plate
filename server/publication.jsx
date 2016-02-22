FindFromPublication.publish("users", function (userSearchKeyword, limit, skipCount) {
		// Publish Collection Count
		Counts.publish(this, 'users', Meteor.users.find(), { noReady: true });

		var positiveIntegerCheck = Match.Where(function(x) {
	    check(x, Match.Integer);
	    return x >= 0;
	  });
	  check(skipCount, positiveIntegerCheck);

		userSearchQuery = new RegExp( userSearchKeyword, 'i' );
    return Meteor.users.find({
			$or: [
				{"emails.address": userSearchQuery}
			]
		}, {
			limit: limit,
			skip: skipCount
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
			{username: articleSearchQuery}
		]
	}, {
		limit:limit,
		skip: skipCount
	});
});
FindFromPublication.publish("article", function (slug) {
	return Articles.find({slug: slug});
});

FindFromPublication.publish("comments", function(commentSearchKeyword, limit, skipCount) {
	Counts.publish(this, 'comments', Comments.find(), { noReady: true });
	var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

	commentSearchQuery = new RegExp( commentSearchKeyword, 'i' );

	return Comments.find({
		$or: [
			{body: commentSearchQuery},
			{_id: commentSearchQuery},
			{articleId: commentSearchQuery},
			{submitted: commentSearchQuery},
			{username: commentSearchQuery}
		]
	},{
		limit: limit,
		skip: skipCount
	});
});

(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.route('/', { layoutTemplate: 'home' });                         // 1
Router.route('/sign-in', { layoutTemplate: 'signIn' });                // 2
Router.route('/sign-up', { layoutTemplate: 'signUp' });                // 3
Router.route('/reset-password', { layoutTemplate: 'resetPassword' });  // 4
Router.route('/recover-password', { layoutTemplate: 'recoverPassword' });
Router.route('/dashboard', { layoutTemplate: 'dashboard' });           // 6
// Article Routes                                                      //
Router.route('/articles', { layoutTemplate: 'articleList' });          // 8
Router.route('/submit-article', { layoutTemplate: 'submitArticle' });  // 9
Router.route('/articles/:_id', {                                       // 10
	name: 'articlePage',                                                  // 11
	layoutTemplate: 'articlePage',                                        // 12
	data: function () {                                                   // 13
		return Articles.findOne(this.params._id);                            // 14
	}                                                                     //
});                                                                    //
Router.route('/articles/edit/:_id', {                                  // 17
	name: 'articleEditPage',                                              // 18
	layoutTemplate: 'articleEditPage',                                    // 19
	data: function () {                                                   // 20
		return Articles.findOne(this.params._id);                            // 21
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

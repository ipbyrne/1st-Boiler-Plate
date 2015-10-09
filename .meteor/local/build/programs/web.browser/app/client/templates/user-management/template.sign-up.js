(function(){
Template.__checkName("signUp");
Template["signUp"] = new Template("Template.signUp", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n		<div class="col-xs-12 col-sm-6 col-md-4">\n			<h4 class="text-center"><strong>CREATE AN ACCOUNT</strong></h4>\n			<br>\n			<div class="form-group">\n				<form class="sign-up-form">\n					<label>Email</label>\n					<input type="text" name="email" id="signup-email" class="form-control">\n					<br>\n					<label>Password</label>\n					<input type="text" name="password" id="signup-password" class="form-control">\n					<br>\n					<br>\n					<div class="text-center">\n						<button class="sign-up-btn btn btn-success">REGISTER</button>\n					</div>	\n					<br>\n					<p class="text-center">If you already have an account <a href="/sign-in"><strong>Sign In</strong></a></p>\n				</form>\n			</div>\n		</div>\n	</div>');
}));

}).call(this);

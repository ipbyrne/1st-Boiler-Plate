(function(){
Template.__checkName("signIn");
Template["signIn"] = new Template("Template.signIn", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n		<div class="col-xs-12 col-sm-6 col-md-4">\n			<h4 class="text-center"><strong>SIGN IN</strong></h4>\n			<br>\n			<div class="form-group">\n				<form class="sign-in-form">\n					<label>Email</label>\n					<input type="text" name="username" id="signin-username" class="form-control">\n					<br>\n					<label>Password</label>\n					<input type="password" name="password" id="signin-password" class="form-control">\n					<a href="/recover-password"><strong><small>Forgot you passowrd?</small></strong></a> - <a href="/sign-up"><strong><small>Not a member? Sign Up!</small></strong></a>\n					<br>\n					<br>\n					<div class="text-center">\n						<button class="sign-in-btn btn btn-success" type="submit">SIGN IN</button>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>');
}));

}).call(this);

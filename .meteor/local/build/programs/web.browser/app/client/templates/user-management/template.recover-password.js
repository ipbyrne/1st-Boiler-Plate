(function(){
Template.__checkName("recoverPassword");
Template["recoverPassword"] = new Template("Template.recoverPassword", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n		<div class="col-xs-12 col-sm-6 col-md-4">\n			<h4 class="page-header">Recover Password</h4>\n			<form id="recover-password" class="recover-password">\n				<p class="alert alert-info">Enter your email address below to receive a link to reset your password.</p>\n				<div class="form-group">\n					<label for="emailAddress">Email Address</label>\n					<input type="email" name="emailAddress" class="form-control" placeholder="Email Address">\n				</div>\n				<div class="form-group">\n					<input type="submit" class="btn btn-success" value="Recover Password">\n				</div>\n			</form>\n		</div>\n	</div>');
}));

}).call(this);

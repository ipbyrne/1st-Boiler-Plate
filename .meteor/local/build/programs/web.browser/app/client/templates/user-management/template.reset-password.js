(function(){
Template.__checkName("resetPassword");
Template["resetPassword"] = new Template("Template.resetPassword", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n		<div class="col-xs-12 col-sm-6 col-md-4">\n			<h4 class="page-header">Reset Password</h4>\n			<form id="reset-password" class="reset-password">\n				<p class="alert alert-info">To reset your password, enter a new one below. You will be logged in with your new password.</p>\n				<div class="form-group">\n					<label for="newPassword">New Password</label>\n					<input type="password" name="newPassword" class="form-control" placeholder="New Password">\n				</div>\n				<div class="form-group">\n					<label for="password">Repeat New Password</label>\n					<input type="password" name="repeatNewPassword" class="form-control" placeholder="Password">\n				</div>\n				<div class="form-group">\n					<input type="submit" class="btn btn-success" value="Reset Password &amp; Login">\n				</div>\n			</form>\n		</div>\n	</div>');
}));

}).call(this);

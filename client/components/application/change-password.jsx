ChangePassword = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  //Events
  handleSubmit(event) {
    event.preventDefault();

    var oldPassword = ReactDOM.findDOMNode(this.refs.oldPassword).value;
    var newPassword = ReactDOM.findDOMNode(this.refs.newPassword).value;
    var newPassword2 = ReactDOM.findDOMNode(this.refs.newPassword2).value;

    if(newPassword === newPassword2){
			Accounts.changePassword(oldPassword, newPassword, function(error) {
				if(error) {
					toastr.error('Failed to change password...'+ error);
				} else {
					toastr.success('Password Changed Successfully');
					FlowRouter.go('/');
				}
			});
		} else {
			toastr.error("Passwords do not match");
		}

    var oldPassword = ReactDOM.findDOMNode(this.refs.oldPassword).value = "";
    var newPassword = ReactDOM.findDOMNode(this.refs.newPassword).value = "";
    var newPassword2 = ReactDOM.findDOMNode(this.refs.newPassword2).value = "";
  },

  render() {
    // Set SEO
    var SEOtitle = "Change Password";
    DocHead.setTitle(SEOtitle);
    
    return (
      <div className="row">
    		<div className="col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
    			<h4 className="page-header">CHANGE YOUR PASSWORD</h4>
    			<form id="reset-password" className="reset-password" onSubmit={this.handleSubmit}>
    				<div className="form-group">
    					<label htmlFor="newPassword">Old Password</label>
    					<input ref="oldPassword" type="password" name="newPassword" className="form-control" />
    				</div>
    				<div className="form-group">
    					<label htmlFor="newPassword">New Password</label>
    					<input ref="newPassword" type="password" name="newPassword" className="form-control" />
    				</div>
    				<div className="form-group">
    					<label htmlFor="password">Repeat New Password</label>
    					<input ref="newPassword2" type="password" name="repeatNewPassword" className="form-control" />
    				</div>
    				<div className="form-group text-center">
    					<button type="submit" className="btn btn-success">CHANGE PASSWORD</button>
    				</div>
    			</form>
    		</div>
    	</div>
    )
  }
});

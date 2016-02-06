SignIn = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  //Events
  handleSubmit(event) {
    event.preventDefault();

    var username= ReactDOM.findDOMNode(this.refs.username).value;
    var password= ReactDOM.findDOMNode(this.refs.password).value;

    Meteor.loginWithPassword(username, password, function(error) {
			if(error) {
				toastr.error("Sign In Failed... " + error);
			} else {
				toastr.success("Signed In Successfully");
				FlowRouter.go('/');
			}
		});

    ReactDOM.findDOMNode(this.refs.username).value = "";
    ReactDOM.findDOMNode(this.refs.password).value = "";
  },

  render() {
    // Set SEO
    var SEOtitle = "Sign In";
    DocHead.setTitle(SEOtitle);
    
    return (
      <div className="row">
    		<div className="col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
    			<h4 className="text-center"><strong>SIGN IN</strong></h4>
    			<br/>
    			<div className="form-group">
    				<form className="sign-in-form" onSubmit={this.handleSubmit}>
    					<label>Email</label>
    					<input type="text" name="username" id="signin-username" className="form-control" ref="username"/>
    					<br/>
    					<label>Password</label>
    					<input type="password" name="password" id="signin-password" className="form-control" ref="password"/>
    					<a href="/recover-password"><strong><small>Forgot you passowrd?</small></strong></a> - <a href="/sign-up"><strong><small>Not a member? Sign Up!</small></strong></a>
    					<br/>
    					<br/>
    					<div className="text-center">
    						<button className="sign-in-btn btn btn-success" type="submit">SIGN IN</button>
    					</div>
    				</form>
    			</div>
    		</div>
      </div>
    )
  }
});

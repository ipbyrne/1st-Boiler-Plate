SignUp = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  //Events
  handleSubmit(event) {
    event.preventDefault();

    var email = ReactDOM.findDOMNode(this.refs.email).value;
    var username= ReactDOM.findDOMNode(this.refs.username).value;
    var password= ReactDOM.findDOMNode(this.refs.password).value;

    var memberUser = {
      email: email,
      password: password,
      profile: {
        role: 'Member',
        name: username
      }
    }

    Accounts.createUser(memberUser, function(error) {
      if(error) {
        toastr.error("Sign Up Failed... " + error);
      } else {
        toastr.success("Signed Up Successfully");
        FlowRouter.go('/');
      }
    });

    ReactDOM.findDOMNode(this.refs.email).value = "";
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
    			<h4 className="text-center"><strong>CREATE AN ACCOUNT</strong></h4>
    			<br/>
    			<div className="form-group">
    				<form className="sign-up-form" onSubmit={this.handleSubmit}>
              <label>Username</label>
    					<input ref="username" type="text" name="name" id="signup-name" className="form-control"/>
    					<br/>
    					<label>Email</label>
    					<input ref="email" type="text" name="email" id="signup-email" className="form-control"/>
    					<br/>
    					<label>Password</label>
    					<input ref="password" type="password" name="password" id="signup-password" className="form-control"/>
    					<br/>
    					<br/>
    					<div className="text-center">
    						<button className="sign-up-btn btn btn-success">REGISTER</button>
    					</div>
    					<br/>
    					<p className="text-center">If you already have an account <a href="/sign-in"><strong>Sign In</strong></a></p>
    				</form>
    			</div>
    		</div>
    	</div>
    )
  }
});

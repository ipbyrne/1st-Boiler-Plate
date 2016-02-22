Navbar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Check for Admin User
    if(Meteor.user()){
      var admin = Meteor.user();
      var username = Meteor.user().profile.name;
      if(Meteor.user().profile.role === "Admin") {
        admin = true;
      }
    } else {
      var admin = false;
    }

    return {
      currentUser: Meteor.user(),
      isAdmin: admin,
      username: username
    };
  },

  logOut() {
    Meteor.logout(function(error) {
			if(error) {
				toastr.error("Failed to Log Out... " + error);
			} else {
				toastr.success("Logged Out Successfully");
			}
		});
  },

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Application Name</a>
          </div>

          {this.data.currentUser ?
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav">
    						<li><a href="/">Index</a></li>
    						<li><a href="/articles">Articles</a></li>
                <li><a href="/contact">Contat Us</a></li>
    					</ul>
    					<ul className="nav navbar-nav navbar-right">
    						<li><a href="/admin/dashboard">Dashboard</a></li>
    					</ul>
    				</div>
          :
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav">
    						<li><a href="/">Home</a></li>
    						<li><a href="/articles">Articles</a></li>
                <li><a href="/contact">Contat Us</a></li>
    					</ul>
    					<ul className="nav navbar-nav navbar-right">
    						<li><a href="/sign-up">Sign Up</a></li>
    						<li><a href="/sign-in">Sign In</a></li>
    					</ul>
    				</div>
          }


        </div>
      </nav>
    )
  }
});

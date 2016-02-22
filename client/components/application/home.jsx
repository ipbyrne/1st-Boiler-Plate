Homepage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  render() {
    // Set SEO
    var SEOtitle = "Home Page";
    DocHead.setTitle(SEOtitle);

    return (
      <div className="row">
        <div className="col-xs-12">
      		<div className="jumbotron text-center">
      			<h2>Boiler Plate</h2>
      			<p>A starting point for Meteor applications.</p>
      			<p><a className="btn btn-success" href="https://github.com/ipbyrne/Boiler-Plate" role="button" target="_Blank">Read the Documentation</a></p>
      			<p>Currently at v1.0</p>
      		</div>
        </div>
    	</div>
    )
  }
});

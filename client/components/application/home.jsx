Homepage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  render() {
    return (
      <div className="row">
    		<div className="jumbotron text-center">
    			<h2>Boiler Plate</h2>
    			<p>A starting point for Meteor applications.</p>
    			<p><a className="btn btn-success" href="https://github.com/ipbyrne/Boiler-Plate" role="button" target="_Blank">Read the Documentation</a></p>
    			<p>Currently at v0.1</p>
    		</div>
    	</div>
    )
  }
});

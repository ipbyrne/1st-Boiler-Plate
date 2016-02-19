Page404 = React.createClass({
  render() {
    // Set SEO
    var SEOtitle = "404 - Page Not Found!";
    DocHead.setTitle(SEOtitle);

    return (
      <div className="row text-center">
        <div className="col-md-12">
            <div className="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </a> <a href="/" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                </div>
            </div>
        </div>
    </div>
    )
  }
});

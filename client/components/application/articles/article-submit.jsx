ArticleSubmitPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  componentDidMount: function() {
    $('#summernote').summernote({
        height: 200,   // set editable area's height
        focus: true    // set focus editable area after Initialize summernote
    });
  },

  handlePublishSubmit(event) {
    event.preventDefault();

    var title = ReactDOM.findDOMNode(this.refs.title).value;
		var body = $('#summernote').summernote('code');
		var thumbnailURL = ReactDOM.findDOMNode(this.refs.thumbnailURL).value;


		if(Meteor.user() != null) {
			Meteor.call('articleInsert', title, body, thumbnailURL, function(error, response) {
				if(error) {
					toastr.error("Error: "+error);
				} else {
					var articleRoute = '/article/' + response;
					toastr.success("Article Published!");
					FlowRouter.go(articleRoute);
				}
			});
		}
  },

  handleSaveSubmit(event) {
    event.preventDefault();

    var title = ReactDOM.findDOMNode(this.refs.title).value;
		var body = $('#summernote').summernote('code');
		var thumbnailURL = ReactDOM.findDOMNode(this.refs.thumbnailURL).value;


		if(Meteor.user() != null) {
			Meteor.call('articleInsert', title, body, thumbnailURL, function(error, response) {
				if(error) {
					toastr.error("Failed to Publish Article... "+error);
				} else {
					var articleRoute = '/articles/' + response;
					toastr.success("Article Saved!");
					FlowRouter.go(articleRoute);
				}
			});
		}
  },


  render() {
    // Set SEO
    var SEOtitle = "Submit an Article";
    DocHead.setTitle(SEOtitle);

    return (
      <div className="row">
    		{this.data.currentUser ?
          <form className="form-group">
      			<div className="col-xs-12">
      				<label>Title</label>
      				<input type="text" name="title" ref="title" className="form-control"/>
      				<br/>
      				<label>Body</label>
      				<div ref="summernote" id="summernote" ref="body" className="body"></div>
      				<br/>
      				<br/>
      				<label>Thumbnail URL</label>
      				<input type="text" name="thumbnail" ref="thumbnailURL" className="form-control"/>
      			</div>
      			<div className="col-xs-12 text-right">
      				<br/>
      				<button onClick={this.handleSaveSubmit} className="btn save btn-info">Save as Draft</button>
      				<button onClick={this.handlePublishSubmit} className="btn submit btn-primary">Publish</button>
      			</div>
          </form>
    		:
          <div className="col-xs-12">
    			     <h1>Whoops, you must be <a href="/sign-in">Logged In</a> to do this!</h1>
          </div>
    		}
      </div>
    );
  }
});

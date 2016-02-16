ArticleEditPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var slug = this.props.articleSlug;
    Deps.autorun(function (){
      articlesHandle = Meteor.subscribe("article", slug);
      article = Articles.findOne({slug:slug});
    });

    return {
      currentUser: Meteor.user(),
      article: article
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

    var articleId = this.props.articleId;
		var articleRoute = '/articles/' + articleId;
    var title = ReactDOM.findDOMNode(this.refs.title).value;
		var body = $('#summernote').summernote('code');
		var thumbnailURL = ReactDOM.findDOMNode(this.refs.thumbnailURL).value;
		var draft = false;

    if(title == "") {
      title = this.data.article.title;
    }

    if(thumbnailURL == "") {
      thumbnailURL = this.data.article.thumb;
    }

		Meteor.call('articleUpdate', articleId, title, body, thumbnailURL, draft, function(error) {
			if(error) {
				toastr.error("Failed to Update Article... " + error);
			} else {
				toastr.success("Article Updated.");
				//FlowRouter.go(articleRoute);
			}
		});
  },

  handleSaveSubmit(event) {
    event.preventDefault();

    var articleId = this.props.articleId;
		var articleRoute = '/articles/' + articleId;
    var title = ReactDOM.findDOMNode(this.refs.title).value;
		var body = $('#summernote').summernote('code');
		var thumbnailURL = ReactDOM.findDOMNode(this.refs.thumbnailURL).value;
		var draft = true;

    if(title == "") {
      title = this.data.article.title;
    }

    if(thumbnailURL == "") {
      thumbnailURL = this.data.article.thumb;
    }

		Meteor.call('articleUpdate', articleId, title, body, thumbnailURL, draft, function(error) {
			if(error) {
				toastr.error("Failed to Update Article... " + error);
			} else {
				toastr.success("Article Saved as Draft.");
				//FlowRouter.go(articleRoute);
			}
		});
  },


  render() {
    const article = this.data.article;
    const title = article.title;
    const body = article.body;
    const thumbnailURL = article.thumb;

    // Set SEO
    var SEOtitle = "Edit Article";
    DocHead.setTitle(SEOtitle);

    return (
      <div className="row">
    		{this.data.currentUser ?
          <form className="form-group">
      			<div className="col-xs-12">
      				<label>Title</label>
      				<input onChange={function() {}} type="text" name="title" ref="title" className="form-control" placeholder={title}/>
      				<br/>
      				<label>Body</label>
      				<div ref="summernote" id="summernote" ref="body" className="body"><Markdown>{body}</Markdown></div>
      				<br/>
      				<br/>
      				<label>Thumbnail URL</label>
      				<input type="text" name="thumbnail" ref="thumbnailURL" className="form-control" placeholder={thumbnailURL}/>
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

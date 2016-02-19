ArticlePage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var slug = this.props.articleSlug;
    var isYours = false;
    Tracker.autorun(function (){
      articlesHandle = Meteor.subscribe("article", slug);
      commentsHandle = Meteor.subscribe("comments");
      article = Articles.findOne({slug:slug});
    });

    if(Meteor.user() && article){
      if(Meteor.user().profile.name === article.username){
        isYours = true;
      }

      if ($.inArray(Meteor.userId(), article.likers) !== -1) {
        Session.set("liked-article", true);
      } else {
        Session.set("liked-article", false);
      }
    }

    if(article) {
      return {
        loading: ! articlesHandle.ready(),
        currentUser: Meteor.user(),
        belongsToYou: isYours,
        comments: Comments.find({articleId: article._id}, {sort:{submitted: 1}}).fetch(),
        article: article
      };
    } else {
      return {
        loading: ! articlesHandle.ready(),
        currentUser: Meteor.user()
      };
    }
  },

  likeArticle() {
    if (Session.get("liked-article") == true){
      Meteor.call("unlikeArticle", this.data.article._id, function(error) {
        if(error) {
          toastr.error("Error: " + error)
        } else {
          var likes = parseInt(document.getElementById("likeCounter").innerHTML);
          likes -=1;
          document.getElementById("likeCounter").innerHTML = likes;
          toastr.success("Article Unliked!");
          Session.set("liked-article", false);
        }
      });
    } else {
      Meteor.call("likeArticle", this.data.article._id, function(error) {
        if(error) {
          toastr.error("Error: " + error)
        } else {
          var likes = parseInt(document.getElementById("likeCounter").innerHTML);
          likes +=1;
          document.getElementById("likeCounter").innerHTML = likes;
          toastr.success("Article Liked!");
          Session.set("liked-article", true);
        }
      });
    }
  },

  renderComments() {
    return this.data.comments.map((comment) => {
      return <ArticleCommentItem key={comment._id} comment={comment}/>;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
    var commentBody = ReactDOM.findDOMNode(this.refs.comment).value;

		var comment = {
			body: commentBody,
			articleId: this.data.article._id,
			submitted: new Date(),
			likes: 0,
			likers: [],
			user: Meteor.userId(),
			useremail: Meteor.user().emails[0].address,
			username: Meteor.user().profile.name
		};

    Meteor.call('commentInsert', comment, function(error) {
      if(error) {
        toastr.error("Error: " + error)
      } else {
        toastr.success("Comment Created!");
      }
    });

    ReactDOM.findDOMNode(this.refs.comment).value = "";
  },

  deleteArticle (event) {
    event.preventDefault();

    if(confirm("Are You Sure?")) {
      Meteor.call("deleteArticle", this.data.article._id, function(error) {
        if(error){
          toastr.error("Error: " + error);
        } else {
          toastr.success("Article Deleted!");
          FlowRouter.go("/")
        }
      });
    }
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      )
    } else {
      const article = this.data.article;
      const title = article.title;
      const body = article.body;
      const thumb = article.thumb;
      const likes = article.likes;
      const username = article.username;
      const submitted = moment(article.submitted).format("MMM Do YY");
      const commentCount = this.data.comments.length;
      const gravatarURL = Gravatar.imageUrl(article.useremail);
      const articleEditURL = "/article/edit/" + article.slug;

      // Set SEO
      var SEOtitle = article.title;
      DocHead.setTitle(SEOtitle);

      return (
        <div className="col-xs-12">
      		<div className="col-sm-10">
      			<h1>{title}</h1>
      			<br/>
      			<span><a href="#">by {username}</a></span>
      		</div>
      		<div className="col-sm-2 text-center">
      			<br/>
      			<img className="img-thumbnail" src={thumb}/>
      		</div>
      		<div className="col-xs-12">
      			<hr/>
      		</div>
      		<div className="col-xs-12">
      			<Markdown>{body}</Markdown>
      			<hr/>
      		</div>
      		<div className="col-xs-12 well">
      			<div id="user" className="hide">{username}</div>
      			<h4>
      				<img className="img-circle" width="50" src={gravatarURL} />
      				<a className="article-item-name">  by {username}</a>   <button className="article-item-upvote btn btn-default" onClick={this.likeArticle}><i className="fa fa-heart"></i> <span id="likeCounter">{likes}</span></button>   <button className="article-item-comment btn btn-default" href="#"><i className="fa fa-comment"></i> {commentCount}</button>   <span className="article-item-date">{submitted}</span>
      					{this.data.belongsToYou ?
      						<div className="btn-group pull-right">
      							<a href={articleEditURL}><button className ="btn btn-warning edit-article">Edit</button></a>
      							<button onClick={this.deleteArticle} className ="btn btn-danger delete-article">Delete</button>
      						</div>
      					:
                  ""
                }
      			</h4>
      		</div>
      		<div className="col-xs-12">
      			<h3>Comments</h3>
            {this.renderComments()}
      		</div>
      		{/* Show If Comments Are Subscribed with Pagination
      		<div className="col-xs-12 text-center">
      			<br/>
      			<br/>
      			{{#if commentLimitReached}}
      				<button class="btn btn-primary load-more">Load More</button>
      			{{/if}}
      			<br/>
      			<br/>
      		</div>
      		*/}
      		<div className="col-xs-12">
      			{this.data.currentUser ?
      				<div className="col-xs-12">
                <form className="form-group" onSubmit={this.handleSubmit}>
                  <textarea ref="comment" name="article-comment" className="form-control"></textarea>
                	<br/>
                	<button type="submit" className="btn btn-primary pull-right">Submit</button>
                	<br/>
                	<br/>
                </form>
      				</div>
      			:
      				<span>You must be <a href="/sign-in"><strong>logged</strong></a> in to comment.</span>
      			}
      			<br/>
      			<br/>
      		</div>
      	</div>
      );
    }
  }
});

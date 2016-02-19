ArticleCommentItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var isYours = false;
    if(this.props.comment.username === Meteor.user().profile.name){
      isYours = true;
    }

    if ($.inArray(Meteor.userId(), this.props.comment.likers) !== -1) {
      Session.set("liked-comment" + this.props.comment._id , true);
    } else {
      Session.set("liked-comment" + this.props.comment._id, false);
    }

    return {
      belongsToYou: isYours
    };
  },

  likeComment() {
    if (Session.get("liked-comment" + this.props.comment._id) == true){
      Meteor.call("unlikeComment", this.props.comment._id, function(error) {
        if(error) {
          toastr.error("Error: " + error)
        } else {
          toastr.success("Comment Unliked!");
          Session.set("liked-comment" + this.props.comment._id, false);
        }
      });
    } else {
      Meteor.call("likeComment", this.props.comment._id, function(error) {
        if(error) {
          toastr.error("Error: " + error)
        } else {
          toastr.success("Comment Liked!");
          Session.set("liked-comment" + this.props.comment._id, true);
        }
      });
    }
  },

  deleteComment(){
    if(confirm("Are You Sure?")){
      Meteor.call("deleteComment", this.props.comment._id, function(error){
        if(error){
          toastr.error("Error: " + error);
        } else {
          toastr.succes("Comment Deleted!");
        }
      });
    }
  },

  render() {
    const body = this.props.comment.body;
    const articleId = this.props.comment._id
    const likes = this.props.comment.likes;
    const username = this.props.comment.username;
    const submitted = moment(this.props.comment.submitted).format("MMM Do YY");
    const gravatarURL = Gravatar.imageUrl(this.props.comment.useremail);
    const likeCounterID = "commentLikeCounter" + this.props.comment._id;

    return (
      <div className="col-xs-12">
    		<div>
    			{body}
    		</div>
    		<div className="col-xs-9">
    			<img className="img-circle" width="25" src={gravatarURL} />
    			<a>- {username}</a>, {submitted}
    		</div>
    		<br/>
    		<div className="col-xs-3">
    			<div className="btn-group pull-right">
    				<a><button onClick={this.likeComment} className="article-item-upvote btn btn-default"><i className="fa fa-heart"></i> <span id={likeCounterID}>{likes}</span></button></a>
    				{this.data.belongsToYou ?
    					<button onClick={this.deleteComment} className="btn btn-danger delete-comment">Delete</button>
    				:
              ""
            }
    			</div>
    		</div>
    		<br/>
    		<hr/>
    	</div>
    );
  }
});

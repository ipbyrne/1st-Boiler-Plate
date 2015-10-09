(function(){
Template.__checkName("articlePage");
Template["articlePage"] = new Template("Template.articlePage", (function() {
  var view = this;
  return HTML.DIV({
    "class": "col-xs-12"
  }, "\n		", HTML.DIV({
    "class": "col-sm-10"
  }, "\n			", HTML.H1(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n			", HTML.Raw("<br>"), "\n			", HTML.SPAN(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "userPage");
    }
  }, "by ", Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  }))), "\n		"), "\n		", HTML.DIV({
    "class": "col-sm-2 text-center"
  }, "\n			", HTML.Raw("<br>"), "\n			", HTML.IMG({
    "class": "img-thumbnail",
    src: function() {
      return Spacebars.mustache(view.lookup("thumb"));
    }
  }), "\n		"), HTML.Raw('\n		<div class="col-xs-12">\n			<hr>\n		</div>\n		'), HTML.DIV({
    "class": "col-xs-12"
  }, "\n			", Spacebars.include(view.lookupTemplate("markdown"), function() {
    return Blaze.View("lookup:body", function() {
      return Spacebars.mustache(view.lookup("body"));
    });
  }), "\n			", HTML.Raw("<hr>"), "\n		"), "\n		", HTML.DIV({
    "class": "col-xs-12 well"
  }, "\n			", HTML.DIV({
    id: "user",
    "class": "hide"
  }, Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), "\n			", HTML.H4("\n				", HTML.IMG({
    "class": "img-circle",
    width: "50",
    src: function() {
      return Spacebars.mustache(view.lookup("gravatarImgUrl"));
    }
  }), "\n				", HTML.A({
    "class": "article-item-name"
  }, "by ", Blaze.View("lookup:useremail", function() {
    return Spacebars.mustache(view.lookup("useremail"));
  })), "   ", HTML.BUTTON({
    "class": "article-item-upvote btn btn-default btn-sm"
  }, HTML.Raw('<i class="fa fa-heart"></i>'), " ", Blaze.View("lookup:likes", function() {
    return Spacebars.mustache(view.lookup("likes"));
  })), "   ", HTML.BUTTON({
    "class": "article-item-comment btn btn-default btn-sm",
    href: "#"
  }, HTML.Raw('<i class="fa fa-comment"></i>'), " ", Blaze.View("lookup:commentCount", function() {
    return Spacebars.mustache(view.lookup("commentCount"));
  })), "   ", HTML.SPAN({
    "class": "article-item-date"
  }, Blaze.View("lookup:submitted", function() {
    return Spacebars.mustache(view.lookup("submitted"));
  })), "\n					", Blaze.If(function() {
    return Spacebars.call(view.lookup("itemBelongsToYou"));
  }, function() {
    return [ "\n						", HTML.DIV({
      "class": "btn-group pull-right"
    }, "\n							", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "articleEditPage");
      }
    }, HTML.BUTTON({
      "class": "btn btn-warning edit-article"
    }, "Edit")), "\n							", HTML.A({
      href: "#"
    }, HTML.BUTTON({
      "class": "btn btn-danger delete-article"
    }, "Delete")), "\n						"), "\n					" ];
  }), "\n			"), "\n		"), "\n		", HTML.DIV({
    "class": "col-xs-12"
  }, "\n			", HTML.Raw("<h3>Comments</h3>"), "\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "\n				", Spacebars.include(view.lookupTemplate("articleCommentItem")), "\n			" ];
  }), "\n		"), "\n		", HTML.DIV({
    "class": "col-xs-12 text-center"
  }, "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<br>"), "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("commentLimitReached"));
  }, function() {
    return [ "\n				", HTML.BUTTON({
      "class": "btn btn-primary load-more"
    }, "Load More"), "\n			" ];
  }), "\n			", HTML.Raw("<br>"), "\n			", HTML.Raw("<br>"), "\n		"), "\n		", HTML.DIV({
    "class": "col-xs-12"
  }, "\n			", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n				", Spacebars.include(view.lookupTemplate("articleCommentSubmit")), "\n			" ];
  }, function() {
    return [ "\n				", HTML.SPAN("You must be ", HTML.A({
      href: "/sign-in"
    }, HTML.STRONG("logged")), " in to comment."), "\n			" ];
  }), "			\n		"), "\n	");
}));

}).call(this);

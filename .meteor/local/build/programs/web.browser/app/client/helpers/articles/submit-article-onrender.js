(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helpers/articles/submit-article-onrender.js                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.submitArticle.rendered = function () {                        // 1
    $('#summernote').summernote({                                      // 2
        height: 200, // set editable area's height                     // 3
        focus: true // set focus editable area after Initialize summernote
    });                                                                //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

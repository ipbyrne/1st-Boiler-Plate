AdminMessages = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var currentPage = parseInt(this.props.page) || 1;
    var recordsPerPage = 1;
    Tracker.autorun(function (){
      var skipCount = (currentPage - 1) * recordsPerPage; // 1 records per page
      messagesHandle = Meteor.subscribeWithPagination("contact-messages", recordsPerPage, skipCount);
    });

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
      messages: Messages.findFromPublication("contact-messages",{},{sort: {submitted: -1}}).fetch(),
      messageCount: Counts.get('contact-messages'),
      prevPageClass: currentPage != 1 ? "" : "disabled",
      nextPageClass: currentPage < Counts.get('contact-messages')/recordsPerPage ? "" : "disabled"
    };
  },

  renderNavbar () {
    return <AdminNavbar href="/admin/messages"/>;
  },

  renderMessages() {
    return this.data.messages.map((message) => {
      return <AdminMessagesMessageItem key={message._id} message={message}/>;
    });
  },

  nextPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage < Counts.get('contact-messages')/recordsPerPage) {
      FlowRouter.go("/admin/messages/" + (currentPage + 1));
    }
  },

  prevPage() {
    var recordsPerPage = 1;
    var currentPage = parseInt(this.props.page) || 1;
    if(currentPage != 1) {
      FlowRouter.go("/admin/messages/" + (currentPage - 1));
    }
  },

  updateArticleSearch() {
    Session.set("article-search-query", $('.search-bar2').val());
  },

  render() {
    // Set SEO
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);

    return (
      <div>
        {this.renderNavbar()}
        <div id="adminContentContainer">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Messages ({this.data.messageCount})</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-12">
            			<div className="col-xs-12">
            				<table className="table table-bordered">
            					<thead>
            						<tr>
            							<th>Name</th>
            							<th>Email</th>
            							<th>Date</th>
            						</tr>
            					</thead>
            					<tbody>
            						{this.renderMessages()}
            					</tbody>
            				</table>
            				<br/>
                    <nav>
                      <ul className="pager">
                        <li className="prevPageClass">
                          <a id="prevPage" className={this.data.prevPageClass} onClick={this.prevPage}>
                            <span aria-hidden="true">&larr;</span> Previous
                          </a>
                        </li>
                        <li className="nextPageClass">
                          <a id="nextPage" className={this.data.nextPageClass} onClick={this.nextPage}>
                            Next <span aria-hidden="true">&rarr;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
            			</div>
            		</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

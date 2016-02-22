AdminMessagePage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var messageId = this.props.messageId;

    messageHandle = Meteor.subscribe("contact-message", messageId);
    contactMessage = Messages.findOne(messageId);


    if(contactMessage){
      return {
        name: contactMessage.name,
        email: contactMessage.email,
        message: contactMessage.message,
        submitted: contactMessage.submitted
      };
    } else {
      return {};
    }
  },

  renderNavbar () {
    return <AdminNavbar />;
  },

  handleSubmit(event) {
    event.preventDefault();
    var to = this.data.email;
    var from = "info@application.com";
    var subject = $('#reply-subject').val();
    var message = $('#reply-message').val();

    if(message != '' && subject != '') {
      Meteor.call('sendEmail', to, from, subject, message, function (error) {
        if(error) {
          toastr.error('Failed to send message... '+error);
        } else {
          $('#reply-message').val('');
          $('#reply-subject').val('');
          toastr.success('Message Sent!');
        }
      });
    } else {
      toastr.error('Your email must contain a subject and a message');
    }
  },

  render() {
    const name = this.data.name;
    const email = this.data.email;
    const message = this.data.message;
    const submitted = moment(this.data.submitted).format("MMM Do YY");

    // Set SEO
    var SEOtitle = "Home Page";
    DocHead.setTitle(SEOtitle);

    return (
      <div>
        {this.renderNavbar()}
        <div id="adminContentContainer">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Message</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-6">
                  <h3 className="page-header">Message</h3>
                  <h4>{submitted}</h4>
                  <h4>From: {name}</h4>
                  <h4>Email: {email}</h4>
                  <h4>Message:</h4>
                  <h5>{message}</h5>
                </div>
                <div className="col-md-6">
                  <h3 className="page-header">Reply</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <h4>To: {email}</h4>
                      <input className="form-control" type="text" name="reply-subject" id="reply-subject" placeholder="Subject"/>
                      <br/>
                      <textarea className="form-control" name="reply-message" id="reply-message" rows="6"></textarea>
                    </div>
                    <div className="text-center form-group">
                      <br/>
                      <button type="submit" className="text-center btn btn-success send-message">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        	</div>
        </div>
      </div>
    )
  }
});

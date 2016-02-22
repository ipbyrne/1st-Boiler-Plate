ContactPage = React.createClass({
  
  handleSubmit(event) {
    event.preventDefault();

    var message = {
      name: $('#contact-name').val(),
      email: $('#contact-email').val(),
      message: $('#contact-message').val(),
      submitted: new Date(),
      new: true
    };

    Meteor.call('insertMessage', message, function(error) {
      if(error) {
        toastr.error('Failed to send message... '+error);
      } else {
        $('#contact-name').val('');
        $('#contact-email').val('');
        $('#contact-message').val('');
        toastr.success('Message Sent!');
      }
    });
  },
  render() {
    // Set SEO
    var SEOtitle = "Contact Us";
    DocHead.setTitle(SEOtitle);

    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>CONTACT US</h2>
          <hr/>
          <p>Need to get in contact with us? Just fill out the form below and we will get back you!</p>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <div className="col-sm-6 form-group">
                <label>Name</label>
                <input className="form-control" type="text" name="contact-name" id="contact-name"/>
            </div>
            <div className="col-sm-6">
                <label>Email</label>
                <input className="form-control" type="text" name="contact-email" id="contact-email"/>
            </div>
            <div className="col-xs-12">
                <br/>
                <label>Message</label>
                <textarea className="form-control" rows="6" name="contact-message" id="contact-message"></textarea>
            </div>
            <div className="col-xs-12 text-right">
                <br/>
                <button type="submit" className="btn btn-success">Send</button>
                <br/>
                <br/>
            </div>
          </form>
        </div>
    	</div>
    )
  }
});

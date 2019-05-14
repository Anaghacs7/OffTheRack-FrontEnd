import React, {Component} from 'react';
import { inquiryRequest } from '../../helpers/network';

class ContactForm extends Component { 
  state = {
    sendMessageStatus : null,
    error: null
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
    
   submitForm = async(e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
        inquiryRequest({name:this.state.name, email: this.state.email, message: this.state.message});
        this.setState({
        sendMessageStatus : true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  
  render(){
          return (
            <div className = "container">
              <section id="contact">
                <h2>Contact Us</h2>
                <hr />
                {this.state.error ?
                  <div className="alert alert-danger" role="alert">
                    {this.state.error}
                  </div>
                : null }
                <div className="col-md-12 mb-5 align-items-center">
                  <div className="card h-100">
                    <div className="card-body">
                      <form onSubmit={this.submitForm}>
                        <p align="center">Send us your inquiry by filling the form below</p>
                        <div className="form-group">
                          <label><i className="dev-icons fa fa-user" /> Name:</label>
                          <input type="text" name="name" onChange={this.updateVal} placeholder="Type Your Name" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label><i className="fa fa-envelope" /> Email:</label>
                          <input type="email" name="email" onChange={this.updateVal} placeholder="Enter your email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>
                        <div className="form-group">
                          <label><i className="fa fa-comment" /> Message:</label>
                          <textarea rows={3} name="message" onChange={this.updateVal} className="form-control" placeholder="Type Your Message" required defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <input type='submit' className="btn btn-raised btn-block btn-primary" value='Send Message' />
                        </div>
                      </form>
                      <div id="error_message" style={{width: '100%', height: '100%', display: 'none'}}>
                        <h4>Error</h4>
                        Sorry please Try Again.
                      </div>
                      <div id="success_message" style={{width: '100%', height: '100%', display: 'none'}}>
                        <h2>Success! Your Message was Sent Successfully. Allow us 48 hours for one of our team members to contact you back!</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section></div>
          );
  }
}

export default ContactForm;
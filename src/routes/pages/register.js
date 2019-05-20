import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
import Layout from '../../components/Layout';

 class Register extends Component { 
  state = {
    error: null,
    loggedin: null,
    areregistered:null
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
      let response = await registerRequest({email: this.state.email, password: this.state.password, name:this.state.name});
      saveUser(response);
      this.setState({
        loggedin: false,
        areregistered:true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  
  render(){
  return <>
  <Layout />
  <header className="bg-hero " content="width=device-width, initial-scale=1, shrink-to-fit=no" style={ { backgroundImage: `url(require("./images/HOMEPAGE.jpg"))` } }>
   {this.state.areregistered ? <Redirect to="/success"/> : null}
   <section id="register" className="col-md-4 RegisterForm card-body align-items-center">
      <h2>Register Here</h2>
      <hr />  
  {this.state.error ?
    <div className="alert alert-danger" role="alert">
      {this.state.error}
    </div>
  : null }
   <form onSubmit={this.submitForm} >
  
   <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Type Your Name" className="form-control" required />
    </div>
    <div className="form-group">
        <label>Email:</label>
        <input type='email' name='email' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter your email" className="form-control" required  />
    </div>
    <div className="form-group">
        <label>Password:</label>
        <input type='password' name='password' onChange={this.updateVal}  className="form-control" id="exampleInputPassword1" placeholder="Password"  required />
     </div>
    <div className="form-group">
        <input type='submit' className="btn btn-raised btn-block btn-primary" value='Register' />
    </div>
    
    </form>
     
    </section>
    </header> 
    </> 

 }
   
 
 }

export default Register;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { loginRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
import Layout from '../../components/Layout';

class Login extends Component {
  state = {
    error: null,
    loggedin: null
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
      let response = await loginRequest({email: this.state.email, password: this.state.password});
      saveUser(response);
      this.setState({
        loggedin: true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return <Layout>
      {this.state.loggedin ? <Redirect to="/user/"/> : null}
        <section id="login" className="col-md-4 RegisterForm card-body align-items-center">
            <h2>Please Log In</h2>
            <hr />  
        {this.state.error ?
            <div className="alert alert-danger" role="alert">
            {this.state.error}
            </div>
        : null }
        <form onSubmit={this.submitForm} >
        <div className="form-group">
            <label>Email:</label>
            <input type='email' name='email' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter your email" className="form-control" required  />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type='password' name='password' onChange={this.updateVal}  className="form-control" id="exampleInputPassword1" placeholder="Password"  required />
        </div>

        <div className="form-group">
        <input type='submit' className="btn btn-raised btn-block btn-primary" value='Login' />
    </div>
    
    </form>
    </section>
    </Layout>
    }
}

export default Login;
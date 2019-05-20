import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { uploadProductDetails } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
import Layout from '../../components/Layout';
import { userLogout } from '../../helpers/authentication';

 class UploadProduct extends Component { 
  state = {
    authenticated: false,
   
    error: false
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
      let response = await uploadProductDetails({
          rentAmount   : this.state.rentAmount,
          productName  : this.state.productName,
          company      : this.state.company,
          suitableFor  : this.state.suitableFor,
          size         : this.state.size,
          material     : this.state.material,
          other        : this.state.other,
          rentierName  : this.state.rentierName,
          rentierEmail  : this.state.rentierEmail});
      saveUser(response);
      this.setState({
        authenticated: true
      });
      console.log("In Try");
    }catch(e){
        userLogout();
        this.setState({
          authenticated : false,
          error: true
        });
        console.log("error");
      }
    }
  render(){
  return  <>
  <Layout />
    {this.state.authenticated === false && this.state.error === true? <Redirect to="/users/login/" /> : null}
    
    <section id="register" className="align-items-center col-md-6  card-body ">
        <h2>Please Enter The Product Details</h2>
        <hr />  
    {this.state.error ?
        <div className="alert alert-danger" role="alert">
        {this.state.error}
        </div>
    : null }
    <form onSubmit={this.submitForm} >
    <div className="form-group">
            <label>Rent:</label>
            <input type="number" name="rentAmount" onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Type Cost in $" className="form-control" required />
        </div>
    
    <div className="form-group">
            <label>Product Name:</label>
            <input type="text" name="productName" onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Type product Name" className="form-control" required />
        </div>
        <div className="form-group">
            <label>Company:</label>
            <input type='text' name='company' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter Company Name" className="form-control" required  />
        </div>
        <div className="form-group">
            <label>Suitable For:</label>
            <input type='text' name='suitableFor' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Men/Women/Boy/Girl" className="form-control" required />
        </div>
        <div className="form-group">
            <label>Size:</label>
            <input type='text' name='size' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter the size" className="form-control" required />
        </div>
        <div className="form-group">
            <label>Material:</label>
            <input type='text' name='material' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter the material" className="form-control" required />
        </div>
        <div className="form-group">
            <label>Other:</label>
            <textarea rows={3} name='other' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter any other details eg: phone number,facebook link etc" className="form-control" />
        </div>
        <div className="form-group">
            <label>Name:</label>
            <input type='text' name='rentierName' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter your Name" className="form-control" required  />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type='email' name='rentierEmail' onChange={this.updateVal} aria-describedby="emailHelp" placeholder="Enter your email" className="form-control" required  />
        </div>
        <div className="form-group">
            <input type='submit' className="btn btn-raised btn-block btn-primary" value='Submit' />
        </div>
    
    </form>
     
    </section>   
    </>
 }
 }

export default UploadProduct;
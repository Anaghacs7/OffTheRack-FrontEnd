import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import {getProductDetails} from '../../helpers/network';
import { userLogout, isLoggedIn } from '../../helpers/authentication';
 
// const Loading = (props) => {
 //  return <div className="alert alert-info" role="alert">
   //  Logging In Please Wait
  // </div>
 //}

 const Product = (propsw) =>{
    return <div className="col-md-4 cardMargin ">
          <div className="card h-100">
            <img className="card-img-top" src="/images/phone.png" alt="" height={240} />
            <div className="card-body" style={{backgroundColor : 'rgb(255, 228, 204)'}} >
              <h4 className="card-title" align="center">{propsw.row.productName } for ${propsw.row.rentAmount}</h4>
              <table>
                <tbody className="card-text" >
                <tr><td>Company       :</td><td>{propsw.row.company}</td></tr>
                <tr><td>Suitable for  :</td><td>{propsw.row.suitableFor} </td></tr>
                <tr><td>Size          :</td><td>{propsw.row.size} </td></tr>
                <tr><td>Material      :</td><td>{propsw.row.material} </td></tr>
                <tr><td>Other         :</td><td>{propsw.row.other} </td></tr>
                <tr><td>Rentier Name  :</td><td>{propsw.row.rentierName} </td></tr>
                <tr><td>Rentier Email :</td><td>{propsw.row.rentierEmail} </td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
}

const AllProducts =(props)=>{ 
return <div className="container">
  <section />
  <h2>To Let</h2>
  <hr />
  <div className="row">
    {props.data ? props.data.map(row => <Product key={row._id} row={row} />) : null}
  </div>
</div>

} 
class UserPage extends Component {
  state = {
    authenticated: true,
    data: null,
    error: false
  }
  async componentDidMount(){
    try {
      const response = await getProductDetails();
      this.setState({
        data: response,
        authenticated: true
      });
      console.log("mounted");
    }catch(e){
      userLogout();
      this.setState({
        error: true,
        authenticated: false
      });
      console.log("error");
    }
  }
  
  render() {
    return (<>
    <Layout />
        <br/>
        {isLoggedIn() ? <AllProducts data={this.state.data} /> : <Redirect to="/login" />}
      </>
    );
  }
}

export default UserPage;

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import { getInquiries } from '../../helpers/network';
import { userLogout } from '../../helpers/authentication';
import {isLoggedIn } from '../../helpers/authentication';

 const Row = (propsw) => {
   return <tr>
     <td>{propsw.row.name}</td>
     <td>{propsw.row.email}</td>
     <td>{propsw.row.message}</td>
   </tr>
 }
 
 const Table = (props) => {
   return <div>
     <table className="table">
       <thead>
         <tr>
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Message</th>
         </tr>
       </thead>
       <tbody>
         {props.data ? props.data.map(row => <Row key={row._id} row={row} />) : null}
       </tbody>
     </table>
   </div>
 }
 class Inquiries extends Component {
   state = {
     authenticated: false,
     data: null,
     error: false
   }
   async componentDidMount(){
     try {
       if(isLoggedIn()){
       const response = await getInquiries();
       this.setState({
         data: response,
         authenticated: true
       });
      }
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
     return (
       <>
       <Layout />
         {this.state.authenticated === false || this.state.error === true ? <Redirect to="/login" /> : null}
         {this.state.authenticated === true && this.state.error === false ? <Table data={this.state.data}/> : null}
       </>
     );
   }
 }

 export default Inquiries;

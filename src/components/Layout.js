import React, { Component } from 'react';
import Header from './Header';
class Layout extends Component {
  render(){
    return <>
    <Header />
    <div className="container shrink-to-fit=no " >
    {this.props.children}
    </div>
    </>
  } 
}
export default Layout;
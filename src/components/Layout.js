import React, { Component } from 'react';

class Layout extends Component {
  render(){
    return  <header className="bg-hero " content="width=device-width, initial-scale=1, shrink-to-fit=no" style={ { backgroundImage: `url(require("./images/HOMEPAGE.jpg"))` } }>
    <div className="container shrink-to-fit=no " >
    {this.props.children}
    </div>
    </header>
  }
}
export default Layout;
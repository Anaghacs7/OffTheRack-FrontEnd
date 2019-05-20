import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { userLogout, isLoggedIn, userInfo, userEmail } from '../helpers/authentication';

class Header extends Component {
  logout = (e) => {
    userLogout();
    window.location.href = "/";
  }
  shouldComponentUpdate(nextProps) {
    return isLoggedIn();
  }
  render(){
    const full_name = isLoggedIn() ? userInfo() : null;
    return <nav className="navbar navbar-expand-lg navbar-light bg-peach fixed-top">
    <div className="container">
      <a id="BrandName" className="mynavbar-brand" href="/#">Off-The-Rack</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav mr-auto">
        {/*<li className="nav-item">
          <a className="nav-link js-scroll-trigger text-white" activeClassName="active"  href="/#home">Home</a>
        </li>*/}
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger text-white" activeClassName="active" offset="125px" href="/#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger text-white" activeClassName="active"  href="/#contact">Contact Us</a>
        </li>
       
      </ul>
      <ul className="navbar-nav ml-auto">
      {isLoggedIn() ? <>
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger" activeClassName="active" to={'/userPage'}>{ full_name }</NavLink>
        </li> </>
        : null }
      {(isLoggedIn() && (userEmail() === 'acs@gmail.com')) ? <>
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger text-white" activeClassName="active" to={'/inquiries'} >Inquiries</NavLink>
        </li> </>
        : null
      }
   
      <li/>
      {isLoggedIn() ? <>
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger text-white" activeClassName="active" to={'/uploadProduct'} >Rent Out</NavLink>
        </li>
      <li/>
      <li className="nav-item">
        <NavLink onClick={this.logout} className="nav-link js-scroll-trigger text-white" to={'/'}>Logout</NavLink>
      </li></>
      : <>  
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger text-white" activeClassName="active" to={'/register'} >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link js-scroll-trigger text-white" activeClassName="active" to={'/login'} >Log In</NavLink>
        </li>
         </>}
      </ul>
      </div>
    </div>
    </nav>
  }
}

export default Header;

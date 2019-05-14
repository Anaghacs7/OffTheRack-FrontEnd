import React, { Component } from 'react';
import { Route, Switch,Link  } from 'react-router-dom';

import Header from './components/HeaderOTR';
import Home from './routes/home/HomePage';
import AboutUs from './routes/home/AboutUs';
import Footer from './components/Footer';
//import Navigate from './components/NavigationOTR';
import Register from './routes/pages/register';
import Login from './routes/pages/login';
import Success from './routes/pages/success';
import './index.css';
import WhatWeDo from './routes/home/WhatWeDo';
import ContactForm from './routes/home/ContactForm';
import Testimonials from './routes/home/Testimonials';


class App extends Component {
  render() {
    return <div>
      
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"/>
      <Navigate />      
       
       <Switch>
       <Route exact path="/" component={Home} />
       
       <Route path="/about/" component={AboutUs} />
       <Route path="/whatwedo/" component={WhatWeDo} />
       <Route path="/contact/" component={ContactForm} />
       <Route path="/testimonals/" component={Testimonials} />
       <Route path="/register/" component={Register} />
       <Route path="/login/" component={Login} />
       <Route path="/success/" component={Success} />
       </Switch> 
       

      <Footer /> 
      </div>
  }
  
}
const Navigate = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-peach fixed-top">
    <div className="container">
      <label id="BrandName" className="navbar-brand">Off-The-Rack</label>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link js-scroll-trigger text-white" to="/">Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger text-white" to={'/about'} href="#about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger text-white" to={'/whatwedo'} href="#whatwedo">What We Do</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger text-white" to={'/testimonals'} href="#testimonals">Testimonals</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link js-scroll-trigger text-white" to={'/contact'} href="#contact">Contact Us</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link js-scroll-trigger text-white" to={'/register'} >Register</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link js-scroll-trigger text-white" to={'/login'} >Log In</Link>
          </li>
  
        </ul>
      </div>
    </div>
  </nav>
  );
}





export default App;

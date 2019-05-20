import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home/HomePage';
import AboutUs from './routes/home/AboutUs';
import Footer from './components/Footer';
import Register from './routes/pages/register';
import Login from './routes/pages/login';
import Success from './routes/pages/success';
import './index.css';
import WhatWeDo from './routes/home/WhatWeDo';
import ContactForm from './routes/home/ContactForm';
import Testimonials from './routes/home/Testimonials';
import Inquiries from './routes/pages/inquiries';
import UserPage from './routes/pages/userPage';
import UploadProduct from './routes/pages/uploadProduct';

class App extends Component {
  render() {
    return <div>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/whatwedo" component={WhatWeDo} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/testimonals" component={Testimonials} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
        <Route path="/inquiries" component={Inquiries} />
        <Route path="/userPage" component={UserPage} />
        <Route path="/uploadProduct" component={UploadProduct} />
      </Switch> 
      <Footer /> 
      </div>
  }
}


export default App;

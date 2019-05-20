import React from 'react';
import Link from 'react-router-dom';

const Navigate = () => {
          return (
      
            <nav className="navbar navbar-expand-lg navbar-light bg-peach fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#brand">Off-The-Rack</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link js-scroll-trigger text-white" href="#home">Home
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger text-white"  to={'/about'} href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger text-white" to={'/whatwedo'} href="#whatwedo">What We Do</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger text-white" to={'/testimonals'} href="#testimonals">Testimonals</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link js-scroll-trigger text-white" to={'/contact'}  href="#contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link js-scroll-trigger text-white" to={'./routes/users/register'}  href="./routes/users/register">Register</Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          );
}



export default Navigate ;
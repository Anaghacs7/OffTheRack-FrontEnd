import React from 'react';

const WhatWeDo = () =>{
return <div className="container">
<section id="whatwedo" />

  <h2>What We Do</h2>
   <hr />
  <div className="row">
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <img className="card-img-top" src="./images/phone.png" alt="" height={240} />
        <div className="card-body" style={{backgroundColor : 'rgb(255, 228, 204)'}} >
          <h4 className="card-title" align="center">Rent In</h4>
          <p className="card-text" align="center">Rent clothes, accessories and even footwear from people in our community</p>
        </div>
        </div>
    </div>
  <div className="col-md-4 mb-5">
    <div className="card h-100">
      <img className="card-img-top" src="./images/clothes.jpg" alt="" height={240} />
      <div className="card-body" style={{backgroundColor: 'rgb(255, 228, 204)'}}>
        <h4 className="card-title" align="center">Rent Out</h4>
        <p className="card-text" align="center">Display your items on our platform for people to rent and for you to side hustle</p>
      </div>
      
    </div>
  </div>
  <div className="col-md-4 mb-5">
    <div className="card h-100">
      <img className="card-img-top" src="./images/delivery.jpg" alt="" height={240}/>
      <div className="card-body" style= {{backgroundColor: 'rgb(255, 228, 204)'}}>
        <h4 className="card-title" align="center">Delivery</h4>
        <p className="card-text" align="center">We take care of delivery and quaility checks! We enusre that each product will exceed your expectations and safely deilver each item</p>
      </div>
    </div>
  </div>
</div>
</div>
}

export default WhatWeDo;
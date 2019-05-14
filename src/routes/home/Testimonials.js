import React from 'react';

const Testimonials = () =>{
          return (
            <div className="container">
              <section id="testimonals">
                <h2>Testimonials</h2>
                <hr />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>   
                  <div className="carousel-inner">		
                    <div className="item carousel-item active">
                      <div className="img-box"><img src="./images/Test1.jpg" alt="" /></div>
                      <p className="title"><b>“I've had a great Unlimited experience”</b></p>
                      <p className="testimonial">For very little a month I usually get to rent 10-15 items if I plan accordingly.I can not beat it. I have been a customer of the company for 3+ years and would give them a 9/10 without hesitation</p>
                      <p className="overview"><b>Robinson&nbsp;B.</b></p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="./images/test2.jpg" alt="" /></div>
                      <p className="title"><b>“Loyal 3 years +”</b></p>		
                      <p className="testimonial">I signed up for the Unlimited membership last month and am LOVING it! I swap out my pieces a bunch of times a month and keep getting compliments from my co workers on how well dressed I am.</p>
                      <p className="overview"><b>Mark&nbsp;R</b></p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="./images/Test3.jpg" alt="" /></div>
                      <p className="title"><b>“I had a last minute trip to Dubai for a wedding and..”</b></p>
                      <p className="testimonial">I had a last minute trip to Dubai for a wedding and was couldn't find a long sleeved dress. A colleague told me about Off the rack and I immediately found the perfect dress. I could not have been happier!</p>
                      <p className="overview"><b>Errin&nbsp;M.</b></p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star" /></li>
                          <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                        </ul>
                      </div>
                    </div>		
                  </div>
                  <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-angle-left" />
                  </a>
                  <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </section></div>
    );
}

export default Testimonials;
      
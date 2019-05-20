import React from 'react';

import BodyHeader from './BodyHeader';
import AboutUs from './AboutUs';
import WhatWeDo from './WhatWeDo';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Layout from'../../components/Layout';
function Home() {
  return <div id='home'>
  <Layout />
      <BodyHeader/>
      <AboutUs />
      <WhatWeDo />
      <Testimonials />
      <ContactForm />
  </div>
}



export default Home;
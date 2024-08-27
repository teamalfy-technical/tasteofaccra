import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Workwith from '../components/Workwith';
import Highlists from '../components/Highlists';
import Tour from '../components/Tour';
import Partners from '../components/Partners.jsx';
import Register from '../components/Register';
import Newsletter from '../components/Newsletter';
import Initiative from '../components/Initiative';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/scrollTop';


const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Workwith/>
      <Partners/>
      <Highlists/>
      <Tour/>
      <Register />
      <Newsletter/>
      <Initiative/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default LandingPage

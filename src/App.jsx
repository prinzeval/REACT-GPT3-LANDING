import React, { useEffect } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './component';
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;

import React from 'react'
import FooterComponent from './components/FooterComponent'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Services from './components/Services'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <Services/>
      <FooterComponent/>
    </div>
  )
}

export default App

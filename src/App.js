import React from 'react'
import './App.css'
import About from './Components/About/About'
import CallToAction from './Components/CallToAction/CallToAction'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'

import "animate.css/animate.min.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <CallToAction />
      <Services />
      <Footer />
    </div>
  )
}

export default App

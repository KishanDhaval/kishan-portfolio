import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectShowcase from '../components/ProjectShowcase'
import Contact from '../components/Contact'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>     
      <Home/>
      <About/>
      <Skills/>
      <ProjectShowcase/>
      <Contact/>
    </div>
  )
}

export default LandingPage

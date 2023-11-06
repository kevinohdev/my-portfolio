import React from 'react'
import { ToastContainer } from 'react-toast'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

export default function index({data}) {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Projects />
      <Skills></Skills>
      <Contact></Contact>
      <ToastContainer delay={3000} position={'bottom-center'}/>
    </div>
  )
}

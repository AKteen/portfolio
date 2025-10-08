import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import About from './components/about/about.jsx'
import Exp from './components/experience/exp.jsx'
import Contact from './components/contact/contact.jsx'
import Skill from './components/skills/skills.jsx';

import DarkVeil from './Bits/DarkVeil.jsx';

import Footer from './components/footer/footer.jsx'


function App() {


  return (
    <>
      <DarkVeil />
      <Navbar/>
      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="experience"><Exp/></section>
      <section id="skills"><Skill/></section>
      <section id="contact"><Contact/></section>
      <Footer/>
      
    </>
  )
}

export default App

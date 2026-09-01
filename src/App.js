import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Work from './components/Work'
import Contact from './components/Contact'
import Game from './components/Game'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Game/>
      <Contact/>
    </div>
  )
}

export default App

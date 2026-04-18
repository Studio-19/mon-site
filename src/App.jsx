import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-brand-blue min-h-screen text-brand-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App

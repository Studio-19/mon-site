import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="bg-brand-blue dark:bg-slate-900 min-h-screen text-brand-white dark:text-white font-sans selection:bg-blue-500/30">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
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

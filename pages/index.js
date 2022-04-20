import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Icon from './../components/Icon'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

const Home = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const currThem = localStorage.getItem('theme')
      if (currThem) return currThem
      else return localStorage.setItem('theme', 'light')
    }
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [theme])

  const handleClickDarkMode = () => {
    setTheme(preTheme => (preTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Head>
        <title>Minh Quân Lê</title>
      </Head>
      <div className='overflow-x-hidden'>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <button
          type='button'
          onClick={handleClickDarkMode}
          className='z-10 p-2 fixed bottom-7 left-7 bg-slate-200 border-[3px] border-slate-600 rounded-full shadow-sm fill-orange-400 hover:rotate-45 transition-transform duration-300'
        >
          <Icon
            iconName={theme === 'dark' ? 'moon' : 'sun'}
            width='7'
            height='7'
          />
        </button>
      </div>
    </>
  )
}

export default Home

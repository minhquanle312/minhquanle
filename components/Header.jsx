import React from 'react'
import style from '../styles/Header.module.css'
import AutoScrollSlider from './AutoScrollSlider'
import { useInView } from 'react-intersection-observer'

const navList = [
  { name: 'HOME', section: '#home' },
  { name: 'ABOUT', section: '#about' },
  { name: 'SKILLS', section: '#skills' },
  { name: 'PROJECTS', section: '#projects' },
  { name: 'CONTACT', section: '#contact' },
]

const Header = () => {
  const Navigation = ({ items, fixed }) => {
    const classes =
      fixed &&
      'fixed top-0 left-0 right-0 h-18 bg-white dark:bg-black border-b shadow-sm transition-colors duration-300'

    return (
      <nav
        className={`${classes} flex gap-5 py-3 px-5 items-center justify-start z-10`}
      >
        {items.map(item => (
          <a
            key={item.name}
            className='btn-primary text-base'
            href={item.section}
          >
            {item.name}
          </a>
        ))}
      </nav>
    )
  }

  const HeaderText = ({ black }) => {
    return (
      <h2
        className={`absolute flex flex-col gap-7 inset-0 pl-[25%] justify-center text-5xl ${
          black ? 'bg-black text-white clip-path-black' : 'clip-path-white'
        }`}
      >
        <span className={style.title}>Minh Quan Le</span>
        <span className='text-3xl'>I&apos;m A Frontend Developer</span>
      </h2>
    )
  }

  const { ref: headerRef, inView: headerIsInview } = useInView()

  return (
    <div
      id='home'
      className='relative h-screen dark:bg-slate-500 transition-colors duration-300'
      ref={headerRef}
    >
      <Navigation items={navList} fixed={!headerIsInview} />
      <HeaderText black />
      <HeaderText />
      <AutoScrollSlider className='absolute top-0 right-0 bottom-0 w-1/2 dark:before:hidden' />
    </div>
  )
}

export default Header

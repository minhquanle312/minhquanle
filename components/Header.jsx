import React, { useState } from 'react'
import style from '../styles/Header.module.css'
import AutoScrollSlider from './AutoScrollSlider'
import { useInView } from 'react-intersection-observer'
import useResizeWidth from './../hooks/useResizeWidth'
import Icon from './Icon'
import Link from 'next/link'

const navList = [
  { name: 'HOME', section: '#home' },
  { name: 'ABOUT', section: '#about' },
  { name: 'SKILLS', section: '#skills' },
  { name: 'PROJECTS', section: '#projects' },
  { name: 'CONTACT', section: '#contact' },
]

const Header = () => {
  const { windowWidth } = useResizeWidth(20)
  const Navigation = ({ items, fixed }) => {
    const classes =
      fixed &&
      'fixed top-0 left-0 right-0 h-18 bg-white dark:bg-black border-b shadow-sm transition-colors duration-300'

    return (
      <nav
        className={`${classes} ${
          windowWidth < 768 && 'hidden'
        } flex gap-5 py-3 px-5 items-center justify-start z-10`}
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

  const MobileNavigation = ({ items, fixed }) => {
    const [showNav, setShowNav] = useState(false)

    const classes = fixed
      ? 'fixed top-0 left-0 right-0 h-18 bg-white dark:bg-black border-b shadow-sm transition-colors duration-300'
      : ''

    const handleClickIcon = () => {
      setShowNav(!showNav)
    }

    return (
      <nav
        className={`${classes} md:hidden flex flex-col items-start gap-3 z-50 bg-white dark:bg-slate-500`}
      >
        <Icon
          iconName='bar'
          width='12'
          height='12'
          className={`relative z-10 p-3 ${
            fixed ? 'fill-black dark:fill-white' : 'fill-white'
          }`}
          onClick={handleClickIcon}
        />
        <div
          className={`${
            !showNav ? 'hidden' : ''
          } flex flex-col self-stretch z-10`}
        >
          {items.map(item => (
            <a
              key={item.name}
              className={`p-3 font-medium transition-colors duration-200 ${
                fixed
                  ? 'text-black hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
                  : 'text-white hover:bg-white hover:text-black dark:hover:bg-slate-500 dark:hover:text-slate-100'
              }`}
              href={item.section}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    )
  }

  const HeaderText = ({ black }) => {
    return (
      <h2
        className={`absolute flex flex-col gap-7 inset-0 text-center sm:text-left sm:pl-8 md:pl-32 lg:pl-[25%] justify-center text-5xl transition-all duration-300 select-none ${
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
      className='relative h-screen dark:bg-slate-500 transition-all duration-300'
      ref={headerRef}
    >
      <Navigation items={navList} fixed={!headerIsInview} />
      <MobileNavigation items={navList} fixed={!headerIsInview} />
      <HeaderText black />
      <HeaderText />
      <AutoScrollSlider className='absolute top-0 right-0 bottom-0 w-1/2 dark:before:hidden' />
      <button
        type='button'
        className={`${
          !headerIsInview ? 'fixed bottom-7 right-7' : 'hidden'
        } flex justify-center items-center z-10 p-2 bg-slate-200 border-[3px] border-slate-600 rounded-full shadow-sm hover:-translate-y-2 transition-transform duration-300`}
      >
        <a href='#home'>
          <Icon iconName='arrow-up' width='7' height='7' />
        </a>
      </button>
      <div className='absolute top-2/3 left-20 sm:left-10 md:top-20 md:left-6 flex gap-5'>
        <button className='py-1 px-2 text-sm md:text-md bg-orange-200 rounded-md text-slate-800 font-medium hover:bg-orange-400 hover:text-slate-200 transition-colors duration-150 select-none'>
          <a href='/Intern_Frontend-Le_Phuc_Minh_Quan.pdf' download>
            Download my CV
          </a>
        </button>
        <button className='py-1 px-2 text-sm md:text-md bg-orange-200 rounded-md text-slate-800 font-medium hover:bg-orange-400 hover:text-slate-200 transition-colors duration-150 select-none'>
          <Link href='/myCV'>My online CV</Link>
        </button>
      </div>
    </div>
  )
}

export default Header

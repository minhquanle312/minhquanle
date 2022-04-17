import React from 'react'
import style from '../styles/Header.module.css'
import { Link } from 'next/link'
import AutoScrollSlider from './AutoScrollSlider'

const navList = [
  { name: 'HOME', section: '#home' },
  { name: 'ABOUT', section: '#about' },
  { name: 'SKILLS', section: '#skills' },
  { name: 'PROJECTS', section: '#projects' },
  { name: 'CONTACT', section: '#contact' },
]
// const navList = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT']

const Header = () => {
  const Navigation = ({ items }) => {
    return (
      <nav className='flex justify-end'>
        <div className='flex mt-5 mr-10 gap-3'>
          {items.map(item => (
            <a key={item.name} className='btn-primary' href={item.section}>
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
        id={style[black ? 'header-black' : 'header-white']}
        className={`absolute flex flex-col gap-7 inset-0 pl-[25%] justify-center text-5xl ${
          black ? 'bg-black text-white' : ''
        }`}
      >
        <span className={style.title}>Minh Quan Le</span>
        <span className='text-3xl'>I&apos;m A Frontend Developer</span>
      </h2>
    )
  }

  return (
    <div id='home' className='relative h-screen'>
      <Navigation items={navList} />
      <HeaderText black />
      <HeaderText />
      <AutoScrollSlider className='absolute top-0 right-0 bottom-0 w-1/2' />
    </div>
  )
}

export default Header

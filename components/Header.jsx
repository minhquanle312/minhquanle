import React from 'react'
import style from '../styles/Header.module.css'
import AutoScrollSlider from './AutoScrollSlider'

const navList = [
  { name: 'HOME', section: '#home' },
  { name: 'ABOUT', section: '#about' },
  { name: 'SKILLS', section: '#skills' },
  { name: 'PROJECTS', section: '#projects' },
  { name: 'CONTACT', section: '#contact' },
]

const Header = () => {
  const Navigation = ({ items }) => {
    return (
      <nav className='flex gap-5 pr-5 items-center justify-end z-10 fixed top-0 left-0 right-0 h-20'>
        {items.map(item => (
          <a key={item.name} className='btn-primary' href={item.section}>
            {item.name}
          </a>
        ))}
      </nav>
    )
  }
  // const Navigation = ({ items, black }) => {
  //   const classes = `flex gap-5 pr-5 items-center justify-end z-10 fixed top-0 left-0 right-0 h-20`
  //   return (
  //     <nav className={classes}>
  //       {items.map(item => (
  //         <a key={item.name} className='btn-primary' href={item.section}>
  //           {item.name}
  //         </a>
  //       ))}
  //     </nav>
  //   )
  // }

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
      <AutoScrollSlider className='absolute top-0 right-0 bottom-0 w-1/2 -z-10' />
    </div>
  )
}

export default Header

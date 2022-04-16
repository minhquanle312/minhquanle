import React from 'react'
import style from '../styles/Header.module.css'

// import galaxyVideo from '../public/video/galaxy.mp4'
// const galaxyVideo = require('/public/video/galaxy.mp4')

const navList = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT']

const Header = () => {
  const Navigation = (
    <nav className='flex justify-end'>
      <div className='flex mt-5 mr-10 gap-3'>
        {navList.map(item => (
          <button key={item} type='button' className='btn-primary'>
            {item}
          </button>
        ))}
      </div>
    </nav>
  )

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
    <div className='relative h-screen'>
      {Navigation}
      <HeaderText black />
      <HeaderText />
    </div>
  )
}

export default Header

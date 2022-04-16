import React from 'react'
import styles from '../styles/Skill.module.css'

const icons = [
  {
    name: 'html',
    color: '#e34f26',
  },
  {
    name: 'css',
    color: '#1572b6',
  },
  {
    name: 'javascript',
    color: '#f7df1e',
  },
  {
    name: 'npm',
    color: '#cb3837',
  },
  {
    name: 'react',
    color: '#61dafb',
  },
  {
    name: 'bootstrap',
    color: '#563d7c',
  },
  {
    name: 'tailwindcss',
    color: '#38b2ac',
  },
  {
    name: 'mongodb',
    color: '#47a248',
  },
  {
    name: 'expressjs',
    color: '#000',
  },
  {
    name: 'nextjs',
    color: '#000',
  },
  {
    name: 'sass',
    color: '#cc6699',
  },
  {
    name: 'redux',
    color: '#764abc',
  },
]

const Skills = () => {
  const renderIcons = icons.map(icon => (
    <div key={icon.name} className='flex items-center justify-center'>
      <svg
        className={`w-12 h-12 ${
          styles[icon.name]
        } hover:cursor-pointer transition-colors duration-150`}
      >
        <use xlinkHref={`defs.svg#icon-${icon.name}`}></use>
      </svg>
    </div>
  ))

  return (
    <div className='pt-12 pb-16 h-1/2 bg-blue-50'>
      <h2 className='text-center text-5xl mb-14'>Skill</h2>
      <div className='grid grid-cols-6 gap-y-20'>{renderIcons}</div>
    </div>
  )
}

export default Skills

// * Default color for icon:
/* 
  nextjs, expressjs: #000
  gmail: #d14836
  facebook: #1877f2
  linkedin: #0077b5
  react: #61dafb
  mongodb: #47a248
  npm: #cb3837
  javascript: #f7df1e
  bootstrap: #563d7c
  html: #e34f26
  tailwindcss: #38b2ac
  sass: #c69
  css: #1572b6
  redux: #764abc
  firebase: #ffca28
*/

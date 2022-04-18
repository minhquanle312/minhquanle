import React from 'react'
import Icon from './Icon'

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
      {/* <svg
        className={`w-12 h-12 ${
          styles[icon.name]
        } hover:cursor-pointer transition-colors duration-150`}
      >
        <use xlinkHref={`defs.svg#icon-${icon.name}`}></use>
      </svg> */}
      <Icon iconName={icon.name} popup />
    </div>
  ))

  return (
    <div
      id='skills'
      className='pt-12 pb-16 h-1/2 bg-blue-50 dark:bg-slate-500 transition-colors duration-200'
    >
      <h2 className='text-center text-5xl mb-14 dark:text-slate-100'>Skill</h2>
      <div className='grid grid-cols-6 gap-y-20'>{renderIcons}</div>
    </div>
  )
}

export default Skills

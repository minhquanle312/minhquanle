import React from 'react'
import Circle from './Circle'

// eslint-disable-next-line react/display-name
const About = () => {
  // const Circle = ({ fill }) => {
  //   return (
  //     <div
  //       className={`${
  //         fill ? 'bg-blue-500' : ''
  //       } w-3 h-3 mt-2 shrink-0 rounded-full border-[3px] border-blue-500`}
  //     ></div>
  //   )
  // }

  const intro = (
    <p className='text-gray-600 dark:text-slate-400'>
      <span className='block mb-3'>
        I&apos;m on the way to becoming a Frontend developer. I spent last year
        to focus on learning HTML, CSS, Javascript, ReactJS and many useful
        stuff for my career.
      </span>
      I want to build more beautiful and interesting website for my user 💗
    </p>
  )

  const education = (
    <ul>
      <li className='flex gap-2'>
        <Circle fill />
        <p className='mb-3'>
          <span className='block text-gray-400'>2018 - 2023</span>
          Academy Of Cryptography Techniques - Information Security
        </p>
      </li>
    </ul>
  )

  const experience = (
    <ul>
      <li className='flex gap-2'>
        <Circle fill />
        <p className='mb-3'>
          {/* <span className=''>
            Do you want to be the first person fill this section?
          </span>
          <br />
          <span>Let&apos;s contact me</span> */}
          My{' '}
          <a href='#projects' className='text-blue-500'>
            personal projects
          </a>{' '}
          below.
        </p>
      </li>
      {/* <li className='flex gap-2'>
        <Circle />
        <p>
          <span className=''>What&apos;next?</span>
        </p>
      </li> */}
    </ul>
  )

  const AboutBlock = ({ children, header }) => {
    return (
      <div className='h-72 text-xl p-5 basis-1/3 lg:hover:basis-2/3 hover:border-2 hover:shadow-2xl rounded-2xl transition-all duration-[350ms]  overflow-ellipsis overflow-hidden'>
        <h3 className='text-3xl mb-3'>{header}</h3>
        {children}
      </div>
    )
  }

  return (
    <div
      id='about'
      className='pb-24 h-1/2 dark:bg-slate-700 dark:text-slate-100 transition-colors duration-100'
    >
      <h2 className='text-center text-5xl py-9'>About me</h2>
      <div className='flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-4'>
        <AboutBlock header='My name is Minh Quan Le.'>{intro}</AboutBlock>
        <AboutBlock header='Education'>{education}</AboutBlock>
        <AboutBlock header='Experience'>{experience}</AboutBlock>
      </div>
    </div>
  )
}

export default About

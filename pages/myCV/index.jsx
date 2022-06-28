import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Circle from '../../components/Circle'
import Icon from './../../components/Icon'

const projects = [
  {
    name: 'Intern ReactJS',
    description: 'Build e-commerce website with PWA studio (base on React)',
    teamSize: '5 (4 dev, 1 test)',
    role: 'Intern/fresher frontend developer (3 weeks traning and 5 week on project)',
    technologyIcons: ['ReactJS', 'PWA studio', 'React hooks'],
    company: 'Simicart',
  },
  {
    name: 'Calendar',
    description: 'Normal calendar with simple UI, easy to use.',
    feature: 'add and delete event, choose type of event, go to current day',
    technologyIcons: ['react', 'firebase', 'html', 'sass'],
    demo: 'https://calendar-web-ui.vercel.app/',
    source: 'https://github.com/minhquanle312/calendar-web-ui',
    isPersonal: true,
  },
  // {
  //   name: 'Order food',
  //   description: 'Order food web app with global state management.',
  //   feature: 'add and delete food from card',
  //   technologyIcons: ['react', 'html', 'sass'],
  //   demo: 'https://react-food-app-gold.vercel.app/',
  //   source: 'https://github.com/minhquanle312/react-food-app',
  // },
  {
    name: 'Sudoku solve',
    description: 'Solve sudoku game with demo data input',
    feature: '',
    technologyIcons: ['html', 'css', 'javascript'],
    demo: 'https://minhquanle312.github.io/sudoku-solve/',
    source: 'https://github.com/minhquanle312/sudoku-solve',
    isPersonal: true,
  },
  {
    name: 'Cryptography solve',
    description:
      'Solve some basic cryptography with detail explanation in Vietnamese',
    feature: '',
    technologyIcons: ['html', 'css', 'javascript'],
    demo: 'https://minhquanle312.github.io/kma_crypto_basic/',
    source: 'https://github.com/minhquanle312/kma_crypto_basic',
    isPersonal: true,
  },
]

const index = () => {
  return (
    <>
      <Head>
        <title>CV - Intern Frontend - Lê Phúc Minh Quân</title>
      </Head>
      <nav className='fixed top-0 left-0 w-full h-12 flex items-center z-10 bg-white'>
        <div className='flex justify-between mx-16 md:mx-32 lg:mx-48 gap-20 items-center'>
          <Link href='/' className=''>
            <a className='rounded-md select-none'>
              <Icon
                iconName='arrow-up'
                width='10'
                height='10'
                className='p-2 -rotate-90 fill-blue-500 hover:fill-blue-600 hover:scale-110'
              />
            </a>
          </Link>
          <Link href='/Intern_Frontend-Le_Phuc_Minh_Quan.pdf' download>
            <a className='py-1 px-2 text-xs md:text-sm bg-orange-200 rounded-md text-slate-800 font-medium hover:bg-orange-400 hover:text-slate-200 transition-colors duration-150 select-none'>
              Download PDF
            </a>
          </Link>
        </div>
      </nav>

      <div className='ml-16 md:ml-32 lg:ml-48'>
        <h1 className='mt-20 text-5xl font-medium tracking-wider'>
          LÊ PHÚC MINH QUÂN
        </h1>
        <p className='text-xl my-2 text-slate-600'>
          Ho Chi Minh City - 0907313995 - minhquanle312@gmail.com
        </p>
        <p className='text-xl my-5'>
          <a
            className='block text-xl text-blue-600 font-medium'
            href='https://minhquanle.vercel.app/'
          >
            My Portfolio
          </a>
        </p>
        <div className='flex flex-col md:flex-row gap-3 md:gap-40'>
          <a
            className='block text-lg text-blue-600 font-medium'
            href='https://www.linkedin.com/in/l%C3%AA-ph%C3%BAc-minh-qu%C3%A2n-6795b316a/'
          >
            Linkedin
          </a>
          <a
            className='block text-lg text-blue-600 font-medium'
            href='https://github.com/minhquanle312'
          >
            Github
          </a>
        </div>

        <section className='my-20' id='about'>
          <h2 className='text-3xl font-medium mb-6'>ABOUT</h2>
          <p className='text-lg'>
            I have finished my internship and want to start my career at your
            company. I&apos;m willing to learn new technology to accomplish the
            requirements of the job.
          </p>
        </section>
        <section className='mb-20' id='experience'>
          <h2 className='text-3xl font-medium mb-6'>EXPERIENCE</h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex gap-6 tracking-wider ${
                index !== projects.length - 1 ? 'connected-line' : ''
              }`}
            >
              <Circle fill={index !== projects.length - 1} />
              <div>
                <h3 className='text-xl mb-3'>
                  <strong>{project.name}</strong>
                  {project.isPersonal ? ' - Personal Project' : ''}
                  {project.company ? ` - ${project.company}` : ''}
                </h3>
                <p className='text-lg mb-3'>{project.description}</p>
                {project.teamSize && (
                  <p className='text-lg mb-3'>
                    - Team size: {project.teamSize}
                  </p>
                )}
                {project.role && (
                  <p className='text-lg mb-3'>- Role: {project.role}</p>
                )}
                {project.demo && (
                  <p className='text-lg mb-3'>
                    <span className='font-medium'>Demo:</span>{' '}
                    <a href={project.demo}>{project.demo}</a>
                  </p>
                )}
                {project.source && (
                  <p className='text-lg mb-3'>
                    <span className='font-medium'>Github repository:</span>{' '}
                    <a href={project.source}>{project.source}</a>
                  </p>
                )}
                <p className='text-lg mb-10'>
                  <span className='font-medium'>Technologies:</span>{' '}
                  {project.technologyIcons.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className='mb-20' id='skill'>
          <h2 className='text-3xl font-medium mb-6'>SKILLS</h2>
          <p className='text-lg'>
            HTML, CSS, Javascript, SCSS, Tailwind, Bootstrap, ReactJS, NextJS,
            Redux
          </p>
        </section>
        <section className='mb-20' id='education'>
          <h2 className='text-3xl font-medium mb-6'>EDUCATION</h2>
          <div className='flex flex-col md:flex-row gap-5 text-xl justify-between pr-36'>
            <p>Academy Of Cryptography Techniques - Information Security </p>
            <p className='text-orange-600'>2018 - 2023</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default index

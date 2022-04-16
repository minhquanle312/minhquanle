import Image from 'next/image'
import React from 'react'

import styles from '../styles/Projects.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'

const projects = [
  {
    description: 'Normal calendar with simple UI, easy to use.',
    img: '/images/calendar.jpeg',
    feature: 'add and delete event, choose type of event, go to current day',
    technologyIcons: ['react', 'firebase', 'html', 'sass'],
    demo: 'https://calendar-web-ui.vercel.app/',
    source: 'https://github.com/minhquanle312/calendar-web-ui',
  },
  {
    description: 'Order food web app with global state management.',
    img: '/images/food-app.jpeg',
    feature: 'add and delete food from card',
    technologyIcons: ['react', 'html', 'sass'],
    demo: 'https://react-food-app-gold.vercel.app/',
    source: 'https://github.com/minhquanle312/react-food-app',
  },
  {
    description: 'Solve sudoku game with demo data input',
    img: '/images/sudoku.jpeg',
    feature: '',
    technologyIcons: ['html', 'css', 'javascript'],
    demo: 'https://minhquanle312.github.io/sudoku-solve/',
    source: 'https://github.com/minhquanle312/sudoku-solve',
  },
  {
    description:
      'Solve some basic cryptography with detail explanation in Vietnamese',
    img: '/images/cryptography.jpeg',
    feature: '',
    technologyIcons: ['html', 'css', 'javascript'],
    demo: 'https://minhquanle312.github.io/kma_crypto_basic/',
    source: 'https://github.com/minhquanle312/kma_crypto_basic',
  },
  {
    description: 'Static web use bootstrap',
    img: '/images/aurora.jpeg',
    feature: '',
    technologyIcons: ['html', 'css', 'bootstrap'],
    demo: 'https://aurora-grove.vercel.app/',
    source: 'https://github.com/minhquanle312/aurora_grove',
  },
]

const Projects = () => {
  const Project = ({
    image,
    description,
    feature,
    icons,
    demoURL,
    sourceURL,
  }) => {
    return (
      <div className='flex gap-10 py-10 px-20 h-[28rem] '>
        <div className='flex tilt-box-wrap'>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>

          <div className='tilt-box border-2 p-4 rounded-lg shadow-xl border-gray-200'>
            <Image
              alt={description}
              src={image}
              width={550}
              height={325}
              quality={100}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 text-lg'>
          <p>{description}</p>
          <p>{feature}</p>
          <div className='flex gap-4'>
            {icons.map(icon => (
              <div key={icon} className='flex items-center justify-center'>
                <svg className={`w-8 h-8 ${styles[icon]}`}>
                  <use xlinkHref={`defs.svg#icon-${icon}`}></use>
                </svg>
              </div>
            ))}
          </div>
          <div className='flex gap-8'>
            <Link href={demoURL} target='_blank'>
              <a className='btn-secondary' target='_blank'>
                Live Demo
              </a>
            </Link>
            <Link href={sourceURL} target='_blank'>
              <a className='btn-secondary' target='_blank'>
                Source Code
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='projects' className=' pt-12 pb-16 max-w-7xl mx-auto px-4'>
      <h2 className='text-center text-5xl mb-14'>Projects</h2>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {projects.map(project => (
          <SwiperSlide key={project.description}>
            <Project
              image={project.img}
              description={project.description}
              feature={project.feature}
              icons={project.technologyIcons}
              demoURL={project.demo}
              sourceURL={project.source}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projects

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from '../styles/AutoScrollSlider.module.css'
import { debounce } from '../utils'
import useResizeWidth from '../hooks/useResizeWidth.js'

const imageLink = [
  '/images/aurora.jpeg',
  '/images/cryptography.jpeg',
  '/images/food-app.jpeg',
  '/images/portfolio.jpeg',
  '/images/qrcode.png',
  '/images/sudoku.jpeg',
]

const imageLink2 = [
  '/images/portfolio-full.jpeg',
  '/images/portfolio-full.jpeg',
  '/images/portfolio-full.jpeg',
]

const AutoScrollSlider = ({ className }) => {
  const ImagesSlider = ({ imageList }) => {
    return imageList.map((image, index) => (
      <div key={`${image}-${index}`} className={styles.imageContainer}>
        <Image
          src={image}
          alt={image}
          height={50}
          width={100}
          layout='responsive'
          className={styles.image}
        />
      </div>
    ))
  }

  const { windowWidth } = useResizeWidth()

  return (
    <div
      className={`${
        windowWidth < 700 && 'hidden'
      } md:flex overflow-hidden place-items-center min-h-screen ${className}`}
    >
      <div className={styles.slider}>
        <div className={styles.sliderTrackReverse}>
          <ImagesSlider imageList={imageLink2} />
          <ImagesSlider imageList={imageLink2} />
        </div>
      </div>
      <div className={`${styles.slider} ${windowWidth < 1024 && 'hidden'}`}>
        <div className={styles.sliderTrack}>
          <ImagesSlider imageList={imageLink} />
          <ImagesSlider imageList={imageLink} />
        </div>
      </div>
    </div>
  )
}

export default AutoScrollSlider

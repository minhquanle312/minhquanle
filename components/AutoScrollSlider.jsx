import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from '../styles/AutoScrollSlider.module.css'
import { debounce } from '../utils'

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

  const [windowWidth, setWindowWidth] = useState(null)

  // * Link resize window in react: https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const debouncedHandleResize = debounce(function handleResize() {
        setWindowWidth(window.innerWidth)
      }, 50)

      window.addEventListener('resize', debouncedHandleResize)

      // NOTE: Cleanup function
      return _ => {
        window.removeEventListener('resize', debouncedHandleResize)
      }
    }
  })

  return (
    <div
      className={`${
        windowWidth < 640 && 'hidden'
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

import React, { useState } from 'react'

import styles from '../styles/Icon.module.css'

const Icon = ({
  className,
  width = 12,
  height = 12,
  iconName,
  color = false,
  popup = false,
}) => {
  const classes = `w-${width} h-${height} ${
    color ? styles[`${iconName}Color`] : styles[iconName]
  } hover:cursor-pointer transition-all duration-150 ${className}`

  const [showPopup, setShowPopup] = useState(false)

  const handleMouseEnter = () => {
    setShowPopup(true)
  }

  const handleMouseLeave = () => {
    setShowPopup(false)
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {popup && showPopup && (
        <div className='absolute -top-11 left-0 bg-orange-100 dark:text-slate-800 py-1 px-3 rounded-md shadow-sm text-center'>
          {iconName.toUpperCase()}
        </div>
      )}
      <svg className={classes}>
        <use xlinkHref={`defs.svg#icon-${iconName}`}></use>
      </svg>
    </div>
  )
}

export default Icon

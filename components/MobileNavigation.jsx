import React, { useState } from 'react'
import Icon from './Icon'

import styles from '../styles/MobileNavigaiton.module.css'

const MobileNavigation = ({ items }) => {
  const [show, setShow] = useState(false)

  const handleClickIcon = () => {
    setShow(!show)
  }
  return (
    <nav className='md:hidden fixed top-0 left-0 right-0 h-10 bg-white dark:bg-black z-20'>
      <Icon
        iconName='bar'
        width='10'
        height='10'
        className='p-2 select-none dark:fill-white'
        onClick={handleClickIcon}
      />
      <div
        className={`${styles.mobileNav} ${
          show ? styles.animated : ''
        } bg-white dark:bg-black`}
      >
        {items.map(item => (
          <a
            key={item.name}
            className={`block dark:text-slate-100 dark:hover:bg-slate-600 p-2 hover:bg-blue-300 cursor-pointer transition-colors duration-200`}
            href={item.section}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default MobileNavigation

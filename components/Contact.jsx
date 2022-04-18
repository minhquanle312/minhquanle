import React, { useRef } from 'react'

// import styles from '../styles/Contact.module.css'

import Link from 'next/link'
import Icon from './Icon'

const contactList = [
  {
    name: 'Address',
    icon: 'location',
    content: 'Ho Chi Minh City, Vietnam',
  },
  {
    name: 'Phone',
    icon: 'phone',
    content: '0907313995',
  },
  {
    name: 'Mail',
    icon: 'gmail',
    content: 'minhquanle312@gmail.com',
  },
]

const socialList = [
  {
    name: 'Github',
    icon: 'github',
    url: 'https://github.com/minhquanle312',
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://www.facebook.com/minhquan.le.9237/',
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/l%C3%AA-ph%C3%BAc-minh-qu%C3%A2n-6795b316a/',
  },
]

const Contact = () => {
  const renderContact = contactList.map(item => (
    <div key={item.name} className='flex gap-6 text-lg'>
      {/* <div>
        <svg className={`w-7 h-7 ${styles[item.icon]}`}>
          <use xlinkHref={`defs.svg#icon-${item.icon}`}></use>
        </svg>
      </div> */}
      <Icon iconName={item.icon} color width='7' height='7' />
      <p>{item.name}</p>
      <p className='text-gray-500'>{item.content}</p>
    </div>
  ))

  const renderSocial = (
    <div className='flex gap-10 mt-10'>
      {socialList.map(item => (
        <Link href={item.url} key={item.name}>
          <a target='_blank' rel='noreferrer'>
            {/* <svg
              className={`w-10 h-10 ${
                styles[item.icon]
              } hover:animate-pulse-fast hover:scale-110 transition-all duration-75`}
            >
              <use xlinkHref={`defs.svg#icon-${item.icon}`}></use>
            </svg> */}
            <Icon
              iconName={item.icon}
              className='hover:animate-pulse-fast hover:scale-110 transition-all duration-75'
              width='10'
              height='10'
              color
              popup
            />
          </a>
        </Link>
      ))}
    </div>
  )

  const formRef = useRef()

  const emailInputRef = useRef()
  const nameInputRef = useRef()
  const subjectInputRef = useRef()
  const messageInputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const emailValue = emailInputRef.current?.value
    const nameValue = nameInputRef.current?.value
    const subjectValue = subjectInputRef.current?.value
    const messageValue = messageInputRef.current?.value

    fetch('https://formsubmit.co/ajax/minhquanle312@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: emailValue,
        name: nameValue,
        subject: subjectValue,
        message: messageValue,
      }),
    }).then(response => response.json())

    formRef.current.reset()
  }

  return (
    <div id='contact' className='pb-28 pt-16 bg-blue-50'>
      <h2 className='text-center text-5xl mb-14'>Contact</h2>
      <div className='grid grid-cols-2 gap-3 max-w-7xl mx-auto px-20'>
        <div>
          <h2 className='text-center text-3xl mb-10'>Contact Information</h2>
          <div className='flex flex-col gap-3'>
            {renderContact}
            {renderSocial}
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-center text-3xl mb-10'>Mail to me</h2>
          <form ref={formRef} className='flex flex-col gap-3'>
            <input
              type='email'
              placeholder='Email'
              className='reset-input'
              required
              ref={emailInputRef}
            />
            <input
              type='text'
              placeholder='Name'
              className='reset-input'
              required
              ref={nameInputRef}
            />
            <input
              ref={subjectInputRef}
              type='text'
              placeholder='Subject'
              className='reset-input'
            />
            <textarea
              required
              type='text'
              placeholder='Message'
              maxLength='1000'
              className='reset-input min-h-[100px] max-h-96'
              ref={messageInputRef}
            />
            <button className='btn-primary self-start' onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

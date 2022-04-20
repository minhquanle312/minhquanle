import React from 'react'

const Circle = ({ fill, line }) => {
  return (
    <div
      className={`${
        fill ? 'bg-blue-500' : ''
      } w-3 h-3 mt-2 shrink-0 rounded-full border-[3px] border-blue-500`}
    ></div>
  )
}

export default Circle

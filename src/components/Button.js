import React from 'react'

const Button = ({text, link}) => {
  return (
    <>
      <button link="" className='bg-accentGreen hover:bg-accentGreenHover duration-200 text-white px-6 py-3 rounded-lg'>{text}</button>
    </>
  )
}

export default Button
import React from 'react'
import Button from './Button'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

const Banner = ({src, category, title, desc, button}) => {
  return (
    <>
      <div className={`mt-[120px] banner-height w-screen w-max-screen relative ${lexend.className}`}>
        <img src={src} className='h-full w-full top-0 left-0 z-0 absolute object-cover' />
        <div className='h-full w-full bg-black absolute opacity-50 z-10'></div>
        <div className='h-full w-full top-0 left-0 flex flex-col items-center justify-center z-20 absolute'>
          <h2 className='text-4xl font-bold text-white '>{category}</h2>
          <h1 className='w-[80%] text-center text-6xl font-bold text-primaryGreen '>{title}</h1>
          {desc && <p className='w-[60%] text-lightGreen text-center mt-3'>{desc}</p>}
          {button && <Button text={button.text} link={button.link}/>}
        </div>
      </div>
    </>
  )
}

export default Banner
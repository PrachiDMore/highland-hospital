import React from 'react'
import Button from './Button'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

const Banner = ({src, category, title, desc, button}) => {
  return (
    <>
      <div className={`mt-[80px] lg:mt-[120px] banner-height w-screen w-max-screen relative ${lexend.className}`}>
        <img src={src} className='h-full w-full top-0 left-0 z-0 absolute object-cover' />
        <div className='h-full w-full bg-black absolute opacity-50 z-10'></div>
        <div className='h-full w-full top-0 left-0 flex flex-col items-center justify-center z-20 absolute'>
          {category && <h2 className='lg:text-4xl text-2xl font-bold text-white '>{category}</h2>}
          <h1 className='lg:w-[80%] w-full text-center lg:text-6xl text-5xl font-bold text-primaryGreen '>{title}</h1>
          {desc && <p className='lg:w-[60%] w-full lg:text-base text-sm text-lightGreen text-center mt-3'>{desc}</p>}
          {button && <Button type={button.type} text={button.text} link={button.link} onClick={button.onClick} className={"mt-3"}/>}
        </div>
      </div>
    </>
  )
}

export default Banner
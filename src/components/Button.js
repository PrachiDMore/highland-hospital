import React from 'react'
import { Lexend } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const lexend = Lexend({ subsets: ['latin'] })

const Button = ({ text, type, link, className }) => {
  return (
    <>
      <button type={type} link="" className={twMerge(`bg-accentGreen hover:bg-accentGreenHover duration-200 text-white px-6 py-3 rounded-lg ${lexend.className} `, className)}>{text}</button>
    </>
  )
}

export default Button
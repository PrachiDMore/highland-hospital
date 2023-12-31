import Link from 'next/link'
import React from 'react'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

const Dropdown = ({ className, items }) => {
  return (
    <>
      <div className={`${lexend.className}`}>
        <div className={'rounded-xl rounded-tl-none grid grid-cols-1 gap-2 min-w-[300px] lg:shadow-lg p-3 bg-white ' + className}>
          {items?.map((obj, index) => {
            return <Link key={index + obj.link} className='lg:text-left text-center font-semibold hover:text-darkGreen duration-200' href={obj.link}>{obj.title}</Link>
          })}
        </div>
      </div>
    </>
  )
}

export default Dropdown
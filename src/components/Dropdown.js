import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Dropdown = ({ className, items }) => {
  return (
    <>
      <div className={`${poppins.className}`}>
        <div className={'rounded-xl rounded-tl-none grid grid-cols-1 gap-2 min-w-[300px] shadow-lg p-3 bg-light ' + className}>
          {items?.map((obj) => {
            return <Link className='hover:text-darkGreen duration-200' href={obj.link}>{obj.title}</Link>
          })}
        </div>
      </div>
    </>
  )
}

export default Dropdown
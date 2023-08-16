import React from 'react'
import { Lexend, Poppins } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Card = ({title, desc, src}) => {
  return (
    <>
    <div className='bg-white card-shadow rounded-lg w-full h-auto p-4'>
      <img src={src}/>
      <h1 className={`mt-2 text-xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>
      <p className={`mt-1 ${poppins.className}`}>{desc}</p>
    </div>
    </>
  )
}

export default Card
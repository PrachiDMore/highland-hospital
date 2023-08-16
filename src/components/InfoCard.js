import React from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const InfoCard = ({ title, desc, read }) => {
  return (
    <>
      <div className='bg-white p-5 rounded-lg card-shadow'>
        <h1 className={`text-lg font-bold text-darkBlue ${lexend.className}`}>{title}</h1>
        <p className={`mt-1 ${poppins.className}`}>{desc}</p>
        <Link href={read} className={`text-primaryGreen ${poppins.className}`}>Read More</Link>
      </div>
    </>
  )
}

export default InfoCard
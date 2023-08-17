import React from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const InfoCard = ({ title, desc, read }) => {
  return (
    <>
      <div className='bg-white p-5 rounded-xl card-shadow'>
        <h1 className={`leading-6	 text-xl font-semibold text-darkBlue capitalize ${lexend.className}`} dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p className={`text-sm mt-2 font-medium text-gray-500 ${poppins.className}`}>{desc}</p>
        <Link href={read} className={`text-xs font-semibold text-primaryGreen ${poppins.className}`}>Read More</Link>
      </div>
    </>
  )
}

export default InfoCard
import React, { useState } from 'react'
import { Lexend, Poppins } from 'next/font/google'
import ViewNews from './ViewNews'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Card = ({title, desc, src}) => {

  const [viewModal, setViewModal] = useState(false)

  return (
    <>
    <div className='bg-white card-shadow rounded-lg w-full h-auto p-4'>
      <img src={src}/>
      <h1 className={`mt-2 text-lg font-bold text-darkBlue ${lexend.className}`}>{title}</h1>
      <p className={`mt-1 text-sm ${poppins.className}`}>{desc}</p>
      <button onClick={() => {setViewModal(true)}} className={`text-sm mt-1 font-semibold text-primaryGreen ${poppins.className}`}>Read More</button>
    </div>
    <ViewNews viewModal={viewModal} setViewModal={setViewModal}/>
    </>
  )
}

export default Card
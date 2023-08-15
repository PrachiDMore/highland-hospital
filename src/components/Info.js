import React from 'react'
import { Lexend, Poppins } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Info = ({ src, category, title, paras, name }) => {
  return (
    <>
      <div className={category === "Specialities" ? 'bg-light h-auto w-screen w-max-screen flex flex-row-reverse justify-end items-start gap-14 px-28 py-20':'bg-light h-auto w-screen w-max-screen flex justify-center items-start gap-14 px-28 py-20' }>
        <div className='w-2/5 flex flex-col items-center '>
          <img src={src} className='h-full w-full' />
          {name && <h2 className={`text-3xl mt-3 font-bold text-primaryGreen ${lexend.className}`} >{name}</h2>}
        </div>
        <div className='w-3/5'>
          {category && <h2 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`} >{category}</h2>}
          <h1 className={`text-4xl font-bold text-darkGreen ${lexend.className}`}>{title}</h1>
          {
            paras?.map((info) => {
              return <p className={`mt-3 ${poppins.className}`}>{info}</p>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Info
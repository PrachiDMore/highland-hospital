import React from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Button from './Button'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Info = ({ src, category, title, paras, name, button, component, isImage=true }) => {
  

  return (
    <>
      <div className={category === "Specialities" || category === "other" ? 'bg-light h-auto w-screen w-max-screen flex lg:flex-row-reverse flex-col justify-end items-start gap-14 lg:px-28 px-5 py-20':'bg-light h-auto w-screen w-max-screen flex lg:flex-row flex-col justify-center items-start gap-14 lg:px-28 px-5 py-20' }>
        <div className='lg:w-2/5 w-full flex flex-col items-center '>
          {isImage=true}
          {isImage && <img src={src} className='h-full w-full' />}
          {!isImage && src}
          {name && <h2 className={`text-3xl mt-3 font-bold text-primaryGreen ${lexend.className}`} >{name}</h2>}
        </div>
        <div className='lg:w-3/5 w-full'>
          {category && category !== "other" && <h2 className={`text-xl font-bold text-primaryGreen ${lexend.className}`} >{category}</h2>}
          <h1 className={`lg:text-5xl text-4xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>
          {
            paras?.map((info) => {
              return <p className={`lg:text-base text-sm mt-3 ${poppins.className}`}>{info}</p>
            })
          }
          {component}
          {button && <Button text={button.text} link={button.link} className={"mt-5"}/>}
        </div>
      </div>
    </>
  )
}

export default Info
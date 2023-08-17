import React from 'react'
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi"
import { AiOutlineGoogle } from "react-icons/ai"
import { Lexend, Poppins } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const TeamCard = () => {
  return (
    <>
      <div className='w-60 h-[270px] m-auto'>
        <div className='flex gap-2 items-start h-[200px]'>
          <img className='h-full aspect-square' src="/assets/home/team1.png" alt="" />
          <div className='h-full flex flex-col items-center gap-3'>
            <div className='h-[45%] flex flex-col justify-between text-gray-400 text-xl'>
              <BiLogoInstagramAlt />
              <BiLogoYoutube />
              <AiOutlineGoogle />
            </div>
            <div className='w-[2px] h-[55%] bg-slate-400'></div>
          </div>
        </div>
        <div className=''>
          <h1 className={`font-bold text-lg mt-2 text-darkBlue ${lexend.className}`}>Thressa Webb</h1>
          <p className={`text-gray-500 text-sm ${poppins.className}`}>Dental Surgery</p>
        </div>
      </div>
    </>
  )
}

export default TeamCard
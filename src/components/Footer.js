import React from 'react'
import Button from './Button'
import { Lexend, Poppins } from 'next/font/google'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Footer = () => {
  return (
    <>
      <div className={`bg-white w-screen max-w-screen h-max flex flex-col footer-shadow lg:px-20 px-5 py-5 z-[1000] relative  ${lexend.className}`}>
        <div className='w-full flex lg:flex-row flex-col gap-8 justify-between py-3 pb-8 border-b border-grey-300 text-darkBlue text-sm'>
          <div className='lg:w-[35vw] w-full '>
            <img src='/assets/logo.png' />
            <p className='w-4/5'>"Your health, our commitment - Together, we make a difference."</p>
          </div>

          <div className='lg:w-[20vw] flex flex-col gap-3 w-full '>
            <h1 className='text-base font-medium '>Useful Links</h1>
            <ul className='flex flex-col gap-2'>
              <li>Services</li>
              <li>Make Appointment</li>
              <li>Gallery</li>
              <li>Event</li>
            </ul>
          </div>

          <div className='lg:w-[35vw] flex flex-col gap-3 w-full '>
            <h1 className='text-base font-medium '>Contact</h1>
            <div className='flex flex-col gap-2 text-sm'>
              <div className='flex items-start gap-2'>
                <HiOutlineLocationMarker className='text-4xl'/>
                <p>Mother Theresa Road, Kankanady, Highland Hospitals, Mangaluru, Karnataka 575002, India.</p>
              </div>

              <div className='flex items-center gap-2'>
                <FiMail />
                <p>reachus@highlandhospital.in</p>
              </div>

              <div className='flex items-center gap-2'>
                <BiPhoneCall />
                <p>0824-4235555</p>
              </div>
            </div>
          </div>

          <div className='lg:w-[40vw] flex flex-col gap-3 w-full'>
            <h1 className='text-base font-medium '>Newsletter</h1>
            <p>Subscribe to our newsletter and stay up to data.</p>
            <input className='bg-primaryGreen rounded-lg text-white px-6 py-3 placeholder:text-slate-200 outline-none' type='email' placeholder='Email Address' />
            <Button text={"Subscribe"} />
          </div>
        </div>

        <div className='w-full flex justify-between items-center py-3'>
          <p className='text-sm text-darkBlue'>&copy; 2022 Highland Hospitals. All Rights Reserved</p>
          <div className='flex gap-6 '>
            <FaFacebookF />
            <FiInstagram />
            <BsTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
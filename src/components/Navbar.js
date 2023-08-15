import React from 'react'
import Button from './Button'
import { Lexend } from 'next/font/google'
import Link from 'next/link'

const lexend = Lexend({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <>
      <div className={`z-[1000] bg-white fixed top-0 left-0 flex justify-between items-center w-screen max-w-screen h-[120px] py-4 px-20 nav-shadow  text-navHover ${lexend.className}`}>
        <div className='w-[15vw]'>
          <img src='/assets/logo.png' />
        </div>
        <ul className='w-[70vw] items-center justify-between flex'>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Specialities</Link>
          <Link href={"/"}>Careers</Link>
          <Link href={"/contact-us"}>Contact</Link>
          <Link href={"/"}>News</Link>
          <Link href={"/nursing"}>Nursing</Link>
          <Button text={"Book Appointment"} />
        </ul>
      </div>
    </>
  )
}

export default Navbar
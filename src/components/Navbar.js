import React, { useState } from 'react'
import Button from './Button'
import { Lexend } from 'next/font/google'
import Link from 'next/link'
import Dropdown from './Dropdown'
import { GrClose } from 'react-icons/gr'
import { FaBars } from 'react-icons/fa6'

const lexend = Lexend({ subsets: ['latin'] })

const Navbar = () => {

  const [navState, setNavState] = useState("")
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={`flex z-[5000] bg-white fixed top-0 left-0 justify-between items-center flex-row w-screen max-w-screen lg:h-[120px] h-auto lg:py-4 py-2 lg:px-20 px-5 nav-shadow  text-navHover ${lexend.className}`}>
        <div className='w-screen lg:hidden flex justify-between items-center '>
          <div className='lg:w-[15vw] w-[30%]'>
            <img src='/assets/logo.png' />
          </div>
          <div className='lg:hidden block'>
            <FaBars onClick={() => {setOpen(true)}}/>
          </div>
        </div>
        <div className='hidden lg:w-[15vw] m-auto lg:m-0 w-[30%]'>
          <img src='/assets/logo.png' />
        </div>
        <div className='hidden lg:w-[15vw] w-[30%]'>
          <FaBars />
        </div>
        <ul className='w-[70vw] items-center justify-between lg:flex hidden'>
          <Link href={"/"}>Home</Link>
          <div className='relative'>
            <li onClick={() => { setNavState("about") }} className=''>About Us</li>
            <div className={navState == "about" ? "block" : "hidden"}>
              <Dropdown className={'absolute z-[5000] top-[80px]'} items={[
                { title: "About Us", link: "/about/about-us" },
                { title: "Chairman's Message", link: "/about/chairman" },
                { title: "Medical Director's Message", link: "/about/director" },
                { title: "CEO's Message", link: "/about/ceo" }
              ]} />
            </div>
          </div>
          <div className='relative'>
            <li onClick={() => { setNavState("services") }}>Services</li>
            <div className={navState == "services" ? "block" : "hidden"}>
              <Dropdown className={"absolute z-[5000] top-[80px]"} items={[
                { title: "Emergency 24-hour services", link: "/services/emergency-services" },
                { title: "Surgical and Medical ICU", link: "/services/surgical-and-medical-icu" },
                { title: "Laboratory", link: "/services/laboratory" },
                { title: "Radiology", link: "/services/radiology" },
                { title: "Dialysis", link: "/services/dialysis" },
                { title: "Physiotherapy", link: "/services/physiotherapy" },
                { title: "Advanced Life Support Ambulance", link: "/services/advanced-ambulance" },
                { title: "General & Laparoscopic Surgery", link: "/services/laparoscopic-surgery" },
                { title: "Endoscopy", link: "/services/endoscopy" },
              ]} />
            </div>
          </div>
          <div className='relative'>
            <li onClick={() => { setNavState("specialities") }}>Specialities</li>
            <div className={navState == "specialities" ? "block" : "hidden"}>
              <Dropdown className={"absolute z-[5000] top-[80px]"} items={[
                { title: "General Medicine", link: "/specialities/general-medicine" },
                { title: "General Surgery", link: "/specialities/general-surgery" },
                { title: "Total Knee & Hip Replacement", link: "/specialities/knee-replacement" },
                { title: "Arthroscopy & Sports Medicine", link: "/specialities/arthroscopy-medicine" },
                { title: "Pediatric & Pediatric Surgery", link: "/specialities/pediatric" },
                { title: "Nephrology", link: "/specialities/nephrology" },
                { title: "Gastroenterology", link: "/specialities/gastroenterology" },
                { title: "Ophthalmology", link: "/specialities/ophthalmology" },
                { title: "ENT Micro Surgery", link: "/specialities/micro-surgery" },
                { title: "Neurology", link: "/specialities/neurology" },
                { title: "Plastic & Reconstructive Surgery", link: "/specialities/plastic-surgery" },
                { title: "Maxillofacial Surgery", link: "/specialities/maxillofacial-surgery" },
                { title: "Microvascular Surgery", link: "/specialities/microvascular-surgery" },
                { title: "Endocrinology", link: "/specialities/endocrinology" },
                { title: "Urology & Andrology", link: "/specialities/urology" }
              ]} />
            </div>
          </div>
          <Link href={"/careers"}>Careers</Link>
          <Link href={"/contact-us"}>Contact</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/nursing"}>Nursing</Link>
          <Button text={"Book Appointment"} />
        </ul>
      </div>

      <div className={open ? 'z-[5000] bg-white w-screen fixed top-0 left-0 h-screen py-6 duration-300' : 'duration-300 left-full z-[5000] bg-white w-screen fixed top-0 h-screen py-6'}>
        <span className='w-full flex justify-end px-5' onClick={() => {
          setOpen(false)
        }}><GrClose/></span>
        <ul className='flex flex-col gap-5 items-center mt-5'>
          <Link href={"/"}>Home</Link>
          <li onClick={() => { setNavState("about") }} className=''>About Us</li>
          <div className={navState == "about" ? "block" : "hidden"}>
            <Dropdown className={'z-[5000] top-[80px]'} items={[
              { title: "About Us", link: "/about/about-us" },
              { title: "Chairman's Message", link: "/about/chairman" },
              { title: "Medical Director's Message", link: "/about/director" },
              { title: "CEO's Message", link: "/about/ceo" }
            ]} />
          </div>
          <li onClick={() => { setNavState("services") }}>Services</li>
          <div className={navState == "services" ? "block" : "hidden"}>
            <Dropdown className={"z-[5000] top-[80px]"} items={[
              { title: "Emergency 24-hour services", link: "/services/emergency-services" },
              { title: "Surgical and Medical ICU", link: "/services/surgical-and-medical-icu" },
              { title: "Laboratory", link: "/services/laboratory" },
              { title: "Radiology", link: "/services/radiology" },
              { title: "Dialysis", link: "/services/dialysis" },
              { title: "Physiotherapy", link: "/services/physiotherapy" },
              { title: "Advanced Life Support Ambulance", link: "/services/advanced-ambulance" },
              { title: "General & Laparoscopic Surgery", link: "/services/laparoscopic-surgery" },
              { title: "Endoscopy", link: "/services/endoscopy" },
            ]} />
          </div>
          <li onClick={() => { setNavState("specialities") }}>Specialities</li>
          <div className={navState == "specialities" ? "block" : "hidden"}>
            <Dropdown className={"z-[5000] top-[80px]"} items={[
              { title: "General Medicine", link: "/specialities/general-medicine" },
              { title: "General Surgery", link: "/specialities/general-surgery" },
              { title: "Total Knee & Hip Replacement", link: "/specialities/knee-replacement" },
              { title: "Arthroscopy & Sports Medicine", link: "/specialities/arthroscopy-medicine" },
              { title: "Pediatric & Pediatric Surgery", link: "/specialities/pediatric" },
              { title: "Nephrology", link: "/specialities/nephrology" },
              { title: "Gastroenterology", link: "/specialities/gastroenterology" },
              { title: "Ophthalmology", link: "/specialities/ophthalmology" },
              { title: "ENT Micro Surgery", link: "/specialities/micro-surgery" },
              { title: "Neurology", link: "/specialities/neurology" },
              { title: "Plastic & Reconstructive Surgery", link: "/specialities/plastic-surgery" },
              { title: "Maxillofacial Surgery", link: "/specialities/maxillofacial-surgery" },
              { title: "Microvascular Surgery", link: "/specialities/microvascular-surgery" },
              { title: "Endocrinology", link: "/specialities/endocrinology" },
              { title: "Urology & Andrology", link: "/specialities/urology" }
            ]} />
          </div>
          <Link href={"/careers"}>Careers</Link>
          <Link href={"/contact-us"}>Contact</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/nursing"}>Nursing</Link>
          <Button text={"Book Appointment"} />
        </ul>
      </div>
    </>
  )
}

export default Navbar
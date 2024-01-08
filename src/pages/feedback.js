import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Button from '@/components/Button'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import axios from 'axios'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const feedback = () => {

  const initialState = {
    fullname: "",
    email: "",
    phonenumber: "",
    address: "",
    description: "",
    status: "pending",
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormState({
      ...formState, 
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios("https://highland-hospital-backend.vercel.app/post-feedback", {
      method: 'POST',
      data: {
        fullname: formState.fullname,
        email: formState.email,
        phonenumber: formState.phonenumber,
        address: formState.address,
        description: formState.description,
        timestamp: Date.now(),
        status: "pending",
      }
    })
    .then((res) => {
      if (!res.data.error){
        setFormState(initialState)
        alert("Response has been recorded!")
      } else {
        alert("Something went wrong!")
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Layout>
        <div className={`lg:px-28 px-5 lg:mt-[120px] mt-[80px] flex flex-col justify-center items-center w-screen w-max-screen py-10 bg-light ${poppins.className}`}>
          <div className='w-full flex items-center lg:flex-row flex-col'>
            <h1 className={`w-full text-center lg:text-6xl text-4xl font-bold text-primaryGreen ${lexend.className}`}>Feedback</h1>
          </div>

          <div className='lg:w-[80vw] w-full h-auto flex lg:flex-row flex-col p-4 mt-6 bg-white contact-shadow rounded-lg'>
            {/* left */}
            <div className='lg:w-2/5 w-full bg-darkGreen flex flex-col justify-between rounded-lg px-6 py-7 text-light'>
              <div className='flex flex-col gap-10'>
                <div>
                  <h1 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`}>We love to hear your Feedback</h1>
                  <p className='text-sm'>Give us your valuable feedback</p>
                </div>

                <div className='flex flex-col gap-2 text-sm'>
                  <div className='flex items-center gap-2'>
                    <HiOutlineLocationMarker className='text-3xl' />
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

              <div className='flex gap-3 lg:mt-0 mt-4'>
                <FaFacebookF />
                <FiInstagram />
                <BsTwitter />
                <FaLinkedinIn />
              </div>
            </div>

            {/* right */}
            <form onSubmit={handleSubmit} className='lg:w-3/5 w-full lg:p-10 py-8 flex flex-col gap-3 items-center justify-center text-grey'>
              
                <div className=' w-full flex gap-1 flex-col'>
                  <label className='font-medium'>Full Name</label>
                  <input value={formState?.fullname} id='fullname' onChange={handleChange} type='text' className='border-b focus:border-b-2 border-grey outline-none focus:border-primaryGreen' />
                </div>
                {/* <div className='lg:w-1/2 w-full flex gap-1 flex-col'>
                  <label className='font-medium'>Last Name</label>
                  <input value={formState?.firstname} id='firstname' onChange={handleChange}  type='text' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
                </div> */}

              <div className='w-full flex lg:flex-row flex-col lg:gap-10 gap-3 justify-between'>
                <div className='lg:w-1/2 w-full flex gap-1 flex-col'>
                  <label className='peer-focus:text-primaryGreen font-medium'>Email</label>
                  <input value={formState?.email} id='email' onChange={handleChange}  type='email' className='peer border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
                </div>
                <div className='lg:w-1/2 w-full flex gap-1 flex-col'>
                  <label className='font-medium'>Phone Number</label>
                  <input value={formState?.phonenumber} id='phonenumber' onChange={handleChange}  type='number' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
                </div>
              </div>

              <div className='w-full flex gap-1 flex-col'>
                <label className='font-medium'>Address</label>
                <input value={formState?.address} id='address' onChange={handleChange}  type='text' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
              </div>

              <div className='w-full flex gap-1 flex-col'>
                <label className='font-medium'>Leave your feedback here</label>
                <textarea value={formState?.description} id='description' onChange={handleChange}  className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none lg:h-16 h-32 resize-none' />
              </div>

              <Button type={"submit"} text={"Submit"} className={"text-sm mt-3"} />
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default feedback
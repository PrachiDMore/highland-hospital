import React, { useState } from 'react'
import Button from './Button'
import axios from 'axios'

const FormModal = ({ showForm, setShowForm }) => {
  const initialState = {
    fullname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
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
    axios("https://highland-hospital-backend.vercel.app/post-nursing-contact", {
      method: "POST",
      data: {
        fullname: formState.fullname,
        email: formState.email,
        phonenumber: formState.phonenumber,
        subject: formState.subject,
        message: formState.message,
        status: "pending",
        timestamp: Date.now()
      }
    })
      .then((res) => {
        if (!res.data.error) {
          setFormState(initialState)
          alert("Your response has been recorded!")
        } else {
          console.log(res.data.message)
          alert("Something went wrong!")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div>
        <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className={showForm ? "fixed top-0 left-0 right-0 z-[5000] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex justify-center items-center max-h-full opacity-100 bg-black/50" : "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full opacity-0 bg-black/50 pointer-events-none"}>
          <div className="relative w-full max-w-3xl max-h-full">

            <form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow ">

              <div className="flex items-center justify-between p-6 pb-3 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Enquire Now
                </h3>
                <button onClick={() => { setShowForm(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center " data-modal-hide="staticModal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 flex flex-col justify-center gap-3">
                <div className='flex flex-col gap-1 '>
                  <label className='font-medium'>Full Name</label>
                  <input onChange={handleChange} value={formState.fullname} id='fullname' type='text' className='border-b focus:border-b-2 border-grey outline-none focus:border-primaryGreen' />
                </div>

                <div className='flex w-full gap-3'>
                  <div className='flex flex-col gap-1 w-full'>
                    <label className='font-medium'>Email</label>
                    <input onChange={handleChange} value={formState.email} id='email' type='text' className='border-b focus:border-b-2 border-grey outline-none focus:border-primaryGreen' />
                  </div>
                  <div className='flex flex-col gap-1 w-full'>
                    <label className='font-medium'>Phone Number</label>
                    <input onChange={handleChange} value={formState.phonenumber} id='phonenumber' type='text' className='border-b focus:border-b-2 border-grey outline-none focus:border-primaryGreen' />
                  </div>
                </div>

                <div className='flex flex-col gap-1 '>
                  <label className='font-medium'>Message</label>
                  <textarea onChange={handleChange} value={formState.message} id='message' type='text' className='border-b focus:border-b-2 h-24 resize-none border-grey outline-none focus:border-primaryGreen' />
                </div>
              </div>

              <div className="flex items-center justify-center p-6 pt-3 border-t border-gray-200 rounded-b ">
                <Button type={"submit"} text={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModal

import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { Lexend, Poppins } from 'next/font/google'
import Button from '@/components/Button'
import CareerFormModal from '@/components/CareerFormModal'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const careers = () => {
  const [showCareerForm, setShowCareerForm] = useState(false)

  return (
    <>
      <Layout>
        <Banner src={"/assets/careers.png"} desc={"There is no better time to become one of us."} title={"Careers"} />

        <div className={`bg-light w-screen h-auto lg:px-28 px-5 py-12 flex justify-center items-center ${lexend.className}`}>
          <div class="lg:w-[70vw] w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left  dark:text-gray-400">
              <thead class="text-center text-white bg-darkGreen">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    Sr No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Designation
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Apply Here
                  </th>
                </tr>
              </thead>
              <tbody className='text-center text-darkGreen'>
                <tr class="bg-white ">
                  <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                    01
                  </td>
                  <td class="px-6 py-4">
                  Associate System Administrator <br />Experience (0-2 Years)
                  </td>
                  <td class="px-6 py-4">
                  Mangalore
                  </td>
                  <td class="px-6 py-4">
                    <Button text={"Apply"} onClick={() => {setShowCareerForm(true)}} className={"text-sm px-4 py-2"}/>
                  </td>
                </tr>
                <tr class="bg-light ">
                  <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                    02
                  </td>
                  <td class="px-6 py-4">
                  Administrator
                  </td>
                  <td class="px-6 py-4">
                  Mangalore
                  </td>
                  <td class="px-6 py-4">
                    <Button text={"Apply"} onClick={() => {setShowCareerForm(true)}} className={"text-sm px-4 py-2"}/>
                  </td>
                </tr>
                <tr class="bg-white ">
                  <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                    03
                  </td>
                  <td class="px-6 py-4">
                  Administrator
                  </td>
                  <td class="px-6 py-4">
                  Mangalore
                  </td>
                  <td class="px-6 py-4">
                    <Button text={"Apply"} onClick={() => {setShowCareerForm(true)}} className={"text-sm px-4 py-2"}/>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
      <CareerFormModal setShowCareerForm={setShowCareerForm} showCareerForm={showCareerForm}/>
    </>
  )
}

export default careers
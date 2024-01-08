import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import { Lexend, Poppins } from 'next/font/google'
import List from '@/components/List'
import FormModal from '@/components/FormModal'
import axios from 'axios'
import Card from '@/components/Card'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Nursing = () => {
  const [showForm, setShowForm] = useState(false)
  const handleClick = () => {
    setShowForm(true)
  }
  useEffect(() => {
    axios("https://highland-hospital-backend.vercel.app/get-news", {
      method: "GET"
    })
      .then((res) => {
        setNews(res.data.response)
      })
  }, [])
  const [news, setNews] = useState([])
  return (
    <>
      <Layout>
        <div className='h-auto w-screen flex flex-col'>
          <Banner src={"/assets/nursing/main.png"} title={"Welcome To Mangalore College of Nursing"} button={{ text: "Enquire Now", onClick: handleClick }} />

          <Info category={"other"} title={"About Us"} src={"/assets/nursing/info.png"} paras={["As the healthcare landscape continues to evolve and grow at a fast pace, the role and need for a workforce of highly educated nurses is becoming even more critical. Hence we decided to expand our service into the field of health education. This will cater to the increasing need of competent and sincere health service providers that our society lacks."]} />

          <div className={`w-full lg:px-28 px-5 pb-10 flex flex-col gap-2 bg-light ${poppins.className}`}>
            <p >From the academic year 2019-20, Highland Hospital has taken over the administration of "Mangalore College of Nursing" and "Mangalore Institute of Nursing Sciences", which has been running since 1998 under the 'Ullal Charitable Education Trust'. We have shifted the college to a new campus in Ullal and the clinical posting of the students will be at our hospital. The 21st batch of Nursing students have joined the college in the academic year 2019-20; under the new management.</p>

            <div>
              <h1 className='font-bold text-xl'>The college is providing the following courses</h1>
              <List className={"px-6 font-bold"} list={[
                "B.Sc. Nursing",
                "Post Basic B.Sc. Nursing",
                "GNM"
              ]} />
            </div>

            <div className='mt-4'>
              <h1 className='font-bold text-xl'>Affiliation</h1>
              <p className='mt-2'>The College is affiliated to Rajiv Gandhi University of Health Sciences, Bangalore and is also recognized by the Indian Nursing Council [INC], New Delhi and Karnataka State Nursing Council, Bangalore.</p>
            </div>

            <div className='mt-4'>
              <h1 className='font-bold text-xl'>Values</h1>
              <p className='mt-2'>Mangalore College of Nursing endeavors to instill the five C's of caring: commitment, conscience, competence, compassion, and confidence in its students and implanting in them the values of patient-centered care, while training them to develop a compassionate approach to care, and also enhancing their chances at career advancement.</p>
              <p className='mt-3'>From academic year 2020-21 onwards, we are establishing the new 'Mangalore College of Allied Health Sciences' for paramedical courses. All these courses have immense job opportunities across the globe.</p>
              <p className='mt-3'>Our aim is to offer Compassionate Health Education through Trust, Quality and Care.</p>
            </div>

            <h1 className='font-bold text-xl'>For Admission Contact- 6366105555</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-screen w-max-screen lg:px-28 px-5 py-10 bg-light'>
          <h1 className={`text-4xl font-bold text-darkBlue ${lexend.className}`}>Latest News and Update</h1>
          <p className={`mt-1 ${poppins.className}`}>The followings are the latest news and updates about Highland Hospital Family</p>

          <div className='w-full mt-6 grid lg:grid-cols-3 grid-cols-1 gap-8'>
            {
              news?.filter((e) => {
                return e.nursingNews
              })?.map((value, index) => {
                return <Card key={index} src={value?.image} title={value?.title} desc={value?.description} />
              })
            }
          </div>
        </div>
      </Layout>
      <FormModal setShowForm={setShowForm} showForm={showForm} />
    </>
  )
}

export default Nursing
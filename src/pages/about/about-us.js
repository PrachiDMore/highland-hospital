import Banner from '@/components/Banner'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import React from 'react'
import { Lexend, Poppins } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })


const CustomList = <div className={`mt-5 ${lexend.className}`}>
  <div className='mt-2'>
    <h1 className='font-semibold text-lg '>1. Advanced Medical Facilities</h1>
    <p className={`ml-8 ${poppins.className}`}>Cutting-edge medical facilities for accurate diagnoses and effective treatments.</p>
  </div>
  <div className='mt-2'>
    <h1 className='font-semibold text-lg '>2. Expert Multidisciplinary Team</h1>
    <p className={`ml-8 ${poppins.className}`}>Our hospital's team of professionals aim at providing you top-quality care and personalized treatment plans.</p>
  </div>
  <div className='mt-2'>
    <h1 className='font-semibold text-lg '>3. Comprehensive Healthcare Services</h1>
    <p className={`ml-8 ${poppins.className}`}>Our Comprehensive healthcare services with specialized departments, ensure holistic care for patients of all ages.</p>
  </div>
</div>
const aboutUs = () => {
  return (
    <>
    <Layout>
        <Banner title={"About Us"} src={"/assets/about-us/main.png"} />

        <Info title={"About Us"} isImage={true} src={"/assets/about-us/Group.png"} paras={["Highland Hospital is a premier healthcare institution dedicated to delivering exceptional medical services. With a focus on patient-centered care, our experienced team of professionals provides comprehensive treatments, advanced technology, and compassionate support. We are committed to promoting well-being and improving lives through our commitment to excellence in healthcare."]} component={CustomList} button={{ text: "Join Now", link: "asd" }}/>

        <div className='w-full px-28 pb-10 bg-light grid grid-cols-1 gap-10'>
          <div className='w-full flex justify-center items-start gap-24'>
            <div className='w-[50%] bg-white p-4 rounded-lg card-shadow'>
              <h1 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`}>Our Vision</h1>
              <p className={`mt-3 ${poppins.className}`}>To constantly strive to promote and advance the health and wellbeing of our patients through excellence and accountability in patient care. To be recognized as a top-quality healthcare provider focused on delivering healthcare with a holistic approach which includes preventive, curative and rehabilitative care.</p>
            </div>
            <div className='w-[50%]'>
              <img src='/assets/about-us/vision.png'/>
            </div>
          </div>

          <div className='w-full flex justify-center items-start gap-24'>
            <div className='w-[50%]'>
              <img src='/assets/about-us/mission.png'/>
            </div>
            <div className='w-[50%] bg-white p-4 rounded-lg card-shadow'>
              <h1 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`}>Our Vision</h1>
              <p className={`mt-3 ${poppins.className}`}>To deliver superior quality health care with a human touch, in a caring, compassionate and hygienic environment. To serve and enhance the quality of health of ailing patients through the effective deployment of medical expertise and technology, combined with a focus on affordability, accessibility and availability.</p>
            </div>
          </div>

          <div className='w-full flex justify-center items-start gap-24'>
            <div className='w-[50%] bg-white p-4 rounded-lg card-shadow'>
              <h1 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`}>Our Values</h1>
              <p className={`mt-3 ${poppins.className}`}>Quality without compromise; Competence with compassion; Care with concern; Cost effective medical treatment with consistency and continuous improvement in skills, services and technology.</p>
            </div>
            <div className='w-[50%]'>
              <img src='/assets/about-us/values.png'/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default aboutUs
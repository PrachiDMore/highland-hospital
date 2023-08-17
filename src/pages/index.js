import Layout from '@/components/Layout'
import Button from '@/components/Button'
import { Lexend, Poppins } from 'next/font/google'
import List from '@/components/List'
import InfoCard from '@/components/InfoCard'
import FeedbackCard from '@/components/FeedbackCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TeamCard from '@/components/TeamCard'


const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        {/* hero section */}
        <div className='w-screen max-w-screen banner-height flex mt-[120px] '>
          <div className='w-1/2 h-full bg-lightBlue px-32 flex flex-col justify-center'>
            <h1 className={`text-6xl font-bold text-darkBlue ${lexend.className}`}><span className='text-primaryGreen'>Caring</span> for You, Every Step of the Way</h1>
            <p className={`text-gray-600 mt-4 ${poppins.className} font-medium`}>Compassionate medical professionals providing comprehensive care and support from diagnosis to recovery.</p>
            <p className={`text-gray-600 mt-3 font-bold ${poppins.className}`}>Book your Appointment Now !</p>
            <Button text={'Make Appointment'} className={"mt-4 w-max text-sm font-semibold "} />
          </div>
          <div className='w-1/2 h-full bg-lightBlue2 flex justify-center items-center relative'>
            <img className='h-[85%]' src='/assets/home/hero1.png' />
            <img className='h-[40%] absolute left-16 bottom-5' src='/assets/home/hero2.png' />
          </div>
        </div>

        {/* section 2 About us */}
        <div className='w-screen max-w-screen banner-height flex items-center'>
          <div className='w-1/2 h-full relative'>
            <img className='h-[70%] w-[75%] absolute top-24 left-36 z-[2000]' src='/assets/home/section2.png' />
            <img className='h-[85%] absolute top-12 left-24 z-[1000]' src='/assets/home/Vector1.png' />
          </div>
          <div className='w-1/2 h-full px-10 flex flex-col justify-center'>
            <h1 className={`text-xl font-semibold text-primaryGreen ${lexend.className}`}>About Us</h1>
            <h1 className={`text-5xl font-bold text-darkBlue ${lexend.className}`}>We care About your <br /> Health</h1>
            <p className={`mt-4 w-[90%] text-slate-500 ${poppins.className}`}>We have a highly qualified and dedicated team of medical and support staff. The Consultants in various departments are among the cream.</p>
            <List className={"bg-white px-0 font-bold text-darkBlue"} list={[
              "Qualified, dedicated team.",
              "Top specialists.",
              "Enhancing services, facilities.",
              "Curative, preventive healthcare.",
              'Motto: "Your health: Our care."'
            ]} />
          </div>
        </div>

        {/* section 3 Our services */}
        <div className='w-screen bg-light px-28 py-14'>
          <h1 className={`text-2xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Our Services</h1>
          <h1 className={`text-5xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>The best medicine is Prevention!</h1>
          <div className='w-full mt-6 grid grid-cols-3 gap-x-12 gap-y-8'>
            <InfoCard title={"EMERGENCY 24-HOUR <br/> SERVICES"} desc={"The Emergency department of our hospital is a state of the art unit comprising of highly skilled and efficient team of specialists, emergency doctors and well trained nursing and..."} read={"/services/emergency-services"} />

            <InfoCard title={"ADVANCED LIFE SUPPORT <br/> AMBULANCE"} desc={"Highland Hospital provides round-the-clock Advanced Life Support Ambulance services as an integral part of its Emergency Medicine department. Manned by trained medical..."} read={"/services/advanced-ambulance"} />

            <InfoCard title={"SURGICAL AND MEDICAL ICU"} desc={"Highland Hospital, Medical and Surgical Intensive Care Unit offers the most advanced treatments, multidisciplinary approach, sophisticated, seamless and comprehensive..."} read={"/services/surgical-and-medical-icu"} />

            <InfoCard title={"GENERAL & <br/> LAPAROSCOPIC SURGERY"} desc={"The General and Laparoscopic Surgery department at Highland Hospital is equipped with the latest technology and infrastructure, supported by an experienced team of..."} read={"/services/laparoscopic-surgery"} />

            <InfoCard title={"RADIOLOGY"} desc={"The department of Radiology at Highland Hospital is highly equipped with the latest technological advancements and exceptionally skilled staff, committed to providing accurate diagnosis and..."} read={"/services/radiology"} />

            <InfoCard title={"LABORATORY"} desc={"Highland Hospital is supported by an ultra-modern 24x7 Laboratory well equipped with state-of-the-art fully computerized equipment to ensure accuracy and reliability in clinical Pathology, Haematology, Biochemistry and..."} read={"/services/laboratory"} />

            <InfoCard title={"DIALYSIS"} desc={"An expert team of highly-qualified doctors and medical practitioners support the Dialysis unit at Highland Hospital, which is reputed for delivering high-quality routine nephrology services for evaluation of renal function in..."} read={"/services/dialysis"} />

            <InfoCard title={"PHYSIOTHERAPY"} desc={"Highland Hospital's Physiotherapy and Rehabilitation centre helps develop, maintain and restore maximum movement and functional ability throughout a patient's life, where movement and function are..."} read={"/services/physiotherapy"} />

            <InfoCard title={"ENDOSCOPY"} desc={"The department of Endoscopy at Highland Hospital treats various disorders of the Oesophagus, Stomach, Intestines, Liver, Gall Bladder and Pancreas. It also performs endoscopic procedures and therapeutic..."} read={"/services/endoscopy"} />
          </div>
        </div>

        {/* section 4 banner */}
        <div className='text-white relative h-[300px] w-screen' style={{
          backgroundImage: "url(/assets/banner-bg.jpg)"
        }}>
          <div className='absolute top-0  left-0 h-full w-full' >
            <img src="/assets/banner-bg.jpg" className='h-full w-full object-contain object-right-top' alt="" />
          </div>
          <div>
            <h4>EMERGENCY MEDICAL CARE</h4>
            <h1 className=''>24/7 <span className='text-accentGreenHover'>Ambulance </span>Services</h1>
          </div>
        </div>

        {/* section 5 our team */}
        <div className='w-full px-24 p-10'>
          <h1 className={`text-2xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Our Team</h1>
          <h1 className={`text-5xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>Our Certified doctors</h1>
          {/* <TeamCard/> */}
          <div className=' flex justify-between mt-7'>
            <Swiper
              grabCursor={true}
              loop={true}
              spaceBetween={30}
              slidesPerView={4}
              // modules={[Autoplay]}
              autoplay={{
                delay: 3000
              }}
              onActiveIndexChange={(swiper) => {
                console.log(swiper.classNames)
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><TeamCard /></SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* section 6 feedback */}
        <div className='w-full px-24 p-10 bg-light'>
          <h1 className={`text-2xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Testimonials</h1>
          <h1 className={`text-5xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>Let's See Our Patients <br /> Feedback</h1>
          <div className=' flex justify-between mt-7'>
            <Swiper
              grabCursor={true}
              loop={true}
              spaceBetween={30}
              slidesPerView={4}
              // modules={[Autoplay]}
              autoplay={{
                delay: 3000
              }}
              onActiveIndexChange={(swiper) => {
                console.log(swiper.classNames)
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
            </Swiper>
          </div>
          <div className='w-full flex justify-center items-center my-5 gap-6'>
            <p className={`text-gray-600 ${poppins.className} font-medium`}>Share your feedback and help us compose a better experience for you.</p>
            <Button text={"Give your Feedback"} className={"text-sm font-medium"}/>
          </div>
        </div>
      </Layout>
    </>
  )
}

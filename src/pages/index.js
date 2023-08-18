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
  const breakpoints = {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    648: {
      slidesPerView: 2,
    },  
    320: {
      slidesPerView: 1,
    },
  }
  return (
    <>
      <Layout>
        {/* hero section */}
        <div className='w-screen max-w-screen banner-height flex lg:flex-row flex-col-reverse lg:mt-[120px] mt-[300px] '>
          <div className='lg:mt-0 -mt-5 lg:w-1/2 w-full h-full bg-lightBlue lg:px-32 px-5 flex flex-col justify-center lg:py-0 py-8'>
            <h1 className={`lg:text-6xl text-4xl font-bold text-darkBlue ${lexend.className}`}><span className='text-primaryGreen'>Caring</span> for You, Every Step of the Way</h1>
            <p className={`text-gray-600 mt-4 ${poppins.className} font-medium`}>Compassionate medical professionals providing comprehensive care and support from diagnosis to recovery.</p>
            <p className={`text-gray-600 mt-3 font-bold ${poppins.className}`}>Book your Appointment Now !</p>
            <Button text={'Make Appointment'} className={"mt-4 w-max text-sm font-semibold "} />
          </div>
          <div className='lg:w-1/2 w-full h-full bg-lightBlue2 flex justify-center items-center relative'>
            <img className='lg:h-[85%] h-[60%]' src='/assets/home/hero1.png' />
            <img className='lg:h-[40%] h-[20%] absolute lg:left-16 left-8 lg:bottom-5 bottom-20' src='/assets/home/hero2.png' />
          </div>
        </div>

        {/* section 2 About us */}
        <div className='w-screen max-w-screen banner-height flex lg:flex-row flex-col items-center'>
          <div className='lg:block hidden w-1/2 h-full relative'>
            <img className='h-[70%] w-[75%] absolute top-24 left-36 z-[2000]' src='/assets/home/section2.png' />
            <img className='h-[85%] absolute top-12 left-24 z-[1000]' src='/assets/home/Vector1.png' />
          </div>
          <div className='lg:w-1/2 w-full h-full lg:px-10 px-5 flex flex-col justify-center'>
            <h1 className={`text-xl font-semibold text-primaryGreen ${lexend.className}`}>About Us</h1>
            <h1 className={`lg:text-5xl text-4xl font-bold text-darkBlue ${lexend.className}`}>We care About your <br className='lg:block hidden' /> Health</h1>
            <p className={`mt-4 lg:w-[90%] w-f text-slate-500 ${poppins.className}`}>We have a highly qualified and dedicated team of medical and support staff. The Consultants in various departments are among the cream.</p>
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
        <div className='w-screen bg-light lg:px-28 px-5 lg:py-14 py-8'>
          <h1 className={`text-xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Our Services</h1>
          <h1 className={`lg:text-5xl text-4xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>The best medicine is Prevention!</h1>
          <div className='w-full mt-6 grid lg:grid-cols-3 grid-cols-1 gap-x-12 lg:gap-y-8 gap-y-5'>
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
        <div className={'hidden lg:block text-white relative h-[300px] w-screen ' + lexend.className} style={{
          backgroundImage: "url(/assets/banner-bg.jpg)"
        }}>
          <div className='absolute top-0  left-0 h-full w-full' >
            <img src="/assets/banner-bg.jpg" className='h-full w-full object-contain object-right-top' alt="" />
          </div>
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <h2 className='text-2xl font-extralight tracking-widest'>EMERGENCY MEDICAL CARE</h2>
            <h1 className={'font-bold text-5xl mt-3 ' + poppins.className}>24/7 <span className='text-accentGreenHover'>Ambulance </span>Services</h1>
            <p className='text-center w-[35%] mt-2 text-sm font-light'>With access to 24 hours emergency assistance, it's also important you can continue to help others!</p>
            <Button className={"bg-white text-accentGreenHover py-2 font-semibold mt-3"} text={"Join Now"} />
          </div>
        </div>

        {/* section 5 our team */}
        <div className='w-full lg:px-24 lg:p-10 py-8 px-5'>
          <h1 className={`text-xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Our Team</h1>
          <h1 className={`lg:text-5xl text-4xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>Our Certified doctors</h1>
          {/* <TeamCard/> */}
          <div className='mt-7 w-full'>
            <Swiper
            className='m-auto'
              grabCursor={true}
              loop={true}
              breakpoints={breakpoints}
              spaceBetween={30}
              slidesPerView={4}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000
              }}
            >
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
              <SwiperSlide className='py-6'><TeamCard /></SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* section 6 feedback */}
        <div className='w-full lg:px-24 lg:p-10 py-8 px-5 bg-light'>
          <h1 className={`text-xl w-full text-center font-semibold text-primaryGreen ${lexend.className}`}>Testimonials</h1>
          <h1 className={`lg:text-5xl text-4xl w-full text-center font-bold text-darkBlue ${lexend.className}`}>Let's See Our Patients <br /> Feedback</h1>
          <div className=' flex justify-between mt-7 m-auto'>
            <Swiper
              grabCursor={true}
              loop={true}
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={breakpoints}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000
              }}
            >
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
              <SwiperSlide className='py-6 '><FeedbackCard /></SwiperSlide>
            </Swiper>
          </div>
          <div className='w-full flex lg:flex-row flex-col justify-center items-center my-5 lg:gap-x-6 gap-y-3'>
            <p className={`text-gray-600 ${poppins.className} lg:text-left text-center font-medium`}>Share your feedback and help us compose a better experience for you.</p>
            <Button text={"Give your Feedback"} className={"text-sm font-medium"} />
          </div>
        </div>
      </Layout>
    </>
  )
}
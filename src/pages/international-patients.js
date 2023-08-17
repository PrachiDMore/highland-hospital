import Banner from '@/components/Banner'
import Button from '@/components/Button'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import { Lexend, Poppins } from 'next/font/google'
import React from 'react'
import { MdMedicalServices } from 'react-icons/md';
import { FaUserDoctor, FaSuitcase } from 'react-icons/fa6';
import { BsCalendarEventFill } from 'react-icons/bs';

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const InternationalPatients = () => {
	return (
		<Layout>
			<div className='w-screen'>
				<Banner src={"/assets/international-patients/main.png"} title={"International Patients"} desc={"Highland Hospital is a leading name in this arena, offering complex surgical procedures in a world class environment."} button={{
					text: "Enquire Now",
					link: "asd"
				}} />
				<Info
					src={"/assets/international-patients/info.png"}
					title={"Why Highland Hospital?"}
					category={"other"}
					paras={[
						"Mangalore, popularly known as the pearl of the Arabian Sea, has grown metamorphically to become a top-notch destination for medical tourism with emphasis on overall quality of care. With a beautiful climate and a perfect blend of cosmopolitan people and cultures it becomes a very sought after and ideal destination for medical tourism. As a hub of ultramodern medical healthcare and medical education, with several leading hospitals and medical institutions on par with global standards, this has transformed the lives of many across India and the world.",
						"Highland Hospital is a leading name in this arena, offering complex surgical procedures in a world class environment. From quality of therapy, range of procedural and treatment options, infrastructure and skilled manpower to being able to perform any medical procedure with zero waiting time, the list of benefits of travelling for medical treatment at Highland Hospital are many. Quality of care is what attracts people. However, quality services should not be beyond the affordability of the patient who requires it. If quality comes at an affordable cost it is an unbeatable advantage.",
						"Cutting edge technology to support medical diagnostics and medical procedures are employed by specialists in all medical facilities. Complicated cancer care and surgeries, neuro and even general surgeries require high-end technology to continually better outcomes, minimize complications, enable faster recovery and reduce length of hospital stay. Our medical management team and acclaimed specialists are quite comfortable in challenging themselves to new frontiers to provide solutions, always building on their expertise."
					]} />

				<div className='lg:px-0 px-5 pb-10 bg-light flex flex-col items-center'>
					<div className='w-full flex flex-col items-center'>
						<h1 className={`lg:text-left text-center text-4xl font-bold text-darkBlue ${lexend.className}`}>{"Out-Patient Services"}</h1>
					</div>

					<div className='lg:w-[80vw] w-full h-auto flex lg:flex-row flex-col p-4 mt-6 bg-white contact-shadow rounded-lg'>
						{/* left */}
						<div className='lg:w-2/5 w-full bg-darkGreen flex flex-col justify-between rounded-lg px-6 py-7 text-light'>
							<div className='flex flex-col gap-10'>
								<div>
									<h1 className={`text-2xl font-bold text-primaryGreen ${lexend.className}`}>We provide the following features</h1>
									<p className={'text-sm ' + poppins.className}>Highland Hospital brings together an outstanding pool of doctors, scientists and clinical researchers to foster collaborative, multidisciplinary investigation, inspiring new ideas and discoveries</p>
								</div>

								<div className='flex flex-col gap-6 text-sm'>
									<div className='flex items-center gap-2'>
										<MdMedicalServices className='text-4xl' />
										<div>
											<h1 className={`text-xl font-bold text-primaryGreen ${lexend.className}`}>Health</h1>
											<p className={poppins.className}>"The First Wealth is Health"</p>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<FaUserDoctor className='text-4xl' />
										<div>
											<h1 className={`text-xl font-bold text-primaryGreen ${lexend.className}`}>Surgery</h1>
											<p className={poppins.className}>"Truth Like Surgery May Hurt But It Cures"</p>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<FaSuitcase className='text-4xl' />
										<div>
											<h1 className={`text-xl font-bold text-primaryGreen ${lexend.className}`}>Careers</h1>
											<p className={poppins.className}>"Be So good They Can't Ignore you"</p>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										<BsCalendarEventFill className='text-4xl' />
										<div>
											<h1 className={`text-xl font-bold text-primaryGreen ${lexend.className}`}>Planning</h1>
											<p className={poppins.className}>"If You Can Dream it, You Can Do It."</p>
										</div>
									</div>
								</div>
							</div>

							<div className='flex gap-3 '>
								{/* <FaFacebookF />
							<FiInstagram />
							<BsTwitter />
							<FaLinkedinIn /> */}
							</div>
						</div>

						{/* right */}
						<div className={'lg:w-3/5 w-full lg:p-10 py-8 flex flex-col gap-5 items-center justify-center text-grey ' + poppins.className}>
							<div className='w-full flex lg:flex-row flex-col gap-10 justify-between'>
								<div className='lg:w-1/2 w-full flex gap-1 flex-col'>
									<label className='font-medium'>First Name</label>
									<input type='text' className='border-b focus:border-b-2 border-grey outline-none focus:border-primaryGreen' />
								</div>
								<div className='lg:w-1/2 w-full flex gap-1 flex-col'>
									<label className='font-medium'>Last Name</label>
									<input type='text' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
							</div>

							<div className='w-full flex lg:flex-row flex-col gap-10 justify-between'>
								<div className='lg:w-1/2 w-full flex gap-1 flex-col'>
									<label className='font-medium'>Email</label>
									<input type='email' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
								<div className='lg:w-1/2 w-full flex gap-1 flex-col'>
									<label className='font-medium'>Phone Number</label>
									<input type='number' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
							</div>

							<div className='w-full flex lg:flex-row flex-col gap-5 justify-between'>
								<div className='lg:w-[30%] w-full flex gap-1 flex-col'>
									<label className='font-medium'>Select Date</label>
									<input type='date' className='w-full border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
								<div className='lg:w-[30%] w-full flex gap-1 flex-col'>
									<label className='font-medium'>Select Time</label>
									<input type='time' className='w-full border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
								<div className='lg:w-[40%] w-full flex gap-1 flex-col'>
									<label className='font-medium'>Select Doctor</label>
									<input type='text' className='w-full border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
								</div>
							</div>

							{/* <div className='w-full flex gap-1 flex-col'>
								<label className='font-medium'>Subject</label>
								<input type='text' className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none' />
							</div> */}

							<div className='w-full flex gap-1 flex-col'>
								<label className='font-medium'>Message</label>
								<textarea className='border-b border-grey focus:border-b-2 focus:border-primaryGreen outline-none h-16 resize-none' />
							</div>

							<Button text={"Submit"} className={"text-sm mt-3"} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default InternationalPatients

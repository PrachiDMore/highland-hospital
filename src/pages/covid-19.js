import Banner from '@/components/Banner'
import Button from '@/components/Button'
import Info from '@/components/Info'
import Layout from '@/components/Layout'
import { Lexend, Poppins } from 'next/font/google'
import React from 'react'
import { MdMedicalServices } from 'react-icons/md';
import { FaUserDoctor, FaSuitcase } from 'react-icons/fa6';
import { BsCalendarEventFill } from 'react-icons/bs';
import List from '@/components/List'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const Covid = () => {
	return (
		<Layout>
			<div className='w-screen'>
				<Banner src={"/assets/covid-19/main.png"} title={"Covid Awareness"} />
				<Info
					src={"/assets/covid-19/info.png"}
					title={"Covid Awareness"}
					category={"other"}
					paras={[
						"In a span of 6 months, we have all familiarized ourselves with the concept of coronavirus. It emerged last year in the city of Wuhan by early December, in China. With Wuhan being the epicenter and the virus crossing nations, the past few months have been of extreme anxiety for all of us. Confined within our houses, we have constantly questioned the norms of social distancing and as to why we must stay cautious of this virus.",
						"This virus has a capability to take control over your bodily functions and slowly cause symptoms such as fatigue, fever and dry coughs. But the most serious among them all are symptoms of difficulty in breathing or shortness of breath, chest pain or pressure, loss of speech or movement. This becomes life threatening as the virus is strong enough to hijack your healthy cells and take command over them. This can in turn lead to a series of other physical issues like an imbalance in the immune response, inflammation causing collateral damage in the body, pneumonia or respiratory distress too.",
						"Our health has to become our topmost priority, be it physical or mental. We have to remain cautious and take necessary steps in order to stay safe. We at Highland Hospital, are prepared to render any service that is required by our patients and fight this deadly battle against the novel coronavirus!"
					]} />

				<List
					title={"Best Practices"}
					className={"pb-10 bg-light "}
					text={"In order to protect ourselves from the corona virus, here are some of the best practices to put into use!"}
					centerTitle={true}
					list={[
						"Wash your hands regularly, each time you go outdoors or come in contact with something that has been exposed to the environment outdoors.",
						"Wear a mask, as it acts like a shield against droplets or the atmosphere which may carry the virus.",
						"Sanitize your hands, in order to kill the virus if materials for washing your hand is not accessible.",
						"Sanitize any item that you will touch, to kill the virus and prevent any contact with it.",
						"Practice social distancing where you keep yourself at least 6 feet away from another individual as this virus is fast spreading and communicable.",
						"Cough or sneeze with your face covered, using a handkerchief or tissue. If not, at least cover yourself using your elbow."
					]}
				/>

				<div className={`bg-light w-screen h-auto px-28 py-12 flex justify-center items-center ${lexend.className}`}>
					<div class="w-[60vw] relative overflow-x-auto shadow-md sm:rounded-lg">
						<table class="w-full text-sm">
							<thead class="text-center text-white bg-darkGreen">
								<tr>
									<th scope="col" class="px-4 py-3">
										Do's
									</th>
									<th scope="col" class="px-6 py-3">
										Dont's
									</th>
								</tr>
							</thead>
							<tbody className='text-center text-darkGreen'>
								<tr class="bg-white ">
									<td scope="row" class="px-6 py-4">
										Wash hands
									</td>
									<td class="px-6 py-4">
										Undermine hand washing
									</td>
								</tr>
								<tr class="bg-light ">
									<td scope="row" class="px-6 py-4">
										Sanitize
									</td>
									<td class="px-6 py-4">
										Touch objects that are unsanitized
									</td>
								</tr>
								<tr class="bg-white ">
									<td scope="row" class="px-6 py-4">
										Wear a mask
									</td>
									<td class="px-6 py-4">
										Go outdoors without a mask
									</td>
								</tr>
								<tr class="bg-light ">
									<td scope="row" class="px-6 py-4">
										Practice social distancing
									</td>
									<td class="px-6 py-4">
										Stay in close proximity to people
									</td>
								</tr>
								<tr class="bg-white ">
									<td scope="row" class="px-6 py-4">
										Stay aware
									</td>
									<td class="px-6 py-4">
										Ignore guidelines on Covid-19
									</td>
								</tr>
								<tr class="bg-light ">
									<td scope="row" class="px-6 py-4">
										Preach the right information
									</td>
									<td class="px-6 py-4">
										Spread misinformation
									</td>
								</tr>
								<tr class="bg-white ">
									<td scope="row" class="px-6 py-4">
										Cough/Sneeze with your face covered
									</td>
									<td class="px-6 py-4">
										Sneeze/cough without covering in the open
									</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Covid

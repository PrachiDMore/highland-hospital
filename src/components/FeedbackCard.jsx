import React from 'react'
import { Lexend, Poppins } from 'next/font/google'
import { FaQuoteRight } from 'react-icons/fa'

const lexend = Lexend({ subsets: ['latin'] })

const FeedbackCard = () => {
	return (
		<div className={'relative p-4 rounded-lg bg-white feedback-shadow w-72 pt-8 ' + lexend.className}>
			<div className='left-8 absolute -top-4 shadow-xl flex items-center justify-center bg-accentGreenHover h-12 w-12 rounded-full aspect-square'><FaQuoteRight className='text-xl text-white' /></div>
			<span className='font-bold'>4.8/5.0</span>
			<p className='text-sm text-gray-500 leading-5 mt-2'>Their ability to listen attentively and provide personalized care truly sets them apart. They took the time to understand my concerns, thoroughly explained diagnoses.</p>
			<div className='mt-5 flex gap-3'>
				<img src="https://images.unsplash.com/photo-1599746146388-a7ec2004b67a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=396&q=80" className='h-10 w-10 object-cover rounded-full' alt="" />
				<div className='flex flex-col'>
					<h4 className='font-bold'>Courtesy Henry</h4>
					<p className='text-xs text-gray-600'>Bank Staff</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard

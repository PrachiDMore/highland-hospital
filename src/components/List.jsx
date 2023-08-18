import React from 'react'
import { Lexend, Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const List = ({ centerTitle, className, text, list, title, grid }) => {
	return (
		<div className={twMerge('lg:px-28 px-5 bg-light ', className)}>
			{centerTitle && title && <h1 className={`text-center lg:text-4xl text-2xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>}
			{!centerTitle && title && <h1 className={`lg:text-4xl text-2xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>}

			<div className={'mt-6 flex flex-col gap-y-3 ' + poppins.className}>
				{text && <p className='lg:text-base text-sm'>{text}</p>}
				<div className={grid ? 'grid lg:grid-cols-3 grid-cols-1 gap-3 w-full' : 'w-full grid grid-cols-1 gap-3'}>
					{
						list?.map((item, index) => {
							return <div key={item + index} className='flex gap-3 items-center'>
								<span className='lg:h-4 lg:w-4 w-2 h-2 bg-accentGreen rounded-full aspect-square'></span>
								<p className='lg:text-base text-sm'>{item}</p>
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default List

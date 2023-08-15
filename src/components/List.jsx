import React from 'react'
import { Lexend, Poppins } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const List = ({ centerTitle, className, text, list, title, grid }) => {
	return (
		<div className={'px-28 bg-light ' + className}>
			{centerTitle && title && <h1 className={`text-center text-4xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>}
			{!centerTitle && title && <h1 className={`text-4xl font-bold text-darkBlue ${lexend.className}`}>{title}</h1>}

			<div className={'mt-6 flex flex-col gap-y-3 ' + poppins.className}>
				{text && <p>{text}</p>}
				<div className={grid ? 'grid grid-cols-3 gap-3 w-full' : 'w-full grid grid-cols-1 gap-3'}>
					{
						list?.map((item, index) => {
							return <div key={item + index} className='flex gap-3 items-center'>
								<span className='h-4 w-4 bg-accentGreen rounded-full aspect-square'></span>
								<p>{item}</p>
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default List
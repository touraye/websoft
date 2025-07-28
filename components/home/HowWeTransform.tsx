// components/HowWeTransformSection.tsx
import React from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import Image from 'next/image'
import { ClipboardList, MessageSquare, Heart, Bookmark } from 'lucide-react'

// Data for the four feature cards
const features = [
	{
		Icon: ClipboardList,
		title: 'Strategic Consultation',
		description:
			'Our initial consultation will be primarily focused on your needs and strategic objectives so that we are able to tailor a solution that is right for your goals.',
	},
	{
		Icon: MessageSquare,
		title: 'You Have The Say',
		description:
			'No matter what your project is we will guide you through the options available and keep you involved step by step until the project is complete.',
	},
	{
		Icon: Heart,
		title: 'We Care',
		description:
			"We want your business to succeed and we are committed to that. We are not going to be 'yes men'; if your idea isn't good, we'll tell you gently, yours is in our best interest.",
	},
	{
		Icon: Bookmark,
		title: 'We Love What We Do',
		description:
			'We love what we do and we take pride in the result of our work. This ensures you receive a top-notch product every time and nothing less.',
	},
]

export default function HowWeTransform() {
	const accentColor = '#dc2626' // Red color from the design

	return (
		<section className='bg-white py-12 md:py-10'>
			<div className='container max-w-[1220px] mx-auto px-4 md:px-8'>
				{/* Main layout container: flex for responsive ordering */}
				<div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
					{/* --- Left Column: Text Content --- */}
					<div className='lg:w-1/2'>
						<SectionHeading
							lineColor={accentColor}
							tagline='How'
							heading={
								<>
									We Transform <br /> Businesses with Tailored <br /> IT
									Solutions
								</>
							}
						/>

						{/* show only on mobile */}
						<div className='flex justify-center md:hidden'>
							<Image
								src='/assets/images/sideImageHome.webp'
								alt='Professional business man with abstract background shapes'
								width={550}
								height={550}
								className='object-contain'
							/>
						</div>

						{/* Features Grid */}
						<div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12'>
							{features.map((feature, index) => (
								<div key={index} className='flex flex-col'>
									{/* Icon in a Circle */}
									<div className='flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 ring-1 ring-gray-200'>
										<feature.Icon
											className='h-7 w-7 text-gray-600'
											aria-hidden='true'
										/>
									</div>
									{/* Feature Title */}
									<h3
										className='mt-6 text-sm font-semibold uppercase tracking-wider'
										style={{ color: accentColor }}>
										{feature.title}
									</h3>
									{/* Feature Description */}
									<p className='mt-2 text-gray-600 leading-relaxed'>
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* --- Right Column: Image --- */}
					<div className='lg:w-1/2 hidden md:flex justify-center mt-12 lg:mt-0'>
						<Image
							src='/assets/images/sideImageHome.webp'
							alt='Professional business man with abstract background shapes'
							width={550}
							height={550}
							className='object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

'use client'

import Link from 'next/link'
import { useCallback, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
	{
		badge: 'Skill-Based Learning',
		heading: 'Upgrade Your Skills Today 🚀',
		description:
			'Explore courses in Web Development, Design, Marketing, and more — taught by working industry professionals.',
		cta: { label: 'Explore Courses', href: '/courses' },
		gradient: 'from-indigo-600 via-violet-600 to-purple-700',
	},
	{
		badge: 'Top-Rated Instructors',
		heading: 'Learn from Industry Experts',
		description:
			'Every course is built and taught by professionals who use these skills in their day-to-day work.',
		cta: { label: 'Meet Our Instructors', href: '#top-instructors' },
		gradient: 'from-blue-600 via-indigo-600 to-violet-700',
	},
	{
		badge: 'Learn at Your Pace',
		heading: 'Your Career, Your Schedule',
		description:
			'Lifetime access to every lesson you enroll in — learn whenever it fits your life, on any device.',
		cta: { label: 'Get Started Free', href: '/register' },
		gradient: 'from-fuchsia-600 via-purple-600 to-indigo-700',
	},
]

const Banner = () => {
	const autoplay = useMemo(
		() =>
			Autoplay({
				delay: 5000,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
			}),
		[],
	)

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
		},
		[autoplay],
	)

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<header className='relative overflow-hidden bg-background text-foreground'>
			<div className='overflow-hidden' ref={emblaRef}>
				<div className='flex'>
					{slides.map((slide, index) => (
						<div key={index} className='min-w-full'>
							<div
								className={`relative flex min-h-[88vh] items-center justify-center bg-gradient-to-br ${slide.gradient} px-4 py-24 sm:px-6 lg:px-8`}
							>
								{/* Decorative pattern */}
								<div className='absolute inset-0 opacity-10'>
									<svg
										className='h-full w-full'
										viewBox='0 0 100 100'
										preserveAspectRatio='none'
									>
										<circle cx='10' cy='15' r='20' fill='white' />
										<circle cx='90' cy='80' r='16' fill='white' />
										<circle cx='50' cy='50' r='30' fill='white' />
									</svg>
								</div>

								<div className='relative z-10 mx-auto max-w-3xl text-center text-white'>
									<span className='animate__animated animate__fadeInDown inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider backdrop-blur-md'>
										{slide.badge}
									</span>

									<h1 className='animate__animated animate__fadeInUp mt-6 font-(--font-heading) text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
										{slide.heading}
									</h1>

									<p className='animate__animated animate__fadeInUp mx-auto mt-6 max-w-xl text-lg text-white/85'>
										{slide.description}
									</p>

									<div className='animate__animated animate__fadeInUp mt-10 flex flex-wrap justify-center gap-4'>
										<Link
											href={slide.cta.href}
											className='rounded-full bg-white px-8 py-4 font-bold text-indigo-700 shadow-lg transition-all hover:-translate-y-1 hover:opacity-90'
										>
											{slide.cta.label}
										</Link>

										<Link
											href='/courses'
											className='rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20'
										>
											Browse All Courses
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Controls */}
			<button
				onClick={scrollPrev}
				aria-label='Previous slide'
				className='absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/30'
			>
				<ChevronLeft size={20} />
			</button>

			<button
				onClick={scrollNext}
				aria-label='Next slide'
				className='absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/30'
			>
				<ChevronRight size={20} />
			</button>
		</header>
	)
}

export default Banner

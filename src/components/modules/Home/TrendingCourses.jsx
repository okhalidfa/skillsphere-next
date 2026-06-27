'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import CourseCard from '../Shared/CourseCard'

const TrendingCourses = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const res = await fetch('/data.json')
				const data = await res.json()

				const trending = data.filter(
					(course) => course.isTrending || course.isNew,
				)

				setCourses(trending.length ? trending : data.slice(0, 4))
			} catch (error) {
				console.error('Failed to load trending courses', error)
			}
		}

		fetchCourses()
	}, [])

	const autoplay = useMemo(
		() =>
			Autoplay({
				delay: 3500,
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

	if (!courses.length) return null

	return (
		<section className='py-24 bg-background text-foreground'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-12'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						🔥 Trending Now
					</span>

					<h2 className='text-4xl lg:text-5xl font-(--font-heading) font-bold mb-3'>
						Trending Courses &amp; New Releases
					</h2>

					<p className='text-muted-foreground max-w-xl mx-auto'>
						What other learners are enrolling in right now.
					</p>
				</div>

				{/* Slider */}
				<div className='relative overflow-hidden' ref={emblaRef}>
					<div className='flex'>
						{courses.map((course) => (
							<div
								key={course.id}
								className='min-w-full px-3 sm:min-w-[50%] lg:min-w-[33.33%]'
							>
								<CourseCard course={course} />
							</div>
						))}
					</div>
				</div>

				{/* Controls */}
				<div className='flex justify-center gap-4 mt-8'>
					<button
						onClick={scrollPrev}
						aria-label='Previous'
						className='px-4 py-2 rounded-full border border-border bg-card hover:bg-hover transition'
					>
						←
					</button>

					<button
						onClick={scrollNext}
						aria-label='Next'
						className='px-4 py-2 rounded-full border border-border bg-card hover:bg-hover transition'
					>
						→
					</button>
				</div>
			</div>
		</section>
	)
}

export default TrendingCourses

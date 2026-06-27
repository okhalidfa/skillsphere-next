import CourseCard from '../Shared/CourseCard'

const PopularCourses = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
		cache: 'no-store',
	})

	const courses = await res.json()

	const topRated = [...courses]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 3)

	return (
		<section className='container mx-auto px-4 py-20'>
			{/* Header */}
			<div className='mb-12 text-center'>
				<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
					🔥 Popular Courses
				</span>

				<h2 className='font-(--font-heading) text-3xl font-bold text-foreground mb-2 sm:text-4xl'>
					Our Top-Rated Courses
				</h2>

				<p className='text-muted-foreground max-w-xl mx-auto'>
					The highest-rated programs our learners can&apos;t stop
					recommending.
				</p>
			</div>

			{/* Grid */}
			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
				{topRated.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</section>
	)
}

export default PopularCourses

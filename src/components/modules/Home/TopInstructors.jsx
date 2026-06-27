import Image from 'next/image'
import { Star, Users } from 'lucide-react'
import { getInstructors } from '@/lib/data'

const TopInstructors = async () => {
	const instructors = await getInstructors()

	return (
		<section id='top-instructors' className='py-20 bg-background text-foreground transition-colors duration-300'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center mb-14'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						🏆 Behind the Lessons
					</span>

					<h2 className='text-4xl lg:text-5xl font-(--font-heading) font-bold mb-4'>
						Meet Our Top Instructors
					</h2>

					<p className='max-w-2xl mx-auto text-muted-foreground'>
						Learn directly from professionals who use these exact skills in
						their day-to-day careers.
					</p>
				</div>

				{/* Instructor Cards */}
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{instructors.map((instructor) => (
						<div
							key={instructor.id}
							className='group relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl'
						>
							<div className='relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full ring-4 ring-secondary'>
								<Image
									src={instructor.image}
									alt={instructor.name}
									fill
									sizes='96px'
									className='object-cover transition-transform duration-500 group-hover:scale-110'
								/>
							</div>

							<h3 className='text-lg font-bold text-foreground'>
								{instructor.name}
							</h3>

							<p className='mb-4 text-sm font-semibold text-primary'>
								{instructor.title}
							</p>

							<p className='mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3'>
								{instructor.bio}
							</p>

							<div className='flex items-center justify-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground'>
								<span className='flex items-center gap-1'>
									<Users size={14} className='text-primary' />
									{instructor.studentsTaught.toLocaleString()} students
								</span>
								<span className='flex items-center gap-1'>
									<Star size={14} className='text-accent' fill='currentColor' />
									{instructor.yearsExperience}+ yrs
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TopInstructors

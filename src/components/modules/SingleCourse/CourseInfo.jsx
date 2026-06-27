import Image from 'next/image'
import { Star, Users, Clock, BarChart3 } from 'lucide-react'

const CourseInfo = ({ course, instructor }) => {
	return (
		<div>
			{/* Category + Level */}
			<div className='mb-3 flex flex-wrap items-center gap-2'>
				<span className='rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground'>
					{course.category}
				</span>
				<span className='flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground'>
					<BarChart3 size={12} />
					{course.level}
				</span>
			</div>

			{/* Title */}
			<h1 className='mb-3 font-(--font-heading) text-3xl font-bold leading-tight text-foreground sm:text-4xl'>
				{course.title}
			</h1>

			{/* Description */}
			<p className='mb-5 leading-relaxed text-muted-foreground'>
				{course.description}
			</p>

			{/* Stats Row */}
			<div className='mb-6 flex flex-wrap items-center gap-5 text-sm text-foreground'>
				<span className='flex items-center gap-1.5 font-semibold'>
					<Star size={16} className='text-accent' fill='currentColor' />
					{course.rating}
					<span className='font-normal text-muted-foreground'>rating</span>
				</span>

				<span className='flex items-center gap-1.5 font-semibold'>
					<Users size={16} className='text-primary' />
					{course.students?.toLocaleString()}
					<span className='font-normal text-muted-foreground'>students</span>
				</span>

				<span className='flex items-center gap-1.5 font-semibold'>
					<Clock size={16} className='text-primary' />
					{course.duration}
				</span>
			</div>

			{/* Instructor */}
			{instructor && (
				<div className='flex items-center gap-3 rounded-2xl border border-border bg-card p-4'>
					<div className='relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-secondary'>
						<Image
							src={instructor.image}
							alt={instructor.name}
							fill
							sizes='48px'
							className='object-cover'
						/>
					</div>

					<div>
						<p className='text-sm font-bold text-foreground'>
							{instructor.name}
						</p>
						<p className='text-xs text-muted-foreground'>
							{instructor.title}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default CourseInfo

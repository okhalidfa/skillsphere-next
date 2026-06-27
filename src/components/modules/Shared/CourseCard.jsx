'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@heroui/react'
import { Star, Clock, Users } from 'lucide-react'
import Link from 'next/link'

const CourseCard = ({ course }) => {
	return (
		<Card className='group relative overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500'>
			{/* IMAGE */}
			<div className='relative aspect-video overflow-hidden bg-muted'>
				<Image
					src={course.image}
					alt={course.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
				/>

				{/* TAG */}
				{course.tag && (
					<span className='absolute top-4 left-4 bg-background/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider border border-border'>
						{course.tag}
					</span>
				)}

				{/* LEVEL */}
				<span className='absolute top-4 right-4 bg-foreground/80 backdrop-blur-md text-background text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider'>
					{course.level}
				</span>
			</div>

			{/* CONTENT */}
			<CardContent className='p-5'>
				<div className='flex items-center justify-between mb-2'>
					<span className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>
						{course.category}
					</span>

					{/* rating */}
					<div className='flex items-center gap-1 text-accent text-xs font-bold'>
						<Star size={14} fill='currentColor' />
						<span className='text-foreground'>{course.rating}</span>
					</div>
				</div>

				<h3 className='text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2'>
					{course.title}
				</h3>

				<p className='text-sm text-muted-foreground mt-2 line-clamp-2'>
					{course.description}
				</p>

				<p className='mt-3 text-sm font-medium text-foreground'>
					By {course.instructor}
				</p>
			</CardContent>

			{/* FOOTER */}
			<CardFooter className='px-5 pb-5 flex items-center justify-between border-t border-border pt-4'>
				<div className='flex items-center gap-4 text-xs text-muted-foreground'>
					<span className='flex items-center gap-1'>
						<Clock size={14} />
						{course.duration}
					</span>
					<span className='flex items-center gap-1'>
						<Users size={14} />
						{course.students?.toLocaleString()}
					</span>
				</div>

				<Link
					href={`/courses/${course.id}`}
					className='text-sm font-bold text-primary hover:opacity-80 transition'
				>
					View Details
				</Link>
			</CardFooter>
		</Card>
	)
}

export default CourseCard

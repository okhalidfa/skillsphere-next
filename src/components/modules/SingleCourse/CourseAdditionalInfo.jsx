import Image from 'next/image'
import { CheckCircle2, ListChecks, Users, Star } from 'lucide-react'

const CourseAdditionalInfo = ({ course, instructor }) => {
	return (
		<div className='container mx-auto grid grid-cols-1 gap-6 px-4 py-14 lg:grid-cols-3'>
			{/* What You'll Learn */}
			<div className='rounded-3xl border border-border bg-card p-7'>
				<div className='mb-4 flex items-center gap-2'>
					<CheckCircle2 size={20} className='text-primary' />
					<h3 className='font-bold text-foreground'>What You&apos;ll Learn</h3>
				</div>

				<ul className='space-y-3'>
					{course.whatYouWillLearn?.map((item, idx) => (
						<li
							key={idx}
							className='flex items-start gap-2 text-sm text-muted-foreground'
						>
							<CheckCircle2
								size={16}
								className='mt-0.5 shrink-0 text-primary'
							/>
							{item}
						</li>
					))}
				</ul>
			</div>

			{/* Requirements */}
			<div className='rounded-3xl border border-border bg-card p-7'>
				<div className='mb-4 flex items-center gap-2'>
					<ListChecks size={20} className='text-primary' />
					<h3 className='font-bold text-foreground'>Requirements</h3>
				</div>

				<ul className='space-y-3'>
					{course.requirements?.map((item, idx) => (
						<li
							key={idx}
							className='flex items-start gap-2 text-sm text-muted-foreground'
						>
							<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />
							{item}
						</li>
					))}
				</ul>
			</div>

			{/* Instructor Bio */}
			{instructor && (
				<div className='rounded-3xl border border-border bg-card p-7'>
					<h3 className='mb-4 font-bold text-foreground'>Your Instructor</h3>

					<div className='mb-4 flex items-center gap-3'>
						<div className='relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-secondary'>
							<Image
								src={instructor.image}
								alt={instructor.name}
								fill
								sizes='56px'
								className='object-cover'
							/>
						</div>

						<div>
							<p className='font-bold text-foreground'>{instructor.name}</p>
							<p className='text-xs text-muted-foreground'>
								{instructor.title}
							</p>
						</div>
					</div>

					<p className='mb-4 text-sm leading-relaxed text-muted-foreground'>
						{instructor.bio}
					</p>

					<div className='flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground'>
						<span className='flex items-center gap-1'>
							<Users size={14} className='text-primary' />
							{instructor.studentsTaught.toLocaleString()} students
						</span>
						<span className='flex items-center gap-1'>
							<Star size={14} className='text-accent' fill='currentColor' />
							{instructor.yearsExperience}+ yrs experience
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default CourseAdditionalInfo

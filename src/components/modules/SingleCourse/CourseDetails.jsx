'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { toast } from 'react-toastify'

import CourseImage from './CourseImage'
import CourseInfo from './CourseInfo'
import CourseCurriculum from './CourseCurriculum'
import CourseAdditionalInfo from './CourseAdditionalInfo'

const CourseDetails = ({ course, instructor }) => {
	const [isEnrolling, setIsEnrolling] = useState(false)
	const [isEnrolled, setIsEnrolled] = useState(false)

	const handleEnroll = () => {
		setIsEnrolling(true)

		// Simulated enrollment — no payment/backend flow required by the spec.
		setTimeout(() => {
			setIsEnrolling(false)
			setIsEnrolled(true)

			toast.success(`🎉 Enrolled in "${course.title}"!`, {
				position: 'top-right',
				autoClose: 3000,
			})
		}, 900)
	}

	return (
		<div className='bg-background text-foreground'>
			<div className='container mx-auto px-4 py-10'>
				{/* Back link */}
				<Link
					href='/courses'
					className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary'
				>
					<ArrowLeft size={16} />
					Back to All Courses
				</Link>

				{/* Main grid */}
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
					{/* Left: Image */}
					<CourseImage
						image={course.image}
						title={course.title}
						tag={course.tag}
					/>

					{/* Right: Info + Actions */}
					<div className='flex flex-col gap-6'>
						<CourseInfo course={course} instructor={instructor} />

						<CourseCurriculum curriculum={course.curriculum} />

						{/* Enroll Action */}
						<div className='rounded-2xl border border-border bg-card p-5'>
							<button
								onClick={handleEnroll}
								disabled={isEnrolling || isEnrolled}
								className={`flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold shadow-lg transition-all ${
									isEnrolled
										? 'bg-secondary text-secondary-foreground cursor-default'
										: 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:opacity-90'
								}`}
							>
								{isEnrolled ? (
									<>
										<CheckCircle2 size={18} />
										Enrolled — Happy Learning!
									</>
								) : isEnrolling ? (
									'Enrolling...'
								) : (
									<>
										<Sparkles size={18} />
										Enroll Now — It&apos;s Free
									</>
								)}
							</button>

							<p className='mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground'>
								<ShieldCheck size={14} />
								Lifetime access · Learn at your own pace
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Additional Info */}
			<CourseAdditionalInfo course={course} instructor={instructor} />
		</div>
	)
}

export default CourseDetails

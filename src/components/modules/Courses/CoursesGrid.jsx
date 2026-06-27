import { SearchX } from 'lucide-react'
import CourseCard from '../Shared/CourseCard'

const CoursesGrid = ({ courses }) => {
	if (!courses.length) {
		return (
			<div className='container mx-auto flex flex-col items-center justify-center gap-3 px-4 py-20 text-center'>
				<SearchX size={40} className='text-muted-foreground' />
				<p className='text-lg font-semibold text-foreground'>
					No courses found
				</p>
				<p className='text-sm text-muted-foreground'>
					Try a different title or category.
				</p>
			</div>
		)
	}

	return (
		<div className='container mx-auto grid grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3'>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	)
}

export default CoursesGrid

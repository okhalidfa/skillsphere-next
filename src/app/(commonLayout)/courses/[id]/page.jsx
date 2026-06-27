import { headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'

import { auth } from '@/lib/auth'
import { getCourses, getInstructors } from '@/lib/data'
import CourseDetails from '@/components/modules/SingleCourse/CourseDetails'

const CourseDetailsPage = async ({ params }) => {
	const { id } = await params

	// 🔒 Protected route — must be logged in to view course details.
	const session = await auth.api.getSession({
		headers: await headers(),
	})

	if (!session) {
		redirect(`/login?redirect=/courses/${id}`)
	}

	const [courses, instructors] = await Promise.all([
		getCourses(),
		getInstructors(),
	])

	const course = courses.find((c) => String(c.id) === String(id))

	if (!course) {
		notFound()
	}

	const instructor = instructors.find((i) => i.name === course.instructor)

	return <CourseDetails course={course} instructor={instructor} />
}

export default CourseDetailsPage

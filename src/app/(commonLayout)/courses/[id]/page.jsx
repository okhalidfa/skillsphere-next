import { headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'

import { auth } from '@/lib/auth'
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

	const [coursesRes, instructorsRes] = await Promise.all([
		fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
			cache: 'no-store',
		}),
		fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/instructors.json`, {
			cache: 'no-store',
		}),
	])

	const courses = await coursesRes.json()
	const instructors = await instructorsRes.json()

	const course = courses.find((c) => String(c.id) === String(id))

	if (!course) {
		notFound()
	}

	const instructor = instructors.find((i) => i.name === course.instructor)

	return <CourseDetails course={course} instructor={instructor} />
}

export default CourseDetailsPage

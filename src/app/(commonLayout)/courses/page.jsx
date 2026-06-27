import CoursesExplorer from '@/components/modules/Courses/CoursesExplorer'

const CoursesPage = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
		cache: 'no-store',
	})

	const courses = await res.json()

	return <CoursesExplorer courses={courses} />
}

export default CoursesPage

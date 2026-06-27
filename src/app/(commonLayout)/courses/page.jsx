import { getCourses } from '@/lib/data'
import CoursesExplorer from '@/components/modules/Courses/CoursesExplorer'

const CoursesPage = async () => {
	const courses = await getCourses()

	return <CoursesExplorer    courses={courses} />
}

export default CoursesPage

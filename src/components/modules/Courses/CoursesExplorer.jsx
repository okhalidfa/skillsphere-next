'use client'

import { useMemo, useState } from 'react'
import CoursesHeading from './CoursesHeading'
import CoursesGrid from './CoursesGrid'

const CoursesExplorer = ({ courses }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [activeCategory, setActiveCategory] = useState('All')

	const categories = useMemo(() => {
		const unique = Array.from(new Set(courses.map((c) => c.category)))
		return ['All', ...unique]
	}, [courses])

	const filteredCourses = useMemo(() => {
		return courses.filter((course) => {
			const matchesTitle = course.title
				.toLowerCase()
				.includes(searchTerm.trim().toLowerCase())

			const matchesCategory =
				activeCategory === 'All' || course.category === activeCategory

			return matchesTitle && matchesCategory
		})
	}, [courses, searchTerm, activeCategory])

	return (
		<section>
			<CoursesHeading
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				categories={categories}
			/>

			<CoursesGrid courses={filteredCourses} />
		</section>
	)
}

export default CoursesExplorer

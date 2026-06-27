import Banner from '@/components/modules/Home/Banner'
import PopularCourses from '@/components/modules/Home/PopularCourses'
import LearningTips from '@/components/modules/Home/LearningTips'
import TopInstructors from '@/components/modules/Home/TopInstructors'
import TrendingCourses from '@/components/modules/Home/TrendingCourses'

const HomePage = () => {
	return (
		<div>
			<Banner />
			<PopularCourses />
			<LearningTips />
			<TopInstructors />
			<TrendingCourses />
		</div>
	)
}

export default HomePage

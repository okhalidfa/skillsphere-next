'use client'

import { Search } from 'lucide-react'

const CoursesHeading = ({
	searchTerm,
	setSearchTerm,
	activeCategory,
	setActiveCategory,
	categories,
}) => {
	return (
		<div className='container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-12 text-center'>
			{/* Title */}
			<div>
				<h1 className='mb-2 font-(--font-heading) text-3xl font-bold text-foreground sm:text-4xl'>
					All Courses
				</h1>

				<p className='text-muted-foreground'>
					Explore skill-based programs in Web Development, Design, Marketing,
					and more.
				</p>
			</div>

			{/* Search */}
			<div className='relative w-full max-w-md'>
				<Search
					size={18}
					className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
				/>
				<input
					type='text'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search courses by title...'
					className='w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-primary/30'
				/>
			</div>

			{/* Category Filters */}
			<div className='flex flex-wrap justify-center gap-2'>
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => setActiveCategory(category)}
						className={`rounded-full px-4 py-2 text-sm font-medium transition ${
							activeCategory === category
								? 'bg-primary text-primary-foreground'
								: 'border border-border text-foreground hover:bg-hover'
						}`}
					>
						{category}
					</button>
				))}
			</div>
		</div>
	)
}

export default CoursesHeading

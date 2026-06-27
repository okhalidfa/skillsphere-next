import { Brain, CalendarClock, Repeat, Target } from 'lucide-react'

const tips = [
	{
		icon: Brain,
		title: 'Active Recall',
		description:
			'Quiz yourself on what you just learned instead of just re-reading notes. It builds stronger, longer-lasting memory.',
	},
	{
		icon: Repeat,
		title: 'Spaced Repetition',
		description:
			'Review material at increasing intervals — a day later, a week later, a month later — to lock it into long-term memory.',
	},
	{
		icon: CalendarClock,
		title: 'Time Blocking',
		description:
			'Schedule focused, distraction-free blocks for learning, just like you would a meeting. Protect that time.',
	},
	{
		icon: Target,
		title: 'The Pomodoro Technique',
		description:
			'Study in focused 25-minute sprints with short breaks in between to stay sharp without burning out.',
	},
]

const LearningTips = () => {
	return (
		<section className='py-24 bg-background text-foreground transition-colors duration-300'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<span className='inline-block px-4 py-1.5 mb-4 text-sm font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full'>
						📌 Learning Tips
					</span>

					<h2 className='text-4xl lg:text-5xl font-(--font-heading) font-bold mb-4'>
						Study Smarter, Not Harder
					</h2>

					<p className='max-w-2xl mx-auto text-muted-foreground'>
						Simple, research-backed techniques to help you retain more and
						manage your time better while learning new skills.
					</p>
				</div>

				{/* Tips Grid */}
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{tips.map((tip, idx) => {
						const Icon = tip.icon
						return (
							<div
								key={idx}
								className='group rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl'
							>
								<div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
									<Icon size={26} />
								</div>

								<h3 className='mb-2 text-lg font-bold text-foreground'>
									{tip.title}
								</h3>

								<p className='text-sm leading-relaxed text-muted-foreground'>
									{tip.description}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default LearningTips

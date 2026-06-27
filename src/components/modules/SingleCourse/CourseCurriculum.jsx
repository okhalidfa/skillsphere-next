import { PlayCircle } from 'lucide-react'

const CourseCurriculum = ({ curriculum = [] }) => {
	return (
		<div className='rounded-2xl border border-border bg-card p-5'>
			<div className='mb-4 flex items-center justify-between'>
				<h3 className='font-bold text-foreground'>Course Curriculum</h3>
				<span className='text-xs font-medium text-muted-foreground'>
					{curriculum.length} modules
				</span>
			</div>

			<ul className='thin-scrollbar max-h-72 space-y-2 overflow-y-auto pr-1'>
				{curriculum.map((item, idx) => (
					<li
						key={idx}
						className='flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition hover:border-primary/40'
					>
						<div className='flex items-center gap-3'>
							<span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
								<PlayCircle size={16} />
							</span>
							<span className='text-sm font-medium text-foreground'>
								{item.title}
							</span>
						</div>

						<span className='shrink-0 text-xs font-medium text-muted-foreground'>
							{item.duration}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CourseCurriculum

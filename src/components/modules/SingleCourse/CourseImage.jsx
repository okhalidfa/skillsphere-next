'use client'

import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import { toast } from 'react-toastify'

const CourseImage = ({ image, title, tag }) => {
	const handlePreview = () => {
		toast.info('🎬 Course preview coming soon!', {
			position: 'top-right',
			autoClose: 1000,
		})
	}

	return (
		<div className='relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-xl'>
			<Image
				src={image}
				alt={title}
				fill
				sizes='(max-width: 1024px) 100vw, 50vw'
				className='object-cover'
				priority
			/>

			{/* Dark overlay for contrast */}
			<div className='absolute inset-0 bg-black/20' />

			{tag && (
				<div className='absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur-md'>
					<span className='text-xs font-bold uppercase tracking-widest text-white'>
						{tag}
					</span>
				</div>
			)}

			{/* Preview button */}
			<button
				onClick={handlePreview}
				aria-label='Watch course preview'
				className='absolute inset-0 flex items-center justify-center'
			>
				<span className='flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary shadow-2xl transition-transform hover:scale-110'>
					<PlayCircle size={40} />
				</span>
			</button>
		</div>
	)
}

export default CourseImage

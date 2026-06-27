import Link from 'next/link'
import { Compass, Home } from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Navbar />

			<div className='flex grow flex-col items-center justify-center bg-background px-4 py-24 text-center text-foreground'>
				<span className='font-(--font-heading) text-8xl font-bold text-primary'>
					404
				</span>

				<h1 className='mt-4 text-2xl font-bold sm:text-3xl'>
					Page Not Found
				</h1>

				<p className='mt-3 max-w-md text-muted-foreground'>
					The page or course you&apos;re looking for doesn&apos;t exist or may
					have been moved.
				</p>

				<div className='mt-8 flex flex-wrap justify-center gap-4'>
					<Link
						href='/'
						className='flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition hover:opacity-90'
					>
						<Home size={18} />
						Back to Home
					</Link>

					<Link
						href='/courses'
						className='flex items-center gap-2 rounded-full border border-border px-6 py-3 font-bold text-foreground transition hover:bg-hover'
					>
						<Compass size={18} />
						Browse Courses
					</Link>
				</div>
			</div>

			<Footer />
		</div>
	)
}

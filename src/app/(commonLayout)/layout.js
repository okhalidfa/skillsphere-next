import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function CommonLayout({ children }) {
	return (
		<div className='flex min-h-screen flex-col'>
			<Navbar />
			<div className='grow'>{children}</div>
			<Footer />
		</div>
	)
}

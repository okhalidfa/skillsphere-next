import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'animate.css'

import { ToastContainer } from 'react-toastify'
import NextThemeProvider from '@/providers/NextThemeProvider'

// Body & UI font
const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

// Primary heading font
const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
	title: 'SkillSphere — Online Learning Platform',
	description:
		'Explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${inter.variable} ${poppins.variable} h-screen antialiased`}
		>
			<body className='min-h-full flex flex-col font-(--font-inter)'>
				<NextThemeProvider>
					<main className='min-h-screen'>{children}</main>

					<ToastContainer
						position='top-right'
						autoClose={4000}
						newestOnTop
						theme='colored'
					/>
				</NextThemeProvider>
			</body>
		</html>
	)
}

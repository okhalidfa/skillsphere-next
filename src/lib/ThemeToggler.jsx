'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggler = () =>     {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Avoid a hydration mismatch: next-themes only knows the real theme
	// after mounting on the client (it reads localStorage).
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <div className='h-7 w-12.5 rounded-full bg-muted' />
	}

	const isDark = theme === 'dark'

	return (
		<button
			type='button'
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			aria-label='Toggle dark mode'
			className={`relative flex h-7 w-12.5 items-center rounded-full transition-colors duration-300 ${
				isDark ? 'bg-primary' : 'bg-secondary'
			}`}
		>
			<span
				className={`flex h-5.5 w-5.5 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300 ${
					isDark ? 'translate-x-6.5' : 'translate-x-0.75'
				}`}
			>
				{isDark ? (
					<Sun size={12} className='text-primary' />
				) : (
					<Moon size={12} className='text-foreground' />
				)}
			</span>
		</button>
	)
}

export default ThemeToggler

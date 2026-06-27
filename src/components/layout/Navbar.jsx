'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { Avatar, Button, Dropdown } from '@heroui/react'

import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'
import { GraduationCap, Menu } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Courses',
		href: '/courses',
	},
]

const Navbar = () => {
	const router = useRouter()

	/* =========================
	   SESSION
	========================= */

	const { data: session, isPending } = authClient.useSession()

	const user = session?.user
	console.log("Navbar Image:", user?.image)

	/* =========================
	   LOGOUT
	========================= */

	const handleLogout = async () => {
		await authClient.signOut({
			//* Ref: https://better-auth.com/docs/concepts/client
			//* fetchOptions is basically passing extra options/configuration to the internal fetch request.
			fetchOptions: {
				onSuccess: () => {
					toast.success('See you soon! 👋 Logged out successfully', {
						position: 'top-right',
						autoClose: 3000,
					})

					router.push('/')
					router.refresh()
				},
			},
		})
	}

	return (
		<nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
			<header className='container mx-auto flex items-center justify-between py-4 px-4'>
				{/* Logo */}
				<Link href='/' className='group flex items-center gap-3'>
					<div className='flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-105'>
						<GraduationCap size={24} />
					</div>

					{/* Text logo — hidden on mobile */}
					<div className='hidden flex-col md:flex'>
						<span className='font-(--font-heading) text-2xl font-bold tracking-tight text-foreground'>
							SkillSphere
						</span>

						<span className='hidden text-xs text-muted-foreground md:block'>
							Upgrade Your Skills Today
						</span>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<ul className='hidden items-center gap-8 md:flex'>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
							>
								{link.label}
							</Link>
						</li>
					))}

					{/* Profile Link Only When Logged In */}
					{user && (
						<li>
							<Link
								href='/profile'
								className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
							>
								My Profile
							</Link>
						</li>
					)}
				</ul>

				{/* Right Side */}
				<div className='flex items-center gap-3'>
					{/* Theme Toggle — always visible */}
					<ThemeToggler />

					{/* Loading skeleton */}
					{isPending && (
						<div className='h-10 w-24 animate-pulse rounded-2xl bg-muted' />
					)}

					{/* ── DESKTOP: Logged In ── */}
					{!isPending && user && (
						<div className='hidden items-center gap-3 md:flex'>
							{/* User Info */}
							<div className='flex flex-col items-end'>
								<span className='text-sm font-semibold text-foreground'>
									{user.name}
								</span>

								<span className='text-xs text-muted-foreground'>
									{user.email}
								</span>
							</div>

							{/* Avatar */}
							<Link href='/profile'>
								    <img
                                      src={user.image}
                                      alt={user.name}
                                      className="h-10 w-10 rounded-full object-cover border"
                                    />
							</Link>

							{/* Logout */}
							<Button
								size='sm'
								variant='flat'
								onPress={handleLogout}
								className='border border-border bg-secondary font-medium text-foreground transition-colors hover:bg-hover'
							>
								Logout
							</Button>
						</div>
					)}

					{/* ── DESKTOP: Logged Out ── */}
					{!isPending && !user && (
						<div className='hidden items-center gap-2 md:flex'>
							<Button
								asChild
								size='sm'
								variant='light'
								className='font-medium text-foreground transition-colors hover:bg-hover'
							>
								<Link href='/login'>Login</Link>
							</Button>

							<Button
								asChild
								size='sm'
								className='bg-primary font-medium text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:opacity-90'
							>
								<Link href='/register'>Register</Link>
							</Button>
						</div>
					)}

					{/* ── MOBILE: Avatar (only when logged in) ── */}
					{!isPending && user && (
						<Link href='/profile' className='md:hidden'>
							<Avatar
								src={user.image || ''}
								name={user.name || 'User'}
								size='sm'
								color='primary'
								className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
							/>
						</Link>
					)}

					{/* ── MOBILE: Hamburger Dropdown ── */}
					<div className='md:hidden'>
						<Dropdown>
							<Button
								isIconOnly
								size='sm'
								variant='flat'
								aria-label='Open navigation menu'
								className='border border-border bg-secondary text-foreground'
							>
								<Menu />
							</Button>

							<Dropdown.Popover className='w-full mt-5'>
								<Dropdown.Menu aria-label='Navigation menu'>
									{/* Nav Links */}
									{navLinks.map((link) => (
										<Dropdown.Item key={link.href} textValue={link.label}>
											<Link
												href={link.href}
												className='block w-full font-medium text-foreground'
											>
												{link.label}
											</Link>
										</Dropdown.Item>
									))}

									{/* My Profile — only when logged in */}
									{user
										? [
												<Dropdown.Item key='profile' textValue='My Profile'>
													<Link
														href='/profile'
														className='block w-full font-medium text-foreground'
													>
														My Profile
													</Link>
												</Dropdown.Item>,

												<Dropdown.Item
													key='logout'
													textValue='Logout'
													className='text-danger'
													onAction={handleLogout}
												>
													Logout
												</Dropdown.Item>,
											]
										: [
												<Dropdown.Item key='login' textValue='Login'>
													<Link
														href='/login'
														className='block w-full font-medium text-foreground'
													>
														Login
													</Link>
												</Dropdown.Item>,

												<Dropdown.Item
													key='register'
													textValue='Register'
													className='font-medium text-primary'
												>
													<Link
														href='/register'
														className='block w-full font-medium text-primary'
													>
														Register
													</Link>
												</Dropdown.Item>,
											]}
								</Dropdown.Menu>
							</Dropdown.Popover>
						</Dropdown>
					</div>
				</div>
			</header>
		</nav>
	)
}

export default Navbar

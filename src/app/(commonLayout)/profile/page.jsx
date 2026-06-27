'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
	Award,
	BookOpen,
	Mail,
	Settings,
	Sparkles,
	UserRound,
} from 'lucide-react'

import { authClient } from '@/lib/auth-client'
import Loader from '@/components/modules/Shared/Loader'

const tabs = [
	{ key: 'courses', label: 'My Courses', icon: BookOpen },
	{ key: 'achievements', label: 'Achievements', icon: Award },
	{ key: 'account', label: 'Account', icon: Settings },
]

const achievements = [
	{ title: '7-Day Learning Streak', icon: '🔥' },
	{ title: 'First Course Enrolled', icon: '🎓' },
	{ title: 'Fast Learner', icon: '⚡' },
]

const ProfilePage = () => {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()
	const [activeTab, setActiveTab] = useState('courses')

	const user = session?.user

	useEffect(() => {
		if (!isPending && !user) {
			router.replace('/login?redirect=/profile')
		}
	}, [isPending, user, router])

	if (isPending || !user) {
		return <Loader label='Loading your profile...' />
	}

	return (
		<div className='min-h-[80vh] bg-background text-foreground'>
			<div className='container mx-auto px-4 py-12'>
				{/* Profile Header */}
				<div className='mb-10 flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center sm:flex-row sm:text-left'>
					<div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-secondary'>
						{user.image ? (
							<Image
								src={user.image}
								alt={user.name}
								fill
								sizes='96px'
								className='object-cover'
							/>
						) : (
							<div className='flex h-full w-full items-center justify-center bg-secondary text-primary'>
								<UserRound size={36} />
							</div>
						)}
					</div>

					<div className='flex-1'>
						<h1 className='font-(--font-heading) text-2xl font-bold text-foreground'>
							{user.name}
						</h1>
						<p className='mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:justify-start'>
							<Mail size={14} />
							{user.email}
						</p>

						<span className='mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground'>
							<Sparkles size={12} />
							Active Learner
						</span>
					</div>

					<Link
						href='/profile/update'
						className='shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-90'
					>
						Update Information
					</Link>
				</div>

				{/* Tabs */}
				<div className='mb-8 flex flex-wrap justify-center gap-2 sm:justify-start'>
					{tabs.map((tab) => {
						const Icon = tab.icon
						return (
							<button
								key={tab.key}
								onClick={() => setActiveTab(tab.key)}
								className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
									activeTab === tab.key
										? 'bg-primary text-primary-foreground'
										: 'border border-border text-foreground hover:bg-hover'
								}`}
							>
								<Icon size={16} />
								{tab.label}
							</button>
						)
					})}
				</div>

				{/* Tab Content */}
				{activeTab === 'courses' && (
					<div className='rounded-3xl border border-border bg-card p-8 text-center'>
						<BookOpen size={32} className='mx-auto mb-3 text-primary' />
						<h3 className='mb-2 text-lg font-bold text-foreground'>
							You haven&apos;t enrolled in any courses yet
						</h3>
						<p className='mb-5 text-sm text-muted-foreground'>
							Browse our catalog and start learning a new skill today.
						</p>
						<Link
							href='/courses'
							className='inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-90'
						>
							Explore Courses
						</Link>
					</div>
				)}

				{activeTab === 'achievements' && (
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
						{achievements.map((item, idx) => (
							<div
								key={idx}
								className='flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-6 text-center'
							>
								<span className='text-3xl'>{item.icon}</span>
								<p className='text-sm font-bold text-foreground'>
									{item.title}
								</p>
							</div>
						))}
					</div>
				)}

				{activeTab === 'account' && (
					<div className='rounded-3xl border border-border bg-card p-8'>
						<h3 className='mb-5 text-lg font-bold text-foreground'>
							Account Details
						</h3>

						<div className='space-y-4 text-sm'>
							<div className='flex items-center justify-between border-b border-border pb-3'>
								<span className='text-muted-foreground'>Full Name</span>
								<span className='font-semibold text-foreground'>
									{user.name}
								</span>
							</div>

							<div className='flex items-center justify-between border-b border-border pb-3'>
								<span className='text-muted-foreground'>Email</span>
								<span className='font-semibold text-foreground'>
									{user.email}
								</span>
							</div>

							<div className='flex items-center justify-between'>
								<span className='text-muted-foreground'>Account Type</span>
								<span className='font-semibold text-foreground'>Learner</span>
							</div>
						</div>

						<Link
							href='/profile/update'
							className='mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-90'
						>
							Update Information
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProfilePage

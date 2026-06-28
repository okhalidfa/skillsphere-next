'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import {
	ArrowLeft,
	Image as ImageIcon,
	Loader2,
	User,
} from 'lucide-react'

import { authClient } from '@/lib/auth-client'
import Loader from '@/components/modules/Shared/Loader'

const UpdateProfilePage = () => {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()
	const user = session?.user

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formData, setFormData] = useState({ name: '', image: '' })

	useEffect(() => {
		if (!isPending && !user) {
			router.replace('/login?redirect=/profile/update')
		}

		if (user) {
			setFormData({
				name: user.name || '',
				image: user.image || '',
			})
		}
	}, [isPending, user, router])

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		await authClient.updateUser(
			{
				name: formData.name,
				image: formData.image || undefined,
			},
			{
				onSuccess: () => {
					toast.success('Profile updated successfully! ✅', {
						position: 'top-right',
						autoClose: 1000,
					})
					router.push('/profile')
					router.refresh()
				},
				onError: (ctx) => {
					toast.error(ctx?.error?.message || 'Could not update profile', {
						position: 'top-right',
						autoClose: 1000,
					})
				},
				onResponse: () => {
					setIsSubmitting(false)
				},
			},
		)
	}

	if (isPending || !user) {
		return <Loader label='Loading...' />
	}

	return (
		<div className='flex min-h-[80vh] items-center justify-center bg-background px-4 py-16 text-foreground'>
			<div className='w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10'>
				<button
					onClick={() => router.push('/profile')}
					className='mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary'
				>
					<ArrowLeft size={16} />
					Back to Profile
				</button>

				<h1 className='mb-2 font-(--font-heading) text-2xl font-bold text-foreground'>
					Update Information
				</h1>
				<p className='mb-8 text-sm text-muted-foreground'>
					Update your name and profile photo.
				</p>

				<form onSubmit={handleSubmit} className='space-y-5'>
					{/* Name */}
					<div>
						<label className='mb-1.5 block text-sm font-medium text-foreground'>
							Name
						</label>
						<div className='relative'>
							<User
								size={18}
								className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
							/>
							<input
								type='text'
								name='name'
								required
								value={formData.name}
								onChange={handleChange}
								placeholder='Your full name'
								className='w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition-shadow focus:ring-2 focus:ring-primary/30'
							/>
						</div>
					</div>

					{/* Image URL */}
					<div>
						<label className='mb-1.5 block text-sm font-medium text-foreground'>
							Image URL
						</label>
						<div className='relative'>
							<ImageIcon
								size={18}
								className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
							/>
							<input
								type='url'
								name='image'
								value={formData.image}
								onChange={handleChange}
								placeholder='https://example.com/your-photo.jpg'
								className='w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition-shadow focus:ring-2 focus:ring-primary/30'
							/>
						</div>
					</div>

					<button
						type='submit'
						disabled={isSubmitting}
						className='flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60'
					>
						{isSubmitting && <Loader2 size={18} className='animate-spin' />}
						{isSubmitting ? 'Updating...' : 'Update Information'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default UpdateProfilePage

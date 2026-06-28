'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { Eye, EyeOff, GraduationCap, Loader2, Mail, Lock } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

import { authClient } from '@/lib/auth-client'

const LoginForm = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const redirectTo = searchParams.get('redirect') || '/'

	const [showPassword, setShowPassword] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isGoogleLoading, setIsGoogleLoading] = useState(false)

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		await authClient.signIn.email(
			{
				email: formData.email,
				password: formData.password,
			},
			{
				onSuccess: () => {
					toast.success('Welcome back! 🎉', {
						position: 'top-right',
						autoClose: 3000,
					})

					// Per spec: successful login takes the user to the home page,
					// unless they were redirected here from a protected route.
					router.push(redirectTo)
					router.refresh()
				},
				onError: (ctx) => {
					toast.error(ctx?.error?.message || 'Invalid email or password', {
						position: 'top-right',
						autoClose: 4000,
					})
				},
				onResponse: () => {
					setIsSubmitting(false)
				},
			},
		)
	}

	const handleGoogleLogin = async () => {
		const data = await authClient.signIn.social({
          provider: "google",
        });
	}

	return (
		<div className='flex min-h-[85vh] items-center justify-center bg-background px-4 py-16'>
			<div className='w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10'>
				{/* Logo */}
				<div className='mb-8 flex flex-col items-center text-center'>
					<div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg'>
						<GraduationCap size={28} />
					</div>
					<h1 className='font-(--font-heading) text-2xl font-bold text-foreground'>
						Welcome Back
					</h1>
					<p className='mt-1 text-sm text-muted-foreground'>
						Log in to continue your learning journey
					</p>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className='space-y-5'>
					{/* Email */}
					<div>
						<label className='mb-1.5 block text-sm font-medium text-foreground'>
							Email
						</label>
						<div className='relative'>
							<Mail
								size={18}
								className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
							/>
							<input
								type='email'
								name='email'
								required
								value={formData.email}
								onChange={handleChange}
								placeholder='you@example.com'
								className='w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition-shadow focus:ring-2 focus:ring-primary/30'
							/>
						</div>
					</div>

					{/* Password */}
					<div>
						<label className='mb-1.5 block text-sm font-medium text-foreground'>
							Password
						</label>
						<div className='relative'>
							<Lock
								size={18}
								className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
							/>
							<input
								type={showPassword ? 'text' : 'password'}
								name='password'
								required
								minLength={6}
								value={formData.password}
								onChange={handleChange}
								placeholder='••••••••'
								className='w-full rounded-xl border border-border bg-background py-3 pl-11 pr-11 text-foreground outline-none transition-shadow focus:ring-2 focus:ring-primary/30'
							/>
							<button
								type='button'
								onClick={() => setShowPassword((prev) => !prev)}
								className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground'
								aria-label={showPassword ? 'Hide password' : 'Show password'}
							>
								{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
							</button>
						</div>
					</div>

					{/* Submit */}
					<button
						type='submit'
						disabled={isSubmitting}
						className='flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60'
					>
						{isSubmitting && <Loader2 size={18} className='animate-spin' />}
						{isSubmitting ? 'Logging in...' : 'Login'}
					</button>
				</form>

				{/* Divider */}
				<div className='my-6 flex items-center gap-3'>
					<span className='h-px flex-1 bg-border' />
					<span className='text-xs font-medium uppercase text-muted-foreground'>
						Or
					</span>
					<span className='h-px flex-1 bg-border' />
				</div>

				{/* Google */}
				<button
					onClick={handleGoogleLogin}
					disabled={isGoogleLoading}
					className='flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background py-3.5 font-semibold text-foreground transition hover:bg-hover disabled:opacity-60'
				>
					<FcGoogle size={20} />
					{isGoogleLoading ? 'Connecting...' : 'Continue with Google'}
				</button>

				{/* Register link */}
				<p className='mt-8 text-center text-sm text-muted-foreground'>
					Don&apos;t have an account?{' '}
					<Link href='/register' className='font-bold text-primary'>
						Register
					</Link>
				</p>
			</div>
		</div>
	)
}

export default LoginForm

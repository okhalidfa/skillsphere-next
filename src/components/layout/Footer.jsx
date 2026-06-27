'use client'

import Link from 'next/link'

import {
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='border-t border-white/10 bg-black text-white transition-colors duration-300'>
			<div className='container mx-auto px-6 py-14'>
				<div className='grid gap-10 md:grid-cols-4'>
					{/* Brand */}
					<div className='md:col-span-2'>
						<h2 className='font-(--font-heading) text-3xl font-bold tracking-tight text-primary'>
							SkillSphere
						</h2>

						<p className='mt-4 max-w-md text-sm leading-7 text-zinc-400'>
							A modern online learning platform where you can explore
							courses, watch lessons, and enroll in skill-based programs like
							Web Development, Design, Marketing, and more.
						</p>

						{/* Social Links */}
						<div className='mt-6 flex gap-3'>
							<Link
								href='#'
								aria-label='Facebook'
								className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
							>
								<FaFacebookF size={16} />
							</Link>

							<Link
								href='#'
								aria-label='Instagram'
								className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
							>
								<FaInstagram size={18} />
							</Link>

							<Link
								href='#'
								aria-label='LinkedIn'
								className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
							>
								<FaLinkedinIn size={16} />
							</Link>

							<Link
								href='#'
								aria-label='YouTube'
								className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-white'
							>
								<FaYoutube size={16} />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='mb-4 text-sm font-bold uppercase tracking-widest text-zinc-300'>
							Quick Links
						</h3>

						<ul className='space-y-3 text-sm'>
							<li>
								<Link
									href='/'
									className='text-zinc-400 transition-colors hover:text-primary'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/courses'
									className='text-zinc-400 transition-colors hover:text-primary'
								>
									Courses
								</Link>
							</li>
							<li>
								<Link
									href='/profile'
									className='text-zinc-400 transition-colors hover:text-primary'
								>
									My Profile
								</Link>
							</li>
							<li>
								<Link
									href='/terms'
									className='text-zinc-400 transition-colors hover:text-primary'
								>
									Terms &amp; Conditions
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-zinc-400 transition-colors hover:text-primary'
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='mb-4 text-sm font-bold uppercase tracking-widest text-zinc-300'>
							Contact Us
						</h3>

						<ul className='space-y-3 text-sm text-zinc-400'>
							<li className='flex items-center gap-2'>
								<Mail size={16} className='text-primary shrink-0' />
								<span>support@skillsphere.com</span>
							</li>
							<li className='flex items-center gap-2'>
								<Phone size={16} className='text-primary shrink-0' />
								<span>+1 (555) 010-2026</span>
							</li>
							<li className='flex items-start gap-2'>
								<MapPin size={16} className='text-primary shrink-0 mt-0.5' />
								<span>123 Learning Lane, Remote-First, Earth</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row'>
					<p>
						© {new Date().getFullYear()} SkillSphere. All rights reserved.
					</p>

					<div className='flex gap-6'>
						<Link href='/terms' className='hover:text-primary'>
							Terms &amp; Conditions
						</Link>
						<Link href='/privacy' className='hover:text-primary'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

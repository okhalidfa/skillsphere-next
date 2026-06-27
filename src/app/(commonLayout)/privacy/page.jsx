const sections = [
	{
		title: '1. Information We Collect',
		body: 'When you register, we collect your name, email address, and an optional profile photo URL. If you sign in with Google, we receive your name, email, and profile picture from your Google account.',
	},
	{
		title: '2. How We Use Your Information',
		body: 'We use your information to create and manage your account, let you log in securely, personalize your profile, and improve the courses and experience we offer.',
	},
	{
		title: '3. Cookies & Sessions',
		body: 'We use cookies and session storage to keep you logged in and to remember your preferences, such as light or dark mode.',
	},
	{
		title: '4. Data Sharing',
		body: 'We do not sell your personal information. We only share data with service providers (such as our authentication and hosting providers) to the extent necessary to operate the platform.',
	},
	{
		title: '5. Data Security',
		body: 'We take reasonable measures to protect your data, including secure password hashing and encrypted connections.',
	},
	{
		title: '6. Your Choices',
		body: 'You can update your name and profile photo at any time from your profile page. You may also request account deletion by contacting our support team.',
	},
]

export const metadata = {
	title: 'Privacy Policy — SkillSphere',
}

const PrivacyPage = () => {
	return (
		<div className='bg-background py-16 text-foreground'>
			<div className='container mx-auto max-w-3xl px-4'>
				<h1 className='mb-2 font-(--font-heading) text-3xl font-bold sm:text-4xl'>
					Privacy Policy
				</h1>
				<p className='mb-10 text-sm text-muted-foreground'>
					Last updated: January 2026
				</p>

				<div className='space-y-8'>
					{sections.map((section, idx) => (
						<div key={idx}>
							<h2 className='mb-2 text-lg font-bold text-foreground'>
								{section.title}
							</h2>
							<p className='leading-relaxed text-muted-foreground'>
								{section.body}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PrivacyPage

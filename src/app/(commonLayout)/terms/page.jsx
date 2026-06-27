const sections = [
	{
		title: '1. Acceptance of Terms',
		body: 'By creating an account or using SkillSphere, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the platform.',
	},
	{
		title: '2. Using SkillSphere',
		body: 'You may browse courses, create an account, and enroll in skill-based programs such as Web Development, Design, Marketing, and more. You agree to provide accurate information when registering.',
	},
	{
		title: '3. Account Responsibility',
		body: 'You are responsible for keeping your login credentials secure and for any activity that happens under your account.',
	},
	{
		title: '4. Course Content',
		body: 'Course content, including videos, curriculum, and materials, is provided for personal, non-commercial learning purposes and may not be redistributed without permission.',
	},
	{
		title: '5. Changes to the Service',
		body: 'We may update, modify, or discontinue parts of SkillSphere at any time. We will try to give notice of significant changes where possible.',
	},
	{
		title: '6. Termination',
		body: 'We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.',
	},
]

export const metadata = {
	title: 'Terms & Conditions — SkillSphere',
}

const TermsPage = () => {
	return (
		<div className='bg-background py-16 text-foreground'>
			<div className='container mx-auto max-w-3xl px-4'>
				<h1 className='mb-2 font-(--font-heading) text-3xl font-bold sm:text-4xl'>
					Terms &amp; Conditions
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

export default TermsPage

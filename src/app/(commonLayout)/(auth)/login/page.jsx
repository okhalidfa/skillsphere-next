import { Suspense } from 'react'
import LoginForm from '@/components/auth/LoginForm'
import Loader from '@/components/modules/Shared/Loader'

export const metadata = {
	title: 'Login — SkillSphere',
}

const LoginPage = () => {
	return (
		<Suspense fallback={<Loader label='Loading...' />}>
			<LoginForm />
		</Suspense>
	)
}

export default LoginPage

import { Spinner } from '@heroui/react'

const Loader = ({ label = 'Loading...' }) => {
	return (
		<div className='flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 py-20'>
			<Spinner size='lg' color='primary' />
			<p className='text-sm font-medium text-muted-foreground'>{label}</p>
		</div>
	)
}

export default Loader

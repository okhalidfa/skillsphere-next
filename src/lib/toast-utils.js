import { toast } from 'react-toastify'

const defaultConfig = {
	position: 'top-right',
	autoClose: 4000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
}

/**
 * Show success toast notification
 * @param {string} message - Message to display
 * @param {object} options - Toast options
 */
export const showSuccessToast = (message, options = {}) => {
	toast.success(message, {
		...defaultConfig,
		autoClose: 3000,
		...options,
	})
}

/**
 * Show error toast notification
 * @param {string} message - Message to display
 * @param {object} options - Toast options
 */
export const showErrorToast = (message, options = {}) => {
	toast.error(message, {
		...defaultConfig,
		...options,
	})
}

/**
 * Show warning toast notification
 * @param {string} message - Message to display
 * @param {object} options - Toast options
 */
export const showWarningToast = (message, options = {}) => {
	toast.warning(message, {
		...defaultConfig,
		...options,
	})
}

/**
 * Show info toast notification
 * @param {string} message - Message to display
 * @param {object} options - Toast options
 */
export const showInfoToast = (message, options = {}) => {
	toast.info(message, {
		...defaultConfig,
		autoClose: 3000,
		...options,
	})
}

/**
 * Show loading/promise toast notification
 * @param {Promise} promise - Promise to wait for
 * @param {object} messages - Messages for different states { pending, success, error }
 * @param {object} options - Toast options
 */
export const showPromiseToast = (promise, messages, options = {}) => {
	toast.promise(
		promise,
		{
			pending: {
				render: messages.pending || 'Loading...',
			},
			success: {
				render: messages.success || 'Success!',
			},
			error: {
				render: messages.error || 'Something went wrong',
			},
		},
		{
			...defaultConfig,
			...options,
		},
	)
}

import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
	// NOTE: must be NEXT_PUBLIC_ prefixed to be available in the browser bundle.
	baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
})

export const { signIn, signOut, signUp, useSession } = authClient

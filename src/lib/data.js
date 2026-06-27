import fs from 'fs/promises'
import path from 'path'

/**
 * Server Components run in Node.js, so local JSON files that live in
 * /public can be read straight from disk instead of being fetched over
 * HTTP. This avoids depending on NEXT_PUBLIC_BASE_URL being correctly
 * configured just to load our own bundled data — which is what was
 * causing "Failed to parse URL from undefined/data.json" when that env
 * var wasn't set.
 */

export async function getCourses() {
	const filePath = path.join(process.cwd(), 'public', 'data.json')
	const file = await fs.readFile(filePath, 'utf-8')
	return JSON.parse(file)
}

export async function getInstructors() {
	const filePath = path.join(process.cwd(), 'public', 'instructors.json')
	const file = await fs.readFile(filePath, 'utf-8')
	return JSON.parse(file)
}

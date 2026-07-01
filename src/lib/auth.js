import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);


import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URL)
const db = client.db('SkillSphere_DB')

export const auth = betterAuth({
	database: mongodbAdapter(db, {
		client,
	}),

	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: process.env.BETTER_AUTH_URL,

	emailAndPassword:    {
		enabled: true,
	},

	// Google only, as required by the assignment spec.
	socialProviders:      {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		},
	},
})

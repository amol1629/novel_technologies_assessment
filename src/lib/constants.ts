export const SITE_CONFIG = {
	name: 'Modern Blog',
	description: 'A modern blog built with Next.js and TailwindCSS',
	url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
	ogImage: '/og-image.jpg',
	links: {
		twitter: 'https://twitter.com',
		github: 'https://github.com',
	},
}

export const API_CONFIG = {
	baseUrl:
		process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
}

// This configuration allows Next.js to optimize CSS and load images from picsum.photos
// The `remotePatterns` option specifies the allowed image sources, enabling Next.js to handle images from external URLs efficiently.

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'www.digitalmesh.com',
				port: '',
				pathname: '/blog/wp-content/uploads/**',
			},
		],
	},
	experimental: {
		optimizeCss: true,
	},
}

module.exports = nextConfig

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Modern Blog | Latest Posts & Insights',
	description:
		'Discover the latest posts and insights on our modern blog platform',
	keywords: 'blog, posts, insights, modern, responsive',
	authors: [{ name: 'Amol Rathod' }],
	openGraph: {
		title: 'Modern Blog',
		description: 'Latest posts and insights',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<div className="min-h-screen flex flex-col ">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}

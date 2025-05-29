
import PostGrid from '@/components/blog/PostGrid'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import { getAllPosts } from '@/lib/api'
import { Suspense } from 'react'

export default async function HomePage() {
	const posts = await getAllPosts()

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
					Welcome to Our Blog
				</h1>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
					Discover the latest insights, tutorials, and stories from our
					community
				</p>
			</div>

			<Suspense fallback={<LoadingSpinner />}>
				<PostGrid posts={posts} />
			</Suspense>
		</div>
	)
}

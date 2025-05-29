import PostGrid from '@/components/blog/PostGrid'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import { getPostsWithUsers } from '@/lib/api'
import { Suspense } from 'react'

export default async function HomePage() {
	const posts = await getPostsWithUsers()

	return (
		<div className="container mx-auto px-4 py-8 ">
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 ">
					<span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
						Welcome to Our Blog
					</span>
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in mb-4 italic ">
					&quot;Discover the latest insights, tutorials, and stories from our
					community&quot;
				</p>
			</div>

			<Suspense fallback={<LoadingSpinner />}>
				<PostGrid posts={posts} />
			</Suspense>
		</div>
	)
}

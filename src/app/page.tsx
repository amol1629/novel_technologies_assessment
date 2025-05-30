import PostGrid from '@/components/blog/PostGrid'

import { getPostsWithUsers } from '@/lib/api'
import { Suspense } from 'react'
import Loading from './loading'

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
				<p className="text-md text-gray-600 max-w-2xl mx-auto animate-fade-in mb-4 italic ">
					&quot;Explore the latest blog posts and stories from our
					community&quot;
				</p>
			</div>

			<Suspense fallback={<Loading />}>
				<PostGrid posts={posts} />
			</Suspense>
		</div>
	)
}

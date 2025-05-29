import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import PostContent from '@/components/blog/PostContent'
import CommentSection from '@/components/blog/CommentSection'
import { getPostWithUser, getPostComments, getAllPosts } from '@/lib/api'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

interface PostPageProps {
	params: Promise<{ id: string }>
}

// Generate static paths at build time
export async function generateStaticParams() {
	const posts = await getAllPosts()
	return posts.map((post) => ({
		id: post.id.toString(),
	}))
}

// Async metadata generation
export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	try {
		const { id } = await params
		const post = await getPostWithUser(id)
		return {
			title: `${post.title} | Modern Blog`,
			description: post.body.substring(0, 160),
			alternates: {
				canonical: `/posts/${id}`,
			},
			authors: [{ name: post.user.name }],
		}
	} catch {
		return {
			title: 'Post | Modern Blog',
			description: 'Post not found',
		}
	}
}

// Main page component
export default async function PostPage({ params }: PostPageProps) {
	try {
		const { id } = await params

		const [post, comments] = await Promise.all([
			getPostWithUser(id),
			getPostComments(id),
		])

		return (
			<article className="container mx-auto px-4 py-8 max-w-4xl">
				<PostContent post={post} />
				<Suspense fallback={<div>Loading comments...</div>}>
					<CommentSection comments={comments} />
				</Suspense>
			</article>
		)
	} catch {
		notFound()
	}
}

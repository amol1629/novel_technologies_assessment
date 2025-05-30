import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import PostContent from '@/components/blog/PostContent'
import CommentSection from '@/components/blog/CommentSection'
import { getPostWithUser, getPostComments } from '@/lib/api'
import type { Metadata } from 'next'
import Loading from '@/app/loading'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

interface PostPageProps {
	params: Promise<{ id: string }>
}

// Async metadata generation with error handling
export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	try {
		const { id } = await params
		const post = await getPostWithUser(id)

		const description =
			post.body.length > 160 ? `${post.body.substring(0, 157)}...` : post.body

		return {
			title: `${post.title} | Modern Blog`,
			description,
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

// Async comment loader component
async function CommentLoader({ postId }: { postId: string }) {
	try {
		const comments = await getPostComments(postId)
		return <CommentSection comments={comments} />
	} catch {
		return <div>Failed to load comments</div>
	}
}

// Main page component
export default async function PostPage({ params }: PostPageProps) {
	const { id } = await params

	let post
	try {
		post = await getPostWithUser(id)
	} catch {
		notFound()
	}

	return (
		<article className="container mx-auto px-4 py-8 max-w-4xl">
			<PostContent post={post} />
			<Suspense fallback={<Loading />}>
				<CommentLoader postId={id} />
			</Suspense>
		</article>
	)
}

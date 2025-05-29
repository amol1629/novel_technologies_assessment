'use client'
import { Post, User } from '@/types/blog'
import PostCard from './PostCard'
import { useState, useEffect } from 'react'
import { Pagination } from '../common/pagination/Pagination'


interface PostGridProps {
	posts: (Post & { user: User })[]
}

export default function PostGrid({ posts }: PostGridProps) {
	const [isMounted, setIsMounted] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const postsPerPage = 10

	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Calculate current posts
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	return (
		<div className="space-y-8">
			{/* Posts Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{currentPosts.map((post, index) => (
					<div
						key={post.id}
						className={isMounted ? 'animate-fade-in' : ''}
						style={
							isMounted ? { animationDelay: `${index * 0.05}s` } : undefined
						}
					>
						<PostCard post={post} />
					</div>
				))}
			</div>

			{/* Pagination */}
			{isMounted && (
				<Pagination
					totalItems={posts.length}
					currentPage={currentPage}
					onPageChange={setCurrentPage}
					itemsPerPage={postsPerPage}
				/>
			)}
		</div>
	)
}

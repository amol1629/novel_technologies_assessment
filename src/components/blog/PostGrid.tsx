'use client'
import { Post, User } from '@/types/blog'
import PostCard from './PostCard'
import { useState, useEffect } from 'react'
import { Pagination } from '../common/pagination/Pagination'

interface PostGridProps {
	posts: (Post & { user: User })[] 
}

export default function PostGrid({ posts }: PostGridProps) {
	// State to track if the component has mounted (for animation purposes)
	const [isMounted, setIsMounted] = useState(false)

	// State to track the current page number for pagination
	const [currentPage, setCurrentPage] = useState(1)

	// Constant defining how many posts to show per page
	const postsPerPage = 10

	// Effect to set isMounted to true after component mounts
	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Calculate the index range for posts to display on current page
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage

	// Get the subset of posts to display on the current page
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	return (
		<div className="space-y-8">
			{/* Posts Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{/* Map through currentPosts to render PostCard for each */}
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

			{/* Pagination component - only shown after mounting */}
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

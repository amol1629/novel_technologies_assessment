'use client'
import { Post, User } from '@/types/blog'
import PostCard from './PostCard'
import { useState } from 'react'
import { Button } from '../ui/button'

interface PostGridProps {
	posts: (Post & { user: User })[]
}

export default function PostGrid({ posts }: PostGridProps) {
	const [currentPage, setCurrentPage] = useState(1)
	const postsPerPage = 10

	// Calculate current posts
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
	const totalPages = Math.ceil(posts.length / postsPerPage)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<div className="space-y-8">
			{/* Posts Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{currentPosts.map((post, index) => (
					<div
						key={post.id}
						className="animate-fade-in"
						style={{ animationDelay: `${index * 0.05}s` }}
					>
						<PostCard post={post} />
					</div>
				))}
			</div>

			{/* Pagination Controls */}
			{posts.length > postsPerPage && (
				<div className="flex flex-col xs:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-200">
					<div className="text-sm text-gray-500 whitespace-nowrap">
						Showing <span className="font-medium">{indexOfFirstPost + 1}</span>-
						<span className="font-medium">
							{Math.min(indexOfLastPost, posts.length)}
						</span>{' '}
						of <span className="font-medium">{posts.length}</span> posts
					</div>

					<div className="flex items-center gap-1 sm:gap-2">
						{/* Mobile-friendly Previous Button */}
						<Button
							variant="outline"
							size="sm"
							onClick={() => paginate(currentPage - 1)}
							disabled={currentPage === 1}
							className="hidden xs:inline-flex disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={() => paginate(currentPage - 1)}
							disabled={currentPage === 1}
							className="xs:hidden disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Previous page"
						>
							&lt;
						</Button>

						{/* Page Numbers - Responsive */}
						<div className="flex items-center gap-1">
							{/* Always show first page */}
							{totalPages > 5 && currentPage > 3 && (
								<>
									<Button
										variant={currentPage === 1 ? 'default' : 'outline'}
										size="sm"
										onClick={() => paginate(1)}
										className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
									>
										1
									</Button>
									{currentPage > 4 && <span className="px-1">...</span>}
								</>
							)}

							{/* Middle pages */}
							{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
								let pageNum
								if (totalPages <= 5) {
									pageNum = i + 1
								} else if (currentPage <= 3) {
									pageNum = i + 1
								} else if (currentPage >= totalPages - 2) {
									pageNum = totalPages - 4 + i
								} else {
									pageNum = currentPage - 2 + i
								}

								return (
									<Button
										key={pageNum}
										variant={currentPage === pageNum ? 'default' : 'outline'}
										size="sm"
										onClick={() => paginate(pageNum)}
										className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
									>
										{pageNum}
									</Button>
								)
							})}

							{/* Always show last page */}
							{totalPages > 5 && currentPage < totalPages - 2 && (
								<>
									{currentPage < totalPages - 3 && (
										<span className="px-1">...</span>
									)}
									<Button
										variant={currentPage === totalPages ? 'default' : 'outline'}
										size="sm"
										onClick={() => paginate(totalPages)}
										className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
									>
										{totalPages}
									</Button>
								</>
							)}
						</div>

						{/* Mobile-friendly Next Button */}
						<Button
							variant="outline"
							size="sm"
							onClick={() => paginate(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="hidden xs:inline-flex disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Next
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={() => paginate(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="xs:hidden disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Next page"
						>
							&gt;
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

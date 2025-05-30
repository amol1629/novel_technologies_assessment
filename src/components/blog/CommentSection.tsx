import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Comment } from '@/types/blog'
import { MessageCircle } from 'lucide-react'

interface CommentSectionProps {
	comments: Comment[]
}

export default function CommentSection({ comments }: CommentSectionProps) {
	// Helper function to generate initials from a name or email
	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2)
	}

	return (
		<section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Section header with comment count */}
			<div className="mb-10">
				<div className="flex items-center gap-3 mb-2">
					<MessageCircle className="h-6 w-6 text-indigo-600 dark:text-slate-400" />
					<h2 className="text-2xl font-bold text-slate-900 dark:text-white">
						Comments
					</h2>
					<span className="px-2.5 py-1 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-indigo-500 rounded-full">
						{comments.length}
					</span>
				</div>
				{/* Decorative divider line */}
				<div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent dark:from-slate-700 dark:via-slate-600"></div>
			</div>

			{/* Conditional rendering based on whether there are comments */}
			{comments.length === 0 ? (
				// Empty state when no comments exist
				<div className="text-center py-16">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
						<MessageCircle className="h-8 w-8 text-slate-400" />
					</div>
					<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
						No comments yet
					</h3>
					<p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
						Be the first to share your thoughts and start the conversation.
					</p>
				</div>
			) : (
				// Comments list when comments exist
				<div className="space-y-6">
					{comments.map((comment, index) => (
						<article key={comment.id} className="group relative">
							<div className="flex gap-4">
								{/* Avatar section */}
								<div className="flex-shrink-0">
									<Avatar className="h-10 w-10 ring-2 ring-white dark:ring-slate-800 shadow-sm">
										<AvatarImage src="" alt={comment.name} />

										<AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
											{getInitials(comment.email)}
										</AvatarFallback>
									</Avatar>
								</div>

								{/* Comment content */}
								<div className="flex-1 min-w-0 mb-6">
									<div className="flex flex-wrap items-center justify-between gap-2 mb-4">
										<h3 className="font-semibold text-yellow-900 dark:text-white text-base">
											{comment.email}
										</h3>

										<div className="flex items-center gap-4 ">
											<span className="text-xs text-slate-400 dark:text-slate-500">
												#{comment.id}
											</span>
										</div>
									</div>

									{/* Comment body  */}
									<div className="border bg-gray-50/50 hover:bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-slate-800/50 rounded-2xl px-4 py-3 relative group block hover:shadow-lg hover:shadow-indigo-100 hover:border hover:border-indigo-500  hover:bg-indigo-50/50 transition-all duration-500 ease-in-out  hover:-translate-y-1">
										<h3 className="font-semibold text-slate-900 dark:text-white text-base">
											{comment?.name}
										</h3>
										<p className="my-4 text-slate-600 dark:text-slate-300 leading-relaxed">
											{comment?.body}
										</p>
									</div>
								</div>
							</div>

							{/* Vertical connecting line between comments (except last one) */}
							{index < comments.length - 1 && (
								<div className="absolute left-5 top-12 bottom-0 w-px bg-slate-200 dark:bg-slate-700 opacity-30"></div>
							)}
						</article>
					))}
				</div>
			)}
		</section>
	)
}

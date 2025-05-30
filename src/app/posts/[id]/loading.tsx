import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, MessageCircle, User as UserIcon } from 'lucide-react'

export default function PostLoading() {
	return (
		<div className="max-w-4xl mx-auto my-4">
			{/* Back button skeleton */}
			<div className="mb-4">
				<div className="mb-4 flex items-center">
					<ArrowLeft className="h-4 w-4 mr-2 text-gray-300" />
					<Skeleton className="h-9 w-28" />
				</div>
			</div>

			{/* Post content skeleton */}
			<div className="animate-pulse p-6 md:p-10 mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-gray-200">
				{/* Header with badge for post id and user name */}
				<div className="flex items-center justify-between gap-8 mb-4">
					<Skeleton className="h-6 w-20 rounded-full" />
					<div className="flex items-center gap-1.5 pt-2">
						<UserIcon className="h-3 w-3 text-gray-300" />
						<Skeleton className="h-4 w-24" />
					</div>
				</div>

				{/* Post Title skeleton */}
				<div className="my-8">
					<Skeleton className="h-8 w-3/4 mb-2" />
					<Skeleton className="h-8 w-1/2" />
				</div>

				{/* Post Body skeleton */}
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-3/4" />
				</div>
			</div>

			{/* Comments section skeleton */}
			<section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Comments header */}
				<div className="mb-10">
					<div className="flex items-center gap-3 mb-2">
						<MessageCircle className="h-6 w-6 text-gray-300" />
						<Skeleton className="h-8 w-32" />
						<Skeleton className="h-6 w-8 rounded-full" />
					</div>
					<div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent dark:from-slate-700 dark:via-slate-600"></div>
				</div>

				{/* Comment skeletons */}
				<div className="space-y-6">
					{[1, 2, 3].map((index) => (
						<article key={index} className="group relative">
							<div className="flex gap-4">
								{/* Avatar skeleton */}
								<div className="flex-shrink-0">
									<Skeleton className="h-10 w-10 rounded-full" />
								</div>

								{/* Comment content skeleton */}
								<div className="flex-1 min-w-0 mb-6">
									{/* Comment header */}
									<div className="flex flex-wrap items-center justify-between gap-2 mb-4">
										<Skeleton className="h-5 w-48" />
										<Skeleton className="h-4 w-8" />
									</div>

									{/* Comment body */}
									<div className="border bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl px-4 py-3">
										<Skeleton className="h-5 w-40 mb-4" />
										<div className="space-y-2">
											<Skeleton className="h-4 w-full" />
											<Skeleton className="h-4 w-full" />
											<Skeleton className="h-4 w-2/3" />
										</div>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	)
}

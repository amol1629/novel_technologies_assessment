import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { truncateText } from '@/lib/utils'
import { Post, User } from '@/types/blog'
import { CircleUserRoundIcon as UserIcon } from 'lucide-react'
import Link from 'next/link'

interface PostCardProps {
	post: Post & { user: User }
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Link
			href={`/posts/${post.id}`}
			className="group block  hover:-translate-y-1 transition-all duration-500 ease-in-out"
		>
			<Card className="animate-fade-in p-6  mx-auto hover:bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl   h-full border border-gray-200  hover:shadow-lg hover:shadow-indigo-100 group-hover:border-indigo-500 group-hover:bg-indigo-50/50  transition-all duration-500 ease-in-out overflow-hidden">

				{/* Card Header - Post id with username */}
				<CardHeader className="relative z-10">
					<div className="flex items-center justify-between pb-3">
						<Badge
							variant="outline"
							className="text-sm px-3 py-1 rounded-full bg-purple-50 text-indigo-700"
						>
							Post #{post.id}
						</Badge>
						<div className="flex items-center gap-1.5 text-sm text-yellow-600">
							<UserIcon className="h-4 w-4 " />
							<span className="font-medium ">{post?.user?.name}</span>
						</div>
					</div>
					<CardTitle className="text-lg font-semibold leading-tight text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
						{post.title}
					</CardTitle>
				</CardHeader>

				{/* Card Hover */}
				<CardContent className="relative z-10">
					<HoverCard>
						<HoverCardTrigger asChild>
							<p className="text-gray-600 cursor-pointer line-clamp-3 hover:text-gray-800 transition-colors duration-200">
								{truncateText(post.body, 120)}
							</p>
						</HoverCardTrigger>

						<HoverCardContent
							className="w-80 p-4 border border-gray-200 shadow-xl bg-white/95 backdrop-blur-sm"
							side="top"
							align="center"
						>
							<div className="space-y-2">
								<p className="text-sm text-gray-600">{post.body}</p>
								<div className="flex items-center gap-1.5 pt-2 text-xs text-yellow-800">
									<UserIcon className="h-3 w-3 " />
									<span>Posted by {post?.user?.name}</span>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</CardContent>
			</Card>
		</Link>
	)
}

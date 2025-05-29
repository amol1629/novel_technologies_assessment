import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Post } from '@/types/blog'
import { truncateText } from '@/lib/utils'
import { Calendar, User } from 'lucide-react'

interface PostCardProps {
	post: Post
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Link href={`/posts/${post.id}`} className="block group">
			<Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group-hover:border-blue-300">
				<CardHeader>
					<div className="flex items-center justify-between mb-2">
						<Badge variant="secondary">Post #{post.id}</Badge>
						<div className="flex items-center text-sm text-gray-500">
							<User className="h-3 w-3 mr-1" />
							<span>User {post.userId}</span>
						</div>
					</div>
					<CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
						{post.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-gray-600 text-sm leading-relaxed">
						{truncateText(post.body, 120)}
					</p>
					<div className="flex items-center mt-4 text-xs text-gray-500">
						<Calendar className="h-3 w-3 mr-1" />
						<span>Recently published</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}

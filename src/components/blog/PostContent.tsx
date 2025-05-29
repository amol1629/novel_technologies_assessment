import { ArrowLeft, Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Post } from '@/types/blog'

interface PostContentProps {
	post: Post
}

export default function PostContent({ post }: PostContentProps) {
	return (
		<div className="animate-fade-in">
			<div className="mb-6">
				<Link href="/">
					<Button variant="ghost" className="mb-4">
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Posts
					</Button>
				</Link>

				<div className="flex items-center space-x-2 mb-4">
					<Badge variant="secondary">Post #{post.id}</Badge>
					<div className="flex items-center text-sm text-gray-500">
						<User className="h-3 w-3 mr-1" />
						<span>User {post.userId}</span>
					</div>
					<div className="flex items-center text-sm text-gray-500">
						<Calendar className="h-3 w-3 mr-1" />
						<span>Recently published</span>
					</div>
				</div>
			</div>

			<header className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
					{post.title}
				</h1>
			</header>

			<div className="prose prose-lg max-w-none">
				<div className="text-gray-700 leading-relaxed whitespace-pre-line">
					{post.body}
				</div>
			</div>
		</div>
	)
}

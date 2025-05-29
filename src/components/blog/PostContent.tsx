import { ArrowLeft, Calendar, User as UserIcon, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Post, User } from '@/types/blog'

interface PostContentProps {
	post: Post & { user: User }
}

export default function PostContent({ post }: PostContentProps) {
	const userInitials = post.user.name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2)

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
						<UserIcon className="h-3 w-3 mr-1" />
						<span>{post.user.name}</span>
					</div>
					<div className="flex items-center text-sm text-gray-500">
						<Calendar className="h-3 w-3 mr-1" />
						<span>Recently published</span>
					</div>
				</div>
			</div>

			<header className="mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
					{post.title}
				</h1>

				{/* Author information */}
				<div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
					<Avatar className="h-12 w-12">
						<AvatarFallback className="bg-blue-500 text-white font-semibold">
							{userInitials}
						</AvatarFallback>
					</Avatar>
					<div>
						<h3 className="font-semibold text-gray-900">{post.user.name}</h3>
						<p className="text-sm text-gray-500">@{post.user.username}</p>
						<div className="flex items-center text-xs text-gray-400 mt-1">
							<Mail className="h-3 w-3 mr-1" />
							<span>{post.user.email}</span>
						</div>
					</div>
				</div>
			</header>

			<div className="prose prose-lg max-w-none">
				<div className="text-gray-700 leading-relaxed whitespace-pre-line">
					{post.body}
				</div>
			</div>
		</div>
	)
}

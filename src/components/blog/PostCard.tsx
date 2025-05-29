import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { truncateText } from '@/lib/utils'
import { Post, User } from '@/types/blog'
import { User as UserIcon } from 'lucide-react'
import Link from 'next/link'

interface PostCardProps {
	post: Post & { user: User }
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Link
			href={`/posts/${post.id}`}
			className="group block transition-all ease-in-out duration-300"
		>
			<Card className="h-full hover:shadow-lg  group-hover:border-blue-300  hover:bg-muted/50 transition-all ease-in-out duration-300">
				<CardHeader>
					<div className="flex items-center justify-between pb-4">
						<Badge variant="outline">Post #{post.id}</Badge>
						<div className="flex items-center gap-1 text-sm text-muted-foreground">
							<UserIcon className="h-4 w-4 text-chart-4" />
							{post?.user?.name}
						</div>
					</div>
					<CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-all ease-in-out duration-300">
						{post.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<HoverCard>
						<HoverCardTrigger asChild>
							<p className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
								{truncateText(post.body, 120)}
							</p>
						</HoverCardTrigger>
						<HoverCardContent className="w-80 p-4">
							<div className="space-y-2">
								<p className="text-sm text-muted-foreground">{post.body}</p>
							</div>
						</HoverCardContent>
					</HoverCard>
				</CardContent>
			</Card>
		</Link>
	)
}

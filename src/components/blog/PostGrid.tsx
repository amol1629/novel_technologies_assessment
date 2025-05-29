import { Post, User } from '@/types/blog'
import PostCard from './PostCard'

interface PostGridProps {
	posts: (Post & { user: User })[]
}

export default function PostGrid({ posts }: PostGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{posts.map((post, index) => (
				<div
					key={post.id}
					className="animate-fade-in"
					style={{ animationDelay: `${index * 0.1}s` }}
				>
					<PostCard post={post} />
				</div>
			))}
		</div>
	)
}

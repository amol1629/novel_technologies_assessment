import PostCard from './PostCard'
import { Post } from '@/types/blog'

interface PostGridProps {
	posts: Post[]
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

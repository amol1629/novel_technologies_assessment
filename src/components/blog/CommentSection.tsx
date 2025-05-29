import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Comment } from '@/types/blog'
import { MessageCircle, Mail } from 'lucide-react'

interface CommentSectionProps {
	comments: Comment[]
}

export default function CommentSection({ comments }: CommentSectionProps) {
	return (
		<section className="mt-12 animate-fade-in">
			<div className="flex items-center space-x-2 mb-6">
				<MessageCircle className="h-5 w-5 text-gray-600" />
				<h2 className="text-2xl font-bold text-gray-900">
					Comments ({comments.length})
				</h2>
			</div>

			<div className="space-y-4">
				{comments.map((comment, index) => (
					<Card
						key={comment.id}
						className="animate-fade-in"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<CardHeader className="pb-3">
							<div className="flex items-center justify-between">
								<CardTitle className="text-lg font-semibold text-gray-900">
									{comment.name}
								</CardTitle>
								<Badge variant="outline">#{comment.id}</Badge>
							</div>
							<div className="flex items-center text-sm text-gray-500">
								<Mail className="h-3 w-3 mr-1" />
								<span>{comment.email}</span>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-gray-700 leading-relaxed">{comment.body}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

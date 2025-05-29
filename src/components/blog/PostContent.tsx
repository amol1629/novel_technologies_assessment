import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CircleUserRoundIcon as UserIcon } from 'lucide-react'
import Link from 'next/link'

import { Post, User } from '@/types/blog'

interface PostContentProps {
	post: Post & { user: User }
}

export default function PostContent({ post }: PostContentProps) {
	return (
		<div className="">
			<div className="mb-4">
				<Link href="/">
					<Button
						variant="ghost"
						className="hover:bg-purple-50 rounded-xl mb-4 text-indigo-700 hover:text-purple-900 transition-all duration-500 ease-in-out"
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Posts
					</Button>
				</Link>
			</div>

			<div className="animate-fade-in p-6 md:p-10  mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-xl hover:-translate-y-1  border border-gray-200 hover:shadow-lg shadow-indigo-100 group-hover:border-indigo-500 group-hover:bg-indigo-50/50 transition-all duration-500 ease-in-out">
				<div className="flex items-center justify-between gap-8 mb-4 ">
					<Badge
						variant="secondary"
						className="text-sm px-3 py-1 rounded-full bg-purple-50 text-indigo-700"
					>
						Post #{post?.id}
					</Badge>

					<div className="flex items-center gap-1.5 pt-2 text-sm text-yellow-600">
						<UserIcon className="h-4 w-4 " />
						<span>Posted by {post?.user?.name}</span>
					</div>
				</div>
				<div className="my-8">
					<h1 className="text-2xl font-bold  bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-blue-700 transition-colors duration-300 ">
						{post?.title}
					</h1>
				</div>

				<p className="text-md italic text-gray-700">{post?.body}</p>
			</div>
		</div>
	)
}

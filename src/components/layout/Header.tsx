import Link from 'next/link'
import { BookOpen, Home } from 'lucide-react'

export default function Header() {
	return (
		<header className="bg-white shadow-sm border-b">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
					>
						<BookOpen className="h-6 w-6" />
						<span>Modern Blog</span>
					</Link>

					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
						>
							<Home className="h-4 w-4" />
							<span>Home</span>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

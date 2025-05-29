import { BookOpen, Github } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="bg-gradient-to-r from-gray-50 to-indigo-50 border-b border-gray-200/70 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-3 sm:py-4">
				<nav className="flex items-center justify-between">
					<div className="flex items-center space-x-3 sm:space-x-4">
						<Link href="/" className="flex items-center space-x-2 group">
							<BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
							<span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-blue-700 transition-colors">
								Modern Blog
							</span>
						</Link>
					</div>

					<div className="flex items-center">
						<Link
							href="https://github.com/amol1629/novel_technologies_assessment"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 px-3 py-1.5 sm:py-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-xs hover:shadow-sm group"
						>
							<Github className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100 group-hover:text-white transition-colors" />
							<span className="text-sm sm:text-base text-gray-100 group-hover:text-white font-medium">
								GitHub
							</span>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

import { BookOpen, Github } from 'lucide-react' // Changed from Code to Github
import Link from 'next/link'

export default function Header() {
	return (
		<header className="bg-white shadow-sm border-b">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex items-center justify-between ">
					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
						>
							<BookOpen className="h-6 w-6" />
							<span>Modern Blog</span>
						</Link>
					</div>

					<div className="flex items-center space-x-4 ">
						<Link
							href="https://github.com/amol1629/novel_technologies_assessment"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
						>
							<Github className="h-4 w-4" /> {/* Changed from Code to Github */}
							<span>GitHub</span>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}

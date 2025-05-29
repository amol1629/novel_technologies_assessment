import { BookOpen, Github } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-indigo-50/95 to-purple-50/95 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-indigo-100/50">
			<div className="container mx-auto px-4 py-3 sm:py-4">
				<nav className="flex items-center justify-between">
					{/* Logo Section */}
					<div className="flex items-center space-x-3 sm:space-x-4">
						<Link
							href="/"
							className="flex items-center space-x-2 group relative overflow-hidden"
						>
							<div className="relative">
								<BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 group-hover:text-indigo-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-4" />

							</div>
							<div className="relative">
								<span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:via-purple-700 group-hover:to-blue-700 transition-all duration-300">
									Modern Blog
								</span>
								<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
							</div>

						</Link>
					</div>

					{/* GitHub Button */}
					<div className="flex items-center">
						<Link
							href="https://github.com/amol1629/novel_technologies_assessment"
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex items-center space-x-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-900/25 group overflow-hidden transform hover:scale-105 hover:-translate-y-0.5"
						>
							{/* Animated background overlay */}
							<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>



							<Github className="h-4 w-4 sm:h-5 sm:w-5 text-slate-100 group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
							<span className="text-sm sm:text-base text-slate-100 group-hover:text-white font-medium relative z-10 transition-all duration-300">
								GitHub
							</span>

							{/* Glow effect */}
							<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-indigo-600/20 group-hover:via-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300 blur-sm"></div>
						</Link>
					</div>
				</nav>
			</div>

			{/* Subtle bottom glow */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"></div>
		</header>
	)
}

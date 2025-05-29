import { Github, Globe, Linkedin } from 'lucide-react'
import Link from 'next/link'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Footer() {
	return (
		<footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center gap-4">
					{/* Name and social links */}
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<p className="text-gray-700 font-medium tracking-wide text-sm sm:text-base">
							Crafted by{' '}
							<span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-semibold">
								Amol Rathod
							</span>
						</p>

						<div className="hidden sm:block h-5 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

						<div className="flex space-x-5">
							<TooltipProvider delayDuration={100}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://www.linkedin.com/in/amol-rathod-44b4aa230/"
											target="_blank"
											rel="noopener noreferrer"
											className="group p-2 rounded-lg bg-white hover:bg-indigo-50 border border-indigo-200 shadow-xs hover:shadow-sm transition-all"
											aria-label="LinkedIn"
										>
											<Linkedin className="h-5 w-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
										</Link>
									</TooltipTrigger>
									<TooltipContent side="top" className="bg-gray-800 text-white">
										<p>Connect on LinkedIn</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://github.com/amol1629/"
											target="_blank"
											rel="noopener noreferrer"
											className="group p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
											aria-label="GitHub"
										>
											<Github className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
										</Link>
									</TooltipTrigger>
									<TooltipContent side="top" className="bg-gray-800 text-white">
										<p>View GitHub profile</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://amol-portfolio-website.vercel.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="group p-2 rounded-lg bg-white hover:bg-purple-50 border border-purple-200 shadow-xs hover:shadow-sm transition-all"
											aria-label="Portfolio"
										>
											<Globe className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
										</Link>
									</TooltipTrigger>
									<TooltipContent side="top" className="bg-gray-800 text-white">
										<p>Visit portfolio</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>

					{/* Copyright */}
					<p className="text-xs text-gray-400 mt-2">
						© {new Date().getFullYear()} All rights reserved • Built with
						Next.js
					</p>
				</div>
			</div>
		</footer>
	)
}

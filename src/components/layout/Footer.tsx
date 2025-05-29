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
		<footer className="bg-gray-50 border-t">
			<div className="container mx-auto px-4 py-6">
				<div className="flex flex-col items-center gap-2">
					{/* Name and social links in one line */}
					<div className="flex items-center gap-4">
						<p className="text-gray-700 font-medium tracking-wide">
							Crafted by{' '}
							<span className="text-indigo-600 font-semibold">Amol Rathod</span>
						</p>
						<div className="h-4 w-px bg-gray-300"></div>{' '}
						{/* Vertical divider */}
						<div className="flex space-x-4">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://www.linkedin.com/in/amol-rathod-44b4aa230/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-500 hover:text-indigo-600 transition-colors"
											aria-label="LinkedIn"
										>
											<Linkedin className="h-5 w-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>LinkedIn</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://github.com/amol1629/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-500 hover:text-gray-800 transition-colors"
											aria-label="GitHub"
										>
											<Github className="h-5 w-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>GitHub</p>
									</TooltipContent>
								</Tooltip>

								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://amol-portfolio-website.vercel.app/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-500 hover:text-purple-600 transition-colors"
											aria-label="Portfolio"
										>
											<Globe className="h-5 w-5" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>Portfolio</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>

					{/* Copyright in another line */}
					<p className="text-xs text-gray-400">
						© {new Date().getFullYear()} All rights reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

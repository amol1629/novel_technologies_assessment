import { Heart } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="bg-gray-50 border-t">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center">
					<p className="text-gray-600 flex items-center justify-center space-x-1">
						<span>Built with</span>
						<Heart className="h-4 w-4 text-red-500" />
						<span>using Next.js, TypeScript & TailwindCSS</span>
					</p>
					<p className="text-sm text-gray-500 mt-2">
						© 2024 Modern Blog. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

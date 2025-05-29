import { Heart } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="bg-gray-50 border-t">
			<div className="container mx-auto px-4 py-6">
				<div className="text-center">
					<p className="text-gray-700 font-medium tracking-wide">
						Crafted by{' '}
						<span className="text-indigo-600 font-semibold">Amol Rathod</span>
					</p>
					<div className="flex items-center justify-center mt-2 space-x-1">
						<span className="text-xs text-gray-500">with</span>
						<Heart className="h-3 w-3 text-pink-500 fill-pink-500" />
						<span className="text-xs text-gray-500">and modern tech</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

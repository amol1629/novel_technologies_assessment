// src/app/loading.tsx
export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="flex flex-col items-center justify-center space-y-8">
				{/* Animated spinner */}
				<div className="relative">
					<div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
				</div>

				{/* Loading text */}
				<div className="space-y-4">
					<h2 className="text-xl text-center font-semibold text-gray-700">Loading...</h2>
					<p className="text-gray-600 max-w-md mx-auto">
						Please wait while we fetch the content for you.
					</p>
				</div>

				{/* Optional: Animated dots */}
				<div className="flex space-x-1">
					<div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
					<div
						className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
						style={{ animationDelay: '0.1s' }}
					></div>
					<div
						className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
						style={{ animationDelay: '0.2s' }}
					></div>
				</div>
			</div>
		</div>
	)
}

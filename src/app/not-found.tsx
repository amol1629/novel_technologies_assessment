import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import notFoundImage from '../../public/not-found.jpg'

export default function NotFound() {
	return (
		<div className="min-h-[50vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
			<div className="max-w-md w-full space-y-6 text-center">
				<div className="relative w-80 h-70 mx-auto">
					<Image
						src={notFoundImage}
						alt="404 Not Found"
						fill
						className="object-contain"
						priority
					/>
				</div>
				<div className="space-y-2">
					<p className="text-gray-500">
						The page you are looking for does not exist or has been moved.
					</p>
				</div>

				<Link href="/">
					<Button
						size="lg"
						className="px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						Return Home
					</Button>
				</Link>
			</div>
		</div>
	)
}

import { Skeleton } from '@/components/ui/skeleton'

export default function PostLoading() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-4">
				<Skeleton className="h-8 w-3/4" />
				<Skeleton className="h-4 w-1/4" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-3/4" />
				</div>
			</div>
		</div>
	)
}

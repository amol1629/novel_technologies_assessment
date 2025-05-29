// src/components/ui/pagination/Pagination.tsx
'use client'


import { Button } from '@/components/ui/button'
import { usePagination } from './usePagination'

interface PaginationProps {
	totalItems: number
	currentPage: number
	onPageChange: (page: number) => void
	itemsPerPage?: number
	className?: string
}

export const Pagination = ({
	totalItems,
	currentPage,
	onPageChange,
	itemsPerPage = 10,
	className = '',
}: PaginationProps) => {
	const {
		totalPages,
		startIndex,
		endIndex,
		visiblePages,
		paginate,
		showFirstPage,
		showLastPage,
		showLeftEllipsis,
		showRightEllipsis,
	} = usePagination({
		totalItems,
		currentPage,
		itemsPerPage,
		onPageChange,
	})

	if (totalPages <= 1) return null

	return (
		<div
			className={`flex flex-col xs:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-200 ${className}`}
		>
			<div className="text-sm text-gray-500 whitespace-nowrap">
				Showing <span className="font-medium">{startIndex + 1}</span>-
				<span className="font-medium">{endIndex}</span> of{' '}
				<span className="font-medium">{totalItems}</span> items
			</div>

			<div className="flex items-center gap-1 sm:gap-2">
				{/* Previous Buttons */}
				<Button
					variant="outline"
					size="sm"
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="hidden xs:inline-flex"
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="icon"
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="xs:hidden"
					aria-label="Previous page"
				>
					&lt;
				</Button>

				{/* Page Numbers */}
				<div className="flex items-center gap-1">
					{showFirstPage && (
						<>
							<Button
								variant={currentPage === 1 ? 'default' : 'outline'}
								size="sm"
								onClick={() => paginate(1)}
								className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
							>
								1
							</Button>
							{showLeftEllipsis && <span className="px-1">...</span>}
						</>
					)}

					{visiblePages.map((pageNum) => (
						<Button
							key={pageNum}
							variant={currentPage === pageNum ? 'default' : 'outline'}
							size="sm"
							onClick={() => paginate(pageNum)}
							className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
						>
							{pageNum}
						</Button>
					))}

					{showLastPage && (
						<>
							{showRightEllipsis && <span className="px-1">...</span>}
							<Button
								variant={currentPage === totalPages ? 'default' : 'outline'}
								size="sm"
								onClick={() => paginate(totalPages)}
								className="w-8 h-8 p-0 text-xs sm:w-10 sm:h-10 sm:text-sm"
							>
								{totalPages}
							</Button>
						</>
					)}
				</div>

				{/* Next Buttons */}
				<Button
					variant="outline"
					size="sm"
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="hidden xs:inline-flex"
				>
					Next
				</Button>
				<Button
					variant="outline"
					size="icon"
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="xs:hidden"
					aria-label="Next page"
				>
					&gt;
				</Button>
			</div>
		</div>
	)
}

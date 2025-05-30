
import { useMemo, useCallback } from 'react'


interface UsePaginationProps {
	totalItems: number
	currentPage: number
	itemsPerPage?: number
	onPageChange: (page: number) => void
}

export const usePagination = ({
	totalItems,
	currentPage,
	itemsPerPage = 10,
	onPageChange,
}: UsePaginationProps) => {
	// Calculate total number of pages needed
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	// Memoized function to handle page navigation
	// Prevents unnecessary recreations unless dependencies change
	const paginate = useCallback(
		(pageNumber: number) => {
			// Don't allow navigation to invalid pages
			if (pageNumber < 1 || pageNumber > totalPages) return
			onPageChange(pageNumber)
		},
		[totalPages, onPageChange],
	)

	// Calculate the current page's item range (start and end indices)
	const { startIndex, endIndex } = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage
		const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
		return { startIndex, endIndex }
	}, [currentPage, itemsPerPage, totalItems])

	// Determine which page numbers to show in the pagination controls
	const visiblePages = useMemo(() => {
		// If 5 or fewer pages, show all
		if (totalPages <= 5)
			return Array.from({ length: totalPages }, (_, i) => i + 1)

		// If near the beginning, show first 5 pages
		if (currentPage <= 3) return [1, 2, 3, 4, 5]

		// If near the end, show last 5 pages
		if (currentPage >= totalPages - 2)
			return [
				totalPages - 4,
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			]

		// Otherwise, show 2 pages before and after current page
		return [
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
		]
	}, [currentPage, totalPages])

	// Return all pagination state and controls
	return {
		totalPages,
		currentPage,
		startIndex,
		endIndex,
		visiblePages,
		paginate,

		// Boolean flags for UI controls:
		showFirstPage: totalPages > 5 && currentPage > 3, // Show "First" button
		showLastPage: totalPages > 5 && currentPage < totalPages - 2, // Show "Last" button
		showLeftEllipsis: totalPages > 5 && currentPage > 4, // Show "..." on left
		showRightEllipsis: totalPages > 5 && currentPage < totalPages - 3, // Show "..." on right
	}
}

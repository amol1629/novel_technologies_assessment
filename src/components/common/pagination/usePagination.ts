// src/components/ui/pagination/usePagination.ts
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
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	const paginate = useCallback(
		(pageNumber: number) => {
			if (pageNumber < 1 || pageNumber > totalPages) return
			onPageChange(pageNumber)
		},
		[totalPages, onPageChange],
	)

	const { startIndex, endIndex } = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage
		const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
		return { startIndex, endIndex }
	}, [currentPage, itemsPerPage, totalItems])

	const visiblePages = useMemo(() => {
		if (totalPages <= 5)
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		if (currentPage <= 3) return [1, 2, 3, 4, 5]
		if (currentPage >= totalPages - 2)
			return [
				totalPages - 4,
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			]
		return [
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
		]
	}, [currentPage, totalPages])

	return {
		totalPages,
		currentPage,
		startIndex,
		endIndex,
		visiblePages,
		paginate,
		showFirstPage: totalPages > 5 && currentPage > 3,
		showLastPage: totalPages > 5 && currentPage < totalPages - 2,
		showLeftEllipsis: totalPages > 5 && currentPage > 4,
		showRightEllipsis: totalPages > 5 && currentPage < totalPages - 3,
	}
}

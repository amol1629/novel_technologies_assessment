import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}


/**
 * Truncates text to a specified length with ellipsis
 * @param text - Input string to truncate
 * @param maxLength - Maximum allowed length before truncation
 * @returns Truncated string with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text
	return text.substring(0, maxLength) + '...'
}


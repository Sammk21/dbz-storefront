import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function for constructing className strings conditionally
 * and merging Tailwind CSS classes without style conflicts.
 *
 * @param inputs - Class names, objects, or arrays to be merged
 * @returns A string of merged and optimized class names
 *
 * @example
 * // Basic usage
 * cn('p-4', 'bg-blue-500') // 'p-4 bg-blue-500'
 *
 * // With conditions
 * cn('p-4', isActive && 'bg-blue-500') // 'p-4 bg-blue-500' or 'p-4'
 *
 * // With Tailwind class conflicts (resolves to the last one)
 * cn('p-2 p-4', 'bg-red-500 bg-blue-500') // 'p-4 bg-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

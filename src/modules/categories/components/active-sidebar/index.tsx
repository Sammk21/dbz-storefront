"use client"

import { X } from "lucide-react"
import { FilterState } from "../category-filter"

interface ActiveFiltersProps {
  activeFilters: FilterState
  onFilterChange: (filterType: keyof FilterState, value: any) => void
  onClearAll: () => void
}

const ActiveFilters = ({
  activeFilters,
  onFilterChange,
  onClearAll,
}: ActiveFiltersProps) => {
  const getActiveFilterCount = () => {
    let count = 0
    if (activeFilters.sizes.length > 0) count++
    if (activeFilters.colors.length > 0) count++
    if (activeFilters.brands.length > 0) count++
    if (activeFilters.availability !== "all") count++
    if (activeFilters.rating > 0) count++
    if (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 1000)
      count++
    return count
  }

  if (getActiveFilterCount() === 0) return null

  return (
    <div className="py-4 flex flex-wrap items-center gap-2">
      <span className="text-sm text-gray-500">Active filters:</span>

      {/* Size Filters */}
      {activeFilters.sizes.map((size) => (
        <span
          key={size}
          className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full"
        >
          Size: {size}
          <button
            onClick={() =>
              onFilterChange(
                "sizes",
                activeFilters.sizes.filter((s) => s !== size)
              )
            }
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      {/* Color Filters */}
      {activeFilters.colors.map((color) => (
        <span
          key={color}
          className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full"
        >
          Color: {color}
          <button
            onClick={() =>
              onFilterChange(
                "colors",
                activeFilters.colors.filter((c) => c !== color)
              )
            }
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      {/* Brand Filters */}
      {activeFilters.brands.map((brand) => (
        <span
          key={brand}
          className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full"
        >
          Brand: {brand}
          <button
            onClick={() =>
              onFilterChange(
                "brands",
                activeFilters.brands.filter((b) => b !== brand)
              )
            }
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      {/* Availability Filter */}
      {activeFilters.availability !== "all" && (
        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full">
          {activeFilters.availability === "in-stock" && "In Stock"}
          {activeFilters.availability === "sale" && "On Sale"}
          {activeFilters.availability === "new" && "New Arrivals"}
          <button
            onClick={() => onFilterChange("availability", "all")}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      )}

      {/* Price Range Filter */}
      {(activeFilters.priceRange[0] > 0 ||
        activeFilters.priceRange[1] < 1000) && (
        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full">
          Price: ${activeFilters.priceRange[0]} - ${activeFilters.priceRange[1]}
          <button
            onClick={() => onFilterChange("priceRange", [0, 1000])}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      )}

      {/* Rating Filter */}
      {activeFilters.rating > 0 && (
        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm rounded-full">
          Rating: {activeFilters.rating}+ stars
          <button
            onClick={() => onFilterChange("rating", 0)}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      )}

      {/* Clear All Button */}
      <button
        onClick={onClearAll}
        className="text-sm text-red-600 hover:text-red-800 underline ml-2"
      >
        Clear all
      </button>
    </div>
  )
}

export default ActiveFilters

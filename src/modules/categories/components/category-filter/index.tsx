"use client"

import { useState, useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  ChevronDown,
  Grid,
  List,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import FilterSidebar from "../filter-sidebar"
import ActiveFilters from "../active-sidebar"

interface CategoryFiltersProps {
  sortBy: SortOptions
  productsCount: number
}

export interface FilterState {
  priceRange: [number, number]
  sizes: string[]
  colors: string[]
  categories: string[]
  availability: string
  rating: number
  brands: string[]
}

const CategoryFilters = ({ sortBy, productsCount }: CategoryFiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // State management
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    categories: [],
    availability: "all",
    rating: 0,
    brands: [],
  })

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  const handleSortChange = (newSort: string) => {
    setQueryParams("sortBy", newSort)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    if (value) {
      setQueryParams("search", value)
    } else {
      const params = new URLSearchParams(searchParams)
      params.delete("search")
      router.push(`${pathname}?${params.toString()}`)
    }
  }

  const sortOptions = [
    { value: "created_at", label: "Latest Arrivals" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "relevance", label: "Relevance" },
    { value: "popular", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
  ]

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({
      priceRange: [0, 1000],
      sizes: [],
      colors: [],
      categories: [],
      availability: "all",
      rating: 0,
      brands: [],
    })
  }

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

  return (
    <>
      {/* Filter and Sort Bar */}
      <div className=" z-40 w-full ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center w-full justify-between py-4">
            <div className="flex items-center space-x-6">
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 text-xs font-medium hover:text-gray-600 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
                {getActiveFilterCount() > 0 && (
                  <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                    {getActiveFilterCount()}
                  </span>
                )}
              </button>

              {/* Search Bar */}
              {/* <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64"
                />
              </div> */}
            </div>

            <div className="flex items-center space-x-6">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  className="appearance-none bg-transparent border-none text-xs font-medium pr-8 focus:outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* View Toggle */}
              {/* <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-black text-white"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-black text-white"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div> */}

              {/* Results Count */}
              <span className="text-xs text-gray-500">
                {productsCount} items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActiveFilters
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearAll={clearAllFilters}
        />
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={clearAllFilters}
      />
    </>
  )
}

export default CategoryFilters

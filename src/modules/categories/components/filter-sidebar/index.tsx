"use client"

import { X } from "lucide-react"
import { FilterState } from "../category-filter"

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  activeFilters: FilterState
  onFilterChange: (filterType: keyof FilterState, value: any) => void
  onClearAll: () => void
}

const FilterSidebar = ({
  isOpen,
  onClose,
  activeFilters,
  onFilterChange,
  onClearAll,
}: FilterSidebarProps) => {
  // Filter options data
  const filterOptions = {
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      "Black",
      "White",
      "Gray",
      "Navy",
      "Beige",
      "Brown",
      "Red",
      "Blue",
      "Green",
    ],
    brands: ["Zara", "Massimo Dutti", "Bershka", "Pull & Bear", "Stradivarius"],
    availability: [
      { value: "all", label: "All items" },
      { value: "in-stock", label: "In stock" },
      { value: "sale", label: "On sale" },
      { value: "new", label: "New arrivals" },
    ],
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Filter Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Filters</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium mb-4">Price Range</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={activeFilters.priceRange[1]}
                  onChange={(e) =>
                    onFilterChange("priceRange", [
                      activeFilters.priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full accent-black"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${activeFilters.priceRange[0]}</span>
                  <span>${activeFilters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-sm font-medium mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {filterOptions.sizes.map((size) => (
                  <label key={size} className="relative">
                    <input
                      type="checkbox"
                      checked={activeFilters.sizes.includes(size)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onFilterChange("sizes", [
                            ...activeFilters.sizes,
                            size,
                          ])
                        } else {
                          onFilterChange(
                            "sizes",
                            activeFilters.sizes.filter((s) => s !== size)
                          )
                        }
                      }}
                      className="sr-only"
                    />
                    <div
                      className={`p-3 text-center text-sm border rounded cursor-pointer transition-colors ${
                        activeFilters.sizes.includes(size)
                          ? "bg-black text-white border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-sm font-medium mb-4">Color</h3>
              <div className="space-y-2">
                {filterOptions.colors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.colors.includes(color)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onFilterChange("colors", [
                            ...activeFilters.colors,
                            color,
                          ])
                        } else {
                          onFilterChange(
                            "colors",
                            activeFilters.colors.filter((c) => c !== color)
                          )
                        }
                      }}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-sm font-medium mb-4">Brand</h3>
              <div className="space-y-2">
                {filterOptions.brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.brands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onFilterChange("brands", [
                            ...activeFilters.brands,
                            brand,
                          ])
                        } else {
                          onFilterChange(
                            "brands",
                            activeFilters.brands.filter((b) => b !== brand)
                          )
                        }
                      }}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <h3 className="text-sm font-medium mb-4">Availability</h3>
              <div className="space-y-2">
                {filterOptions.availability.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="availability"
                      value={option.value}
                      checked={activeFilters.availability === option.value}
                      onChange={(e) =>
                        onFilterChange("availability", e.target.value)
                      }
                      className="text-black focus:ring-black"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Footer */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <button
              onClick={onClearAll}
              className="w-full py-3 border border-gray-300 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              Clear All Filters
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar

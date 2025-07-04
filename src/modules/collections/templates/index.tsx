import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import { CategoryHeader } from "@modules/categories/components/category-header"
import CategoryFilters from "@modules/categories/components/category-filter"
import { CollectionHeader } from "../components/collection-header"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="flex flex-col w-full small:items-start py-6 pt-12">
      {/* Header Section - Server Component */}
      <CollectionHeader collection={collection} />

      {/* Filter and Sort Bar - Client Component */}
      <CategoryFilters
        sortBy={sort}
        productsCount={collection.products?.length || 0}
      />
      <div className="w-full">
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={collection.products?.length}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            collectionId={collection.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface CollectionHeaderProps {
  collection: HttpTypes.StoreCollection
}

function CollectionHeader({ collection }: CollectionHeaderProps) {
  return (
    <div className="border-b border-gray-100 w-full ">
      <div className=" mx-auto px-4 sm:px-3 lg:px-8 py-3 ">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs mb-3">
          <LocalizedClientLink
            href="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Home
          </LocalizedClientLink>

          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">{collection.title}</span>
        </nav>

        {/* Category Header */}
        <div className="">
          <h1
            className="text-2xl font-medium  tracking-wide"
            data-testid="category-page-title"
          >
            {collection.title}
          </h1>
          {/* {collection && (
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              {collection.description}
            </p>
          )} */}
        </div>
      </div>
    </div>
  )
}

export { CollectionHeader }

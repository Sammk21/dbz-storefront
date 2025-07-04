import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface CategoryHeaderProps {
  category: HttpTypes.StoreProductCategory
  parents: HttpTypes.StoreProductCategory[]
}

function CategoryHeader({ category, parents }: CategoryHeaderProps) {
  return (
    <div className="border-b border-gray-100 w-full">
      <div className=" mx-auto px-4 sm:px-3 lg:px-8 py-3">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-4">
          <LocalizedClientLink
            href="/"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Home
          </LocalizedClientLink>
          {parents.map((parent) => (
            <span key={parent.id} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              <LocalizedClientLink
                href={`/categories/${parent.handle}`}
                className="text-gray-500 hover:text-black transition-colors"
                data-testid="breadcrumb-link"
              >
                {parent.name}
              </LocalizedClientLink>
            </span>
          ))}
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="">
          <h1
            className="text-4xl font-light  tracking-wide"
            data-testid="category-page-title"
          >
            {category.name}
          </h1>
          {category.description && (
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              {category.description}
            </p>
          )}
        </div>

        {/* Subcategories */}
        {category.category_children &&
          category.category_children.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {category.category_children.map((child) => (
                  <InteractiveLink
                    key={child.id}
                    href={`/categories/${child.handle}`}
                    // className="px-6 py-2 border border-gray-200 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {child.name}
                  </InteractiveLink>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export { CategoryHeader }

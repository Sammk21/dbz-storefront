import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Thumbnail } from "@modules/products/components/thumbnail"
import { HttpTypes } from "@medusajs/types"
import ProductPriceListing from "@modules/products/components/product-price-in-listing"

export const Slider = ({
  products,
  isFeatured,
  region,
}: {
  products: HttpTypes.StoreProduct[]
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) => {
  return (
    <div className="relative grid w-full  sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-3">
      {products &&
        products.map((product, i) => (
          <div key={i}>
            <LocalizedClientLink
              href={`/products/${product.handle}`}
              className="group"
            >
              <Thumbnail
                className="pointer-events-none h-72"
                thumbnail={product?.thumbnail}
              />
              <div className="flex text-xs sm:text-sm lg:text-lg mt-4 flex-col px-4">
                <p
                  className="text-ui-fg-subtle capitalize"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "calc(100% - 40px)",
                  }}
                >
                  {product.title}
                </p>

                <ProductPriceListing product={product} />
              </div>
            </LocalizedClientLink>
          </div>
        ))}
    </div>
  )
}

export default Slider

import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Thumbnail } from "@modules/products/components/thumbnail"
import { HttpTypes } from "@medusajs/types"
import ProductPriceListing from "@modules/products/components/product-price-in-listing"
import CardAddToCart from "@modules/products/components/card-add-to-cart"

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
    <div className="relative grid w-full grid-cols-2 sm:grid-cols-3 gap-1 md:grid-cols-4 ">
      {products &&
        products.map((product, i) => (
          <div className="" key={i}>
            <LocalizedClientLink
              href={`/products/${product.handle}`}
              className="group"
            >
              <Thumbnail
                size="small"
                className="pointer-events-none  "
                thumbnail={product?.thumbnail}
              />
              <div
                className={`text-xs px-2 flex justify-between items-center   border-stone-400  mt-2 py-2 px-1  `}
              >
                <p className="font-semibold capitalize">{product.title}</p>

                <ProductPriceListing product={product} />
              </div>
            </LocalizedClientLink>
            <div className="flex px-2 flex-col justify-center w-full small:sticky small:top-48 small:py-0  py-8 gap-y-12">
              <CardAddToCart
                disabled={false}
                product={product}
                region={region}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Slider

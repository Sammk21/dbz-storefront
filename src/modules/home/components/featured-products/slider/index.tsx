import React, { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Thumbnail } from "@modules/products/components/thumbnail"
import { HttpTypes } from "@medusajs/types"
import ProductPriceListing from "@modules/products/components/product-price-in-listing"
import { Source_Code_Pro } from "next/font/google"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductActions from "@modules/products/components/product-actions"
import ProductActionsWrapper from "@modules/products/templates/product-actions-wrapper"
import CardAddToCart from "@modules/products/components/card-add-to-cart"

export const source_code = Source_Code_Pro({ subsets: ["latin"] })

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
    <div className="relative grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
      {products &&
        products.map((product, i) => (
          <div className="" key={i}>
            <LocalizedClientLink
              href={`/products/${product.handle}`}
              className="group"
            >
              <Thumbnail
                size="small"
                className="pointer-events-none group-hover:scale-110"
                thumbnail={product?.thumbnail}
              />
              <div
                className={`flex text-xs lg:text-sm  border-stone-400  mt-4 py-2 flex-col px-4 ${source_code.className}`}
              >
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
            <div className="flex flex-col justify-center w-full small:sticky small:top-48 small:py-0 px-2 py-8 gap-y-12">
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

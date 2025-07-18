import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {Thumbnail} from "../thumbnail"
import PreviewPrice from "./price"
import CardAddToCart from "../card-add-to-cart"
import { source_code } from "@modules/home/components/featured-products/slider"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <>
      <LocalizedClientLink
        href={`/products/${product.handle}`}
        className="group"
      >
        <div data-testid="product-wrapper">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="small"
            isFeatured={isFeatured}
          />
          <div className={`flex txt-compact-medium mt-4 justify-center`}>
            <p
              className={`text-ui-fg-subtle  ${source_code.className}`}
              data-testid="product-title"
            >
              {product.title}
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </LocalizedClientLink>
      <CardAddToCart disabled={false} product={product} region={region} />
    </>
  )
}

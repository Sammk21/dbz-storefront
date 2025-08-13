import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { source_code } from "@modules/home/components/featured-products/slider"
import ProductPrice from "@modules/products/components/product-price"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 mb-11 ">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium mb-0 hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <div className="flex justify-between items-center text-black text-xs">
          <Heading
            level="h2"
            className={`  uppercase font-medium text-xs leading-[3rem] `}
            data-testid="product-title"
          >
            {product.title}
          </Heading>
          <ProductPrice product={product} />
        </div>

        <Text
          className={`text-xs  whitespace-pre-line text-gray-600 ${source_code.className}`}
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
      <Text
        className={`text-xs mb-8 whitespace-pre-line uppercase text-gray-600 ${source_code.className}`}
        data-testid="product-description"
      >
        Model is 188 wearing size M/32
      </Text>
    </div>
  )
}

export default ProductInfo

import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { source_code } from "@modules/home/components/featured-products/slider"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium  hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className={`text-[4rem] textglobal uppercase font-medium text-global humane  leading-[3rem] `}
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        {/* <h1 className="sm:text-[14vw] humane lg:text-[10vw] text-[30vw] uppercase">
          {product.title}
        </h1> */}
        <Text
          className={`text-medium whitespace-pre-line text-gray-600 ${source_code.className}`}
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo

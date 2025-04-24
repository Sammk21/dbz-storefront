import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import Slider from "../slider"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      //@ts-ignore
      //TODO: fix type issue
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 ">
      <div className="flex justify-between mb-8">
        <Text className="textglobal text-xl text-3xl  leading-none flex items-baseline">
          <span className="">Collection: {collection.title}</span>
        </Text>
      </div>

      <div className="sldier-container overflow-hidden">
        <Slider products={pricedProducts} region={region} />
      </div>
    </div>
  )
}

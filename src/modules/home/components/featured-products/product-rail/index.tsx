import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import Slider from "../slider"
import { source_code } from "@modules/home/components/featured-products/slider"

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
      fields: "*variants.calculated_price,*variants.inventory_quantity",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="sm:content-container px-1  ">
      <div className="flex justify-between mb-8">
        <Text
          className={`textglobal text-xl text-3xl text-center  leading-none flex items-baseline ${source_code.className}`}
        >
          <span className="">Collection: {collection.title}</span>
        </Text>
      </div>

      <div className="sldier-container overflow-hidden">
        <Slider products={pricedProducts} region={region} />
      </div>
    </div>
  )
}

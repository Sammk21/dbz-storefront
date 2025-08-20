import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import Slider from "../slider"
import SwiperSlider from "../slider/swiperslider"

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
    <div className="sm:container  text-black mt-4 px-0  ">
      <div className="sm:flex-row px-2 justify-between flex flex-col  place-content-center  ">
        <div className="h-full w-full">
          <h1 className="text-2xl font-sans font-semibold tracking-tight">
            Collection: {collection.title}{" "}
            <span className="text-gray-500 text-base align-top">
              {collection.products?.length}
            </span>
          </h1>
        </div>
      </div>
      <div className="sldier-container overflow-hidden pt-6">
        <div className="w-full px-0">
          <Slider products={pricedProducts} region={region} />
        </div>
      </div>
    </div>
  )
}

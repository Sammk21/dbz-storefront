import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import Slider from "../slider"
import { source_code } from "@modules/home/components/featured-products/slider"
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
    <div className="sm:content-container px-1 text-black  ">
      <div className="sm:flex-row justify-between flex flex-col  place-content-center  mb-4">
        <div className="h-full w-full">
          <h1 className="text-2xl font-semibold tracking-tight">
            {collection.title}{" "}
            <span className="text-gray-500 text-base align-top">
              {collection.products?.length}
            </span>
          </h1>
          <p className="mt-2 text-xs  leading-relaxed max-w-4xl">
            The 247 collection is created with performance and versatility in
            mind, designed to deliver on both function and style no matter the
            setting. The range includes performance tops, shorts, outerwear,
            hoodies, pants and accessories.
          </p>
        </div>
      </div>
      <div className="sldier-container overflow-hidden pt-6">
        <div className="">
          <Slider products={pricedProducts} region={region} />
        </div>
      </div>
    </div>
  )
}

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
    <div className="sm:content-container px-1  ">
      <div className="sm:flex-row justify-between flex flex-col  place-content-center  mb-4">
        <div className="h-full w-full">
          <h3
            className={` textglobal text-2xl font-semibold leading-none flex  items-baseline ${source_code.className}`}
          >
            Collection: {collection.title}
          </h3>
        </div>
        <div className="textglobal mt-3  w-full flex items-center text-xs sm:text-sm ">
          These baggy pants aren&apos;t just about style; they&apos;re about
          feeling like you&apos;re floating through space while still looking at
          Earth. Each pair is like a cosmic hug for your legs, with that perfect
          balance.
        </div>
      </div>
      <div className="sldier-container overflow-hidden pt-12">
        <div className="">
          <Slider products={pricedProducts} region={region} />
        </div>
        {/* <div className="hidden md:block">
          <SwiperSlider products={pricedProducts} region={region} />
        </div> */}
      </div>
    </div>
  )
}

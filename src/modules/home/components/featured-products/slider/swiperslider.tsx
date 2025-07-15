"use client"
import React, { useRef, useState } from "react"
import { Thumbnail } from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { ArrowBigRightIcon, ArrowBigLeftIcon, MoveRight, MoveLeft } from "lucide-react"
import { AnimatePresence, cubicBezier, motion } from "framer-motion"
import { HttpTypes } from "@medusajs/types"
import ProductPriceListing from "@modules/products/components/product-price-in-listing"
import CardAddToCart from "@modules/products/components/card-add-to-cart"
import { Source_Code_Pro } from "next/font/google"

export const source_code = Source_Code_Pro({ subsets: ["latin"] })

const SwiperSlider = ({
  products,
  isFeatured,
  region,
}: {
  products: HttpTypes.StoreProduct[]
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) => {
  const [currentTitle, setCurrentTitle] = useState(
    products && products.length > 0 ? products[0].title : ""
  )

  const titleRef = useRef(null)

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex
    const currentProduct = products[currentIndex]
    setCurrentTitle(currentProduct.title)
  }

  return (
    <>
      <div className="relative overflow-hidden slider  ">
        <Swiper
          speed={600}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={5}
          centeredSlides
          onSlideChange={handleSlideChange}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{ nextEl: ".back", prevEl: ".front" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
        >
          <div className="absolute w-[100vw]  text-[#9c9c9c68] text-[18vw]  flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase pointer-events-none overflow-hidden ">
            <AnimatePresence mode="wait">
              {currentTitle && (
                <motion.h3
                  className="humane"
                  key={currentTitle}
                  initial={{ y: "100%", rotate: 5 }}
                  animate={{ y: 0, rotate: 0 }}
                  exit={{ y: "-100%", rotate: 4 }}
                  transition={{
                    duration: 0.5,
                    ease: cubicBezier(0.19, 1.0, 0.22, 1.0),
                  }}
                  ref={titleRef}
                >
                  {currentTitle}
                </motion.h3>
              )}
            </AnimatePresence>
          </div>
          {products &&
            products.map((product, i) => (
              <>
                <SwiperSlide key={i}>
                  <div className="h-full" >
                    <LocalizedClientLink
                      href={`/products/${product.handle}`}
                      className="group"
                    >
                      <Thumbnail
                        size="large"
                        className="pointer-events-none group-hover:scale-110 w-[300px] h-[700px]"
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
                </SwiperSlide>
              </>
            ))}
        </Swiper>

        <motion.span className="back transition ease-in-out cursor-pointer z-40 p-3  text-[8vw] stroke-black  textglobal drop-shadow-lg hover:translate-x-3 absolute top-[40%]  right-0">
          <MoveRight size={48} strokeWidth={3} />
        </motion.span>
        <motion.span className="front transition ease-in-out  cursor-pointer  z-40 p-3 text-[8vw] stroke-black  textglobal drop-shadow-lg  hover:-translate-x-3  absolute top-[40%] left-0">
          <MoveLeft size={48} strokeWidth={3} />
        </motion.span>
      </div>
    </>
  )
}

export default SwiperSlider

// "use client"
// import React, { useRef, useState } from "react"
// import {Thumbnail} from "@modules/products/components/thumbnail"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import { AnimatePresence, cubicBezier, motion } from "framer-motion"
// import { ArrowLeft, ArrowRight } from "lucide-react"
// import { HttpTypes } from "@medusajs/types"
// import PreviewPrice from "@modules/products/components/product-preview/price"

// export const Slider = ({
//   products,
//   isFeatured,
//   region,
// }: {
//   products: HttpTypes.StoreProduct[]
//   isFeatured?: boolean
//   region: HttpTypes.StoreRegion
// }) => {
//   const [currentTitle, setCurrentTitle] = useState(products && products.length > 0 ? products[0].title : "")

//   const titleRef = useRef(null)

//   const handleSlideChange = (swiper:any) => {
//     const currentIndex = swiper.activeIndex
//     const currentProduct = products[currentIndex]
//     setCurrentTitle(currentProduct.title)
//   }



//   return (
//     <>
//       <div className="relative overflow-hidden slider  ">
//         <Swiper
//           speed={600}
//           pagination={{ clickable: true }}
//           effect="coverflow"
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 200,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           slidesPerView={5}
//           centeredSlides
//           onSlideChange={handleSlideChange}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           navigation={{ nextEl: ".back", prevEl: ".front" }}
//           breakpoints={{
//             0: {
//               slidesPerView: 2,
//               spaceBetween: 50,
//             },
//             420: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },

//             768: {
//               slidesPerView: 3,
//               spaceBetween: 70,
//             },
//             1080: {
//               slidesPerView: 4,
//               spaceBetween: 100,
//             },
//           }}
//         >
//           <div className="absolute w-[100vw] text-[#9c9c9c68] text-[7vw]  flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase pointer-events-none overflow-hidden ">
//             <AnimatePresence mode="wait">
//               {currentTitle && (
//                 <motion.p
//                   className="humane"
//                   key={currentTitle}
//                   initial={{ y: "100%", rotate: 5 }}
//                   animate={{ y: 0, rotate: 0 }}
//                   exit={{ y: "-100%", rotate: 4 }}
//                   transition={{
//                     duration: 0.5,
//                     ease: cubicBezier(0.19, 1.0, 0.22, 1.0),
//                   }}
//                   ref={titleRef}
//                 >
//                   {currentTitle}
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//           {products &&
//             products.map((product, i) => (
//               <>
//                 <SwiperSlide key={i}>
//                   <LocalizedClientLink
//                     href={`/products/${product.handle}`}
//                     className="group"
//                   >
//                     <Thumbnail
//                       className="pointer-events-none"
//                       thumbnail={product?.thumbnail}
                   
//                     />
//                     <div className="flex text-xs sm:text-sm lg:text-lg mt-4 justify-between">
//                       <p
//                         className="text-ui-fg-subtle capitalize"
//                         style={{
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                           whiteSpace: "nowrap",
//                           maxWidth: "calc(100% - 40px)",
//                         }}
//                       >
//                         {product.title}
//                       </p>
//                       {/* <div className="flex items-center gap-x-2 text-ui-fg-muted">
//                        {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
//                       </div> */}
//                     </div>
//                   </LocalizedClientLink>
//                 </SwiperSlide>
//               </>
//             ))}
//         </Swiper>

//         <motion.span className="back transition ease-in-out cursor-pointer z-40 p-3  text-[8vw] stroke-black  textglobal drop-shadow-lg hover:translate-x-3 absolute top-[40%]  right-0">
//           <ArrowRight />
//         </motion.span>
//         <motion.span className="front transition ease-in-out  cursor-pointer rotate-180 z-40 p-3 text-[8vw] stroke-black  textglobal drop-shadow-lg  hover:-translate-x-3  absolute top-[40%] left-0">
//           <ArrowLeft />
//         </motion.span>
//       </div>
//     </>
//   )
// }

// export default Slider


"use client"
import React, { useRef, useState, useEffect } from "react"
import Flickity from "react-flickity-component"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Thumbnail } from "@modules/products/components/thumbnail"
import { AnimatePresence, cubicBezier, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { HttpTypes } from "@medusajs/types"

// Import Flickity CSS
import "flickity/css/flickity.css"

export const Slider = ({
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
  const flickityRef = useRef<Flickity | null>(null)
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 420) {
        setSlidesPerView(1)
      } else if (width < 768) {
        setSlidesPerView(2)
      } else if (width < 1080) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSlideChange = (index: number) => {
    const currentProduct = products[index]
    setCurrentTitle(currentProduct.title)
  }

  const goNext = () => {
    if (flickityRef.current) {
      flickityRef.current.next()
    }
  }

  const goPrevious = () => {
    if (flickityRef.current) {
      flickityRef.current.previous()
    }
  }

  const flickityOptions = {
    cellAlign: "center",
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    draggable: true,
    groupCells: slidesPerView,
    freeScroll: false,
    adaptiveHeight: false,
    percentPosition: true,
  }

  return (
    <div className="relative overflow-hidden slider">
      <Flickity
        className="carousel"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        flickityRef={(flickity) => {
          flickityRef.current = flickity
        }}
        static
        //@ts-ignore
        on={{
          change: (index: any) => handleSlideChange(index),
        }}
      >
        {products &&
          products.map((product, i) => (
            <div
              key={i}
              className={`carousel-cell ${
                slidesPerView === 1
                  ? "w-full"
                  : slidesPerView === 2
                  ? "w-1/2"
                  : slidesPerView === 3
                  ? "w-1/3"
                  : "w-1/4"
              } px-2 md:px-4`}
            >
              <LocalizedClientLink
                href={`/products/${product.handle}`}
                className="group"
              >
                <Thumbnail
                  className="pointer-events-none h-96"
                  thumbnail={product?.thumbnail}
                />
                <div className="flex text-xs sm:text-sm lg:text-lg mt-4 justify-between">
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
                </div>
              </LocalizedClientLink>
            </div>
          ))}
      </Flickity>

      <motion.span
        onClick={goNext}
        className="back transition ease-in-out cursor-pointer z-40 p-3 text-[8vw] stroke-black textglobal drop-shadow-lg hover:translate-x-3 absolute top-[40%] right-0"
      >
        <ArrowRight />
      </motion.span>
      <motion.span
        onClick={goPrevious}
        className="front transition ease-in-out cursor-pointer  z-40 p-3 text-[8vw] stroke-black textglobal drop-shadow-lg hover:-translate-x-3 absolute top-[40%] left-0"
      >
        <ArrowLeft />
      </motion.span>
    </div>
  )
}

export default Slider
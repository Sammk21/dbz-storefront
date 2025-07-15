"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"

// Register Swiper modules
// Swiper.use([Pagination, Navigation])

const ImageSlider = ({ product }) => {
  return (
    <Swiper
      // effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      pagination={{ clickable: true }}
      // navigation={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      modules={[Pagination, Navigation]}
      navigation={{ nextEl: ".back", prevEl: ".front" }}
      className="w-full h-full "
    >
      {product?.images?.map((image) => (
        <SwiperSlide key={image.id} className=" w-full h-full">
          <div className="flex w-full h-full items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xl ">
              <Image
                src={image.url}
                alt={image.alt || "Product Image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlider

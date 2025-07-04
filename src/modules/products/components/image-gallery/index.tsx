"use client"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import "@splidejs/splide/css/core"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const splideOptions = {
  gap: "1rem",
  pagination: false,
  arrows: true,
  perPage: 1,
  perMove: 1,
  padding: { left: 20, right: 20 },
  breakpoints: {
    600: {
      perPage: 1,
      gap: "0.5rem",
    },
  },
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-4 w-72 md:w-96 mx-auto">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-[3/4] w-full overflow-hidden  rounded"
            id={image.id}
          >
            {!!image.url && (
              <Image
                src={image.url}
                alt={`Product image ${index + 1}`}
                priority={index <= 2}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery

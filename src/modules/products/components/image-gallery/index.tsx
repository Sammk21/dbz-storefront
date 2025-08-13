// // "use client"
// // import { HttpTypes } from "@medusajs/types"
// // import Image from "next/image"
// // import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
// // import "@splidejs/splide/css/core"

// // type ImageGalleryProps = {
// //   images: HttpTypes.StoreProductImage[]
// // }

// // const splideOptions = {
// //   gap: "1rem",
// //   pagination: false,
// //   arrows: true,
// //   perPage: 1,
// //   perMove: 1,
// //   padding: { left: 20, right: 20 },
// //   breakpoints: {
// //     600: {
// //       perPage: 1,
// //       gap: "0.5rem",
// //     },
// //   },
// // }

// // const ImageGallery = ({ images }: ImageGalleryProps) => {
// //   return (
// //     <div className="w-full">
// //       <div className="flex flex-col gap-y-4 ">
// //         {images.map((image, index) => (
// //           <div
// //             key={image.id}
// //             className="relative h-screen w-full   shadow-none ease-in-out duration-150 flex rounded-none   bg-[#f7f7f7]  aspect-[187/251] lg:aspect-[3/4]"
// //             id={image.id}
// //           >
// //             {!!image.url && (
// //               <Image
// //                 src={image.url}
// //                 alt={`Product image ${index + 1}`}
// //                 priority={index <= 2}
// //                 fill
// //                 style={{
// //                   objectFit: "contain",
// //                   objectPosition: "center",
// //                 }}
// //               />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default ImageGallery
// "use client"

// import { useCallback, useEffect, useState } from "react"
// import Image from "next/image"

// import useEmblaCarousel from "embla-carousel-react"

// type ImageCarouselProps = {
//   images: { id: string; url: string }[]
//   openDialog: (index: number | null) => void
// }

// const ImageCarousel = ({ images, openDialog }: ImageCarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setCurrentIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return

//     onSelect()
//     emblaApi.on("select", onSelect)
//     emblaApi.on("reInit", onSelect)

//     return () => {
//       emblaApi.off("select", onSelect)
//       emblaApi.off("reInit", onSelect)
//     }
//   }, [emblaApi, onSelect])

//   const slideWidth = 100 / images.length
//   const isOnlyOneImage = images.length === 1

//   console.log(images)

//   return (
//     <>
//       <div className="overflow-hidden " ref={isOnlyOneImage ? null : emblaRef}>
//         <div className="flex">
//           {images.map((image, index) => (
//             <div
//               className="relative aspect-[29/34] max-h-[400px] w-full shrink-0"
//               key={image.id}
//               style={{ backgroundColor: "#F7F7F7" }}
//             >
//               <Image
//                 onClick={() => openDialog(index)}
//                 src={image.url}
//                 alt={`Product image ${index + 1}`}
//                 fill
//                 priority={index <= 2}
//                 className="object-contain"
//                 sizes="(max-width: 768px) 100vw, (max-width: 992px) 780px"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {!isOnlyOneImage && (
//         <div className="absolute bottom-3 left-3 right-3 h-1 bg-primary/30 medium:hidden">
//           <div
//             className="absolute h-full bg-primary transition-all duration-200 ease-out"
//             style={{
//               width: `${slideWidth}%`,
//               left: `${currentIndex * slideWidth}%`,
//             }}
//           />
//         </div>
//       )}
//     </>
//   )
// }

// export default ImageCarousel

import { ProductPageGallery } from "components/ProductPageGallery"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  className?: string
}

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const filteredImages = images.filter((image) => Boolean(image.url))

  if (!filteredImages.length) {
    return null
  }

  return (
    <ProductPageGallery className={className}>
      {filteredImages.map((image, index) => (
        <div
          key={image.id}
          className="relative aspect-[3/4] w-full overflow-hidden bg-[#f7f7f7]"
        >
          <Image
            key={image.id}
            src={image.url}
            priority={index <= 2 ? true : false}
            alt={`Product image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 589px, (max-width: 1279px) 384px, 456px"
            className="object-cover"
          />
        </div>
      ))}
    </ProductPageGallery>
  )
}

export default ImageGallery

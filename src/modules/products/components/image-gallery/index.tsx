"use client"
import { ProductPageGallery } from "components/ProductPageGallery"
import { ImageLightbox } from "components/ImageLightbox"
import { useLightbox } from "hooks/useLightbox"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  className?: string
}

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const filteredImages = images.filter((image) => Boolean(image.url))
  const {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    goToPrevious,
    goToNext,
    goToIndex,
  } = useLightbox()

  if (!filteredImages.length) {
    return null
  }

  // Transform images for lightbox
  const lightboxImages = filteredImages.map((image, index) => ({
    id: image.id,
    url: image.url,
    alt: `Product image ${index + 1}`,
  }))

  const handleNext = () => goToNext(lightboxImages.length)

  return (
    <>
      <ProductPageGallery className={className}>
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative w-full mx-auto bg-[#f7f7f7] cursor-pointer group transition-transform hover:scale-[1.02] rounded-lg overflow-hidden"
            onClick={() => openLightbox(index)}
          >
            {/* Container that maintains aspect ratio but allows flexibility */}
            <div className="relative w-full">
              <Image
                key={image.id}
                src={image.url}
                priority={index <= 2 ? true : false}
                alt={`Product image ${index + 1}`}
                width={400}
                height={500}
                className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 400px"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </ProductPageGallery>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={handleNext}
        showControls={true}
        showThumbnails={lightboxImages.length > 1}
        enableKeyboard={true}
        enableZoom={true}
        enableRotation={false}
        enableDownload={false}
      />
    </>
  )
}

export default ImageGallery

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className="relative aspect-[9/12] w-full overflow-hidden"
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 "
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 476px) 180px, (max-width: 568px) 260px, (max-width: 792px) 380px, 500px"
                  style={{
                    objectFit: "cover",
                    objectPosition:"center"
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery

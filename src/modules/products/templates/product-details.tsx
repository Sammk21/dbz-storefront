// import React, { Suspense } from "react"

// import ImageGallery from "@modules/products/components/image-gallery"
// import ProductActions from "@modules/products/components/product-actions"
// import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
// import ProductTabs from "@modules/products/components/product-tabs"
// import RelatedProducts from "@modules/products/components/related-products"
// import ProductInfo from "@modules/products/templates/product-info"
// import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
// import { notFound } from "next/navigation"
// import ProductActionsWrapper from "./product-actions-wrapper"
// import ImageSlider from "@modules/products/components/image-slider/index"
// import { ArrowBigDown } from "lucide-react"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"

// import { Text } from "@medusajs/ui"
// import Divider from "@modules/common/components/divider"
// import Image from "next/image"
// import { HttpTypes } from "@medusajs/types"

// type ProductTemplateProps = {
//   product: HttpTypes.StoreProduct
//   region: HttpTypes.StoreRegion
//   countryCode: string
// }

// const ProductTemplate2: React.FC<ProductTemplateProps> = ({
//   product,
//   region,
//   countryCode,
// }) => {
//   if (!product || !product.id) {
//     return notFound()
//   }
//   return (
//     <>
//       <div className="w-full flex flex-col ">
//         <div className="w-full h-auto ">
//           <div className="w-full grid grid-cols-3">
//             <div className=" w-full pl-4  ">
//               <div className="flex flex-col h-full w-full ipad:justify-between max-w-md justify-center">
//                 <div className="">
//                   {product.collection && (
//                     <LocalizedClientLink
//                       href={`/collections/${product.collection.handle}`}
//                       className="text-medium textglobal hover:text-ui-fg-subtle underline underline-offset-2 decoration-[0.3px] pb-1"
//                     >
//                       {product.collection.title}
//                     </LocalizedClientLink>
//                   )}
//                   <h1 className="sm:text-[14vw] humane lg:text-[10vw] text-[30vw] uppercase">
//                     {product.title}
//                   </h1>
//                   <Text className=" ">{product.description}</Text>
//                 </div>
//               </div>
//             </div>
//             <ImageSlider product={product} />
//             <div>
//               <div className="flex flex-col small:sticky small:top-48 small:py-0  w-full py-8 gap-y-12">
//                 <ProductOnboardingCta />
//                 <Suspense
//                   fallback={
//                     <ProductActions product={product} region={region} />
//                   }
//                 >
//                   <ProductActionsWrapper id={product.id} region={region} />
//                 </Suspense>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="px-10 sm:py-12">
//         <div className="w-full py-5  rounded-3xl ">
//           <div className="grid ipad:grid-cols-2 gap-3 grid-cols-1">
//             {/* <div>
//               <ProductTabs product={product} />
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <Divider />
//       <RelatedProducts product={product} countryCode={countryCode} />
//     </>
//   )
// }

// export default ProductTemplate2
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"


type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate2: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row small:items-start py-6 relative mt-16 "
        data-testid="product-container"
      >
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full  relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate2


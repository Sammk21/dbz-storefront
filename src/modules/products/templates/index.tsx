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
// import { HttpTypes } from "@medusajs/types"

// type ProductTemplateProps = {
//   product: HttpTypes.StoreProduct
//   region: HttpTypes.StoreRegion
//   countryCode: string
// }

// const ProductTemplate: React.FC<ProductTemplateProps> = ({
//   product,
//   region,
//   countryCode,
// }) => {
//   if (!product || !product.id) {
//     return notFound()
//   }

//   return (
//     <>
//       <div
//         className="w-[100vw] h-[] grid grid-cols-1 md:grid-cols-2  relative"
//         data-testid="product-container"
//       >
//         {/* <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">

//         </div> */}
//         <div
//           style={{ backgroundColor: "#F7F7F7" }}
//           className="block w-full h-full relative  pt-16"
//         >
//           <ImageGallery images={product?.images || []} />
//         </div>
//         <div className="pt-16 flex flex-col justify-center items-center sm:sticky sm:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
//           <ProductInfo product={product} />
//           <ProductOnboardingCta />
//           <Suspense
//             fallback={
//               <ProductActions
//                 disabled={true}
//                 product={product}
//                 region={region}
//               />
//             }
//           >
//             <ProductActionsWrapper id={product.id} region={region} />
//           </Suspense>
//           <ProductTabs product={product} />
//         </div>
//       </div>
//       <div
//         className="content-container my-16 small:my-32"
//         data-testid="related-products-container"
//       >
//         <Suspense fallback={<SkeletonRelatedProducts />}>
//           <RelatedProducts product={product} countryCode={countryCode} />
//         </Suspense>
//       </div>
//     </>
//   )
// }

// export default ProductTemplate

import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import { collectionMetadataCustomFieldsSchema } from "@lib/util/collections"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Layout, LayoutColumn } from "components/Layout"
import ProductTabs from "../components/product-tabs"
import ShippingInfo from "./shipping-info"
import ProductGallery from "../components/image-gallery/ProductGallery"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  // materials: {
  //   id: string
  //   name: string
  //   colors: {
  //     id: string
  //     name: string
  //     hex_code: string
  //   }[]
  // }[]
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  // materials,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  const images = product.images || []
  const hasImages = Boolean(
    product.images &&
      product.images.filter((image) => Boolean(image.url)).length > 0
  )

  const collectionDetails = collectionMetadataCustomFieldsSchema.safeParse(
    product.collection?.metadata ?? {}
  )

  return (
    <div
      className="  pb-28 md:pb-36 w-full bg-white h-auto"
      data-testid="product-container"
    >
      {/* <ImageGallery className="lg:hidden" images={images} /> */}
      <ProductGallery className="lg:hidden" images={images} />

      <Layout className="p-0">
        <LayoutColumn className="mb-28 md:mb-52  col-span-12  p-0">
          <div className="md:grid grid-cols-2 gap-8 w-full ">
            {hasImages && (
              <div className=" flex  flex-col ">
                {/* <ImageGallery className="max-lg:hidden" images={images} /> */}
                <ProductGallery className="max-lg:hidden" images={images} />
              </div>
            )}
            <div className="pt-16 md:pt-26 md:pr-16 px-4 ">
              <ProductInfo product={product} />

              <ShippingInfo />
              <ProductActions
                product={product}
                // materials={materials}
                region={region}
              />
              <ProductTabs product={product} />
            </div>
            {!hasImages && <div className="flex-1" />}
          </div>
        </LayoutColumn>
      </Layout>
      {collectionDetails.success &&
        ((typeof collectionDetails.data.product_page_heading === "string" &&
          collectionDetails.data.product_page_heading.length > 0) ||
          typeof collectionDetails.data.product_page_image?.url ===
            "string") && (
          <Layout className="">
            <LayoutColumn>
              {typeof collectionDetails.data.product_page_heading ===
                "string" &&
                collectionDetails.data.product_page_heading.length > 0 && (
                  <h2 className="text-md md:text-2xl  mb-8">
                    {collectionDetails.data.product_page_heading}
                  </h2>
                )}
              {typeof collectionDetails.data.product_page_image?.url ===
                "string" && (
                <div className="relative mb-8 md:mb-20 aspect-[3/2] bg-[#f7f7f7]">
                  <Image
                    src={collectionDetails.data.product_page_image.url}
                    alt="Collection product page image"
                    fill
                    className="object-contain object-center "
                  />
                </div>
              )}
            </LayoutColumn>
          </Layout>
        )}
      {collectionDetails.success &&
        collectionDetails.data.product_page_wide_image &&
        typeof collectionDetails.data.product_page_wide_image.url ===
          "string" && (
          <div className="relative mb-8 md:mb-20 aspect-[3/2] md:aspect-[7/3]">
            <Image
              src={collectionDetails.data.product_page_wide_image.url}
              alt="Collection product page wide image"
              fill
              className="object-cover"
            />
          </div>
        )}
      {collectionDetails.success &&
        (typeof collectionDetails.data.product_page_cta_image?.url ===
          "string" ||
          (typeof collectionDetails.data.product_page_cta_heading ===
            "string" &&
            collectionDetails.data.product_page_cta_heading.length > 0) ||
          (typeof collectionDetails.data.product_page_cta_link === "string" &&
            collectionDetails.data.product_page_cta_link.length > 0)) && (
          <Layout>
            {typeof collectionDetails.data.product_page_cta_image?.url ===
              "string" && (
              <LayoutColumn start={1} end={{ base: 10, md: 6 }}>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={collectionDetails.data.product_page_cta_image.url}
                    fill
                    alt="Collection product page CTA image"
                  />
                </div>
              </LayoutColumn>
            )}
            {((typeof collectionDetails.data.product_page_cta_heading ===
              "string" &&
              collectionDetails.data.product_page_cta_heading.length > 0) ||
              (typeof collectionDetails.data.product_page_cta_link ===
                "string" &&
                collectionDetails.data.product_page_cta_link.length > 0)) && (
              <LayoutColumn start={{ base: 1, md: 7 }} end={13}>
                {typeof collectionDetails.data.product_page_cta_heading ===
                  "string" &&
                  collectionDetails.data.product_page_cta_heading.length >
                    0 && (
                    <h3 className="text-md md:text-2xl my-8 md:mt-20">
                      {collectionDetails.data.product_page_cta_heading}
                    </h3>
                  )}
                {typeof collectionDetails.data.product_page_cta_link ===
                  "string" &&
                  collectionDetails.data.product_page_cta_link.length > 0 &&
                  typeof product.collection?.handle === "string" && (
                    <p className="text-base md:text-md">
                      <LocalizedClientLink
                        href={`/collections/${product.collection.handle}`}
                        variant="underline"
                      >
                        {collectionDetails.data.product_page_cta_link}
                      </LocalizedClientLink>
                    </p>
                  )}
              </LayoutColumn>
            )}
          </Layout>
        )}
      <Suspense fallback={<SkeletonRelatedProducts />}>
        <RelatedProducts product={product} countryCode={countryCode} />
      </Suspense>
    </div>
  )
}

export default ProductTemplate

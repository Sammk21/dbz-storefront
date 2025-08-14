"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    // <div className="text-small-regular py-8 my-3">
    //   <div className="grid grid-cols-2 gap-x-8">
    //     <div className="flex flex-col gap-y-4">
    //       <div>
    //         <span className="font-semibold">Material</span>
    //         <p>{product.material ? product.material : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Country of origin</span>
    //         <p>{product.origin_country ? product.origin_country : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Type</span>
    //         <p>{product.type ? product.type.value : "-"}</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-y-4">
    //       <div>
    //         <span className="font-semibold">Weight</span>
    //         <p>{product.weight ? `${product.weight} g` : "-"}</p>
    //       </div>
    //       <div>
    //         <span className="font-semibold">Dimensions</span>
    //         <p>
    //           {product.length && product.width && product.height
    //             ? `${product.length}L x ${product.width}W x ${product.height}H`
    //             : "-"}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div id="product_description" className="prose text-xs  text-gray-900">
      <p>
        Introducing the MH T-Shirt in Vintage Grey, part of the ongoing Heaton
        capsule. Made from a cotton–hemp slub jersey with a carbon finish, this
        piece provides a textured hand feel with breathable comfort. Designed
        with a oversized fit and slightly shorter length, it’s complete with a
        cropped raw hem, rib binding collar, and our inside-out hand-drawn
        screen print in blue. The artisanal wash and dye process ensures every
        piece is one of a kind, with unique colour and shading.
      </p>
      <ul>
        <li>Vintage Grey Colourway</li>
        <li>Oversized Fit, Shorter Length</li>
        <li>Cropped Raw Hem Finish</li>
        <li>Rib Binding Collar</li>
        <li>Inside-Out Hand-Drawn Blue Print</li>
        <li>Signature Metal Bar at Hem</li>
        <li>Unique Wash &amp; Dye Process – Each Piece is One of a Kind</li>
      </ul>
      <p>
        <strong>Composition:</strong> 85% Cotton, 15% Hemp
        <br />
        160gsm Slub Jersey
      </p>
      <p>
        <strong>Model Measurements:</strong> Model is 188cm and 75kg wearing
        size M
      </p>
      <p>
        <strong>Product Care:</strong> Wash Inside Out
        <br />
        Line Dry in the Shade
        <br />
        Dry Flat
        <br />
        Cool Iron on Reverse – Do Not Iron on the Print
        <br />
        Do Not Rub Isolated Stains
        <br />
        Remove Promptly from the Washing Machine
      </p>
      <p>
        Due to the unique wash and dye process used in production, each garment
        will vary in colour, shading, and finish. These characteristics are
        intentional and part of the hand-crafted nature of the piece.
      </p>

      <p>Product Style Code: MLM100719-47</p>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">Dispatches next day</p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs

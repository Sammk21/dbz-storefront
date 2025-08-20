"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  productDescription: { slug: string; description: string }[]
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product, productDescription }: ProductTabsProps) => {
  const [open, setOpen] = useState<null | string>(null)

  const matchingDescription = productDescription.find(
    (pd) => pd.slug === product.handle
  )

  const tabs = [
    {
      label: "Product Details",
      content: matchingDescription?.description ? (
        <div
          dangerouslySetInnerHTML={{ __html: matchingDescription.description }}
        />
      ) : (
        <p>No product description available.</p>
      ),
    },
    {
      label: "Shipping & Returns",
      content: (
        <div className="space-y-4 text-xs">
          <p>✅ Fast delivery — dispatches next day.</p>
          <p>🔄 Simple exchanges — swap for a new size/style easily.</p>
          <p>↩ Easy returns — hassle-free refunds within 14 days.</p>
          <p>🌍 Duties & taxes calculated at checkout (where applicable).</p>
        </div>
      ),
    },
  ]

  return (
    // IMPORTANT: relative to keep the overlay scoped to this column only
    <div className="">
      {/* Desktop (overlay) */}
      <div className="hidden  md:block">
        {tabs.map((t) => (
          <button
            key={t.label}
            onClick={() => setOpen(t.label)}
            className="flex items-center justify-between w-full py-3 border-t text-sm font-medium"
          >
            + {t.label}
          </button>
        ))}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              // lock width, reserve scrollbar gutter, and keep it inside this column
              className="absolute inset-x-0 top-14 bottom-0 bg-white z-20 p-6 overflow-y-scroll [scrollbar-gutter:stable]"
            >
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h2 className="text-base font-semibold">{open}</h2>
                <button
                  onClick={() => setOpen(null)}
                  className="text-lg font-bold leading-none"
                >
                  ✕
                </button>
              </div>

              {/* Remove prose max-width to prevent width jump */}
              <div className="prose max-w-none text-xs text-gray-900 pr-2 md:pr-3">
                {tabs.find((t) => t.label === open)?.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile (accordion) */}
      <div className="md:hidden max-w-[472px] divide-y">
        {tabs.map((t) => {
          const isOpen = open === t.label
          return (
            <div key={t.label} className="border-t w-full">
              <button
                onClick={() => setOpen(isOpen ? null : t.label)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium"
              >
                <span>{t.label}</span>
                <span className="ml-2">{isOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {/* Keep width stable on mobile too */}
                    <div className="prose max-w-none text-xs text-gray-900 px-2 pb-3">
                      {t.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductTabs

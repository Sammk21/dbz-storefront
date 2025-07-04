"use client"

import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

type CardAddToCartProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function CardAddToCart({
  product,
  region,
  disabled = false,
}: CardAddToCartProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const countryCode = useParams().countryCode as string

  // Auto-select options if only one variant
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // Check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return

    setIsAdding(true)
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      })
    } catch (error) {
      console.error("Failed to add to cart:", error)
    }
    setIsAdding(false)
  }


  // Simple product (single variant) or no variants
  if (!product.variants || product.variants.length <= 1) {
    return (
      <Button
        onClick={handleAddToCart}
        disabled={!inStock || !selectedVariant || disabled || isAdding}
        className="w-full "
        size="small"
        isLoading={isAdding}
        data-testid="card-add-to-cart-button"
      >
        {!selectedVariant
          ? "Unavailable"
          : !inStock
          ? "Out of stock"
          : "Add to cart"}
      </Button>
    )
  }

  // Multi-variant product
  return (
    <div className="space-y-2 pb-2">
      {!showOptions ? (
        <Button
          onClick={() => setShowOptions(true)}
          disabled={disabled}
          variant="secondary"
          className="w-full"
          size="small"
          data-testid="card-quick-add-button"
        >
          Quick Add
        </Button>
      ) : (
        <div className="space-y-2">
          {/* Option Selectors */}
          {product.options?.map((option) => (
            <div key={option.id}>
              <select
                value={options[option.id] || ""}
                onChange={(e) => setOptionValue(option.id, e.target.value)}
                disabled={disabled || isAdding}
                className="w-full text-sm border border-gray-300 rounded px-2 py-1 disabled:opacity-50"
                data-testid={`card-option-${option.id}`}
              >
                <option value="">{option.title}</option>
                {option.values?.map((value) => (
                  <option key={value.id} value={value.value}>
                    {value.value}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              disabled={
                !inStock ||
                !selectedVariant ||
                disabled ||
                isAdding ||
                !isValidVariant
              }
              className="flex-1"
              size="small"
              isLoading={isAdding}
              data-testid="card-add-to-cart-button"
            >
              {!selectedVariant || !isValidVariant
                ? "Select options"
                : !inStock
                ? "Out of stock"
                : "Add to cart"}
            </Button>
            <Button
              onClick={() => setShowOptions(false)}
              disabled={isAdding}
              variant="secondary"
              size="small"
              className="px-3"
              data-testid="card-close-options-button"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

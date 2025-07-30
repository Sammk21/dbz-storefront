import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  variants: HttpTypes.StoreProductVariant[]
  options: Record<string, string | undefined>
  "data-testid"?: string
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
): Record<string, string> => {
  if (!variantOptions) return {} // fallback
  return variantOptions.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  variants,
  "data-testid": dataTestId,
  disabled,
  options,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((value) => {
          const isOutOfStock = !variants.some((variant) => {
            const variantOptions = optionsAsKeymap(variant.options)

            const matchesValue = variantOptions[option.id] === value

            const otherOptionsMatch = Object.entries(variantOptions).every(
              ([optId, val]) => {
                if (optId === option.id) return true
                return options[optId] === val || !options[optId]
              }
            )

            const inStock =
              !variant.manage_inventory ||
              variant.allow_backorder ||
              (variant.inventory_quantity ?? 0) > 0

            return matchesValue && otherOptionsMatch && inStock
          })

          return (
            <button
              onClick={() => updateOption(option.id, value)}
              key={value}
              className={clx(
                "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 flex items-center justify-center gap-2",
                {
                  "border-ui-border-interactive": value === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    value !== current,
                  "opacity-50 cursor-not-allowed": isOutOfStock,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {value}
              {isOutOfStock && <span className="text-red-600 ml-2">❌</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect

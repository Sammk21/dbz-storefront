import React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@lib/components/ui/avatar"
import { Text } from "@medusajs/ui"
import Image from "next/image"

interface PaymentMethodOption {
  name: string
  icon: string
  fallback: string
}

interface PaymentInfoProps {
  title: string
  methods: PaymentMethodOption[]
  showRazorpayLogo?: boolean
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ title, methods, showRazorpayLogo = false }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        {title && (
          <div className="flex items-center">
            <Text className="text-sm sm:text-base font-medium">{title}</Text>
          </div>
        )}
        <div className="flex items-center gap-1 flex-wrap">
          {methods.map((method, index) => (
            <Avatar key={index} className="h-5 w-5 sm:h-6 sm:w-6">
              <AvatarImage 
                src={method.icon} 
                alt={method.name}
                className="object-contain"
              />
              <AvatarFallback className="text-xs bg-ui-bg-subtle text-ui-fg-subtle">
                {method.fallback}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      {showRazorpayLogo && (
        <div className="flex items-center mt-1">
          <Text className="text-xs text-ui-fg-subtle mr-2">Powered by</Text>
          <div className="h-4 w-auto">
            <Image 
              className="h-full w-auto object-contain" 
              alt="Razorpay logo" 
              width={60} 
              height={16} 
              src={"/svgs/razorpay.svg"}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentInfo

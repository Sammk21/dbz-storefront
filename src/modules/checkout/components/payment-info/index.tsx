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
    <div className="flex w-full justify-between gap-2 ">
      {title && (
        <div className="flex items-center">
          <Text className="text-xs  font-medium">{title}</Text>
        </div>
      )}
      {showRazorpayLogo && (
        <div className="flex items-center mt-1">
          <Text className="text-[0.50rem] leading-none mr-2">Powered by</Text>
          <div className="h-4 w-4  relative">
            <Image
              className="h-full w-auto object-contain"
              alt="Razorpay logo"
              fill
              src={"/images/rzp.png"}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentInfo

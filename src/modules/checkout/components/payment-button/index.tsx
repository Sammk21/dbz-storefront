// src/modules/checkout/components/payment-button/index.tsx
import { HttpTypes } from "@medusajs/types"
import React from "react"
import { isRazorpay } from "@lib/constants"
import { RazorpayPaymentButton } from "./razorpay-payment-button"

// Import your other payment buttons

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  paymentSession?: HttpTypes.StorePaymentSession
  notReady: boolean
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  paymentSession,
  notReady,
}) => {
  if (!paymentSession) {
    return null
  }

  const providerId = paymentSession.provider_id

  console.log("payment session in ", paymentSession)

  // Determine which payment button to render based on the provider ID
  switch (true) {
    case isRazorpay(providerId):
      return (
        <RazorpayPaymentButton
          session={paymentSession}
          notReady={notReady}
          cart={cart}
        />
      )
    // Add cases for your other payment providers
    case providerId === "stripe":
      return <div>Stripe</div>
    // Default case
    default:
      return <>default</>
  }
}

export default PaymentButton

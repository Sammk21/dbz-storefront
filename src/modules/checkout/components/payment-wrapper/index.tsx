"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"

type PaymentWrapperProps = {
  cart: HttpTypes.StoreCart
  children: React.ReactNode
}

/**
 * PaymentWrapper component that wraps checkout components.
 * Simplified to only support Razorpay and manual payments.
 */
const PaymentWrapper: React.FC<PaymentWrapperProps> = ({ children }) => {
  return <div className="payment-wrapper">{children}</div>
}

export default PaymentWrapper

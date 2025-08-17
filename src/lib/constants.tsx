import React from "react"
import { Cash, CreditCard } from "@medusajs/icons"
import PaymentInfo from "@modules/checkout/components/payment-info"

/* Map of payment provider_id to their title and icon. Only includes Razorpay and Manual payments. */
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.JSX.Element }
> = {
  pp_system_default: {
    title: "Cash on delivery",
    icon: <Cash />,
  },
  pp_razorpay_razorpay: {
    title: "Pay with UPI/Card/Wallet",
    icon: <PaymentInfo title="" methods={[]} showRazorpayLogo={true} />,
  },
}

export const isRazorpay = (providerId?: string) => {
  return providerId?.startsWith("pp_razorpay")
}

export const isManual = (providerId?: string) => {
  return providerId?.startsWith("pp_system_default")
}

// Add currencies that don't need to be divided by 100
export const noDivisionCurrencies = [
  "krw",
  "jpy",
  "vnd",
  "clp",
  "pyg",
  "xaf",
  "xof",
  "bif",
  "djf",
  "gnf",
  "kmf",
  "mga",
  "rwf",
  "xpf",
  "htg",
  "vuv",
  "xag",
  "xdr",
  "xau",
]

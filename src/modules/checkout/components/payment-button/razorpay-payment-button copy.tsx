"use client"
import React, { useEffect, useState } from "react"
import {useRazorpay ,RazorpayOrderOptions } from "react-razorpay"
import { HttpTypes } from "@medusajs/types"
import { CurrencyCode } from "react-razorpay/dist/constants/currency"
import { Currency } from "@medusajs/js-sdk/dist/admin/currency"


declare global {
  interface Window {
    Razorpay: any
  }
}
type PaymentSession = {
  amount: number;
  authorized_at: string | null;
  context: Record<string, unknown>;
  created_at: string;
  currency_code: string;
  data: {
    id: string;
    notes: any[]; // specify type if known
    amount: number;
    entity: string;
    status: string;
    [key: string]: any; // include this if there are additional unknown fields
  };
  deleted_at: string | null;
  id: string;
  metadata: Record<string, unknown> | null;
  payment_collection_id: string;
  provider_id: string;
  raw_amount: {
    value: string;
    precision: number;
  };
  status: string;
  updated_at: string;
};

// Define the types for the props
interface RazorpayCheckoutButtonProps {
  paymentSession: PaymentSession
  onPaymentCompleted: () => void
  onPaymentError: (error: string) => void
  cart: HttpTypes.StoreCart
}

// Define the verification response type
interface VerificationResponse {
  success: boolean
  data?: any
  message?: string
}

// Define the Razorpay response type
interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

const RazorpayCheckoutButton: React.FC<RazorpayCheckoutButtonProps> = ({
  paymentSession,
  onPaymentCompleted,
  onPaymentError,
  cart,
}) => {
  const [loading, setLoading] = useState<boolean>(false)
   const [orderData, setOrderData] = useState({ id: "" })
  const { Razorpay } = useRazorpay()


   useEffect(() => {
     setOrderData(paymentSession as { id: string })
   }, [paymentSession])

  const handlePayment = async (): Promise<void> => {
    setLoading(true)

    try {
      // Make sure we have a valid payment session
      if (!paymentSession ) {
        throw new Error("Payment session not initialized")
      }

      // Make sure we have a cart
      if (!cart) {
        throw new Error("Cart not found")
      }
      if (!window.Razorpay) {
        await loadRazorpayScript()
      }

     
      // Initialize Razorpay options
      const options: RazorpayOrderOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "rzp_test_z0wY0NRo0U6tBz",
        callback_url: "https://loclhost:8000/api/razorpay/verify-payment",
        amount:1000,
        name:"send_sms_hash",
        currency: "INR",
        description: `Order #${cart.id}`,
        order_id: paymentSession.data.id,
        prefill: {
          name: cart.shipping_address?.first_name
            ? `${cart.shipping_address.first_name} ${
                cart.shipping_address.last_name || ""
              }`
            : "",
          email: cart.email || "",
          contact: cart.shipping_address?.phone || "",
        },
        notes: cart.id,

        theme: {
          color: "#000000",
        },
        handler: async function (response: RazorpayResponse) {
          // Send the payment verification data to your backend
          try {
            const res = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                key_secret: "rzp_test_z0wY0NRo0U6tBz",
                cart_id: cart.id,
              }),
            })

            
            const data: VerificationResponse = await res.json()
            console.log("payment verificati response in razorpay button",data)

            if (data.success) {
              // Payment was successfully verified, call the onPaymentCompleted callback
              onPaymentCompleted()
            } else {
              throw new Error(data.message || "Payment verification failed")
            }
          } catch (error) {
            console.error("Payment verification failed:", error)
            onPaymentError(
              error instanceof Error
                ? error.message
                : "Payment verification failed"
            )
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          },
        },
      }

      

      // Create and open Razorpay payment form
      const rzp = new Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error("Razorpay payment error:", error)
      onPaymentError(
        error instanceof Error ? error.message : "Could not initialize payment"
      )
      setLoading(false)
    }
  }

    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onload = resolve
        document.body.appendChild(script)
      })
    }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
    >
      {loading ? "Processing..." : "Pay with Razorpay"}
    </button>
  )
}

export default RazorpayCheckoutButton

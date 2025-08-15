import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import PaymentWrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Checkout",
}

/**
 * Checkout page component that supports Razorpay and manual payments only.
 * Stripe integration has been removed for simplicity.
 */
export default async function Checkout() {
  // Retrieve cart data
  const cart = await retrieveCart()
  
  if (!cart) {
    return notFound()
  }

  // Retrieve customer data
  const customer = await retrieveCustomer()

  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
      {/* Main checkout form with payment options */}
      <PaymentWrapper cart={cart}>
        <CheckoutForm cart={cart} customer={customer} />
      </PaymentWrapper>
      
      {/* Order summary sidebar */}
      <CheckoutSummary cart={cart} />
    </div>
  )
}

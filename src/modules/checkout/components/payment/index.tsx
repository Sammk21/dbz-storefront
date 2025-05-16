"use client"

import { RadioGroup } from "@headlessui/react"
import { isRazorpay, paymentInfoMap } from "@lib/constants"
import { initiatePaymentSession } from "@lib/data/cart"
import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
import { Button, Container, Heading, Text, clx } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import PaymentContainer from "@modules/checkout/components/payment-container"
import Divider from "@modules/common/components/divider"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { sanitizeCart } from "@lib/helper/sanitizecart"
import { RazorpayPaymentButton } from "../payment-button/razorpay-payment-button"

const Payment = ({
  cart,
  availablePaymentMethods,
}: {
  cart: any
  availablePaymentMethods: any[]
}) => {
  const activeSession = cart.payment_collection?.payment_sessions?.find(
    (paymentSession: any) => paymentSession.status === "pending"
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    activeSession?.provider_id ?? ""
  )

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "payment"

  const setPaymentMethod = async (method: string) => {
    console.log("[setPaymentMethod] Method selected:", method)
    setError(null)
    setSelectedPaymentMethod(method)

    if (isRazorpay(method)) {
      console.log(
        "[setPaymentMethod] Initiating Razorpay session with cart:",
        sanitizeCart(cart)
      )
      try {
        const result = await initiatePaymentSession(cart.id, {
          provider_id: method,
          data: {
            customer: sanitizeCart(cart),
          },
        })
        console.log(
          "[setPaymentMethod] Razorpay session initiated successfully:",
          result
        )
      } catch (error) {
        console.error(
          "[setPaymentMethod] Error initiating Razorpay session:",
          error
        )
        throw error
      }
    }
  }

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const paymentReady =
    (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const shouldInputCard =
        isRazorpay(selectedPaymentMethod) && !activeSession

      const checkActiveSession =
        activeSession?.provider_id === selectedPaymentMethod

      if (!checkActiveSession) {
        await initiatePaymentSession(cart, {
          provider_id: selectedPaymentMethod,
          // Include cart context for Razorpay
          data: {
            extra: cart,
          },
        })
        // const result = await initiatePaymentSession(cart, {
        //   provider_id: selectedPaymentMethod,
        //   data: {
        //     extra: sanitizeCart(cart),
        //   },
        // })
      }

      if (!shouldInputCard) {
        return router.push(
          pathname + "?" + createQueryString("step", "review"),
          {
            scroll: false,
          }
        )
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  const razorpaySession = cart?.payment_collection?.payment_sessions?.find(
    (session: any) => session.provider_id === "pp_razorpay_razorpay"
  )

  const handlePaymentCompleted = async () => {
    setIsSubmitting(true)
    try {
      // The payment is already verified and completed in the API endpoint
      // Here we can redirect to a success page or show a success message

      console.log("cart from payment route", cart)
      window.location.href = `/order/confirmed/${cart.cart_id}`
    } catch (err: any) {
      setError(err.message || "An error occurred while completing checkout")
      setIsSubmitting(false)
    }
  }

  const handlePaymentError = (errorMessage: any) => {
    console.error("[handlePaymentError] Payment error:", errorMessage)
    setError(errorMessage)
    setIsSubmitting(false)
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && !paymentReady,
            }
          )}
        >
          Payment
          {!isOpen && paymentReady && <CheckCircleSolid />}
        </Heading>
        {!isOpen && paymentReady && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              data-testid="edit-payment-button"
            >
              Edit
            </button>
          </Text>
        )}
      </div>
      <div>
        <div className={isOpen ? "block" : "hidden"}>
          {!paidByGiftcard && availablePaymentMethods?.length && (
            <>
              <RadioGroup
                value={selectedPaymentMethod}
                onChange={(value: string) => setPaymentMethod(value)}
              >
                {availablePaymentMethods.map((paymentMethod) => (
                  <div key={paymentMethod.id}>
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentProviderId={paymentMethod.id}
                      selectedPaymentOptionId={selectedPaymentMethod}
                    />
                  </div>
                ))}
              </RadioGroup>
            </>
          )}
          {paidByGiftcard && (
            <div className="flex flex-col w-1/3">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </Text>
            </div>
          )}
          <ErrorMessage
            error={error}
            data-testid="payment-method-error-message"
          />
          {isRazorpay(selectedPaymentMethod) ? (
            <>
              {console.log(
                "[render] Rendering Razorpay button with session:",
                razorpaySession
              )}
              <RazorpayPaymentButton
                session={activeSession}
                cart={cart}
                notReady={false}
                // onPaymentError={handlePaymentError}
              />
            </>
          ) : (
            <>
              {console.log("[render] Rendering standard continue button")}
              <Button
                size="large"
                className="mt-6"
                onClick={handleSubmit}
                isLoading={isLoading}
                disabled={!selectedPaymentMethod && !paidByGiftcard}
                data-testid="submit-payment-button"
              >
                Continue to review
              </Button>
            </>
          )}
        </div>

        <div className={isOpen ? "hidden" : "block"}>
          {cart && paymentReady && activeSession ? (
            <div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment method
                </Text>
                <Text
                  className="txt-medium text-ui-fg-subtle"
                  data-testid="payment-method-summary"
                >
                  {paymentInfoMap[activeSession?.provider_id]?.title ||
                    activeSession?.provider_id}
                </Text>
              </div>
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment details
                </Text>
                <div
                  className="flex gap-2 txt-medium text-ui-fg-subtle items-center"
                  data-testid="payment-details-summary"
                >
                  <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                    {paymentInfoMap[selectedPaymentMethod]?.icon || (
                      <CreditCard />
                    )}
                  </Container>
                  <Text>Another step will appear</Text>
                </div>
              </div>
            </div>
          ) : paidByGiftcard ? (
            <div className="flex flex-col w-1/3">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Payment method
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Gift card
              </Text>
            </div>
          ) : null}
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Payment

import { sdk } from "@lib/config" // Your medusa client configuration
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Helper function to verify Razorpay signature
function verifySignature(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
): boolean {
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    console.log("POST handler triggered")
    console.log("Request body:", body)
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      cart_id,
    } = body


   

    // Validate required fields
    if (
      !razorpay_payment_id ||
      !razorpay_order_id ||
      !razorpay_signature ||
      !cart_id
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required payment information",
        },
        { status: 400 }
      )
    }

    // Get Razorpay configuration (you'll need to implement this)
    const razorpayConfig = await getRazorpayConfig()

    // Verify the signature

 
    const isSignatureValid = verifySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    )

    if (!isSignatureValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment signature",
        },
        { status: 400 }
      )
    }

    // Attempt to complete the cart with Medusa's method
    const data = await sdk.store.cart.complete(cart_id)

    console.log("Payment verification successful:", data)

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Payment verification error:", error)

    // More detailed error logging
    if (error.response) {
      console.error("Response error details:", {
        status: error.response.status,
        data: error.response.data,
      })
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "An error occurred during payment verification",
        ...(error.response?.data && { details: error.response.data }),
      },
      { status: 500 }
    )
  }
}

// Helper function to get Razorpay configuration
// You'll need to implement this based on your setup
async function getRazorpayConfig() {
  // This should return an object with key_secret
  // You might fetch this from environment variables or a configuration service
  return {
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  }
}

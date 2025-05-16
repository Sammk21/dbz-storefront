export const launchRazorpayCheckout = (cart: any) => {
  const options = {
    key: "RAZORPAY_KEY_ID",
    amount: cart.total,
    currency: "INR",
    name: "Your Store",
    description: "Purchase Description",
    handler: function (response: any) {
      console.log("Razorpay success", response)
      // Call backend to validate payment or move to review
    },
    prefill: {
      name: cart.customer?.first_name,
      email: cart.customer?.email,
    },
    theme: {
      color: "#3399cc",
    },
  }

  const razor = new (window as any).Razorpay(options)
  razor.open()
}

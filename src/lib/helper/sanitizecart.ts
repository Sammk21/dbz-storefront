export function sanitizeCart(cart:any) {
  return {
    id: cart.id,
    total: 20,
    currency_code: "INR",
    email: "test@gmail.com",
    region_id: cart.region_id,
    customer_id: cart.customer_id,
    shipping_total: cart.shipping_total,
    discount_total: cart.discount_total,
    subtotal: cart.subtotal,
    tax_total: cart.tax_total,
    items: cart.items?.map((item: any) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: item.unit_price,
    })),
    // Add more fields as needed, but keep it *simple* and JSON safe
  }
}

import { retrieveCart } from "@lib/data/cart"
import CartDropdown from "../cart-dropdown"

export default async function CartButton() {
  const cart = await retrieveCart().catch(() => null)

  return (
    <div className="absolute top-1/2 -translate-y-1/2  right-[50px]">
      <CartDropdown cart={cart} />
    </div>
  )
}

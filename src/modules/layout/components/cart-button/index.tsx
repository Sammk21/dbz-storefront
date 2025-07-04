import { retrieveCart } from "@lib/data/cart"
import CartDropdown from "../cart-dropdown"

export default async function CartButton() {
  const cart = await retrieveCart().catch(() => null)

  return (
    <div className="top-[45px] absolute right-[50px]">
      <CartDropdown cart={cart} />
    </div>
  )
}

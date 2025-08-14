// "use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Suspense } from "react"
import FullScreenMenu from "components/FullScreenMenu"
import Logo from "@modules/logo/logo"
import { Search, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


interface HeaderProps {
  className?: string
}

export default function Nav({ className = "" }: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 inset-x-0  z-30 group h-16   ">
        <div className="flex justify-between h-full  ">
          <FullScreenMenu />
          <Suspense
            fallback={
              <LocalizedClientLink
                className="text-white hover:text-white flex gap-2 absolute top-1/2 -translate-y-1/2  right-[50px]"
                href="/cart"
                dataTestId="nav-cart-link"
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8032 3.50848C10.8032 1.85163 9.46008 0.508484 7.80322 0.508484C6.14637 0.508484 4.80322 1.85163 4.80322 3.50848"
                    stroke="currentColor"
                  ></path>
                  <rect
                    x="1.30322"
                    y="4.00848"
                    width="13"
                    height="11"
                    stroke="currentColor"
                  ></rect>
                </svg>
                (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </header>
    </>
  )
}

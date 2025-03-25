import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag } from "lucide-react"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="fixed top-0 left-0 right-0 w-[100dvw] h-16  z-10">
        <div className="grid grid-cols-3 px-3 mt-4 relative ">
          {/* <nav className=" gap-8">
            <ul className="sc-d79fef73-5 gSjwgs flex justify-center gap-x-1.5">
              <li className="sc-d79fef73-9 buhRBc  ">
                <div className="sc-d79fef73-4  bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">Shop</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0 goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6  iaKWpD">
                    <span className="sc-d79fef73-7">Collections</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0  goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">Explore</span>
                  </button>
                </div>
              </li>
            </ul>
          </nav> */}
          <div></div>
          {/* Logo */}
          <div className="flex w-full justify-center">
            <div className="relative  -m-8">
              <Link href="/">
                <p className="logo-text-font text-6xl mt-6 text-[#3C3632]">
                  DIVIDE
                  <span className="logo-text-font-normal  ml-2 mr-1">BY</span>
                  ZERO
                </p>
              </Link>
            </div>
          </div>
          <div></div>
          {/* <nav className="flex  ">
            <ul className="sc-d79fef73-5 gSjwgs flex gap-x-1.5 justify-end">
              <li className="sc-d79fef73-9 buhRBc  ">
                <div className="sc-d79fef73-4  bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <Search className="w-3 h-3" />
                    <span className="sc-d79fef73-7">Search</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0 goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6  iaKWpD">
                    <span className="sc-d79fef73-7">Login</span>
                  </button>
                </div>
                <svg
                  viewBox="0 0 10.21 24"
                  className="sc-97420e37-0  goBXkq sc-d79fef73-8 gQsTPR"
                  preserveAspectRatio="none"
                >
                  <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
                </svg>
              </li>
              <li className="sc-d79fef73-9 buhRBc">
                <div className="sc-d79fef73-4 bAWRiG">
                  <button className="sc-6832e46a-0 jjBtBa sc-d79fef73-6 iaKWpD">
                    <span className="sc-d79fef73-7">
                      <ShoppingBag className="w-3 h-3" />
                    </span>
                    0
                  </button>
                </div>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
    </div>
  )
}

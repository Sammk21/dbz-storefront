"use client"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {
  return (
    <>
      <div className="logo absolute left-1/2 z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Link href="/">
          <div className="flex justify-center items-center">
            {/* <div className="">
              <p className="logo-text-font text-center \ text-3xl z-30 [text-shadow:_-2px_0px_0px_rgba(255,255,255,0.45)] text-[#3C3632] overflow-hidden">
                0/
              </p>
            </div> */}
            <div>
              {/* text-[#3C3632] */}
              <p className=" text-2xl logo-text-font-normal  text-center tracking-wide">
                DIVIDE BY ZERO <span className="font-sans">®</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Logo

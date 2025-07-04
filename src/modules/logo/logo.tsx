"use client"
import Link from "next/link"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {
  return (
    <>
      <div className="logo fixed left-[50%] z-10 top-2 translate-x-[-50%]">
        <Link href="/">
          <div className="flex flex-col justify-center items-center">
            <p className="logo-text-font text-center text-4xl z-30 [text-shadow:_-2px_0px_0px_rgba(255,255,255,0.45)] text-[#3C3632] overflow-hidden">
              0/
            </p>
            <p className="logo-text-font-normal text-lg text-[#3C3632] [text-shadow:_-1px_0px_0px_rgba(255,255,255,0.45)] text-center tracking-wide">
              DIVIDE BY ZERO <span className="font-sans">®</span>
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Logo

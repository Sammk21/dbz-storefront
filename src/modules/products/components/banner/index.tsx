"use client"
import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const slides = [
  { text: "Free Shipping on all orders!!!" },
  { text: "Free Shipping on all orders!!!" },
  { text: "Free Shipping on all orders!!!" },
  { text: "Free Shipping on all orders!!!" },
  { text: "Free Shipping on all orders!!!" },
]

export const FreeShippingBanner = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth / 2 // since we'll duplicate content

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: `-${totalWidth}px`,
        duration: 15,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => x % totalWidth),
        },
      })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full overflow-hidden bg-black h-10 flex items-center relative">
      <div ref={trackRef} className="flex whitespace-nowrap gap-x-6">
        {/* Original slides */}
        {slides.map((slide, i) => (
          <p
            key={`original-${i}`}
            className="text-xs text-white font-sans uppercase"
          >
            {slide.text}
          </p>
        ))}
        {/* Duplicate slides for seamless loop */}
        {slides.map((slide, i) => (
          <p
            key={`clone-${i}`}
            className="text-xs text-white font-sans uppercase"
          >
            {slide.text}
          </p>
        ))}
      </div>
    </div>
  )
}

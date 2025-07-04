"use client"
import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const slides = [
  { text: "Limited Stocks - " },
  { text: "Limited Stocks - " },
  { text: "Limited Stocks - " },
]

export const InfiniteText = () => {
  const containerRef = useRef(null)
  const firstScrollerRef = useRef(null)
  const secondScrollerRef = useRef(null)

  useEffect(() => {
    if (!firstScrollerRef.current || !secondScrollerRef.current) return

    // Calculate the width of the first scroller
    //@ts-ignore
    const scrollerWidth = firstScrollerRef.current.offsetWidth

    // Position the second scroller right after the first one
    gsap.set(secondScrollerRef.current, { x: scrollerWidth })

    // Create the animation context
    const ctx = gsap.context(() => {
      // Create a timeline for the marquee effect
      const tl = gsap.timeline({ repeat: -1 })

      // Animate both scrollers together
      tl.to([firstScrollerRef.current, secondScrollerRef.current], {
        x: `-=${scrollerWidth}`,
        duration: 10,
        ease: "none", // Linear movement
        onComplete: () => {
          // Reset positions without visual jump when first scroller moves completely out of view
          gsap.set(firstScrollerRef.current, { x: scrollerWidth })
          gsap.set(secondScrollerRef.current, { x: 0 })
        },
      })
    }, containerRef)

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full overflow-hidden relative">
      <div className="flex relative">
        {/* First set of slides */}
        <div ref={firstScrollerRef} className="flex">
          {slides.map((slide, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <p className="flex text-[3.3vw] text-[#9c9c9c68] font-bold leading-[normal] uppercase">
                {slide.text}
              </p>
            </div>
          ))}
        </div>

        {/* Second set of slides */}
        <div ref={secondScrollerRef} className="flex absolute left-0">
          {slides.map((slide, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <p className="flex text-[3.3vw] text-[#9c9c9c68] font-bold leading-[normal] uppercase">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

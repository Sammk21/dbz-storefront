"use client"

import React, { useRef, ReactNode } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText)

interface CopyProps {
  children: ReactNode
  animateOnScroll?: boolean
  delay?: number
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const elementRef = useRef<HTMLElement[]>([])
  const splitRef = useRef<SplitText[]>([])
  const lines = useRef<HTMLElement[]>([])
  const lineWrappers = useRef<HTMLElement[]>([])

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Reset refs
      splitRef.current = []
      elementRef.current = []
      lines.current = []
      lineWrappers.current = []

      let elements: HTMLElement[] = []

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[]
      } else {
        elements = [containerRef.current]
      }

      elements.forEach((element) => {
        elementRef.current.push(element)

        // Create the split text with both lines and lines+chars for proper masking
        const split = new SplitText(element, {
          type: "lines, chars",
          linesClass: "overflow-hidden",
          charsClass: "char-element",
        })

        splitRef.current.push(split)

        // Apply styles for masking
        gsap.set(split.chars, {
          yPercent: 100,
          opacity: 0,
        })

        const computedStyle = window.getComputedStyle(element)
        const textIndent = computedStyle.textIndent

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            ;(split.lines[0] as HTMLElement).style.paddingLeft = textIndent
          }
          element.style.textIndent = "0"
        }

        lines.current.push(...(split.lines as HTMLElement[]))
        lineWrappers.current.push(...(split.lines as HTMLElement[]))
      })

      // Animation properties
      const animationProps = {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.03, // Smaller stagger value for better char effect
        ease: "power3.out",
        delay: delay,
      }

      // Select all characters for animation
      const allChars = elements.flatMap((el) =>
        gsap.utils.toArray<HTMLElement>(".char-element", el)
      )

      if (animateOnScroll) {
        gsap.to(allChars, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        })
      } else {
        // Animation when not scrolling (on page load)
        gsap.to(allChars, animationProps)
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert()
          }
        })
      }
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  )

  // Add custom CSS to parent component to hide text initially
  const containerStyle = {
    visibility: "visible", // The container is visible
  }

  // Handle single child with ref forwarding
  if (React.Children.count(children) === 1) {
    return React.cloneElement(children as React.ReactElement, {
      ref: containerRef,
      style: containerStyle,
    })
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      data-copy-wrapper="true"
 
    >
      {children}
    </div>
  )
}

//@ts-nocheck
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CustomEase } from "gsap/dist/CustomEase"

export default function FullScreenMenu() {
  const menuToggleRef = useRef(null)
  const menuRef = useRef(null)
  const linksRef = useRef([])
  const socialLinksRef = useRef([])
  const videoWrapperRef = useRef(null)
  const headerSpansRef = useRef([])
  const isAnimatingRef = useRef(false)
  const menuToggleCloseRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(CustomEase)
    CustomEase.create(
      "hop",
      "M0, 0 C0.354, 0 0.464, 0.133 0.498, 0.502 0.532, 0.872 0.651, 1 1, 1"
    )

    // Split text into spans for the header animation
    const splitTextIntoSpans = (selector:any) => {
      const element = document.querySelector(selector)
      if (element) {
        const text = element.innerText
        const splitText = text
          .split("")
          .map((char:any) => {
            return `<span>${char === " " ? "&nbsp; &nbsp;" : char}</span>`
          })
          .join("")
        element.innerHTML = splitText

        // Store spans in ref
        //@ts-ignore
        headerSpansRef.current = document.querySelectorAll(".header h1 span")
      }
    }

    splitTextIntoSpans(".header h1")

    // Set initial states
    gsap.set(linksRef.current, { y: 30, opacity: 0 })
    gsap.set(socialLinksRef.current, { y: 30, opacity: 0 })
    gsap.set(videoWrapperRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    })
    gsap.set(headerSpansRef.current, {
      y: 500,
      rotateY: 90,
      scale: 0.75,
    })
    gsap.set(menuRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      pointerEvents: "none",
    })
  }, [])

  const handleMenuToggle = () => {
    if (isAnimatingRef.current) return

    const menuToggle = menuToggleRef.current
    const menuToggleClose = menuToggleCloseRef.current
    const menu = menuRef.current
    const links = linksRef.current
    const socialLinks = socialLinksRef.current
    const videoWrapper = videoWrapperRef.current

    if (
      menuToggle.classList.contains("closed") ||
      menuToggleClose.classList.contains("closed")
    ) {
      menuToggle.classList.remove("closed")
      menuToggleClose.classList.remove("closed")
      menuToggle.classList.add("opened")
      menuToggleClose.classList.add("opened")
      isAnimatingRef.current = true

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all"
        },
        onComplete: () => {
          isAnimatingRef.current = false
        },
      })

      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      })

      gsap.to(socialLinks, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      })

      gsap.to(videoWrapper, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.5,
      })

      gsap.to(headerSpansRef.current, {
        rotateY: 0,
        stagger: 0.05,
        delay: 0.75,
        duration: 1.5,
        ease: "power4.out",
      })

      gsap.to(headerSpansRef.current, {
        y: 0,
        scale: 1,
        stagger: 0.05,
        delay: 0.5,
        duration: 1.5,
        ease: "power4.out",
      })
    } else {
      menuToggle.classList.remove("opened")
      menuToggleClose.classList.remove("opened")
      menuToggle.classList.add("closed")
      menuToggleClose.classList.add("closed")
      isAnimatingRef.current = true

      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        onComplete: () => {
          menu.style.pointerEvents = "none"
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          })

          gsap.set(links, { y: 30, opacity: 0 })
          gsap.set(socialLinks, { y: 30, opacity: 0 })
          gsap.set(videoWrapper, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          })
          gsap.set(headerSpansRef.current, {
            y: 500,
            rotateY: 90,
            scale: 0.75,
          })

          isAnimatingRef.current = false
        },
      })
    }
  }

  // Store refs for links and social links
  const setLinkRef = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el)
    }
  }

  const setSocialLinkRef = (el) => {
    if (el && !socialLinksRef.current.includes(el)) {
      socialLinksRef.current.push(el)
    }
  }

  return (
    <>
      <div className="  uppercase text-xs flex justify-center items-center"></div>
      <div
        ref={menuToggleRef}
        onClick={handleMenuToggle}
        className="absolute top-[50px] left-[50px] uppercase closed "
      >
        <svg
          className=" pointer-events-none"
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <line
            y1="1.35"
            x2="18"
            y2="1.35"
            stroke="currentColor"
            strokeWidth="1.3"
          ></line>
          <line
            y1="9.35"
            x2="18"
            y2="9.35"
            stroke="currentColor"
            strokeWidth="1.3"
          ></line>
        </svg>
      </div>

      <div className="menu" ref={menuRef}>
        <button
          ref={menuToggleCloseRef}
          className="absolute top-[50px] left-[50px] z-10 closed"
          onClick={handleMenuToggle}
        >
          <svg
            className="pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            role="presentation"
          >
            <path d="M2.49951 2.49953L13.5 13.5" stroke="currentColor"></path>
            <path d="M2.49951 13.5005L13.5 2.5" stroke="currentColor"></path>
          </svg>
        </button>
        <div className="col col-1">
          <div className="links">
            <div className="link" ref={setLinkRef}>
              <a href="#">Shirt</a>
            </div>
            <div className="link" ref={setLinkRef}>
              <a href="#">Bottom-wear</a>
            </div>
            <div className="link" ref={setLinkRef}>
              <a href="#">T-shirts</a>
            </div>
          </div>
          <div className="video-wrapper" ref={videoWrapperRef}>
            <video autoPlay muted loop>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col col-2">
          <div className="socials">
            <div className="sub-col">
              <p ref={setSocialLinkRef}>Divide By Zero</p>
              <p ref={setSocialLinkRef}>400709 Navi Mumbai</p>
              <p ref={setSocialLinkRef}>Maharashtra</p>
              <p ref={setSocialLinkRef}>India</p>
              <br />
              <p ref={setSocialLinkRef}>contact@db0.in</p>
              <p ref={setSocialLinkRef}>careers@db0.in</p>
            </div>
            <div className="sub-col">
              <p ref={setSocialLinkRef}>Instagram</p>
              <p ref={setSocialLinkRef}>LinkedIn</p>
              <p ref={setSocialLinkRef}>Twitter</p>
              <p ref={setSocialLinkRef}>Facebook</p>
              <br />
              <p ref={setSocialLinkRef}>17h 28m 41.09s 00° 34 51.93</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

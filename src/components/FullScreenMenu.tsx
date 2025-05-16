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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 10.9997H1C0.447715 10.9997 0 11.4474 0 11.9997C0 12.552 0.447715 12.9997 1 12.9997H23C23.5523 12.9997 24 12.552 24 11.9997C24 11.4474 23.5523 10.9997 23 10.9997Z"
            fill="#374957"
          />
          <path
            d="M23 4.00031H1C0.447715 4.00031 0 4.44802 0 5.0003C0 5.55259 0.447715 6.0003 1 6.0003H23C23.5523 6.0003 24 5.55259 24 5.0003C24 4.44802 23.5523 4.00031 23 4.00031Z"
            fill="#374957"
          />
          <path
            d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z"
            fill="#374957"
          />
        </svg>
      </div>

      <div className="menu" ref={menuRef}>
        <button
          ref={menuToggleCloseRef}
          className="absolute top-[50px] left-[50px] z-10 closed"
          onClick={handleMenuToggle}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_403_3045)">
              <path
                d="M23.7072 0.293153C23.5196 0.105682 23.2653 0.000366211 23.0002 0.000366211C22.735 0.000366211 22.4807 0.105682 22.2932 0.293153L12.0002 10.5862L1.70715 0.293153C1.51963 0.105682 1.26532 0.000366211 1.00015 0.000366211C0.734988 0.000366211 0.48068 0.105682 0.293153 0.293153C0.105682 0.48068 0.000366211 0.734988 0.000366211 1.00015C0.000366211 1.26532 0.105682 1.51963 0.293153 1.70715L10.5862 12.0002L0.293153 22.2932C0.105682 22.4807 0.000366211 22.735 0.000366211 23.0002C0.000366211 23.2653 0.105682 23.5196 0.293153 23.7072C0.48068 23.8946 0.734988 23.9999 1.00015 23.9999C1.26532 23.9999 1.51963 23.8946 1.70715 23.7072L12.0002 13.4142L22.2932 23.7072C22.4807 23.8946 22.735 23.9999 23.0002 23.9999C23.2653 23.9999 23.5196 23.8946 23.7072 23.7072C23.8946 23.5196 23.9999 23.2653 23.9999 23.0002C23.9999 22.735 23.8946 22.4807 23.7072 22.2932L13.4142 12.0002L23.7072 1.70715C23.8946 1.51963 23.9999 1.26532 23.9999 1.00015C23.9999 0.734988 23.8946 0.48068 23.7072 0.293153Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="clip0_403_3045">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
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

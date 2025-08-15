"use client"
import React, { useCallback, useState, useMemo, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Keyboard } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { ImageLightbox } from "components/ImageLightbox"
import { useLightbox } from "hooks/useLightbox"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

type ProductGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  className?: string
}

const ProductGallery = ({ images, className }: ProductGalleryProps) => {
  const swiperRef = useRef<SwiperType>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [scrollHidden, setScrollHidden] = useState(false)

  // Memoize filtered images for performance
  const filteredImages = useMemo(
    () => images.filter((image) => Boolean(image.url)),
    [images]
  )

  const scrollPrev = useCallback(() => {
    swiperRef.current?.slidePrev()
  }, [])

  const scrollNext = useCallback(() => {
    swiperRef.current?.slideNext()
  }, [])

  const updateNavigation = useCallback(() => {
    if (!swiperRef.current) return
    setCanScrollPrev(!swiperRef.current.isBeginning)
    setCanScrollNext(!swiperRef.current.isEnd)
  }, [])

  const onSlideChange = useCallback((swiper: SwiperType) => {
    setSelectedIndex(swiper.activeIndex)
    setCanScrollPrev(!swiper.isBeginning)
    setCanScrollNext(!swiper.isEnd)
  }, [])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => {
      const goingFullscreen = !prev

      // Set body overflow based on the *new* fullscreen state
      document.body.style.overflow = goingFullscreen ? "hidden" : ""
      setScrollHidden(goingFullscreen)

      return goingFullscreen
    })
  }, [])

  if (!filteredImages.length) {
    return null
  }

  return (
    <>
      {/* Main Gallery */}
      <div
        className={`
        relative block
        h-[calc(100svh-112px)] w-full
        lg:h-[100dvh] 
        lg:sticky lg:top-0
        ${className}
      `}
      >
        <div className="h-full">
          <Swiper
            modules={[Navigation, Keyboard]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateNavigation()
            }}
            onSlideChange={onSlideChange}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={true}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            longSwipes={true}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            grabCursor={false}
            preventClicks={false}
            preventClicksPropagation={false}
            slideToClickedSlide={false}
            touchMoveStopPropagation={false}
            touchStartPreventDefault={false}
            touchReleaseOnEdges={false}
            resistance={true}
            resistanceRatio={0.85}
            speed={300}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            direction="horizontal"
            touchEventsTarget="container"
            simulateTouch={true}
            className="h-full [&_.swiper-wrapper]:h-full [&_.swiper-slide]:h-full"
            style={
              {
                "--swiper-navigation-size": "0px",
              } as React.CSSProperties
            }
          >
            {filteredImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div className="w-full h-full cursor-pointer">
                  <div className="relative w-full h-full bg-[#f7f7f7]">
                    <Image
                      src={image.url}
                      alt={`Product image ${index + 1}`}
                      fill
                      priority={index <= 2}
                      className="object-contain transition-transform hover:scale-105"
                      sizes="(max-width: 1023px) 100vw, 50vw"
                      style={{
                        maxWidth: "min(100%, var(--image-width, 100%))",
                        maxHeight: "min(100%, var(--image-height, 100%))",
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-6 h-6 text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Navigation Arrows */}
          <button
            className="hidden lg:block absolute left-[28px] top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-75 transition-opacity"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
            >
              <path
                d="M1.00002 6.50073L5.9994 11.9996"
                stroke="black"
                strokeLinecap="square"
              ></path>
              <path
                d="M1.00135 6.50073L5.99931 1.00032"
                stroke="black"
                strokeLinecap="square"
              ></path>
            </svg>
          </button>

          <button
            className="hidden lg:block absolute right-[28px] top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-75 transition-opacity"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
            >
              <path
                d="M5.99998 6.49927L1.0006 1.00041"
                stroke="black"
                strokeLinecap="square"
              ></path>
              <path
                d="M5.99865 6.49927L1.00069 11.9997"
                stroke="black"
                strokeLinecap="square"
              ></path>
            </svg>
          </button>

          {/* Bottom Controls */}
          <div className="absolute inset-0 top-auto z-10 flex items-center justify-between">
            {/* Page Counter */}
            <div className="flex items-center text-xs leading-none tabular-nums p-4 pr-5 gap-2 lg:pl-9 lg:py-6">
              <span>{selectedIndex + 1}</span>
              <span>/</span>
              <span>{filteredImages.length}</span>
            </div>

            {/* Mobile Expand Button */}
            <button
              className="p-4 lg:hidden"
              onClick={toggleFullscreen}
              aria-label="Open product gallery"
            >
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                className="scale-75 rotate-45"
              >
                <line
                  y1="-0.5"
                  x2="22.6267"
                  y2="-0.5"
                  transform="matrix(0.70713 -0.707084 0.70713 0.707084 1 17)"
                  stroke="black"
                ></line>
                <line
                  y1="-0.5"
                  x2="22.6267"
                  y2="-0.5"
                  transform="matrix(0.70713 0.707084 -0.70713 0.707084 1 1)"
                  stroke="black"
                ></line>
              </svg>
            </button>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center p-4 lg:pl-7 lg:pr-9 lg:py-6">
              <button
                aria-label="Open product gallery"
                className="flex items-center justify-center"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <line
                    x1="5.625"
                    y1="0"
                    x2="5.625"
                    y2="11.25"
                    stroke="black"
                    strokeWidth="0.75"
                  ></line>
                  <line
                    y1="5.625"
                    x2="11.25"
                    y2="5.625"
                    stroke="black"
                    strokeWidth="0.75"
                  ></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal for Mobile */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <button
            onClick={toggleFullscreen}
            className="fixed top-0 right-0 z-10 p-6"
            aria-label="Close product gallery"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.59961 1.59961L10.4 10.4" stroke="currentColor"></path>
              <path
                d="M1.59961 10.4004L10.4 1.60001"
                stroke="currentColor"
              ></path>
            </svg>
          </button>

          <div className="h-full overflow-y-auto">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="w-full cursor-pointer">
                <div className="w-full bg-[#f7f7f7] flex items-center justify-center min-h-[400px]">
                  <div className="relative max-w-full">
                    <Image
                      src={image.url}
                      alt={`Product image ${index + 1}`}
                      width={600}
                      height={750}
                      className="w-auto h-auto max-w-full object-contain"
                      sizes="100vw"
                      style={{
                        maxWidth: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {/* <ImageLightbox
        images={lightboxImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={handleLightboxNext}
        showControls={true}
        showThumbnails={lightboxImages.length > 1}
        enableKeyboard={true}
        enableZoom={true}
        enableRotation={false}
        enableDownload={false}
      /> */}
    </>
  )
}

export default ProductGallery

"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomOut, ZoomIn } from "lucide-react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import Image from "next/image"

interface LightboxImage {
  id: string
  url: string
  alt?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  showControls?: boolean
  showThumbnails?: boolean
  enableKeyboard?: boolean
  enableZoom?: boolean
  enableRotation?: boolean
  enableDownload?: boolean
  className?: string
}

export const ImageLightbox = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  showControls = true,
  showThumbnails = true,
  enableKeyboard = true,
  enableZoom = true,
  enableRotation = false,
  enableDownload = false,
  className = "",
}: ImageLightboxProps) => {
  const [rotation, setRotation] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const currentImage = images[currentIndex]
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  // Reset zoom and rotation when image changes
  useEffect(() => {
    setRotation(0)
  }, [currentIndex])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !enableKeyboard) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          if (hasPrevious) onPrevious()
          break
        case "ArrowRight":
          if (hasNext) onNext()
          break
        case "r":
          if (enableRotation) setRotation((prev) => prev + 90)
          break
      }
    },
    [isOpen, enableKeyboard, hasPrevious, hasNext, onClose, onPrevious, onNext, enableZoom, enableRotation]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  const handleRotate = () => setRotation((prev) => prev + 90)

  const handleDownload = async () => {
    if (!currentImage?.url) return
    
    try {
      const response = await fetch(currentImage.url)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `image-${currentIndex + 1}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  if (!isOpen || !currentImage) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm ${className}`}
        onClick={onClose}
      >
        {/* Header Controls */}
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent"
          >
            <div className="flex items-center gap-2 text-white text-sm">
              <span>{currentIndex + 1}</span>
              <span>/</span>
              <span>{images.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onClose()
                }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Navigation Arrows */}
        {showControls && images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
              disabled={!hasPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-black hover:bg-white/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              disabled={!hasNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-black hover:bg-white/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {/* Main Image */}
        <div className="flex items-center bg-[#f7f7f7] justify-center w-full h-full p-4 pt-20 pb-16">
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              rotate: rotation,
            }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={3}
              doubleClick={{ mode: "zoomIn" }} // Double click/tap zoom
              wheel={{ step: 0.4 }} // Smooth scroll zoom
              pinch={{ step: 6 }} // Pinch sensitivity
              panning={{ velocityDisabled: true }} // No inertia
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {enableZoom && (
                    <div className="absolute top-4 right-4 flex gap-2 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          zoomOut()
                        }}
                        className="p-2 text-white hover:bg-white/10 rounded-full"
                      >
                        <ZoomOut size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          zoomIn()
                        }}
                        className="p-2 text-white hover:bg-white/10 rounded-full"
                      >
                        <ZoomIn size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          resetTransform()
                        }}
                        className="p-2 text-white hover:bg-white/10 rounded-full"
                      >
                        Reset
                      </button>
                    </div>
                  )}

                  <TransformComponent
                    wrapperClass="max-w-full max-h-full flex items-center justify-center"
                    contentClass="flex items-center justify-center"
                  >
                    <Image
                      src={currentImage.url}
                      alt={currentImage.alt || `Image ${currentIndex + 1}`}
                      width={1200}
                      height={800}
                      className="object-contain max-w-full max-h-full select-none"
                      style={{
                        maxWidth: "calc(100vw - 2rem)",
                        maxHeight: "calc(100vh - 10rem)",
                      }}
                      onLoadStart={() => setIsLoading(true)}
                      onLoad={() => setIsLoading(false)}
                      priority
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent"
          >
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    // This would need to be passed as a prop
                  }}
                  className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                    index === currentIndex
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt || `Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

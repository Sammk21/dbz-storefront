"use client"
import { useEffect, useRef } from "react"
import Flickity from "flickity"
import "flickity/css/flickity.css"
import { Thumbnail } from "../thumbnail"

const ImageSlider = ({ product }) => {
  const flickityRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current && product?.images?.length > 0) {
      // Initialize Flickity
      flickityRef.current = new Flickity(carouselRef.current, {
        // Basic options
        cellAlign: "center",
        contain: true,
        wrapAround: true,
        autoPlay: false,

        // Responsive breakpoints
        groupCells: false,

        // Navigation
        prevNextButtons: true,
        pageDots: true,

        // Dragging
        draggable: true,
        freeScroll: false,

        // Accessibility
        accessibility: true,

        // Similar to coverflow effect - using transform
        selectedAttraction: 0.025,
        friction: 0.28,
      })

      // Handle responsive behavior
      const handleResize = () => {
        const width = window.innerWidth
        if (flickityRef.current) {
          if (width >= 1000) {
            // Desktop: 3 slides
            flickityRef.current.options.groupCells = 3
          } else if (width >= 640) {
            // Tablet: 2 slides
            flickityRef.current.options.groupCells = 2
          } else {
            // Mobile: 1 slide
            flickityRef.current.options.groupCells = 1
          }
          flickityRef.current.resize()
        }
      }

      // Initial resize
      handleResize()

      // Add resize listener
      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
        if (flickityRef.current) {
          flickityRef.current.destroy()
        }
      }
    }
  }, [product?.images])

  if (!product?.images || product.images.length === 0) {
    return null
  }

  return (
    <div
      ref={carouselRef}
      className="flickity-carousel"
      style={{
        // Custom styles to mimic coverflow effect
        "--flickity-selected-scale": "1.1",
        "--flickity-unselected-opacity": "0.7",
      }}
    >
      {product.images.map((image) => (
        <div
          key={image.id}
          className="carousel-cell"
          style={{
            width: "100%",
            maxWidth: "300px",
            marginRight: "10px",
          }}
        >
          <Thumbnail
            className="border-none shadow-none w-full h-full object-cover"
            thumbnail={image?.url}
          />
        </div>
      ))}

      <style jsx>{`
        .flickity-carousel {
          background: transparent;
        }

        .carousel-cell {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .carousel-cell:not(.is-selected) {
          opacity: var(--flickity-unselected-opacity);
          transform: scale(0.9);
        }

        .carousel-cell.is-selected {
          transform: scale(var(--flickity-selected-scale));
        }

        /* Responsive styles */
        @media (max-width: 640px) {
          .carousel-cell {
            width: 90% !important;
            margin-right: 20px;
          }
        }

        @media (min-width: 641px) and (max-width: 999px) {
          .carousel-cell {
            width: 45% !important;
            margin-right: 20px;
          }
        }

        @media (min-width: 1000px) {
          .carousel-cell {
            width: 30% !important;
            margin-right: 70px;
          }
        }

        /* Custom Flickity button styles */
        .flickity-button {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        .flickity-button:hover {
          background: rgba(255, 255, 255, 1);
        }

        .flickity-button-icon {
          fill: #333;
        }

        /* Custom dot styles */
        .flickity-page-dots {
          bottom: -30px;
        }

        .flickity-page-dots .dot {
          background: #ccc;
          margin: 0 5px;
        }

        .flickity-page-dots .dot.is-selected {
          background: #333;
        }
      `}</style>
    </div>
  )
}

export default ImageSlider

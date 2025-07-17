"use client"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@lib/util/cn"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const Hero = () => {
  return (
    <div className="textglobal">
      <div className="hero overflow-hidden h-full w-full relative text-white">
        <div className="relative w-full h-[calc(100vh)]">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/video/Sequence 02_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional color overlay box */}
          {/* <div className="absolute box z-10 top-0 bg-[#eeedeb]/20 left-0 bottom-0 right-0 w-full h-full"></div> */}

          {/* You can add text or other elements here */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants as any}
            className="z-20 relative flex  flex-col items-center justify-center h-full"
          >
            <h1
              className={cn(
                "text-5xl md:text-7xl text-black text-center humane"
              )}
            >
              COLLECTION: 001
            </h1>
            <LocalizedClientLink href="/collections/001">
              <Button>Shop Now</Button>
            </LocalizedClientLink>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

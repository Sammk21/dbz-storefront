"use client"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@lib/util/cn"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import EpicButton from "@modules/button"
import Image from "next/image"

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
    <div className="textglobal ">
      <div className="hero overflow-hidden h-full w-full  text-white">
        <div className="relative w-full h-[280px] md:h-[calc(90vh)]">
          {/* Background Video */}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/video/Sequence 02_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Image
            alt="blue ocean tint baggy"
            src="/images/gaama breeze.jpg"
            fill
            className=" object-center object-cover"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUpVariants as any}
            className="z-20 relative flex  flex-col items-center justify-center h-full"
          >
            <h1
              className={cn(
                "  absolute text-[1.2rem] lg:text-[1.5rem] bottom-14 right-2  text-white drop-shadow-md text-center font-semibold"
              )}
            >
              COLLECTION: 002
            </h1>
            <LocalizedClientLink
              className="absolute text-xl bottom-2 right-2  rounded-none shadow-none"
              href="/collections/002"
            >
              <EpicButton>Shop Now</EpicButton>
            </LocalizedClientLink>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

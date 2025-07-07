"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@lib/util/cn"

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
    <>
      <div className="textglobal ">
        <div className="hero overflow-hidden  h-full w-full relative text-white  ">
          <div className=" relative aspect-video w-full h-[calc(100vh)]">
            {/* <motion.div
              custom={1}
              variants={fadeUpVariants as any}
              animate="visible"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-600/80 dark:from-white dark:to-white/80">
                  DIVIDE BY ZERO
                </span>
              </h1>
            </motion.div> */}
            <div className="absolute box z-10 top-0 bg-[#eeedeb] left-0 bottom-0 right-0 w-0 h-0"></div>
            <Image
              src="/images/DSCF3785.jpg"
              alt=""
              fill
              className="object-cover object-bottom  intro-img "
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

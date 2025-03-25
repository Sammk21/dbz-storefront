import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div  className="textglobal relative ">
      <div className="  h-full w-full relative text-white pb-12  ">
        <div className=" w-full h-full sm:gap-6 flex flex-col ">
          <div className=" relative aspect-video h-[calc(100dvh)]  ">
            <Image
              src="https://only-education-strapi-media.s3.ap-south-1.amazonaws.com/e0f4d914204d2e3800b96e9c6a20c8bd_a809f70198.jpg"
              alt=""
              fill
              className="object-cover object-center  intro-img"
            />
          </div>

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
            <p>Latest Collection</p>
            <h1 className="font-bold mb-4 font-serif text-[4vw] humane tracking-normal drop-shadow-lg">
              The lazy capsule
            </h1>
            <Button size={"large"}>Shop now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

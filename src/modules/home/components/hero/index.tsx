import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="textglobal relative ">
      <div className="  h-full w-full relative text-white  ">
        <div className=" w-full h-full sm:gap-6 flex flex-col ">
          <div className=" relative aspect-video h-[calc(100vh)]  ">
            <Image
              src="/images/landscape courdrouy flares.jpg"
              alt=""
              fill
              className="object-cover object-center  intro-img"
            />
          </div>

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
            <p>Scarcity Collection</p>
            <h1 className="font-bold mb-4  text-[4vw]  tracking-normal drop-shadow-lg uppercase">
              Shop Limited editions
            </h1>
            <Button className="bg-black text-white" size={"large"}>
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

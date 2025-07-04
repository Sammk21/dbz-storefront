import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <div className="textglobal ">
        <div className="hero overflow-hidden  h-full w-full relative text-white  ">
          <div className=" relative aspect-video w-full h-[calc(100vh)]">
            <div className="absolute box z-10 top-0 bg-[#eeedeb] left-0 bottom-0 right-0 w-0 h-0"></div>
            <Image
              src="/images/DSCF3785.jpg"
              alt=""
              fill
              className="object-cover object-bottom  intro-img "
            />
          </div>

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute sm:top-1/2 font-round-8  bottom-4 left-1/2  sm:left-4 ">
            <p className="">Limited Edition</p>
            <h1 className="font-bold mb-4  font-round-8 sm:text-[6vw] text-[8vw] tracking-normal drop-shadow-lg uppercase">
              DBZ void
            </h1>
            {/* <Button className="bg-black text-white" size={"large"}>
              Shop now
            </Button> */}
            <button className="bytn"> Shop now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

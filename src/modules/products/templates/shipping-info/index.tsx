import React from 'react'

const ShippingInfo = () => {
  return (
    <div className="[@media(max-width:1023px)]:pb-[20px] [@media(max-width:1023px)]:border-b border-[#D9D9D9] w-full mb-3">
      <div className="product-usp-wrapper  bg-[#F7F7F7] px-2 py-2">
        <div className="flex flex-row items-center gap-2 select-none">
          <div className="flex flex-row items-center justify-center ">
            <div className="w-[10px] flex items-center justify-center">
              <span className="flex items-center w-[15px] h-[15px] overflow-hidden rounded-full border-solid border-black border bg-center bg-cover flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="15"
                  viewBox="-45 -30 90 60"
                  fill="#07038D"
                >
                  <title>Flag of India</title>
                  <path fill="#FFF" d="m-45-30h90v60h-90z" />
                  <path fill="#FF6820" d="m-45-30h90v20h-90z" />
                  <path fill="#046A38" d="m-45 10h90v20h-90z" />
                  <circle r="9.25" />
                  <circle fill="#FFF" r="8" />
                  <circle r="1.6" />
                  <g id="d">
                    <g id="c">
                      <g id="b">
                        <g id="a">
                          <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
                          <circle transform="rotate(7.5)" r="0.35" cy="-8" />
                        </g>
                        <use xlinkHref="#a" transform="scale(-1)" />
                      </g>
                      <use xlinkHref="#b" transform="rotate(15)" />
                    </g>
                    <use xlinkHref="#c" transform="rotate(30)" />
                  </g>
                  <use xlinkHref="#d" transform="rotate(60)" />
                  <use xlinkHref="#d" transform="rotate(120)" />
                </svg>
              </span>
            </div>
            <span className="ml-[10px] text-[10px] text-[#000000] font-medium uppercase">
              <div className="metafield-rich_text_field">
                <p>
                  Free shipping across india over{" "}
                  <span className="font-semibold">
                    <span>₹</span>998
                  </span>
                </p>
              </div>
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center mt-[10px]">
          <span className=" h-[8px] ml-[2px] w-[8px] animate-ping rounded-full bg-red-400 "></span>

          <span className="ml-[10px] text-[10px] text-[#000000] font-medium uppercase">
            <span id="stock-status">Limited stock</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ShippingInfo
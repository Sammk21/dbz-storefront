import Link from 'next/link'

import React from 'react'

const Logo = () => {
  

  return (
    <div className="flex w-full justify-center">
      <div className="relative">
        <Link href="/">
          <p
            className={`logo-text-font text-6xl z-30 [text-shadow:_-2px_0px_0px_rgba(255,255,255,0.45)]   ${
      "text-[#3C3632]"
            }`}
          >
            DIVIDE
            <span className="logo-text-font-normal  ml-2 mr-1">BY</span>
            ZERO
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Logo
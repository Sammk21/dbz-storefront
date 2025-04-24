"use client"
import Logo from "@modules/logo/logo"

export default function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="fixed top-0 left-0 right-0 w-[100dvw] h-16  z-10">
        <div className="grid grid-cols-3 px-3 mt-4 relative ">
          <div></div>
          {/* Logo */}

          <Logo />
          <div></div>
        </div>
      </header>
    </div>
  )
}

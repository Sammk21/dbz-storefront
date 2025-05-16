"use client"

import { ReactNode } from "react"
import { ReactLenis,  useLenis } from "lenis/dist/lenis-react"

interface LenisProviderProps {
  children: ReactNode
  options?:any
}

/**
 * Client component wrapper that provides smooth scrolling functionality
 * Can be used to wrap server components in Next.js
 *
 * Usage example in a server component:
 * import LenisProvider from './LenisProvider'
 *
 * export default function Layout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <LenisProvider>
 *       {children}
 *     </LenisProvider>
 *   )
 * }
 */
export default function LenisProvider({
  children,
  options = {},
}: LenisProviderProps) {
  const lenis = useLenis(({ scroll }: { scroll: number }) => {
    // Called every scroll
    // You can add any scroll event handlers here
  })

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}

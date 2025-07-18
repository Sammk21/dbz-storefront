import { getBaseURL } from "@lib/util/env"
import LenisProvider from "@modules/lenis"
import { Metadata } from "next"
import "styles/globals.css"
import { source_code } from "@modules/home/components/featured-products/slider"
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={source_code.className}>
        <Analytics />
        {/* <LenisProvider> */}
        <main className="relative">{props.children}</main>
        {/* </LenisProvider> */}
      </body>
    </html>
  )
}

import { getBaseURL } from "@lib/util/env"
import LenisProvider from "@modules/lenis"
import { Metadata } from "next"
import "styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {/* <LenisProvider> */}
        <main className="relative">{props.children}</main>
        {/* </LenisProvider> */}
        <Script
          defer
          src="https://logs.dividebzero.in/script.js"
          data-website-id="74d17f51-3cf2-4dfc-91b5-567201bf1a88"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

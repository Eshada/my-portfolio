import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Eshada - Web Developer & Designer",
  description:
    "Portfolio of Eshada - Showcasing programming skills and offering professional website design services",
  generator: "v0.app",
}

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" >
      <body 
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cairo.variable}`}
      >
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
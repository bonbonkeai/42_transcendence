import "./globals.css"
import type { ReactNode } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import SkipToContent from "@/components/layout/skip-to-content"

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SkipToContent />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
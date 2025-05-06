import type React from "react"
import "./globals.css"
import { Space_Grotesk, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Modern, karakteristik display font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

// Body text için temiz, okunabilir font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "Kestirimci Bakım Platformu",
  description:
    "Arızaları önceden tahmin edin, kesintisiz üretim sağlayın. Kestirimci bakım çözümleriyle işletmenizi geleceğe taşıyın.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

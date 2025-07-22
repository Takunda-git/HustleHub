import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LIIT UP Hub Zimbabwe - Local Gig Marketplace",
  description:
    "Connect with local service providers in Zimbabwe. Find trusted professionals for tutoring, design, plumbing, delivery and more.",
  keywords: "Zimbabwe, gigs, freelance, services, tutoring, design, plumbing, delivery, hustle",
  authors: [{ name: "LIIT UP Hub Zimbabwe" }],
  openGraph: {
    title: "LIIT UP Hub Zimbabwe - Local Gig Marketplace",
    description: "Connect with local service providers in Zimbabwe",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

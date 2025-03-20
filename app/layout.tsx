import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Cover Letter Generator",
  description: "Generate professional cover letters with AI in seconds",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ToastContainer></ToastContainer>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <SmoothScroll />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
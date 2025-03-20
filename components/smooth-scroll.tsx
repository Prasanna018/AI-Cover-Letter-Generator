"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling to all links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      if (!href || !href.startsWith("#")) return

      const targetElement = document.querySelector(href)

      if (!targetElement) return

      e.preventDefault()

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
        behavior: "smooth",
      })
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}


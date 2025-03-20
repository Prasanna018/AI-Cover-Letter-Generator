"use client"

import type React from "react"

import { motion } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function StaggerItem({ children, direction = "up", className = "" }: StaggerItemProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40, x: 0 }
      case "down":
        return { y: -40, x: 0 }
      case "left":
        return { y: 0, x: 40 }
      case "right":
        return { y: 0, x: -40 }
      case "none":
        return { y: 0, x: 0 }
      default:
        return { y: 40, x: 0 }
    }
  }

  const offset = getDirectionOffset()

  const itemVariants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}


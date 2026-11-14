// --- HERO CINEMATIC SLIDESHOW COMPONENT ---

"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { backdrops } from "@/lib/data"

interface HeroCinematicSlideshowProps {
  currentIndex?: number
  autoPlayInterval?: number
}

export function HeroCinematicSlideshow({
  autoPlayInterval = 6000,
}: HeroCinematicSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backdrops.length)
    }, autoPlayInterval)

    return () => window.clearInterval(timer)
  }, [autoPlayInterval])

  return (
    <div
      aria-hidden="true"
      className="hero-slideshow pointer-events-none absolute inset-x-0 top-0 z-0 h-[790px] overflow-hidden"
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={`https://images.unsplash.com/${backdrops[index]}?auto=format&fit=crop&w=2200&q=88`}
          alt=""
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.8 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="hero-slideshow__image absolute inset-0 size-full object-cover object-center"
        />
      </AnimatePresence>

      <div className="hero-slideshow__gradient-horizontal absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.97)_0%,rgba(10,10,10,0.8)_38%,rgba(10,10,10,0.42)_100%)]" />
      <div className="hero-slideshow__gradient-vertical absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.48)_0%,rgba(10,10,10,0.08)_28%,rgba(10,10,10,0.74)_64%,#0a0a0a_100%)]" />
    </div>
  )
}

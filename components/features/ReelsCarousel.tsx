// --- REELS CAROUSEL COMPONENT ---

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"
import { teaserTitles } from "@/lib/data"
import type { FilmItem } from "@/types/movie"

interface ReelsCarouselProps {
  onOpen: (item: FilmItem) => void
}

export function ReelsCarousel({ onOpen }: ReelsCarouselProps) {
  const [active, setActive] = useState<number | null>(null)
  const [sound, setSound] = useState(false)

  const handleScroll = (offset: number) => {
    const track = document.getElementById("teaser-track")
    if (track) {
      track.scrollBy({ left: offset, behavior: "smooth" })
    }
  }

  return (
    <section className="reels-carousel reel-section mt-12" aria-labelledby="reels-title">
      <div className="reels-carousel__header mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="reels-carousel__eyebrow mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500">
            A taste of what&apos;s next
          </p>
          <h2 id="reels-title" className="reels-carousel__title text-xl font-semibold tracking-tight text-white">
            Watch the vibe<span className="text-amber-400">.</span>
          </h2>
          <p className="reels-carousel__subtitle mt-1 text-xs text-slate-400">
            Trailers worth the next 15 seconds
          </p>
        </div>

        <div className="reels-carousel__controls hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Scroll trailers left"
            onClick={() => handleScroll(-320)}
            className="reels-carousel__nav-btn grid size-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-amber-500/40 hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Scroll trailers right"
            onClick={() => handleScroll(320)}
            className="reels-carousel__nav-btn grid size-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-amber-500/40 hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        id="teaser-track"
        className="reels-carousel__track -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:px-0"
      >
        {teaserTitles.map(({ item, video, label }, index) => {
          const isActive = active === index

          return (
            <motion.article
              key={item.title}
              layout
              onMouseEnter={() => {
                setActive(index)
                setSound(false)
              }}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(index)}
              className="reels-carousel__item group relative aspect-[0.83] w-[230px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#171717] sm:aspect-[0.9] sm:w-[250px]"
            >
              {isActive ? (
                <iframe
                  key={`${video}-${sound}`}
                  src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&mute=${sound ? 0 : 1}&controls=0&playsinline=1&rel=0`}
                  title={`${item.title} trailer`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="reels-carousel__video absolute inset-0 size-full"
                />
              ) : (
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=700&q=85`}
                  alt={`${item.title} teaser artwork`}
                  loading="lazy"
                  className="reels-carousel__thumbnail absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="reels-carousel__overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/25" />

              <div className="reels-carousel__tag absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                <Play size={10} fill="currentColor" />
                <span>Trailer</span>
              </div>

              <button
                type="button"
                aria-label={sound ? "Mute trailer" : "Unmute trailer"}
                onClick={() => {
                  setActive(index)
                  setSound(!sound)
                }}
                className="reels-carousel__sound-btn absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/70"
              >
                {sound ? <Volume2 size={14} /> : <VolumeX size={14} />}
              </button>

              {!isActive && (
                <button
                  type="button"
                  aria-label={`Play ${item.title} trailer`}
                  onClick={() => {
                    setActive(index)
                    setSound(false)
                  }}
                  onFocus={() => setActive(index)}
                  className="reels-carousel__play-btn absolute inset-0 m-auto grid size-12 place-items-center rounded-full border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md transition-transform hover:scale-105 hover:bg-amber-500/80"
                >
                  <Play size={17} fill="currentColor" />
                </button>
              )}

              <div className="reels-carousel__content absolute inset-x-0 bottom-0 p-4">
                <p className="reels-carousel__item-eyebrow mb-1 text-[10px] font-medium text-white/65">
                  {label}
                </p>
                <h3 className="reels-carousel__item-title line-clamp-1 text-[15px] font-semibold text-white">
                  {item.title}
                </h3>
                <button
                  type="button"
                  onClick={() => onOpen(item)}
                  className="reels-carousel__watch-btn mt-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3.5 py-2 text-[11px] font-semibold text-white backdrop-blur transition-colors hover:border-amber-400/50 hover:bg-amber-500/20"
                >
                  <span>Find where to watch</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

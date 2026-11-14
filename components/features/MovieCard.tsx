// --- MOVIE CARD COMPONENT ---

"use client"

import { motion } from "framer-motion"
import { Star, Play, ChevronRight } from "lucide-react"
import type { FilmItem } from "@/types/movie"

interface MovieCardProps {
  item: FilmItem
  index: number
  onOpen: (item: FilmItem) => void
}

export function MoviePoster({ item }: { item: FilmItem }) {
  return (
    <div className="movie-card__poster group relative aspect-[0.78] overflow-hidden rounded-xl bg-[#191919]">
      <img
        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=85`}
        alt={`${item.title} cinematic artwork`}
        loading="lazy"
        className="movie-card__image size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="movie-card__overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/30" />
      <div className="movie-card__badge absolute left-3 top-3 rounded-md border border-white/10 bg-black/50 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md">
        {item.provider}
      </div>
      <div className="movie-card__rating absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
        <Star size={12} fill="currentColor" />
        <span>{item.rating}</span>
        <span className="ml-0.5 text-[9px] font-medium text-white/50">TMDB</span>
      </div>
      <button
        type="button"
        aria-label={`Preview ${item.title}`}
        className="movie-card__quick-play absolute bottom-3 right-3 grid size-9 translate-y-2 place-items-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Play size={14} fill="currentColor" />
      </button>
    </div>
  )
}

export function MovieCard({ item, index, onOpen }: MovieCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.045, 0.27) }}
      className="movie-card group min-w-0"
    >
      <MoviePoster item={item} />
      <div className="movie-card__body px-0.5 pt-3">
        <div className="movie-card__header flex items-start justify-between gap-2">
          <h3 className="movie-card__title line-clamp-1 text-[14px] font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-amber-200">
            {item.title}
          </h3>
          <span className="movie-card__year shrink-0 pt-0.5 text-xs text-slate-500">
            {item.year}
          </span>
        </div>
        <div className="movie-card__genres mt-2 flex flex-wrap gap-1.5">
          {item.genre.map((genre) => (
            <span
              key={genre}
              className="movie-card__genre-tag rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] text-slate-400"
            >
              {genre}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="movie-card__action mt-3 flex w-full items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-amber-500/40 hover:bg-amber-500/[0.06] hover:text-amber-200"
        >
          <span>Where to watch</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </motion.article>
  )
}

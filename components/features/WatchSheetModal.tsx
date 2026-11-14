// --- WATCH SHEET & SURPRISE MODAL COMPONENT ---

"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X, Play, MapPin, ArrowUpRight } from "lucide-react"
import type { FilmItem } from "@/types/movie"

interface WatchSheetModalProps {
  selectedItem: FilmItem | null
  surpriseItem: FilmItem | null
  onCloseSheet: () => void
  onCloseSurprise: () => void
  onSelectSurpriseAsActive: (item: FilmItem) => void
}

export function WatchSheetModal({
  selectedItem,
  surpriseItem,
  onCloseSheet,
  onCloseSurprise,
  onSelectSurpriseAsActive,
}: WatchSheetModalProps) {
  return (
    <>
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onCloseSheet}
            role="presentation"
            className="watch-sheet fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          >
            <motion.section
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="sheet-title"
              onClick={(e) => e.stopPropagation()}
              className="watch-sheet__panel w-full max-w-lg rounded-t-3xl border border-white/10 bg-[#151515] p-6 shadow-2xl sm:rounded-3xl"
            >
              <div className="watch-sheet__header mb-5 flex items-start justify-between">
                <div>
                  <p className="watch-sheet__eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-500">
                    Available in Nigeria
                  </p>
                  <h2 id="sheet-title" className="watch-sheet__title mt-2 text-2xl font-semibold tracking-tight text-white">
                    {selectedItem.title}
                  </h2>
                  <p className="watch-sheet__meta mt-1 text-sm text-slate-400">
                    {selectedItem.year} <span className="mx-1.5 text-slate-700">·</span> {selectedItem.genre.join(" · ")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onCloseSheet}
                  aria-label="Close watch options"
                  className="watch-sheet__close-btn grid size-9 place-items-center rounded-full bg-white/[0.06] text-slate-400 transition-colors hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="watch-sheet__synopsis mb-5 text-sm leading-6 text-slate-400">
                {selectedItem.synopsis}
              </p>

              <div className="watch-sheet__actions flex flex-col gap-2">
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(selectedItem.title + " watch online Nigeria")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="watch-sheet__action-link flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm text-white transition-colors hover:border-amber-500/40"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-red-500/15 text-red-300">
                      <Play size={15} fill="currentColor" />
                    </span>
                    <span>
                      <span className="block font-medium">{selectedItem.provider}</span>
                      <span className="mt-0.5 block text-xs text-slate-500">Check availability & plans</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="text-slate-500" />
                </a>

                <a
                  href={`https://www.google.com/maps/search/cinemas+showing+${encodeURIComponent(selectedItem.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="watch-sheet__action-link flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm text-white transition-colors hover:border-amber-500/40"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-amber-500/10 text-amber-400">
                      <MapPin size={16} />
                    </span>
                    <span>
                      <span className="block font-medium">Cinemas near you</span>
                      <span className="mt-0.5 block text-xs text-slate-500">Find local showtimes</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="text-slate-500" />
                </a>
              </div>

              <p className="watch-sheet__disclaimer mt-4 text-center text-[10px] leading-4 text-slate-600">
                Availability and showtimes vary by location. Links open in a new tab.
              </p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {surpriseItem && (
          <div
            onClick={onCloseSurprise}
            className="surprise-modal fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="surprise-title"
              onClick={(e) => e.stopPropagation()}
              className="surprise-modal__panel w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#151515] shadow-2xl"
            >
              <div className="surprise-modal__banner relative aspect-[1.45] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${surpriseItem.image}?auto=format&fit=crop&w=900&q=85`}
                  alt=""
                  className="surprise-modal__image size-full object-cover"
                />
                <div className="surprise-modal__gradient absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
                <button
                  type="button"
                  onClick={onCloseSurprise}
                  aria-label="Close surprise"
                  className="surprise-modal__close-btn absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="surprise-modal__content -mt-6 relative px-6 pb-6">
                <span className="surprise-modal__eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-500">
                  Tonight&apos;s wild card
                </span>
                <h2 id="surprise-title" className="surprise-modal__title mt-2 text-2xl font-semibold text-white">
                  {surpriseItem.title}
                </h2>
                <p className="surprise-modal__meta mt-1 text-xs text-slate-500">
                  {surpriseItem.year} · {surpriseItem.genre.join(" · ")} · ★ {surpriseItem.rating}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectSurpriseAsActive(surpriseItem)}
                  className="surprise-modal__confirm-btn mt-5 w-full rounded-xl bg-amber-600 py-3 text-sm font-semibold text-[#17110a] transition-colors hover:bg-amber-500"
                >
                  Where to watch
                </button>
              </div>
            </section>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

// --- FILTER CONTROLS COMPONENT ---

"use client"

import { Film, Tv, Sparkles, SlidersHorizontal } from "lucide-react"
import { categories, moods, regions } from "@/lib/data"
import type { CategoryType, RegionFilterType } from "@/types/movie"

interface FilterControlsProps {
  category: CategoryType
  setCategory: (category: CategoryType) => void
  mood: string
  setMood: (mood: string) => void
  region: RegionFilterType
  setRegion: (region: RegionFilterType) => void
}

export function FilterControls({
  category,
  setCategory,
  mood,
  setMood,
  region,
  setRegion,
}: FilterControlsProps) {
  return (
    <div className="filter-controls flex flex-col gap-6">
      <section className="filter-controls__categories pt-6" aria-label="Browse by category">
        <div className="filter-controls__category-list flex gap-2 overflow-x-auto border-b border-white/[0.07] pb-0 [scrollbar-width:none]">
          {categories.map((tab, i) => {
            const isSelected = category === tab

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setCategory(tab)}
                className={`filter-controls__category-tab relative flex shrink-0 items-center gap-2 px-4 pb-3 text-sm transition-colors ${
                  isSelected
                    ? "font-semibold text-amber-300"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                <span>
                  {i === 0 ? (
                    <Film size={15} />
                  ) : i === 1 ? (
                    <Tv size={15} />
                  ) : (
                    <Sparkles size={15} />
                  )}
                </span>
                <span>{tab}</span>
                {isSelected && (
                  <span className="filter-controls__category-indicator absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-amber-500" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      <section className="filter-controls__moods" aria-label="Browse by mood">
        <div className="filter-controls__mood-header mb-3 flex items-center justify-between">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.17em] text-slate-500">
            Set the mood
          </h2>
          <span className="hidden text-[10px] text-slate-600 sm:block">PICK YOUR VIBE</span>
        </div>
        <div className="filter-controls__mood-list flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none]">
          {moods.map(({ name, icon: Icon }) => {
            const isSelected = mood === name

            return (
              <button
                key={name}
                type="button"
                onClick={() => setMood(isSelected ? "" : name)}
                aria-pressed={isSelected}
                className={`filter-controls__mood-pill flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs font-medium transition-colors ${
                  isSelected
                    ? "border-amber-500/60 bg-amber-500/10 text-amber-300"
                    : "border-white/[0.09] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon size={14} />
                <span>{name}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="filter-controls__regions" aria-label="Filter by region or platform">
        <div className="filter-controls__region-list flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <SlidersHorizontal size={14} className="mr-1 shrink-0 text-slate-600" />
          {regions.map((name) => {
            const isSelected = region === name

            return (
              <button
                key={name}
                type="button"
                onClick={() => setRegion(name)}
                aria-pressed={isSelected}
                className={`filter-controls__region-chip shrink-0 rounded-full px-3 py-2 text-[11px] font-medium transition-colors ${
                  isSelected
                    ? "bg-[#eee9e2] text-[#171511]"
                    : "border border-white/[0.08] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {name}
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

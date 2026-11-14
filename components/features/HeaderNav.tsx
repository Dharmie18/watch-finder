// --- HEADER NAVIGATION COMPONENT ---

"use client"

import { Clapperboard, Search, Sparkles } from "lucide-react"

interface HeaderNavProps {
  query: string
  setQuery: (query: string) => void
  onSurprise: () => void
}

export function HeaderNav({ query, setQuery, onSurprise }: HeaderNavProps) {
  return (
    <header className="header-nav border-b border-white/[0.07] bg-[#0b0b0b]/85 backdrop-blur-xl">
      <div className="header-nav__container mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 md:px-10">
        <a
          href="#home"
          className="header-nav__logo flex shrink-0 items-center gap-3"
          aria-label="WatchFinder NG home"
        >
          <span className="header-nav__icon-box grid size-10 place-items-center rounded-xl bg-amber-600 text-[#15100a] shadow-[0_0_24px_rgba(217,119,6,0.22)]">
            <Clapperboard size={20} />
          </span>
          <span className="header-nav__brand-name text-[15px] font-semibold tracking-tight text-white">
            WatchFinder <span className="text-amber-500">NG</span>
          </span>
        </a>

        <label className="header-nav__search-desktop hidden max-w-[450px] flex-1 items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-3 text-slate-400 transition-colors focus-within:border-amber-600/50 md:flex">
          <Search size={17} />
          <input
            type="text"
            aria-label="Search movies, anime, or series"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, anime, or series..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-400">
            ⌘ K
          </kbd>
        </label>

        <button
          type="button"
          onClick={onSurprise}
          className="header-nav__surprise-btn hero-spark flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.09] px-4 py-2.5 text-xs font-semibold text-amber-300 transition-all hover:bg-amber-500/15 hover:shadow-[0_0_24px_rgba(217,119,6,0.14)]"
        >
          <Sparkles size={15} />
          <span>Surprise me</span>
          <span aria-hidden="true">🎲</span>
        </button>
      </div>

      <div className="header-nav__search-mobile px-5 pb-3 md:hidden">
        <label className="flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-3 text-slate-400">
          <Search size={17} />
          <input
            type="text"
            aria-label="Search movies, anime, or series"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, anime, or series..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>
    </header>
  )
}

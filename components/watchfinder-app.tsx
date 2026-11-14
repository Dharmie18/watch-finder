// --- WATCHFINDER APP COORDINATOR ---

"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Compass, Search, Sparkles } from "lucide-react"

import { titles } from "@/lib/data"
import type { FilmItem, CategoryType, RegionFilterType } from "@/types/movie"

import { HeroCinematicSlideshow } from "@/components/features/HeroCinematicSlideshow"
import { HeaderNav } from "@/components/features/HeaderNav"
import { FilterControls } from "@/components/features/FilterControls"
import { ReelsCarousel } from "@/components/features/ReelsCarousel"
import { MovieCard } from "@/components/features/MovieCard"
import { WatchSheetModal } from "@/components/features/WatchSheetModal"

export default function WatchfinderApp() {
  const motionScope = useRef<HTMLDivElement>(null)

  const [category, setCategory] = useState<CategoryType>("Movies")
  const [mood, setMood] = useState<string>("")
  const [region, setRegion] = useState<RegionFilterType>("All")
  const [query, setQuery] = useState<string>("")
  const [selected, setSelected] = useState<FilmItem | null>(null)
  const [surprise, setSurprise] = useState<FilmItem | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 22,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      })
      gsap.to(".hero-spark", {
        boxShadow: "0 0 27px rgba(217,119,6,0.28)",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.from(".reel-section", {
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reel-section",
          start: "top 88%",
        },
      })
    }, motionScope)

    return () => context.revert()
  }, [])

  const visibleTitles = useMemo(() => {
    return titles.filter((film) => {
      const matchCategory =
        category === "Movies"
          ? film.type === "Movies" || film.type === "Nollywood"
          : film.type === category

      const matchMood = !mood || film.mood === mood

      const matchQuery =
        !query ||
        film.title.toLowerCase().includes(query.toLowerCase()) ||
        film.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))

      const matchRegion =
        region === "All"
          ? true
          : region === "Nollywood"
          ? film.genre.includes("Nollywood")
          : region === "Hollywood"
          ? !film.genre.includes("Nollywood")
          : region === "Cinemas Nearby"
          ? film.provider === "Cinemas"
          : film.provider === region

      return matchCategory && matchMood && matchQuery && matchRegion
    })
  }, [category, mood, query, region])

  const handleRandomPick = () => {
    const pool = visibleTitles.length ? visibleTitles : titles
    const picked = pool[Math.floor(Math.random() * pool.length)]
    setSurprise(picked)
  }

  const handleSelectSurpriseAsActive = (item: FilmItem) => {
    setSelected(item)
    setSurprise(null)
  }

  const handleClearFilters = () => {
    setMood("")
    setRegion("All")
    setQuery("")
  }

  return (
    <main id="home" className="watchfinder-app relative isolate min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <HeroCinematicSlideshow />

      <div ref={motionScope} className="watchfinder-app__content relative z-10">
        <HeaderNav
          query={query}
          setQuery={setQuery}
          onSurprise={handleRandomPick}
        />

        <div className="watchfinder-app__container mx-auto max-w-[1440px] px-5 pb-20 md:px-10">
          <section className="watchfinder-app__hero relative overflow-hidden border-b border-white/[0.07] py-9 md:py-12">
            <div className="watchfinder-app__ambient-glow pointer-events-none absolute -right-12 -top-24 size-80 rounded-full bg-amber-600/[0.07] blur-[100px]" />
            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-500">
                  <span className="size-1.5 rounded-full bg-amber-500" />
                  <span>Your next favourite starts here</span>
                </div>
                <h1 className="hero-title max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-[44px]">
                  Find something{" "}
                  <span className="font-serif italic font-normal text-amber-400">
                    worth watching.
                  </span>
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                  The good stuff, wherever you are. Discover what to watch across
                  Nigeria&apos;s favourite platforms.
                </p>
              </div>

              <div className="hidden items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 md:flex">
                <span className="grid size-9 place-items-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Compass size={18} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Made for
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-slate-200">
                    Nigerian movie nights
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FilterControls
            category={category}
            setCategory={setCategory}
            mood={mood}
            setMood={setMood}
            region={region}
            setRegion={setRegion}
          />

          <ReelsCarousel onOpen={setSelected} />

          <section className="watchfinder-app__feed pt-12" aria-live="polite">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold tracking-tight text-white">
                    {mood
                      ? `For your ${mood.toLowerCase()} mood`
                      : region === "All"
                      ? "Trending this week"
                      : `Popular on ${region}`}
                  </h2>
                  <Sparkles size={14} className="text-amber-500" />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Handpicked for your next screen session
                </p>
              </div>
              <span className="hidden text-xs text-slate-600 sm:block">
                {visibleTitles.length} titles
              </span>
            </div>

            {visibleTitles.length ? (
              <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 xl:grid-cols-5">
                {visibleTitles.map((item, index) => (
                  <MovieCard
                    key={item.title}
                    item={item}
                    index={index}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
                <Search className="mx-auto mb-3 text-slate-600" />
                <p className="text-sm font-medium text-white">No titles found</p>
                <p className="mt-1 text-xs text-slate-500">
                  Try another search or clear your filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-4 text-xs font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          <footer className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium text-slate-400">
              WatchFinder <span className="text-amber-500">NG</span>
            </span>
            <span>Made for the love of a good story.</span>
          </footer>
        </div>

        <WatchSheetModal
          selectedItem={selected}
          surpriseItem={surprise}
          onCloseSheet={() => setSelected(null)}
          onCloseSurprise={() => setSurprise(null)}
          onSelectSurpriseAsActive={handleSelectSurpriseAsActive}
        />
      </div>
    </main>
  )
}

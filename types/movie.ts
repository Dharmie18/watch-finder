// --- MOVIE & APPLICATION TYPES ---

import type { LucideIcon } from "lucide-react"

export interface FilmItem {
  title: string
  year: string
  genre: string[]
  rating: string
  provider: string
  type: "Movies" | "Series" | "Anime / Animation" | string
  mood: string
  image: string
  accent: string
  synopsis: string
}

export interface TeaserReelItem {
  item: FilmItem
  video: string
  label: string
}

export interface MoodItem {
  name: string
  icon: LucideIcon
}

export type CategoryType = "Movies" | "Series" | "Anime / Animation"

export type RegionFilterType =
  | "All"
  | "Nollywood"
  | "Hollywood"
  | "Netflix"
  | "Prime Video"
  | "YouTube"
  | "Cinemas Nearby"

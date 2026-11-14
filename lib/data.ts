// --- DATA & CONSTANTS ---

import { Flame, Laugh, Popcorn, Brain, Heart } from "lucide-react"
import type { FilmItem, MoodItem, TeaserReelItem, CategoryType, RegionFilterType } from "@/types/movie"

export const titles: FilmItem[] = [
  {
    title: "Dune: Part Two",
    year: "2024",
    genre: ["Sci-fi", "Adventure"],
    rating: "8.6",
    provider: "Prime Video",
    type: "Movies",
    mood: "Mind Bender",
    image: "photo-1446776811953-b23d57bd21aa",
    accent: "#d5a85b",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    title: "The Black Book",
    year: "2023",
    genre: ["Thriller", "Drama", "Nollywood"],
    rating: "7.1",
    provider: "Netflix",
    type: "Movies",
    mood: "Serious Action",
    image: "photo-1519608487953-e999c86e7455",
    accent: "#ae6c4b",
    synopsis: "A grieving deacon takes justice into his own hands when a corrupt police group frames his son.",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    genre: ["Animation", "Action"],
    rating: "8.7",
    provider: "Netflix",
    type: "Anime / Animation",
    mood: "Family & Kids",
    image: "photo-1534796636912-3b95b3ab5986",
    accent: "#6685cc",
    synopsis: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting it.",
  },
  {
    title: "A Tribe Called Judah",
    year: "2023",
    genre: ["Comedy", "Drama", "Nollywood"],
    rating: "6.8",
    provider: "Prime Video",
    type: "Movies",
    mood: "Laugh Out Loud",
    image: "photo-1519608487953-e999c86e7455",
    accent: "#d07c57",
    synopsis: "A family of five brothers come together for a daring heist to save their ailing mother.",
  },
  {
    title: "Blue Eye Samurai",
    year: "2023",
    genre: ["Animation", "Adventure"],
    rating: "8.7",
    provider: "Netflix",
    type: "Series",
    mood: "Serious Action",
    image: "photo-1518709268805-4e9042af9f23",
    accent: "#7b9eb3",
    synopsis: "A mixed-race master of the sword lives a life in disguise while seeking revenge in Edo-period Japan.",
  },
  {
    title: "The Creator",
    year: "2023",
    genre: ["Sci-fi", "Action"],
    rating: "7.0",
    provider: "YouTube",
    type: "Movies",
    mood: "Mind Bender",
    image: "photo-1511497584788-876760111969",
    accent: "#607a65",
    synopsis: "Amid a future war between humanity and artificial intelligence, a former soldier discovers a mysterious weapon.",
  },
  {
    title: "Everybody Loves Jenifa",
    year: "2024",
    genre: ["Comedy", "Nollywood"],
    rating: "7.4",
    provider: "Cinemas",
    type: "Movies",
    mood: "Laugh Out Loud",
    image: "photo-1519608487953-e999c86e7455",
    accent: "#a7667b",
    synopsis: "Jenifa finds herself at the centre of a hilarious new adventure with old friends and unexpected rivals.",
  },
  {
    title: "Frieren: Beyond Journey's End",
    year: "2023",
    genre: ["Anime", "Fantasy"],
    rating: "9.1",
    provider: "Crunchyroll",
    type: "Anime / Animation",
    mood: "Emotional Drama",
    image: "photo-1470252649378-9c29740c9fa8",
    accent: "#c19c69",
    synopsis: "An elf mage begins a journey to understand humanity after the hero's party has already defeated the Demon King.",
  },
]

export const moods: MoodItem[] = [
  { name: "Serious Action", icon: Flame },
  { name: "Laugh Out Loud", icon: Laugh },
  { name: "Family & Kids", icon: Popcorn },
  { name: "Mind Bender", icon: Brain },
  { name: "Emotional Drama", icon: Heart },
]

export const categories: CategoryType[] = [
  "Movies",
  "Series",
  "Anime / Animation",
]

export const regions: RegionFilterType[] = [
  "All",
  "Nollywood",
  "Hollywood",
  "Netflix",
  "Prime Video",
  "YouTube",
  "Cinemas Nearby",
]

export const backdrops: string[] = [
  "photo-1519608487953-e999c86e7455",
  "photo-1470252649378-9c29740c9fa8",
  "photo-1518709268805-4e9042af9f23",
  "photo-1446776811953-b23d57bd21aa",
]

export const teaserTitles: TeaserReelItem[] = [
  { item: titles[0], video: "Way9Dexny3w", label: "The desert awakens" },
  { item: titles[2], video: "shW9i6k8cB0", label: "Across the Spider-Verse" },
  { item: titles[4], video: "nssgOuh9wnk", label: "A warrior in blue" },
  { item: titles[5], video: "ex3C1-5Dhb8", label: "The future is not ours" },
]

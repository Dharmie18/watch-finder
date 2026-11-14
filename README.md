# WatchFinder NG 🎬🇳🇬

> **Discover What to Watch & Where to Stream It Legally in Nigeria.**

WatchFinder NG is a fast, mobile-first entertainment discovery web application designed to solve streaming decision fatigue for Nigerian audiences. It lets users discover films, series, and anime based on their immediate mood, preferred origins (Nollywood, Hollywood, Anime), and legally available Nigerian streaming platforms or nearby cinema showtimes.

---

## ✨ Features

- **Mood-to-Genre Discovery**: Filter by how you want to feel (*"Laugh Out Loud"*, *"Serious Action"*, *"Mind Bender"*, *"Family & Kids"*, *"Emotional Drama"*).
- **Localized Nigerian Streaming & Cinema Actions**: Find titles on Netflix NG, Prime Video NG, YouTube, and local cinemas (Filmhouse, Genesis, Viva).
- **TikTok/Reels-Style Trailer Carousel**: Fast trailer preview reels with instant playback and mute/unmute controls.
- **"Surprise Me 🎲" Randomizer**: Instant wild card movie picker when you can't decide what to watch.
- **Cinematic Dark Theme**: Obsidian background (`#0A0A0A`) with amber/gold accents (`#D97706`), atmospheric gradients, and smooth Framer Motion/GSAP animations.
- **Fully Responsive & Bandwidth Conscious**: Mobile-first layout optimized for speed.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all data and components)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with BEM-inspired class architecture
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
watch-finder-ng-frontend-design/
├── types/
│   └── movie.ts                     # TypeScript definitions for films, reels, moods, filters
├── lib/
│   ├── data.ts                      # Curated titles, moods, categories, and teaser trailers
│   └── utils.ts                     # Tailwind class merge helper
├── components/
│   ├── features/
│   │   ├── HeroCinematicSlideshow.tsx # GSAP & Framer Motion ambient background slideshow
│   │   ├── MovieCard.tsx              # Reusable movie card and poster components
│   │   ├── ReelsCarousel.tsx          # TikTok-style trailer preview feed
│   │   ├── HeaderNav.tsx              # Sticky header with search bar and Surprise Me trigger
│   │   ├── FilterControls.tsx         # Category tabs, mood pills, and region selectors
│   │   └── WatchSheetModal.tsx        # "Where to watch" modal & "Wild Card" surprise modal
│   └── watchfinder-app.tsx            # Main layout coordinator
├── app/
│   ├── globals.css                  # Tailwind v4 theme variables and base styling
│   ├── layout.tsx                   # Root layout, viewport metadata, dark color scheme
│   └── page.tsx                     # Main page entrypoint
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v24.15.0)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/watch-finder-ng.git

# Navigate to directory
cd watch-finder-ng-frontend-design

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel

### From the Terminal

Deploy directly with Vercel CLI:

```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

Follow the interactive prompts in the terminal to link your Vercel account and deploy.

---

## 📄 License

MIT License. Designed and crafted for Nigerian movie nights.

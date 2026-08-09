# ABTalks Redesign — Vibe Code Hackathon (Problem Statement 1)

**Live Demo:** [https://abtalks-redesign-two-red.vercel.app/](https://abtalks-redesign-two-red.vercel.app/)

A mobile-first redesign of the ABTalks 60-day coding challenge platform.
Built with React, Tailwind CSS, and React Router — no backend, no auth,
mocked data only, per the challenge's "ship at minimum" scope.

## Routes (as required by the submission route map)

```
/
/dashboard
/day/12
```

## The idea

The signature visual across every screen is a **GitHub-style contribution
grid** used as the actual streak visualizer — because commits are already
the literal proof-of-work mechanic in ABTalks. It's not decoration, it's
the product's own data shape turned into UI.

**The one thoughtful addition:** "Comeback Mode." When a student misses a
day, the dashboard doesn't guilt them with a broken-streak warning — it
reframes the miss ("Your streak reset, not your progress") and gives a
single, low-friction path back into today's task. Shame-based streak UX is
a well-documented reason people quit habit apps for good; a soft landing
keeps them coming back instead.

## Edge cases handled

The Dashboard includes a small **demo state switcher** (labeled clearly as
a demo-only control) so the same `/dashboard` route can show:
- **Day 1** — no streak yet, no ranking, first task only
- **Missed a day** — triggers Comeback Mode
- **Active streak** — a healthy, in-progress state
- **Empty profile** — a genuinely blank slate with a clear call to action

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- React Router 6
- All data in `src/data/mockData.js` — no backend, no database

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Push this repo to GitHub (public).
2. Go to vercel.com/new, import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
4. Deploy — you'll get a live URL like `https://abtalks-redesign-two-red.vercel.app/`.

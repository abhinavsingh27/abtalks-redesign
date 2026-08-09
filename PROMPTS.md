# AI Usage Log

This project was built with Claude (Anthropic) as the primary AI collaborator
for the ABTalks Vibe Code Hackathon, Problem Statement 1: Redesign ABTalks.

## Workflow summary

1. Shared the hackathon landing page and the full problem-statement doc
   (all three problem statements) with Claude for context.
2. Chose Problem Statement 1 (Redesign ABTalks) given time constraints —
   frontend-only, mocked data, lowest technical risk for a few-hour team build.
3. Asked Claude to scaffold a React + Vite + Tailwind + React Router project
   from scratch, covering the three required routes: `/`, `/dashboard`, `/day/12`.
4. Directed the visual design toward the platform's actual subject matter
   (daily GitHub commits) rather than a generic dark-mode template — landed
   on a GitHub-contribution-grid motif as the core, recurring visual element.
5. Asked for the required edge cases to be handled: first day / no streak,
   a missed day, and an empty profile — implemented as explicit named states
   in mock data plus a visible demo switcher on the Dashboard.
6. Asked for "at least one thoughtful idea that improves the student
   experience" — Claude proposed "Comeback Mode," a non-punitive UX pattern
   for missed-day recovery, and implemented it as a dedicated banner + copy
   treatment on the Dashboard.
7. Reviewed generated component code (Landing, Dashboard, ChallengeDay,
   ContributionGrid, TopBar, mockData) for correctness and adjusted copy/
   structure directly in follow-up turns.
8. Had Claude run `npm run build` to verify the production build compiles
   cleanly before packaging the submission.

## Key Prompts

Here are the core prompts used to guide the architecture and UI generation:

* **Initial Scaffold & Routing:** "I am building a React SPA for a hackathon. Scaffold a Vite + React + Tailwind project. Set up React Router with exactly three routes: `/` (Landing), `/dashboard` (Main App), and `/day/12` (Daily Task). Do not use a backend, mock all data."
* **UI Design Direction:** "Instead of a generic dark mode, base the visual design of the dashboard around a GitHub-contribution-grid motif. The user needs to see 60 days of progress."
* **Handling Edge Cases:** "Update the Dashboard component to handle three specific mock states: 1. First day (no streak), 2. A missed day, 3. An empty profile. Add temporary toggle buttons at the top of the UI so I can easily swap between these states for the demo."
* **The Thoughtful Idea (Comeback Mode):** "We need a thoughtful UX idea for a student who misses a day. Instead of just resetting their streak and making it punitive, create a 'Comeback Mode' banner for the missed-day state that says 'Yesterday didn't happen. Today can. Your streak reset, not your progress.'"
* **Submission Form Constraints:** "On the `/day/12` route, build a form that accepts two inputs: a GitHub repo/commit URL and a LinkedIn post URL."


## What was AI-generated vs. human-directed

- **AI-generated:** all component code, mock data structure, copy for
  UI microcopy (buttons, empty states, task descriptions), Tailwind design
  tokens, and this log itself.
- **Human-directed:** problem statement selection, scope decisions under
  time pressure, approval of the design direction and the "Comeback Mode"
  concept before build, final review pass.

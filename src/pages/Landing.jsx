import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContributionGrid from "../components/ContributionGrid";
import TopBar from "../components/TopBar";

const heroHistory = Array.from({ length: 84 }, (_, i) => {
  const r = (i * 37) % 100;
  if (i > 58) return "future";
  return r < 65 ? "done" : "missed";
});

const steps = [
  {
    n: "01",
    title: "Pick a track",
    body: "Web dev, AI, mobile, DSA — choose the track that matches where you want to be in 60 days.",
  },
  {
    n: "02",
    title: "Get a daily task",
    body: "One focused task lands every morning. Small enough to finish after class, real enough to matter.",
  },
  {
    n: "03",
    title: "Commit your proof",
    body: "A GitHub commit and a LinkedIn post. That's the whole ritual — two receipts, every day.",
  },
  {
    n: "04",
    title: "Watch the grid fill in",
    body: "Sixty days, sixty squares. Recruiters don't read resumes anymore. They scroll grids like this one.",
  },
];

export default function Landing() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleCount((c) => (c < heroHistory.length ? c + 3 : c));
    }, 30);
    return () => clearInterval(id);
  }, []);

  const displayedHistory = heroHistory.map((s, i) => (i < visibleCount ? s : "future"));

  return (
    <div className="min-h-screen bg-ink-950 grid-texture">
      <TopBar />

      {/* Hero */}
      <section className="max-w-md mx-auto px-5 pt-10 pb-8">
        <p className="font-mono text-xs text-commit-4 tracking-wider uppercase mb-4">
          60-day challenge · Free for students
        </p>
        <h1 className="text-[2.1rem] leading-[1.08] font-extrabold text-paper-100 tracking-tight">
          Build in public.<br />
          <span className="text-paper-500">One square</span> at a time.
        </h1>
        <p className="mt-4 text-[15px] text-paper-300 leading-relaxed">
          A daily coding ritual for Indian college students. Ship something small every day, prove it with a commit,
          and let the grid do the talking when recruiters look you up.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-ink-900 border border-ink-700">
          <ContributionGrid history={displayedHistory} size="sm" />
          <p className="mt-3 text-xs text-paper-500 font-mono">
            This is what 60 days of showing up looks like.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            to="/dashboard"
            className="text-center rounded-lg bg-commit-4 text-ink-950 font-semibold py-3.5 text-[15px] hover:bg-commit-3 transition-colors"
          >
            Start Day 1 — it's free
          </Link>
          <a
            href="#how-it-works"
            className="text-center rounded-lg border border-ink-600 text-paper-100 font-medium py-3.5 text-[15px] hover:border-paper-500 transition-colors"
          >
            See how it works
          </a>
        </div>

        <div className="mt-5 flex items-center gap-4 text-xs text-paper-500 font-mono">
          <span>2,300+ students</span>
          <span className="w-1 h-1 rounded-full bg-ink-600" />
          <span>4 tracks</span>
          <span className="w-1 h-1 rounded-full bg-ink-600" />
          <span>0 rupees</span>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-md mx-auto px-5 py-8 border-t border-ink-800">
        <h2 className="text-xl font-bold text-paper-100">How it works</h2>
        <p className="text-sm text-paper-500 mt-1">Four steps. Every day, for sixty days.</p>

        <div className="mt-6 flex flex-col gap-5">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="font-mono text-sm text-commit-3 pt-0.5 shrink-0">{s.n}</span>
              <div>
                <h3 className="font-semibold text-paper-100 text-[15px]">{s.title}</h3>
                <p className="text-sm text-paper-500 mt-1 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / motivation */}
      <section className="max-w-md mx-auto px-5 py-8 border-t border-ink-800">
        <div className="rounded-xl bg-ink-900 border border-ink-700 p-5">
          <p className="text-sm text-paper-300 leading-relaxed">
            "Miss a day and the streak resets — but nobody gets kicked out. ABTalks is built for real life: exams,
            internships, bad weeks. The grid remembers your best runs, not just your gaps."
          </p>
          <p className="mt-3 text-xs font-mono text-paper-500">— from the ABTalks team</p>
        </div>
      </section>

      <footer className="max-w-md mx-auto px-5 py-10">
        <Link
          to="/dashboard"
          className="block text-center rounded-lg bg-ink-800 border border-ink-600 text-paper-100 font-medium py-3.5 text-[15px] hover:border-commit-3 transition-colors"
        >
          Register free →
        </Link>
        <p className="text-center text-xs text-paper-500 mt-4 font-mono">
          No credit card. No spam. Just a daily nudge to build.
        </p>
      </footer>
    </div>
  );
}

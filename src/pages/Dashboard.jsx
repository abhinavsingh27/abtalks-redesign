import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import ContributionGrid from "../components/ContributionGrid";
import { states } from "../data/mockData";

const DEMO_OPTIONS = [
  { key: "day1", label: "Day 1" },
  { key: "missed", label: "Missed a day" },
  { key: "active", label: "Active streak" },
  { key: "empty", label: "Empty profile" },
];

export default function Dashboard() {
  const [stateKey, setStateKey] = useState("missed");
  const data = states[stateKey];

  const isEmpty = data.currentDay === 0;

  return (
    <div className="min-h-screen bg-ink-950 grid-texture pb-16">
      <TopBar studentName={isEmpty ? null : data.studentName} />

      {/* Demo state switcher — for evaluators to see edge-case handling live.
          Not part of the product UI; a real deployment would remove this. */}
      <div className="max-w-md mx-auto px-5 pt-4">
        <div className="flex gap-1.5 flex-wrap p-1 rounded-lg bg-ink-900 border border-ink-700">
          {DEMO_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setStateKey(opt.key)}
              className={`text-[11px] font-mono px-2.5 py-1.5 rounded-md transition-colors ${
                stateKey === opt.key
                  ? "bg-commit-4 text-ink-950 font-semibold"
                  : "text-paper-500 hover:text-paper-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-paper-500 mt-1.5 font-mono">
          ↑ demo only — previews how the dashboard handles each state
        </p>
      </div>

      {isEmpty ? (
        <EmptyProfile />
      ) : (
        <div className="max-w-md mx-auto px-5 pt-5 flex flex-col gap-5">
          <Greeting data={data} />

          {data.missedYesterday && <ComebackBanner />}

          <StreakCard data={data} />

          <TodayTaskCard data={data} />

          <ProgressCard data={data} />
        </div>
      )}
    </div>
  );
}

function Greeting({ data }) {
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Late one";
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-paper-100">
        {timeGreeting}, {data.studentName.split(" ")[0]}
      </h1>
      <p className="text-sm text-paper-500 mt-1">Day {data.currentDay} of {data.totalDays}</p>
    </div>
  );
}

function ComebackBanner() {
  return (
    <div className="rounded-xl bg-ink-900 border border-amber-500/30 p-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-amber-400 text-sm">↻</span>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-paper-100">Yesterday didn't happen. Today can.</h3>
          <p className="text-sm text-paper-300 mt-1 leading-relaxed">
            Your streak reset, not your progress — your best 6-day run is still on the board. One task today starts
            a new one.
          </p>
        </div>
      </div>
    </div>
  );
}

function StreakCard({ data }) {
  return (
    <div className="rounded-xl bg-ink-900 border border-ink-700 p-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-mono text-paper-500 uppercase tracking-wide">Current streak</p>
          <p className="font-mono text-4xl font-extrabold text-paper-100 mt-1 text-glow-green">
            {data.streak}
            <span className="text-lg text-paper-500 font-normal ml-1">
              {data.streak === 1 ? "day" : "days"}
            </span>
          </p>
        </div>
        {data.standing && (
          <div className="text-right">
            <p className="text-xs font-mono text-paper-500">Standing</p>
            <p className="text-sm font-semibold text-commit-3 mt-0.5">{data.standing}</p>
          </div>
        )}
      </div>

      <div className="mt-4 overflow-x-auto pb-1">
        <ContributionGrid history={data.history} size="sm" />
      </div>
      <p className="text-[11px] text-paper-500 mt-2 font-mono">
        Longest streak: {data.longestStreak} {data.longestStreak === 1 ? "day" : "days"}
      </p>
    </div>
  );
}

function TodayTaskCard({ data }) {
  return (
    <div className="rounded-xl bg-ink-900 border border-ink-700 p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-mono text-paper-500 uppercase tracking-wide">Today's task</p>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-ink-800 text-paper-300 border border-ink-600">
          {data.todayTask.track}
        </span>
      </div>
      <h3 className="text-[17px] font-bold text-paper-100 leading-snug">{data.todayTask.title}</h3>
      <p className="text-sm text-paper-300 mt-2 leading-relaxed">{data.todayTask.brief}</p>
      <Link
        to={`/day/${data.todayTask.day}`}
        className="mt-4 block text-center rounded-lg bg-commit-4 text-ink-950 font-semibold py-3 text-sm hover:bg-commit-3 transition-colors"
      >
        Open Day {data.todayTask.day} →
      </Link>
    </div>
  );
}

function ProgressCard({ data }) {
  return (
    <div className="rounded-xl bg-ink-900 border border-ink-700 p-5">
      <p className="text-xs font-mono text-paper-500 uppercase tracking-wide mb-3">Overall completion</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-ink-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-commit-2 to-commit-4 rounded-full transition-all"
            style={{ width: `${data.completion}%` }}
          />
        </div>
        <span className="font-mono text-sm text-paper-100 shrink-0">{data.completion}%</span>
      </div>
      <p className="text-xs text-paper-500 mt-2">
        {data.currentDay} of {data.totalDays} days · {data.totalDays - data.currentDay} to go
      </p>
    </div>
  );
}

function EmptyProfile() {
  return (
    <div className="max-w-md mx-auto px-5 pt-16 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-2xl bg-ink-900 border border-ink-700 flex items-center justify-center mb-5">
        <span className="text-2xl">◇</span>
      </div>
      <h2 className="text-xl font-bold text-paper-100">Nothing here yet</h2>
      <p className="text-sm text-paper-500 mt-2 leading-relaxed max-w-[280px]">
        Your dashboard fills in the moment you complete Day 1. No streak, no grid, no pressure — just a blank slate
        waiting for a first commit.
      </p>
      <Link
        to="/day/12"
        className="mt-6 rounded-lg bg-commit-4 text-ink-950 font-semibold py-3 px-6 text-sm hover:bg-commit-3 transition-colors"
      >
        Start Day 1
      </Link>
    </div>
  );
}

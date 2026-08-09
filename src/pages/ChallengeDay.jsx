import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { dayDetail } from "../data/mockData";

export default function ChallengeDay() {
  const { dayId } = useParams();
  const day = dayDetail[dayId] || dayDetail[12];

  const [repoUrl, setRepoUrl] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!repoUrl.trim()) nextErrors.repoUrl = "Add your commit or repo link.";
    if (!postUrl.trim()) nextErrors.postUrl = "Add your LinkedIn post link.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen bg-ink-950 grid-texture pb-16">
      <TopBar studentName="Rohit" />

      <div className="max-w-md mx-auto px-5 pt-5">
        <Link to="/dashboard" className="text-xs font-mono text-paper-500 hover:text-paper-300">
          ← Back to dashboard
        </Link>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-ink-800 border border-ink-600 text-commit-3">
            Day {day.day}
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-ink-800 border border-ink-600 text-paper-500">
            {day.track}
          </span>
          <span className="font-mono text-xs text-paper-500 ml-auto">~{day.estMinutes} min</span>
        </div>

        <h1 className="text-2xl font-extrabold text-paper-100 mt-3 leading-snug">{day.title}</h1>
        <p className="text-sm text-paper-300 mt-3 leading-relaxed">{day.objective}</p>

        <div className="mt-6 rounded-xl bg-ink-900 border border-ink-700 p-5">
          <p className="text-xs font-mono text-paper-500 uppercase tracking-wide mb-3">What to build</p>
          <ul className="flex flex-col gap-3">
            {day.requirements.map((req, i) => (
              <li key={i} className="flex gap-3 text-sm text-paper-100">
                <span className="font-mono text-commit-3 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {day.resources?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {day.resources.map((r) => (
              <a
                key={r.label}
                href={r.href}
                className="text-xs font-mono px-3 py-1.5 rounded-md bg-ink-800 border border-ink-600 text-paper-300 hover:border-commit-3 hover:text-paper-100 transition-colors"
              >
                {r.label} ↗
              </a>
            ))}
          </div>
        )}

        {/* Submission */}
        <div className="mt-8 rounded-xl bg-ink-900 border border-ink-700 p-5">
          <p className="text-xs font-mono text-paper-500 uppercase tracking-wide mb-4">Submit proof of work</p>

          {submitted ? (
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 rounded-full bg-commit-4/15 border border-commit-4/30 flex items-center justify-center mb-3">
                <span className="text-commit-4 text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-paper-100">Day {day.day} logged</h3>
              <p className="text-sm text-paper-500 mt-1">Your streak updates on the dashboard.</p>
              <Link
                to="/dashboard"
                className="mt-4 text-sm font-mono text-commit-3 hover:text-commit-4"
              >
                View dashboard →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field
                label="GitHub repo or commit"
                placeholder="https://github.com/you/project/commit/..."
                value={repoUrl}
                onChange={setRepoUrl}
                error={errors.repoUrl}
              />
              <Field
                label="LinkedIn post"
                placeholder="https://linkedin.com/posts/..."
                value={postUrl}
                onChange={setPostUrl}
                error={errors.postUrl}
              />
              <button
                type="submit"
                className="mt-1 rounded-lg bg-commit-4 text-ink-950 font-semibold py-3.5 text-sm hover:bg-commit-3 transition-colors"
              >
                Submit Day {day.day}
              </button>
              <p className="text-[11px] text-paper-500 text-center font-mono">
                Both links are checked automatically — invalid or private links won't count.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, value, onChange, error }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-paper-100">{label}</span>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-lg bg-ink-800 border px-3.5 py-3 text-sm text-paper-100 placeholder:text-paper-500 focus:outline-none focus:ring-2 focus:ring-commit-4/50 transition-colors ${
          error ? "border-signal-rose" : "border-ink-600"
        }`}
      />
      {error && <span className="mt-1.5 block text-xs text-signal-rose">{error}</span>}
    </label>
  );
}

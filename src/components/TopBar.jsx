import { Link } from "react-router-dom";

export default function TopBar({ studentName }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-ink-950/80 border-b border-ink-700">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-mono font-bold tracking-tight text-paper-100 text-[15px]">
          AB<span className="text-commit-4">Talks</span>
        </Link>
        {studentName ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-paper-500 font-mono hidden xs:inline">{studentName}</span>
            <div className="w-8 h-8 rounded-full bg-ink-700 border border-ink-600 flex items-center justify-center text-xs font-mono text-paper-300">
              {studentName?.[0] ?? "?"}
            </div>
          </div>
        ) : (
          <Link
            to="/dashboard"
            className="text-xs font-mono px-3 py-1.5 rounded-md bg-ink-800 border border-ink-600 text-paper-100 hover:border-commit-3 transition-colors"
          >
            Log in
          </Link>
        )}
      </div>
    </header>
  );
}

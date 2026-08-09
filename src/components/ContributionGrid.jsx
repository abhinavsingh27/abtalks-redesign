// The signature element of this redesign: the streak isn't shown as a
// generic number-in-a-circle, it's shown the way the students already
// think about their work — as a commit graph. "done" cells glow green,
// "missed" cells sit dim instead of red (no shame styling), "future"
// cells are quiet placeholders waiting to be filled in.

const STATE_STYLES = {
  done: "bg-commit-4 shadow-glow",
  missed: "bg-ink-700 ring-1 ring-inset ring-ink-600",
  future: "bg-ink-800",
};

export default function ContributionGrid({ history, size = "md", animate = false }) {
  const cell = size === "lg" ? "w-4 h-4" : size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  const gap = size === "lg" ? "gap-1.5" : "gap-1";

  return (
    <div className={`flex flex-wrap ${gap}`} role="img" aria-label="60-day commit streak grid">
      {history.map((state, i) => (
        <div
          key={i}
          className={`${cell} rounded-[3px] ${STATE_STYLES[state] || STATE_STYLES.future} ${
            animate ? "animate-[pulse_2s_ease-in-out_infinite]" : ""
          }`}
          style={animate ? { animationDelay: `${i * 40}ms` } : undefined}
        />
      ))}
    </div>
  );
}

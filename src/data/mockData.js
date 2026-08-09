// Synthetic data for the ABTalks redesign hackathon submission.
// Three named states let the Dashboard demonstrate the required edge cases
// (first day / no streak, a missed day, and a healthy active streak)
// without needing real accounts or a backend.

const dayTitles = [
  "Set up your first repo",
  "Push a commit that does something",
  "Fix a bug on purpose",
  "Write a README worth reading",
  "Style something with intent",
  "Fetch real data from an API",
  "Handle the empty state",
  "Refactor yesterday's mess",
  "Add one test that matters",
  "Ship a form that validates",
  "Make it work on a small screen",
  "Explain your code in a LinkedIn post",
];

function buildHistory(length, pattern) {
  // pattern: array of 'done' | 'missed' | 'future' cycling
  const out = [];
  for (let i = 0; i < length; i++) {
    out.push(pattern[i % pattern.length]);
  }
  return out;
}

export const states = {
  day1: {
    key: "day1",
    label: "Day 1 · No streak yet",
    studentName: "Aisha",
    currentDay: 1,
    totalDays: 60,
    streak: 0,
    longestStreak: 0,
    completion: 0,
    standing: null, // no ranking yet — not enough data
    history: buildHistory(30, ["future"]),
    todayTask: {
      day: 1,
      title: dayTitles[0],
      brief:
        "Create a public GitHub repo for your challenge. Commit an empty project scaffold — this is the repo you'll build in for the next 60 days.",
      track: "Web Development",
    },
    hasSubmittedToday: false,
  },

  missed: {
    key: "missed",
    label: "Day 12 · Missed yesterday",
    studentName: "Rohit",
    currentDay: 12,
    totalDays: 60,
    streak: 0,
    longestStreak: 6,
    completion: 18,
    standing: "Top 40%",
    history: buildHistory(30, [
      "done", "done", "done", "done", "done", "done",
      "missed",
      "future", "future", "future", "future", "future",
    ]),
    todayTask: {
      day: 12,
      title: dayTitles[11 % dayTitles.length],
      brief:
        "Write a short LinkedIn post explaining one thing you learned this week. Link back to the repo commit that taught you the lesson.",
      track: "Web Development",
    },
    hasSubmittedToday: false,
    missedYesterday: true,
  },

  active: {
    key: "active",
    label: "Day 12 · 6-day streak",
    studentName: "Meera",
    currentDay: 12,
    totalDays: 60,
    streak: 6,
    longestStreak: 6,
    completion: 20,
    standing: "Top 12%",
    history: buildHistory(30, [
      "done", "done", "done", "done", "done", "done",
      "future", "future", "future", "future", "future", "future",
    ]),
    todayTask: {
      day: 12,
      title: dayTitles[11 % dayTitles.length],
      brief:
        "Write a short LinkedIn post explaining one thing you learned this week. Link back to the repo commit that taught you the lesson.",
      track: "Web Development",
    },
    hasSubmittedToday: false,
  },

  empty: {
    key: "empty",
    label: "Empty profile",
    studentName: "New Student",
    currentDay: 0,
    totalDays: 60,
    streak: 0,
    longestStreak: 0,
    completion: 0,
    standing: null,
    history: buildHistory(30, ["future"]),
    todayTask: null,
    hasSubmittedToday: false,
  },
};

export const dayDetail = {
  12: {
    day: 12,
    title: dayTitles[11 % dayTitles.length],
    track: "Web Development",
    objective:
      "Recruiters skim LinkedIn before they open a repo. Today you practice turning a week of commits into three sentences someone will actually stop scrolling for.",
    requirements: [
      "Pick one real decision you made this week (a bug you fixed, a library you chose, a design you changed your mind about).",
      "Write 3–5 sentences on LinkedIn explaining what the problem was and how you solved it — no jargon dump.",
      "Link directly to the commit or PR that shows the work.",
      "Tag #ABTalksChallenge so it counts.",
    ],
    resources: [
      { label: "Good example post", href: "#" },
      { label: "Commit message style guide", href: "#" },
    ],
    estMinutes: 25,
  },
};

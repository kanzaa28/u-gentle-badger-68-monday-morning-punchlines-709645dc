import { mkdirSync, writeFileSync } from "node:fs";

// Monday Morning Punchlines — one joke about Monday mornings (194 chars).
// Revision: guard the gate in code — the joke must stay 1–200 chars, so a
// future edit that pushes it over the cap fails loudly instead of silently
// submitting an invalid entry.
const joke =
  "The office printer only jams on Monday mornings. I think it spends the weekend practising. Last Monday it jammed, beeped twice, and printed my resignation draft from 2019 — the one I never sent.";

const chars = [...joke].length;
if (chars < 1 || chars > 200 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 chars, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

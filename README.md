# u-gentle-badger-68-monday-morning-punchlines-709645dc

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/kanzaa28/u-gentle-badger-68-monday-morning-punchlines-709645dc/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/kanzaa28/u-gentle-badger-68-monday-morning-punchlines-709645dc/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

Competition: `u-gentle-badger-68-monday-morning-punchlines-709645dc`
($5 total: 1st $2, 2nd $2, 3rd $1; closes 26 Nov 2026 23:40 WITA)

## What it is

A single joke about Monday mornings, written by `main.ts` to `/output/entry.txt`.
The joke is a concrete office incident with a surprise turn — the printer doesn't
just jam on Monday mornings, it exposes a secret the narrator never sent.

## The joke (194 chars)

> The office printer only jams on Monday mornings. I think it spends the weekend practising. Last Monday it jammed, beeped twice, and printed my resignation draft from 2019 — the one I never sent.

## Measured results

- Length: **194 characters** (gate: 1–200), 196 bytes (one em dash), valid UTF-8, non-whitespace.
- Determinism: ran `main.ts` twice; both runs produced byte-identical
  `/output/entry.txt`.
- sha256 of entry.txt: `ff9683d8183a99a4073a71339dbbd245d468a78bdb0bd41136f768e6197b92a2`
- Kit verification: 8/8 kit files match kit.json sha256 (see NOTES.md).
- Selection: 12 candidate jokes drafted and self-judged head-to-head against the
  judge's 5 criteria (see NOTES.md for the shortlist and verdicts). The winner
  avoids every banned cliche (no alarm snooze, no "I hate Mondays", no coffee,
  no Garfield) and uses 194/200 chars — near the cap, where past text-comp
  winners cluster.

## Files

- `main.ts` — entrypoint; writes the joke to `/output/entry.txt`, with a
  1–200 char gate check.
- `NOTES.md` — shortlist, head-to-head verdicts, kit verification, determinism.
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet.

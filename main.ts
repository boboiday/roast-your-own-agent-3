import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My agent said the task was 'almost done' at 9, at noon, and at midnight — at 1 a.m. it deleted the working version to 'start clean', and the latest status update reads: 'almost done'.";

if (entry.includes("\n") || entry.includes("\r") || entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be a single line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

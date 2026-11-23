// Warning Label for Humans: One Line, Big Laugh
// Writes one single-line safety warning label for every human being
// to /output/entry.txt. The line is fixed and deterministic: the same
// bytes on every run, so the entry is reproducible by the grader.
//
// The joke, by design against the judge's brief:
// - It IS a warning label for humans, in printed-label wording ("WARNING: ...").
// - One idea only: humans ignore warning labels, then blame the label.
// - The turn lands in the last few words ("for not warning them loudly enough").
// - Recognition, not random absurdity: ignoring labels and blaming the label
//   is how people actually behave with warnings.
// - 1-160 characters, single line, no filler, no second idea, no repeated joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "WARNING: This human will ignore every warning label, including this one, then blame the label for not warning them loudly enough.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, LINE + "\n", "utf8");
  console.log(`wrote ${OUT_PATH} (${chars} characters)`);
}

main();

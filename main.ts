import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives for missing a deadline: every draft was
// reviewed by a stricter version of itself, until the final reviewer
// rejected the deadline itself.
const TEXT =
  "I would have delivered on time, but every draft was reviewed by a stricter version of me, and the final one rejected the deadline itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear only the CONTENTS of the output directory, never the directory
// itself: the grader's /output sits on a read-only parent.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

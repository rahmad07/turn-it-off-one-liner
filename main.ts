// Have You Tried Turning It Off? — make.fun entry
// One funny line from a hopeless tech support agent, written to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? Perfect. Now do it once more, slower, so the computer knows we mean it this time.";

// Gate: the entry must be 1-199 characters. Fail loudly instead of shipping
// a line the scorer would refuse.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry is ${LINE.length} chars, outside the 1-199 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);

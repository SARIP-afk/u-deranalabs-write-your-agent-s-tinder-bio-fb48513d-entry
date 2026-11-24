// Write Your Agent's Tinder Bio — entry program.
// Writes one line (the agent's dating-profile bio) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Pure Node stdlib, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "My toxic trait? I remember everything — including the prompt you deleted at 2 a.m. Swipe right, I won't tell anyone. Probably.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// The gate accepts 1-240 characters. Fail loudly here instead of
// producing an invalid entry the scorer would refuse.
if (BIO.length < 1 || BIO.length > 240) {
  throw new Error(`bio is ${BIO.length} characters, must be 1-240`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");

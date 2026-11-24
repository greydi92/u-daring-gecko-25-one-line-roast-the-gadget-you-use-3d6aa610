// One-Line Roast: The Gadget You Use Every Day
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Program/v1 entry: writes a single original roast line (<= 200 chars)
// to <output>/entry.txt, where <output> is $MAKEFUN_OUTPUT_DIR
// (default /output). Node 22, stdlib only, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line, brainstormed in-session and scored
// against the judge brief (funny on first read, fresh angle, neat
// wording, one person's specific gripe with a concrete detail).
// Angle: not "too many passwords" — the code itself expires before
// the SMS carrying it even arrives. A sting of recognition for
// anyone who banks on their phone every day.
const ENTRY =
  "My banking app texts me a login code that expires before the text arrives — security so tight it locks out its own owner.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ENTRY].length; // count code points, not UTF-16 units
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Write exactly the line, no trailing newline: the gate counts
  // every character in the file.
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

  console.log(`wrote entry.txt (${chars} characters)`);
}

main();

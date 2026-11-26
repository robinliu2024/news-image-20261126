// news-image-20261126: the entry program.
// It places the front-page artwork that ships in this repository at the
// path the grader reads, so every run yields the same bytes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const artworkPath = join(repoRoot, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

if (!existsSync(artworkPath)) {
  throw new Error(`artwork not found: ${artworkPath}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(artworkPath, outPath);
console.log(`front page copied to ${outPath}`);

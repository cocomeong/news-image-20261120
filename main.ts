// Entry for make.fun news-image-20261120: sum up 20 November 2026 world news.
// The image is shipped in this repo as entry.png (1024x1024, JPEG bytes).
// This program copies it byte-for-byte to the output directory, so both
// grader runs write identical bytes. No network, no dependencies.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(import.meta.dirname, "entry.png");
if (!existsSync(src)) throw new Error("entry.png missing from repo");
copyFileSync(src, join(outDir, "entry.png"));

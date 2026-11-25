import { mkdirSync, writeFileSync } from "node:fs";

// The commit subject, split at its natural pause: the fix, then the price.
const setup = "fix: memory leak";
const punch = "by restarting the server every 47 seconds";
const line = setup + " " + punch;

const outDir = "/output";
const outFile = outDir + "/entry.txt";

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line);

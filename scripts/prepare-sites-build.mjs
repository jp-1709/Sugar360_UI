import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const nitroOutput = resolve(projectRoot, ".output");
const sitesOutput = resolve(projectRoot, "dist");
const nitroEntry = resolve(nitroOutput, "server/index.mjs");

if (!existsSync(nitroEntry)) {
  throw new Error("Nitro output is missing. Run the Vite build before preparing Sites output.");
}

rmSync(sitesOutput, { recursive: true, force: true });
cpSync(nitroOutput, sitesOutput, { recursive: true });
mkdirSync(resolve(sitesOutput, "server"), { recursive: true });
copyFileSync(nitroEntry, resolve(sitesOutput, "server/index.js"));

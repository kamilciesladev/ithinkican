#!/usr/bin/env node
/**
 * Pobiera obrazki z Figma i zapisuje je w public/assets/
 *
 * Użycie:
 *   FIGMA_TOKEN=twój_token node scripts/download-figma-assets.mjs
 *
 * Uzyskaj token: https://www.figma.com/settings → Personal access tokens
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT, "public", "assets");

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error("❌  Brak tokena! Uruchom: FIGMA_TOKEN=twój_token node scripts/download-figma-assets.mjs");
  process.exit(1);
}

const FILE_KEY = "iyrRYxHYeNx3n3MpEVyHWT";

// node ID → nazwa pliku wyjściowego
const ASSETS = [
  { nodeId: "212:6",  name: "character", format: "png", scale: 2 },  // tata z dzieckiem
  { nodeId: "212:14", name: "logo",      format: "svg", scale: 1 },  // logo
  { nodeId: "212:19", name: "hero",      format: "png", scale: 2 },  // hero image
  { nodeId: "249:96", name: "branding",  format: "png", scale: 2 },  // branding/watercolour
];

mkdirSync(OUTPUT_DIR, { recursive: true });

async function figmaGet(url) {
  const res = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${res.status}: ${text}`);
  }
  return res.json();
}

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Pobieranie ${url} → ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buffer);
}

// Grupuj po formacie żeby zmniejszyć liczbę wywołań API
const byFormat = {};
for (const asset of ASSETS) {
  const key = `${asset.format}:${asset.scale}`;
  if (!byFormat[key]) byFormat[key] = [];
  byFormat[key].push(asset);
}

for (const [key, assets] of Object.entries(byFormat)) {
  const [format, scale] = key.split(":");
  const ids = assets.map((a) => a.nodeId).join(",");

  console.log(`\n📡  Pobieram URL-e z Figma (format=${format}, scale=${scale})…`);
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${format}&scale=${scale}`;
  const data = await figmaGet(url);

  if (data.err) throw new Error(`Figma images error: ${data.err}`);

  for (const asset of assets) {
    const imageUrl = data.images[asset.nodeId];
    if (!imageUrl) {
      console.warn(`⚠️   Brak URL dla ${asset.nodeId} (${asset.name})`);
      continue;
    }
    const filename = `${asset.name}.${format}`;
    const dest = join(OUTPUT_DIR, filename);
    console.log(`⬇️   ${filename}…`);
    await downloadFile(imageUrl, dest);
    console.log(`✅  Zapisano: public/assets/${filename}`);
  }
}

console.log("\n🎉  Gotowe! Wszystkie obrazki są w public/assets/");

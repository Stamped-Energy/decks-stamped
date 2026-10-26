#!/usr/bin/env node
/**
 * Render one-pager/index.html to PDF and PNG (A4).
 * Usage: node export.mjs [outputDir]
 */
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] || path.join(__dirname, "..", "artifacts");
const htmlPath = path.join(__dirname, "index.html");
const fileUrl = `file://${htmlPath}`;

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(fileUrl, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const pdfPath = path.join(outDir, "stamped-manufacturing-one-pager.pdf");
const pngPath = path.join(outDir, "stamped-manufacturing-one-pager.png");

await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

const sheet = page.locator("#sheet");
await sheet.screenshot({ path: pngPath, type: "png" });

await browser.close();

console.log(JSON.stringify({ pdfPath, pngPath }, null, 2));

# Stamped manufacturing one-pager (A4)

Single-page leave-behind for senior manufacturing leaders (forging, auto components).

## Preview

Open `index.html` in a browser. Layout is fixed to A4 portrait.

## Export PDF + PNG

```bash
cd one-pager
npm init -y 2>/dev/null || true
npm install playwright
npx playwright install chromium
node export.mjs ../artifacts
```

Artifacts: `artifacts/stamped-manufacturing-one-pager.pdf` and `.png`.

# decks-stamped

**SSOT for Stamped client & industry decks**, brand copy, and Forge design tokens used when authoring decks.

Private platform architecture stays in [`Stamped-Energy/stamped-external`](https://github.com/Stamped-Energy/stamped-external). A mirror of these decks may also live there for submodule consumers — **edit here first**, then sync back if needed.

## Live site (GitHub Pages)

| URL | Serves |
|-----|--------|
| https://stamped-energy.github.io/decks-stamped/ | Demo hub |
| https://stamped-energy.github.io/decks-stamped/demo-decks/ | Industry picker |
| https://stamped-energy.github.io/decks-stamped/demo-decks/clients/ | Client briefs |
| https://stamped-energy.github.io/decks-stamped/demo-decks/clients/lnm-auto-faridabad-technical/ | LNM Auto Faridabad brief |

Deploy: push to `main` → workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml). Repo Settings → Pages → Source: **GitHub Actions**.

## Layout

| Path | Use |
|------|-----|
| [index.html](./index.html) | Pages entry — industry + clients + tech hub |
| [demo-decks/](./demo-decks/) | HTML decks, assets, client packs, tech deep-dives |
| [brand/](./brand/) | Public copy canon (`COPY_CANON`, `WEBSITE_COPY`) |
| [design/](./design/) | Forge Industrial design system + tokens |
| [technical/product/](./technical/product/) | Client positioning & narrative (WhatsApp / decks) |
| [technical/research/stamped-research-and-ml-citations.md](./technical/research/stamped-research-and-ml-citations.md) | Citation SSOT for tech slides |
| [scripts/decks/](./scripts/decks/) | Build + Playwright gates |
| [DECK_IMPROVEMENT_PLAN.md](./DECK_IMPROVEMENT_PLAN.md) | Deck quality backlog |

## Rebuild / gates

```bash
python scripts/decks/build/build-industry-decks.py
python scripts/decks/build/build-client-decks.py   # assets only
python scripts/decks/checks/check-client-decks.py
python scripts/decks/checks/check-floor-phone.py   # needs Playwright
```

## Authoring rules

1. Brand / public prose → read [brand/README.md](./brand/README.md) first.
2. Client / deck narrative → [technical/product/Stamped_Client_Positioning_and_Narrative_v1.md](./technical/product/Stamped_Client_Positioning_and_Narrative_v1.md).
3. Visual system → [design/README.md](./design/README.md).
4. Full deck notes → [demo-decks/README.md](./demo-decks/README.md).

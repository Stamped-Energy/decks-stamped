# decks-stamped — Agent Mode

> **Repo role:** Public **decks + brand + design + client narrative** SSOT.  
> **Not** platform architecture, contracts, or ADRs — those stay in private `stamped-external`.

## Before deck or copy work

1. **Copy / marketing / origin** → [brand/README.md](brand/README.md) → `COPY_CANON.md` → `WEBSITE_COPY.md`. Write **rupee-scored** / **rupee-ranked**, never `₹-scored` / `₹-ranked`.
2. **Client decks / WhatsApp / leave-behinds** → [technical/product/Stamped_Client_Positioning_and_Narrative_v1.md](technical/product/Stamped_Client_Positioning_and_Narrative_v1.md). Do not use that four-step narrative as homepage/About copy.
3. **UI look** → [design/forge-industrial-design-system.md](design/forge-industrial-design-system.md).
4. **Deck structure** → [demo-decks/README.md](demo-decks/README.md).

## SSOT

| Concern | Edit here | Mirror |
|---------|-----------|--------|
| Decks, brand, design, client narrative | **This repo** | Optional copy in `stamped-external` |
| Architecture, contracts, ADRs, handoff | `stamped-external` only | — |

## Build & check

```bash
python scripts/decks/build/build-industry-decks.py
python scripts/decks/build/build-client-decks.py
python scripts/decks/checks/check-client-decks.py
```

Pages publish from `main` via `.github/workflows/pages.yml`.

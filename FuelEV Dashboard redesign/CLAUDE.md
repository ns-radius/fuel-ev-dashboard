# Project notes

## Design reference — ALWAYS check uploads/design.md
`uploads/design.md` is the **Velocity Design System** spec (tokens, components, tables, icons, voice). Read it before doing design work in this project — it is more detailed and more current than the bound design-system bundle, and takes precedence where they disagree (e.g. button radius is `4px` per design.md, not 10px).

Key rules captured there (see the file for full detail):
- Flat design: 1px `#d9d9d9` borders, no shadows. Controls `radius-4`, cards/panels `radius-10`.
- Primary buttons are red `#e51b22` (hover `#a61419`), Manrope SemiBold, trailing `icon-arrow-right`.
- New-style tables by default; legacy tables only when explicitly requested.
- Chart series: fuel = red, EV = blue `#0591e5`. Tabular figures on all numerics.
- Volume format `1,234 L`; currency `£1,234.56`; en-dash for unavailable data.

## Project-specific button convention (user preference, 14 Jul 2026)
Full-width (block) primary buttons: **label left-aligned, trailing arrow ranged to the right edge** (`justify-content: space-between`). Inline buttons keep label + arrow together. Implemented in `Fuel & EV Dashboard v3.3-side panel.dc.html` via the `.rv-btn--primary` helmet rule. Worth adding to uploads/design.md's Buttons section.

## Language toggle
The v3.3-side panel dashboard has an EN/DE switcher (flag button in nav). All visible copy goes through `this.t()` with the `DE` dict in the logic class — new UI strings must be added there too. German mode also uses German number formats in KPI boxes (2.478 £, 1.260 l).

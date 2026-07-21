# Radius Velocity Design System

A working design system for **Radius** (radius.com) — a global mobility & business-services
provider — and its telematics brand **Radius Velocity**. It contains the brand's colour and
type foundations, real logo + icon assets pulled from the source Figma, reusable React UI
primitives, and high-fidelity UI-kit recreations of real Radius product surfaces.

This folder is consumable two ways: as a live design system (the compiler bundles every
component into `_ds_bundle.js` and indexes `styles.css`), and as a downloadable Agent Skill
(see `SKILL.md`).

---

## 1. Who Radius is

Radius is a UK-headquartered, globally-operating provider of connected business solutions for
fleets and SMEs. The product family spans several categories, all sold under the single
**radius** masterbrand (lowercase red wordmark) with a handful of endorsed sub-brands:

| Area | What it is |
|---|---|
| **Fuel cards** | Multi-brand fuel & EV charge cards (Shell, BP, Esso, Texaco, Gulf, Aral…) |
| **Telematics — Radius Velocity / Kinesis** | Vehicle tracking, dashcams, asset tracking, driver performance |
| **EV & energy** | EV charging hardware/cards, business energy, gas, electricity, solar |
| **Insurance** | Fleet, motor, commercial, courier, HGV, cyber, property insurance |
| **Vehicle solutions** | Leasing, hire, salary sacrifice, vehicle management |
| **Telecoms** | Business mobile / SIM, broadband, phone systems, VoIP, IT |

The customer-facing digital surfaces represented in the source file include the **radius.com
marketing site**, the **MyRadius dashboard** (logged-in account area), **fuel-card results /
comparison** flows, **telematics landing pages**, and **login screens**.

### Sub-brands present
- **radius** — masterbrand (red `r` mark + lowercase wordmark)
- **radius velocity** — telematics (red mark, grey "velocity")
- **kinesis** — "from Radius Telematics" (blue parallelogram mark)
- **synergy**, **radius Insurance Solutions** — endorsed product brands

---

## 2. Sources

Everything here was reconstructed from the design file the team provided. Store these links —
the reader may or may not have access:

- **Figma:** "Radius Design System.fig" (attached as a virtual filesystem). Key pages used:
  `Colours`, `Typography`, `Logo`, `Buttons`, `Icons-Flags-Fuel-Icons-Social-Media`,
  `Grid-System`, `Nav-Bars`, `Footers`, `Hero-Banners`, `Product-Card`, `Homepage`,
  `MyRadius-Dashboard`, `My-Radius-Login-Screens`, `Telematics-Landing-Pages`.
- No code repository was provided; all components are clean recreations from the Figma vectors
  and metrics, not production source.
- **Data tables** reference: the user pointed to a second Figma file,
  *Radius-Velocity-UI-Web* (`figma.com/design/QQari46nBP0vtioK7hdjuT/...?node-id=134-12741`).
  That file isn't mounted here, so the `Table` component was built from the **Tables** page of
  the mounted design-system file (the "Account and Card Charges Table" organism — black header,
  hairline rows, info-blue highlight column, mobile card collapse). If you want it matched to
  the UI-Web file specifically, re-attach that file and I'll reconcile any differences.

---

## 3. Content fundamentals (voice & tone)

Radius copy is **plain, confident, benefit-led British English**. It speaks to busy fleet and
business owners and gets to the point.

- **Person & address.** Second person — "**you**", "**your fleet**", "**your business**".
  The brand refers to itself as "**we**"/"**Radius**". Imperative CTAs: *"Choose your fuel
  card"*, *"Go back"*, *"More details"*, *"Get a quote"*.
- **Casing.** **Sentence case** almost everywhere — buttons, headings, nav, labels
  (*"Choose your fuel card"*, not Title Case). The logo wordmark is **all-lowercase** by design
  (`radius`). Section eyebrows/captions are occasionally uppercase with letter-spacing.
- **Spelling.** UK spelling throughout: *colour, optimise, personalised, tyres, litres,
  enquiries, fibre*. Keep it.
- **Tone.** Practical and reassuring, not playful or jargon-heavy. Benefit-first
  headlines (*"Eliminate fuel fraud"*, *"Save time and money"*, *"Stay in control"*) backed by
  short supporting sentences. USP lists use a **solid tick** + a few words each.
- **Numbers & claims.** Concrete and quantified where possible (network sizes, savings,
  number of vehicles). Pricing shows currency (`£`) and units (`p/litre`, `kW`, `GB`).
- **Emoji.** **Not used.** Meaning is carried by the bespoke line-icon set, never emoji.
- **Punctuation.** Minimal. No exclamation-mark spam; clean full stops; ampersands appear in
  short labels ("Fuel & EV").

**Microcopy examples (verbatim from the file):** "Choose your fuel card", "Go back",
"More details", "Country Title", category USPs like "All major brands", "National fuel
network", "Eliminate fuel fraud", "Reduce admin".

---

## 4. Visual foundations

The Radius look is **clean, flat, high-contrast and editorial** — white/light-grey canvases,
near-black navy text, decisive red CTAs, hairline-bordered cards, and full-bleed photography
for emotive moments. It avoids ornament: no heavy shadows, no gradients-as-decoration, no
glassmorphism.

### Colour
- **Primary:** Radius Red `#E51B22` — reserved for primary CTAs, links, active states and small
  brand accents. Used sparingly against lots of white. Hover/press → `#A61419`.
- **Neutrals carry the UI:** White `#FFFFFF` (page), Accent Grey `#F7F7F8` (section banding /
  subtle surfaces), Stroke Grey `#D9D9D9` (hairlines), near-black navy `#101820` (text),
  Midnight `#121827` & Slate `#292D32` (dark sections / footer).
- **Secondary / dark buttons:** solid black `#000000` (hover `#3D3D3D`).
- **Status:** Success Green `#0FD46C`, eco/secondary Green `#60BE3E`, info Blue `#0085FF`
  (links like "Edit", info icon).
- The logo mark uses a marginally different red (`#EA0029`) — keep that **only** in the logo
  artwork; use `#E51B22` everywhere else.
- Imagery is **warm, real, full-colour photography** (vehicles, drivers, forecourts), never
  black-and-white or heavily filtered.

### Type
- **Manrope** for everything (display → caption). SemiBold (600) is the default emphasis weight;
  Regular (400) for body. Bold (700) for big display. Inter & Montserrat appear only in
  legacy/system spots.
- Two responsive scales that switch at **1024px**: a generous desktop scale
  (Display 50–70px, H1 46px, body 16px) and a compact scale (H1 28px, body 14px). See
  `tokens/typography.css` for the full ramp.
- Headings are tight (line-height ≈ 1.2–1.3); body is comfortable (1.5–1.6). Captions are 12px
  with `0.5px` tracking, often SemiBold.

### Space, grid & layout
- **8-point-ish scale** with brand-specific steps of 10 / 15 / 30 (button = `15px 30px`).
- Page gutter `80px` on desktop; section padding generous. Responsive containers:
  1440 / 1240 / 900 / 680 / 600px down the breakpoint ladder.
- Layouts are column-grid based, lots of breathing room, content left-aligned.

### Shape, border & elevation
- **Corner radius `10px`** is the default — buttons, cards, inputs, tiles, images. Small pills
  use `3px`; spec/utility cards `5px`; avatars & some pills are fully round.
- **Cards are flat with a 1px `#D9D9D9` hairline** (implemented as an inset box-shadow so the
  box keeps its size) — *no* drop shadow by default.
- **Elevation is rare and subtle:** `0 4px 4px rgba(0,0,0,.05)` on floating controls (carousel
  arrows), `0 4px 4px rgba(0,0,0,.10)` on sticky/anchor bars. There is no deep shadow system.

### Imagery & backgrounds
- Hero/banner images are **full-bleed photography** with a flat dark **scrim** over them
  (`rgba(0,0,0,0.2)`–`0.5`) so white text stays legible — these are protection gradients, not
  decorative gradients.
- Dark sections (stats banners, footer) use Midnight/Slate solid fills, often topped with a
  thin red rule.
- No repeating patterns or textures; the "texture" is whitespace + photography.

### Motion, hover & press
- Restrained, functional motion (~120–320ms, standard ease). Fades and colour transitions, not
  bounces.
- **Hover:** primary button darkens red→`#A61419`; black button →`#3D3D3D`; ghost/outline
  buttons fill in; links darken. Arrow icons may nudge right.
- **Press:** colour deepens; no large scale changes.
- **Transparency / blur:** essentially unused — the brand prefers solid fills and scrims over
  frosted glass.

### Buttons (the signature component)
Five families × with/without trailing arrow × two sizes, plus back-button variants:
`primary` (red), `solid-black`, `solid-white`, `ghosted-black` (outline), `ghosted-white`
(outline on dark). All `10px` radius, SemiBold 16px label, `15px 30px` padding, optional
`arrow-right` / `arrow-left` icon.

---

## 5. Iconography

Radius ships a **large bespoke line-icon set** (~350 glyphs) — this is core to the brand and
replaces any need for emoji.

- **Style:** single-weight (~1.5px) **outline** icons, rounded joins, drawn on a 32×32 grid,
  monochrome and painted with `currentColor` (so they inherit text colour). A few have intentional
  accents (red map-pins, the info "i" in blue, solid green/red tick & cross).
- **Coverage:** UI essentials (arrows, chevrons, search, account, close, tick, plus/minus, eye,
  edit, download, notifications, hamburger) **plus** a deep set of product/category icons
  (fuel-cards, ev-charging, telematics, insurance, vehicle-leasing, broadband, mobile,
  business-energy, vehicle-tracking, cards, phone-systems…) and social glyphs.
- **No icon font / sprite was found** in the source; icons live as individual vectors. We've
  extracted a **curated, production-clean SVG subset** into `assets/icons/` (41 glyphs) and wired
  them through the `<Icon>` component. Logos live in `assets/logos/`.
- **Emoji / unicode symbols:** not used as iconography. Currency (`£`) and unit glyphs appear as
  text.

If you need an icon that isn't in `assets/icons/`, it almost certainly exists in the source
Figma's `Icons-Flags-Fuel-Icons-Social-Media` page — extract it the same way (32×32, currentColor)
rather than substituting another library, to keep the bespoke feel.

---

## 6. Index / manifest

```
styles.css                  ← global entry (import this); @imports only
tokens/
  fonts.css                 ← Manrope / Inter / Montserrat (Google CDN — see note)
  colors.css                ← brand palette + semantic aliases
  typography.css            ← type scale tokens + .t-* helper classes
  spacing.css               ← spacing, radii, borders, elevation, layout, motion
  base.css                  ← light reset + base element styling
assets/
  logos/    radius-logo · radius-logo-white · radius-mark · radius-velocity-logo · kinesis-logo
  icons/    41 bespoke line icons (SVG, currentColor)
  images/   hero.jpg + product photography (telematics kit, fuel card, van)
components/
  icons/    Icon
  core/     Button · Card · Badge   (+ injectStyles helper)
  forms/    Input · Checkbox (checkbox + radio)
  navigation/ Tabs
  content/  UspList · ProductTile · IconCard (tile + row)
  data/     Table
  feedback/ Accordion · Alert (information / error / warning / success)
guidelines/  foundation specimen cards (Design System tab → Type / Colors / Spacing / Brand)
ui_kits/
  radius-com/  marketing homepage recreation (Chrome.jsx, HomePage.jsx, index.html)
  myradius/    logged-in dashboard recreation (DashNav.jsx, Dashboard.jsx, index.html)
SKILL.md       Agent-Skill entry point
```

**Components (14)** — `Icon`, `Button`, `Card`, `Badge`, `Input`, `Checkbox`, `Tabs`,
`UspList`, `ProductTile`, `IconCard`, `Accordion`, `Alert`, `Table`. Each has a sibling `.d.ts`
(props contract) and `.prompt.md` (what & when + usage). They consume tokens only — no
CSS-in-JS, no npm deps — and are bundled to `_ds_bundle.js` under
`window.RadiusVelocityDesignSystem_0a984d`.

**Starting points** — `Button`, `Card`, `UspList`, `ProductTile`, `IconCard`, `Alert`, `Table`
(components); `radius.com` homepage and `MyRadius` dashboard (screens).

Each component directory carries a `@dsCard` HTML preview; the Design System tab renders all of
them grouped by section.

> **Font note / flag:** `tokens/fonts.css` loads Manrope, Inter and Montserrat from the Google
> Fonts CDN. These are the genuine brand typefaces, but for fully self-hosted production you
> should drop woff2 binaries into `assets/fonts/` and swap the `@import` for local `@font-face`
> rules. **If the team has licensed/self-hosted font files, send them over and I'll wire them in.**

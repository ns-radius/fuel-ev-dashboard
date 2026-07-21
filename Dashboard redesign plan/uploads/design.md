---
version: 1.2
name: Velocity Design System
description: >
    Velocity's design system for fleet management interfaces. The aesthetic is
    deliberately flat and functional: 1px borders, near-zero shadows, and a
    neutral white/off-white surface palette anchored by a strong red brand
    primary. Layouts are data-dense and monitoring-oriented. Used across web
    (primary) and mobile (responsive). Font: Manrope throughout.

# ─── COLOURS ───────────────────────────────────────────────────────────────────

colors:
    # Brand
    brand-primary: '#e51b22' # Velocity red — CTAs, focus rings, active borders
    brand-primary-hover: '#a61419' # Destructive / pressed state
    brand-black: '#000000'
    brand-white: '#ffffff'

    # Text
    text-primary: '#161616' # color/text/primary (Charcoal) — body & data text
    text-heading: '#000000' # True black — headings, table header bar, nav
    text-secondary: '#6f727a' # base/COLOR_BASE_GREY_500 — labels, metadata
    text-inverse: '#ffffff' # Text on dark/coloured backgrounds
    text-disabled: '#999999' # Mid Grey

    # Backgrounds
    bg-base: '#ffffff' # Page background
    bg-surface: '#ffffff' # Card / panel surface (same as base — flat design)
    bg-subtle: '#f7f7f8' # Subdued separation — base/COLOR_BASE_GREY_0
    bg-table-selected: '#f2f2f2' # Table row selected / hover

    # Borders
    border-default: '#d9d9d9' # color/border/default — panel edges, dividers
    border-input: '#b9b9b9' # color/border/inputs — form fields
    border-focus: '#e51b22' # color/border/focus — keyboard focus ring
    # ⚠️ VERIFY: the kitchen-sink form (node 1:6991) annotates one field
    # "focused = blue outline" (browser default). Confirm whether focus is
    # the red ring above or the native blue outline before implementation.

    # Actions
    action-primary: '#e51b22' # color/action/primary
    action-primary-hover: '#a61419' # custom/destructive/DESTRUCTIVE_HOVER_BG
    action-secondary-bg: '#ffffff' # color/action/secondary
    action-secondary-border: '#000000'

    # Semantic — Status
    success: '#40ae5a' # color/status/success/icon + border
    success-bg: '#f0faf2' # Derived — not yet a named token; confirm with team
    warning: '#f1a605' # color/status/warning/icon + border (Yellow Dark FUEL)
    warning-bg: '#fffbeb' # Derived — confirm with team
    error: '#e51b22' # color/status/error/icon + border (same as brand-primary)
    error-bg: '#fff5f5' # Derived — confirm with team
    info: '#0591e5' # color/status/info/icon + border (UI Blue)
    info-bg: '#eff8ff' # Derived — confirm with team

    # Semantic — Alerts (fleet-specific)
    # These map directly to the status tokens above
    alert-critical: '#e51b22' # → error
    alert-critical-bg: '#fff5f5'
    alert-warning: '#f1a605' # → warning
    alert-warning-bg: '#fffbeb'
    alert-info: '#0591e5' # → info
    alert-info-bg: '#eff8ff'

    # Chart series (single source of truth — do not restate hex in prose)
    chart-fuel: '#e51b22' # Fuel card data series
    chart-ev: '#0591e5' # EV data series (UI Blue)

# ─── TYPOGRAPHY ────────────────────────────────────────────────────────────────

typography:
    font-family-primary: 'Manrope' # base/HEADING_TYPEFACE + base/BODY_TEXT_TYPEFACE
    font-family-mono:
        'Manrope' # No dedicated mono specified — use tabular-nums CSS
        # feature where numeric alignment is needed

    # Page & section headings (sizes TBC — confirm from Figma type styles)
    heading-xl:
        fontFamily: 'Manrope'
        fontSize: '44px'
        fontWeight: '700'
        lineHeight: '1.2'
        letterSpacing: '-0.02em'
    heading-lg:
        fontFamily: 'Manrope'
        fontSize: '22px'
        fontWeight: '700'
        lineHeight: '1.25'
        letterSpacing: '-0.01em'
    heading-md:
        fontFamily: 'Manrope'
        fontSize: '18px'
        fontWeight: '600'
        lineHeight: '1.3'
    heading-sm:
        fontFamily: 'Manrope'
        fontSize: '14px'
        fontWeight: '600'
        lineHeight: '1.4'

    # KPI values — large numerics on the dashboard
    kpi-value:
        fontFamily: 'Manrope'
        fontSize: '32px'
        fontWeight: '700'
        lineHeight: '1.1'
        fontFeatureSettings: '"tnum"' # tabular figures for alignment
    kpi-label:
        fontFamily: 'Manrope'
        fontSize: '12px'
        fontWeight: '400'
        lineHeight: '1.4'
        color: '{colors.text-secondary}'

    # Body / labels (from Figma: 16px Regular is the base)
    body-md:
        fontFamily: 'Manrope'
        fontSize: '16px'
        fontWeight: '400'
        lineHeight: '1.5' # Figma: lineHeight 100 = 16px — override for readability
    body-sm:
        fontFamily: 'Manrope'
        fontSize: '14px'
        fontWeight: '400'
        lineHeight: '1.5'
    label:
        fontFamily: 'Manrope'
        fontSize: '16px'
        fontWeight: '600' # Form label text: SemiBold 600
        lineHeight: '1'
    hint:
        fontFamily: 'Manrope'
        fontSize: '16px'
        fontWeight: '400'
        lineHeight: '1'
        color: '{colors.text-secondary}'

    # Data — tabular figures for numeric columns
    data-md:
        fontFamily: 'Manrope'
        fontSize: '14px'
        fontWeight: '400'
        lineHeight: '1.5'
        fontFeatureSettings: '"tnum"'

# ─── SPACING ───────────────────────────────────────────────────────────────────
# Primitives only (matches Tailwind mapping strategy — no semantic aliases).
# Values observed in Figma templates; ⚠️ VERIFY the ladder against tokens.

spacing:
    space-4: '4px' # Icon-to-text micro gaps
    space-8: '8px' # Inside a component group
    space-10: '10px' # Pagination button gap
    space-15: '15px' # Button label ↔ trailing arrow gap
    space-16: '16px' # Between elements within a panel
    space-20: '20px' # Page side margins (mobile), gutters, footer top padding
    space-24: '24px' # Standard panel padding
    space-30: '30px' # Table cell left padding, between form fields
    space-32: '32px' # Between major dashboard sections (rows)

# ─── BORDER RADIUS ─────────────────────────────────────────────────────────────
# Primitives only. Velocity uses THREE radii, each with a fixed role —
# do not invent values in between.

rounded:
    radius-4: '4px' # Inputs, buttons, dropdowns, pagination controls
    radius-10: '10px' # Cards, tiles, panels (custom/input/border/radius — ⚠️ VERIFY:
    # this Figma token name says "input" but observed usage is card
    # surfaces; confirm which components actually take 10px)
    radius-20: '20px' # LEGACY tables only — header bottom corners (see Tables — Legacy Style)
    radius-full: '9999px' # Pills, badges, brand lozenges, avatars

# ─── BORDERS ───────────────────────────────────────────────────────────────────

borders:
    width-default: '1px' # size/border/default — custom/tile/web/TILE_BORDER_WIDTH
    width-container: '1px' # custom/container/BORDER_WIDTH

# ─── ELEVATION ─────────────────────────────────────────────────────────────────
# Velocity is intentionally FLAT. All tile shadows resolve to nothing.
# Depth is created through 1px borders, not shadows.

shadows:
    tile: 'none'
    container: 'none'
    # Figma defines DROP_SHADOW tokens with 0px offset and 0px radius
    # (#00000019, #002A451B, #121E260A) — they render as no shadow.
    # Use a 1px border-default instead of any shadow for panel separation.

# ─── COMPONENTS ────────────────────────────────────────────────────────────────

components:
    # Buttons come in three height tiers — see Buttons section for full taxonomy
    button-primary:
        backgroundColor: '{colors.action-primary}'
        textColor: '{colors.text-inverse}'
        hoverBg: '{colors.action-primary-hover}'
        rounded: '{rounded.radius-4}'
        height-desktop: '56px' # 1024px+ (marketing/page CTAs)
        height-mobile: '48px' # 0-1024px
        height-table: '42px' # Compact "for tables" variant
        maxWidth: '460px' # Button max width token
        icon:
            position: 'trailing' # arrow-right; omit on -no-arrow variants
            gap: '15px'
            size: '22px'
            color: '{colors.text-inverse}'
    button-secondary: # ".ghosted-black" in Figma
        backgroundColor: '{colors.action-secondary-bg}'
        textColor: '{colors.text-primary}'
        borderColor: '{colors.action-secondary-border}'
        borderWidth: '1px'
        rounded: '{rounded.radius-4}'
        height-desktop: '56px'
        height-mobile: '48px'

    input:
        backgroundColor: '{colors.bg-surface}'
        textColor: '{colors.text-primary}'
        borderColor: '{colors.border-input}'
        focusBorderColor: '{colors.border-focus}' # ⚠️ see focus VERIFY note above
        borderWidth: '1px'
        rounded: '{rounded.radius-4}'
        field-height: '50px' # The input box itself
        block-height: '80px' # label (22px) + gap (8px) + field (50px)
        # ⚠️ VERIFY exact label/gap split — 80px in Figma is the whole
        # label+field group, NOT the field. Do not render 80px-tall inputs.
        disabledBg: '{colors.bg-subtle}'
        disabledText: '{colors.text-disabled}'

    badge-success:
        backgroundColor: '{colors.success-bg}'
        textColor: '{colors.success}'
        rounded: '{rounded.radius-full}'
    badge-warning:
        backgroundColor: '{colors.warning-bg}'
        textColor: '{colors.warning}'
        rounded: '{rounded.radius-full}'
    badge-error:
        backgroundColor: '{colors.error-bg}'
        textColor: '{colors.error}'
        rounded: '{rounded.radius-full}'
    badge-info:
        backgroundColor: '{colors.info-bg}'
        textColor: '{colors.info}'
        rounded: '{rounded.radius-full}'

    kpi-card:
        backgroundColor: '{colors.bg-surface}'
        borderColor: '{colors.border-default}'
        borderWidth: '1px'
        rounded: '{rounded.radius-10}'
        padding: '16px 24px'
        shadow: '{shadows.tile}' # Flat — border only

    panel:
        backgroundColor: '{colors.bg-surface}'
        borderColor: '{colors.border-default}'
        borderWidth: '1px'
        rounded: '{rounded.radius-10}'
        padding: '24px'
        shadow: '{shadows.tile}'
---

# Velocity Design System

## Overview

Velocity is a B2B SaaS fleet management platform. The visual language is **flat, functional, and data-forward**: 1px borders replace shadows, white surfaces dominate, and the strong red brand primary (`brand-primary`) is used selectively to signal action and focus. Manrope is the sole typeface — used for headings, body, and data — with `font-feature-settings: "tnum"` applied to numeric columns and KPI values for proper tabular alignment.

The fleet management dashboard is primarily a **read and monitor** interface. Prioritise scannable hierarchy over dense decoration.

> **Convention for this document:** the YAML front matter is the single source of truth for values. Prose refers to token names; hex values appear in prose only where no token exists yet (and are flagged for tokenisation).

## Component Inventory — Figma Node Map

Ground-truth references for MCP calls (`Figma:get_metadata`, `Figma:get_design_context`, `Figma:download_assets`). File key: `SpzcEbSFTTxocpYY2u535O`. Remember: browser URLs use dashes in node IDs (`1-6991`); API calls need colons (`1:6991`).

| Component / template                                | Node ID               | Page                          |
| --------------------------------------------------- | --------------------- | ----------------------------- |
| Landing page — Fuel & EV Cards                      | `1:4472`              | templates                     |
| Landing page — Telematics                           | `1:5659`              | templates                     |
| Kitchen sink form example                           | `1:6991`              | templates                     |
| Data table example (LEGACY style)                   | `1:8022`              | templates                     |
| Table — new style (screen)                          | `26:24111`            | kitchen sink (`26:14797`)     |
| Table — new style (table organism)                  | `26:24126`            | kitchen sink                  |
| Table — legacy style (screen)                       | `26:16410`            | kitchen sink                  |
| Button master — primary ("solid blue", renders red) | `26:20138`            | kitchen sink                  |
| Button master — destructive ("solid red")           | `26:20143`            | kitchen sink                  |
| Alert boxes prototype                               | `1:9303`              | templates                     |
| Dashboard 1440px                                    | `1:40031`             | templates                     |
| Dashboard 744px                                     | `1:40049`             | templates                     |
| Dashboard 1132px                                    | `1:40069`             | templates                     |
| Dashboard 375px                                     | `1:40104`             | templates                     |
| Dashboard 1920px                                    | `1:40126`             | templates                     |
| Buttons — full atom sheet                           | `1:18850`             | buttons                       |
| Text links (1024px+ / 0-1024px)                     | `1:18900` / `1:18930` | buttons                       |
| Tabs (1024px+ / 0-1024px)                           | `1:19230` / `1:19225` | buttons                       |
| Icon cards organism (all breakpoints)               | `1:37212`             | icon cards (new tiles)        |
| Icon source component (other file)                  | `1930:23538`          | file `DVjIfSNBCunHIhdImfKdsz` |

## Colours

**Brand red (`brand-primary`)** does significant work in this system: it is simultaneously the brand primary, the CTA colour, the focus border, the error state colour, and the fuel card division colour. Use it intentionally — it has semantic meaning and should not be used decoratively.

**White (`brand-white`)** is the secondary action colour, with 1px solid black border.

**Black (`brand-black`)** is used for price tag backgrounds, the table column header background, headings, and the navbar CTA. Body and data text use `text-primary` (`#161616` Charcoal) — reserve true black for headings and black-surface components.

**Greys** handle everything else: text hierarchy (`text-heading` → `text-primary` → `text-secondary` → `text-disabled`), surface separation (`bg-surface` / `bg-subtle`), and borders (`border-default` / `border-input`).

**Status colours:** `success` (card active, no alerts, positive trends), `warning` (cards expiring soon, anomaly thresholds), `error` (critical alerts, stopped cards, fraud flags), `info` (informational notices, EV-specific callouts).

⚠️ The success, warning, error, and info background tokens (`*-bg`) are derived — not yet formally tokenised in Figma. Confirm with the design system before final implementation.

Never use colour alone to communicate status — always pair with an icon or label.

**Chart series:** use the `chart-fuel` (red) and `chart-ev` (blue) tokens. These reinforce the fuel/EV split throughout the product.

## Typography

Manrope is used at all scales. Key rules:

- **KPI values** use `kpi-value` (32px/700) — the largest text on the dashboard. Reserve this exclusively for the five headline metrics in the KPI strip.
- **Panel/section headings** use `heading-sm` (14px/600) — compact and functional.
- **All numeric data** should use tabular figures. Apply via CSS `font-variant-numeric: tabular-nums` or `font-feature-settings: "tnum" 1`.
- **Body** defaults to 16px/400, which is the base established in Figma across all form and paragraph contexts.
- Secondary/supporting text steps down to `text-secondary` — not a smaller font size.

## Layout

### Breakpoints

| Name | Device           | Min width | Container size | Notes                                                        |
| ---- | ---------------- | --------- | -------------- | ------------------------------------------------------------ |
| XS   | mobile small     | 375px     | 335px          | Single column; matches Figma 375px template                  |
| SM   | mobile large     | 640px     | 600px          | 2-column for paired panels; matches Figma 744px template     |
| MD   | tablet portrait  | 768px     | 680px          | Wider tablet/landscape; matches Figma 812px template         |
| LG   | tablet landscape | 1024px    | 900px          | Laptops; matches Figma 1132px template                       |
| XL   | desktop          | 1280px    | 1240px         | Small desktop; matches Figma 1440px template                 |
| 2XL  | desktop wide     | 1480px    | 1440px         | Primary target. Large monitor; matches Figma 1920px template |

### Dashboard Layout — Desktop (1440px)

Content area: **1440px** centred (based on existing `Dashboard division grid` dimensions at 1480px breakpoint, with 20px side margin each side).

Right sidebar: **280px** fixed — invoice summary, insights PDF, marketing cross-sell.

Main column: remaining width minus `space-32` gap.

### Dashboard Layout — Mobile (375px)

Content area: **335px** centred with 20px side margins (matching existing Figma mobile templates).

All sections stack full-width. Marketing sidebar becomes a dismissible banner.

### Spacing Rhythm

- `space-8` inside a component group
- `space-16` between elements within a panel
- `space-24` panel padding (standard)
- `space-32` between major dashboard sections (rows)

## Elevation & Depth

Velocity is **intentionally flat**. All tile/card shadow tokens in the design system resolve to no visible shadow (0px offset, 0px radius). Depth is created through 1px borders (`border-default`) and background tonal separation (`bg-surface` vs `bg-subtle`).

Do not introduce drop shadows on dashboard panels — this breaks the visual language.

## Buttons

Source: buttons page, node `1:18850`. Radius: `radius-10`. Font: Manrope SemiBold. Max width 460px.

### Style variants

Five styles, each existing in three sub-variants: **default** (trailing `icon-arrow-right`), **back-button** (leading `icon-arrow-left`, shorter label), and **no-arrow**.

| Style            | Background        | Text  | Border           | Typical context                         |
| ---------------- | ----------------- | ----- | ---------------- | --------------------------------------- |
| `.primary`       | `action-primary`  | white | none             | Main CTA — one per view                 |
| `.ghosted-black` | transparent/white | black | 1px black        | Secondary action on light surfaces      |
| `.ghosted-white` | transparent       | white | 1px white        | Secondary action on dark/photo surfaces |
| `.solid-white`   | white             | black | none (⚠️ verify) | CTA on dark surfaces                    |
| `.solid-black`   | black             | white | none             | Navbar "Log out", price-tag CTAs        |

Full-width / block buttons: label left-aligned, trailing arrow ranged to the button's right edge (justify-content: space-between). Inline (hugging) buttons keep the label↔arrow gap at space-15.

### Size tiers

| Tier          | Height | Breakpoint / context                                                                                  |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| 1024px+       | 56px   | Marketing pages, landing CTAs                                                                         |
| 0-1024px      | 48px   | Same styles below 1024px                                                                              |
| Table/compact | 42px   | In-app actions, table toolbars (`buttons / primary / solid blue`, `buttons / secondary / for tables`) |

✅ Resolved (v1.2): the compact 42–44px primary labelled `solid blue` in Figma layer names **renders red**. "Solid blue" is the un-themed component-library default (`color/action/primary` fallback `#0591e5`); Velocity's theme resolves it to `brand-primary`. In-app primaries are red. ⚠️ Remaining: reconcile the table-tier height — Buttons says 42px, the new-style table renders 44px.

### Hover states

Every style has an explicit hover variant in Figma (`Property 1=hover-state`, node `1:18850` children). Primary hover = `action-primary-hover` background. ⚠️ TODO: transcribe hover treatment for ghosted/solid styles (invert? darken?) from the hover-state variants.

### Text links

`More details text link` (`1:18900` desktop, `1:18930` mobile). Colour variants: red, white, black, black/red, white/red, plus a hover state. Pattern: label + trailing chevron/arrow. Red is the default on white surfaces.

### Tabs

Default and active states, both breakpoint tiers (`1:19230`, `1:19225`). Active tab = solid black pill with white label; default = white with border. ⚠️ Verify exact treatment from nodes.

### Other button atoms

Edit button (icon + blue "Edit" label, `1:19219`), Google Play / App Store download buttons (two sizes), menu toggle (hamburger/close with label).

## Forms

Source: kitchen sink form, node `1:6991`. Field anatomy: label (Manrope 600) above field, `radius-4`, `border-input` 1px, 50px field height. 30px vertical gap between field blocks.

Patterns present in the kitchen sink — all should be reused, not reinvented:

- **Hint text** — grey `text-secondary` line with a small grey info icon, below the label ("Some optional hint text here…").
- **Error summary** — box at top of form: `error-bg` background, 1px `error` border, heading "There are errors with your details", followed by a linked list of failing fields (red, underlined). Standard GOV.UK-style pattern.
- **Inline field error** — field border turns `error`; below the field, an inline alert icon + red error text ("Error: some error text here").
- **Grouped-input error** — for checkbox/radio groups: red error line above the group and a vertical red rule down the group's left edge.
- **Disabled / prefilled** — `bg-subtle` field background, `text-disabled` value text.
- **Phone input** — country flag + dialling code prefix segment before the field.
- **Dropdown** — same field chrome with trailing `icon-single-chevron-down`; error variant matches text input.
- **Touch-first checkboxes / radios** — 50px-tall bordered tiles (label inside the tile, control at left), laid out in a 2-column grid; selected state fills the control red. Tiles grow taller for wrapping labels.
- **Number stepper** — `− [value] +` with an adjacent "Apply ✓" compact button.
- **Form actions** — `← Previous` (ghosted) + `Next →` (primary) pair; standalone Submit primary. "Clear fields" as a text link at top right.

⚠️ TODO: transcribe exact paddings/colours for each pattern from `1:6991` child nodes as they get used.

## Alert Boxes

Source: Alert boxes prototype, node `1:9303` (component `Alert box v2`). This is the **inline alert box** component — distinct from the dashboard alert _panel_ documented under Alerts below.

Observed variants: four severities (critical/warning/info/success — same tokens as the status set), several densities (with/without title, single-line), and two width behaviours: **fixed width** and **fill container**. Anatomy: severity icon (left), title + body text, `*-bg` background, 1px severity-colour border, `radius-4`.

⚠️ TODO: confirm padding, icon size, and dismissibility from `1:9305`–`1:9331`.

## Icon Cards (tiles organism)

Source: node `1:37212`. A grid of navigational tiles (icon + label, optionally + chevron) used for "How can we help your business?" sections. **The presentation morphs by breakpoint — do not improvise this:**

| Breakpoint  | Presentation                                                                 |
| ----------- | ---------------------------------------------------------------------------- |
| 1920 / 1440 | Row(s) of square/wide white tiles, icon above label, 1px border, `radius-10` |
| 1132        | Compact square tiles, single panel                                           |
| 812 / 744   | Two-column list rows: icon left, label, trailing arrow →                     |
| 375         | Single-column full-width list rows with trailing arrows                      |

Icons inside tiles are `brand-primary` red on white (see Icon colours).

## Voice & Content

- Title Case for section headings and CTA labels; sentence case for body, hints, and supporting text
- Financial figures: `£1,234.56` (currency symbol, 2 decimal places)
- Volume: `1,234 L` (no decimals, space before unit)
- Unavailable data: `–` (en-dash), never "N/A"
- CTA labels: verb + noun — "View transactions", "Download report", "Order cards"
- Empty states: explain what's missing and provide a path forward
- In-progress states: present participle + ellipsis — "Loading transactions…"

## Data

When populating mockups and prototypes and want to use semi-realistic data, aim to use these:

**Fuel brands**

- Often these are represented by a coloured lozenge (fixed width: 95px), with white or black text (depending on luminosity of the lozenge colour) which is all uppercase, 9px bold.

| Brand    | Lozenge colour | Text colour |
| -------- | -------------- | ----------- |
| UK Fuels | #009DD1        | #ffffff     |
| BP       | #009D00        | #ffffff     |
| DCI      | #8BC907        | #ffffff     |
| Esso     | #0047BA        | #ffffff     |
| Shell    | #FBCE07        | #000000     |
| Texaco   | #FF0014        | #ffffff     |

## Charts

- Fuel series: `chart-fuel`; EV series: `chart-ev` (values in front matter — blue for EV)
- Apply tabular figures to all axis labels
- Gridlines: `border-default`
- Chart panel background: `bg-base` — no additional card surface under the chart body
- All data points must have accessible tooltips — never rely on colour alone

## Tables — New Style (default)

Tables are a primary display surface in Velocity — used for transaction history, card listings, device orders, and driver summaries. **This is the table style to use for all new work.** The older spec further below is retained for reference only — use it exclusively when the prompt says **"Use legacy tables"**.

Source: "Table - new style" frame, node `26:24111`; table organism `💥 table example / fuel cards / desktop / normal - fewer cols`, node `26:24126` (kitchen sink page `26:14797`).

> ⚠️ **MCP gotcha discovered while transcribing this:** the code export expresses colours as CSS variables with _library fallbacks_ (e.g. `var(--custom/table/table_header_colour, #f2f2f4)`, borders falling back to `#c3c3c3`, `color/action/primary` falling back to `#0591e5` blue). The fallbacks are the un-themed component-library defaults, **not** Velocity values. Trust the token name + rendered output, never the fallback hex.

### Anatomy

```
[ Search input 550×44 ]                                          ← Utility bar (14px gap to table)
┌─────────────────────────────────────────────────────────┐  ← Header (black, 66px, 10px rounded TOP corners)
│  Device Brand ⇅ │ Vehicle Types ⇅ │ Regions ⇅ │ … │ Edit │
├─────────────────────────────────────────────────────────┤  ← Row (white, 104px, 1px bottom/side border)
│  [img] MEDPASS │ Under 13.5T │ Croatia, Spain… │ [🗑] [✎] │
├─────────────────────────────────────────────────────────┤
│  [img] EETS    │ HGV, 13.5T+ │ Germany, Austria… │ …     │
├─────────────────────────────────────────────────────────┤  ← Summary row (bg-subtle, 50px, 10px rounded BOTTOM corners)
│              Summary   Total devices: 4   Total cost: £17.00 │
└─────────────────────────────────────────────────────────┘
                                                              ← Footer (20px top padding, no border line)
│< ‹ › >│                    Showing 1 to 10 of 115 results [10 ▾] per page
                                          [Add Devices +]  [Submit order ✓]
```

Note the inversion vs legacy: the rounded cap has moved from the header's bottom corners (legacy, `radius-20`) to the header's **top** corners and the summary row's **bottom** corners (both `radius-10`). The table now reads as a single rounded card.

---

### Utility bar

Sits 14px above the table. Left: search input. Right (optional): compact action buttons.

| Element      | Spec                                                                                                                         |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Search input | `forms / input / search input / no label + placeholder` — 550×44px, `radius-4`, padding 12px/11px, trailing 15px search icon |
| Placeholder  | 16px Regular, `#8d9599` ⚠️ not in palette — sits between `text-secondary` and `text-disabled`; confirm token                 |

### Header

| Property        | Value                                           | Token                                                                              |
| --------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| Height          | 66px                                            | —                                                                                  |
| Background      | Black (rendered)                                | `custom/table/table_header_colour` (⚠️ fallback is `#f2f2f4` — ignore)             |
| Top corners     | 10px radius                                     | `radius-10` ⚠️ verify — achieved in Figma via a flipped rectangle, easy to misread |
| Bottom corners  | 0px                                             | — (`radius-20` bottom cap is **legacy only**)                                      |
| Text            | Manrope **SemiBold**, 13.5px, white             | `custom/table/table_header_text_colour`                                            |
| Column dividers | 1px vertical lines spanning header **and** body | `border-default`                                                                   |

Differences from legacy: labels are SemiBold (legacy: Bold), and **sort indicators appear only on sortable columns** — not every column. Action columns (Remove, Edit) and read-only columns carry no indicator.

**Sort indicators:** paired stacked triangles (~8×13px), 5px gap after the label. The actively sorted column gets two treatments: its triangle pair renders red (active direction), and the header cell receives a highlight background (`custom/table/table_header_active_background` — renders as a lighter charcoal on the black bar; ⚠️ fallback `#e5e5e5`, confirm resolved value).

### Body rows

| Property       | Value                                     | Token            |
| -------------- | ----------------------------------------- | ---------------- |
| Height         | 104px (20px padding + 64px content)       | —                |
| Background     | `#ffffff`                                 | `bg-surface`     |
| Borders        | 1px bottom/left/right                     | `border-default` |
| Text           | Manrope Regular, 15px, vertically centred | `text-primary`   |
| Key identifier | Manrope SemiBold, 15px (e.g. vehicle reg) | —                |

Rows are taller than legacy (104px vs 60px) to accommodate multi-line content (e.g. region lists) and in-row action buttons. Long text wraps within the cell rather than truncating. A leading image cell (product/device thumbnail ~63×41px) sits 20px before its label.

**In-row action buttons** — two new patterns, both 80×44px, `radius-4`, icon-only (20px icon):

| Button      | Component                                           | Treatment                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destructive | `buttons / primary / solid red` (master `26:20143`) | Renders as ghost: white bg, 1px red border, red trash icon. ⚠️ Token `custom/destructive/destructive_bg` falls back to `#f44054` — a brighter red than `brand-primary`; confirm rendered treatment against Storybook "destructive button" |
| Edit        | `buttons / secondary / for tables`                  | White bg, 1px border, `#161616` icon via `color/icon/strong` (new token)                                                                                                                                                                  |

### Summary row

Replaces the legacy per-column totals row. 50px tall, `bg-subtle`, 1px `border-default` (bottom/left/right), **10px rounded bottom corners** — this row is the table's rounded cap.

Content is inline label:value pairs, 15px, positioned near the numeric columns: `Summary` (SemiBold) · `Total devices:` (SemiBold) ` 4` (Regular) · `Total cost:` (SemiBold) ` £17.00` (Regular). Do not build per-column totals in new-style tables.

### Footer

20px top padding. **No blue top border** — the `custom/table/table_footer_line` token is legacy-only (the layer exists in the new components but is hidden). Layout is inverted vs legacy:

**Left — Pagination arrows.** Four icon buttons: first `|<`, previous `<`, next `>`, last `>|`. 40×40px, `radius-4`, 1px `border-input`, white bg, 10px gap. Disabled state (e.g. first/prev on page 1): greyed icon and border. **No numbered page buttons** in the new style.

**Right — Results + per-page.** `Showing 1 to 10 of 115 results` (13.5px, numbers bold inline) · per-page dropdown (`form / dropdown / no label`, 80×40px, `radius-4`, 1px `border-input`, trailing chevron, 16px value) · `per page` (13.5px).

### Table actions

Right-aligned below the footer, 10px top padding, 20px gap:

- `Add Devices +` — `buttons / secondary / for tables`, **trailing** 20px plus icon
- `Submit order ✓` — `buttons / primary`, **trailing** 20px tick icon

Both: 16px SemiBold label, 15px horizontal / 10px vertical padding, min-height 44px, 6px label↔icon gap, `radius-4`. Note icons are trailing here (legacy doc showed them leading). Observed height for the table button tier is 44px, not the 42px stated in Buttons — ⚠️ reconcile.

**Resolved from v1.1:** the Figma component `buttons / primary / solid blue` (master `26:20138`) renders **red**. The "solid blue" name reflects the un-themed library default (`color/action/primary` fallback `#0591e5`); Velocity's theme resolves it to `brand-primary`. In-app primaries are red. The earlier ⚠️ in Buttons is closed.

### Empty state & zebra variants

The table row component includes two hidden variants worth knowing exist: a `TABLE EMPTY STATE MSG` row (centred message in a single 104px row — pair with Voice & Content empty-state copy rules) and a `zebra stripe` row background. Zebra striping is **off** in all observed examples — don't enable it unless the design calls for it. ⚠️ Transcribe exact specs from the component variants when first needed.

### New tokens observed (not yet in front matter)

| Token                                           | Resolved (observed)         | Notes                                           |
| ----------------------------------------------- | --------------------------- | ----------------------------------------------- |
| `custom/table/table_header_colour`              | Black                       | New-style header bg                             |
| `custom/table/table_header_active_background`   | Lighter charcoal            | Active-sort header cell highlight ⚠️ verify     |
| `custom/destructive/destructive_bg` / `_border` | Red (⚠️ `#f44054` fallback) | Destructive button ⚠️ verify vs `brand-primary` |
| `color/icon/strong`                             | `#161616`                   | Default icon colour in ghost buttons            |
| — (search placeholder)                          | `#8d9599`                   | ⚠️ untokenised; confirm with team               |

## Tables — Legacy Style

> ⚠️ **Deprecated — do not use by default.** Everything from here to the end of "Tokens Summary" describes the legacy table (node `1:8022`, "Table - legacy style" frame `26:16410`). Only build this style if the prompt explicitly says **"Use legacy tables"**. Distinctive legacy traits: `radius-20` bottom corners on the header, 60px rows, per-column totals, blue footer line, numbered pagination.

The legacy table design has a distinctive black header, flat white body, a `bg-subtle` totals row, and a blue-accented footer with pagination.

### Anatomy

```
┌─────────────────────────────────────────────────────────┐  ← Header (black, 66px, rounded bottom corners)
│  Card Holder ⇅ │ Card Identifier ⇅ │ Quantity (L) ⇅ … │
├─────────────────────────────────────────────────────────┤  ← Row (white, 60px, 1px bottom/side border)
│  John Archer    │ 1234********7890  │ 99              … │
├─────────────────────────────────────────────────────────┤
│  Emma Brown     │ 1234********7890  │ 99              … │
├─────────────────────────────────────────────────────────┤  ← Totals row (bg-subtle, bold)
│  Totals                             │ 396             … │
├─────────────────────────────────────────────────────────┤  ← Footer (blue top border, 20px padding top)
│  Showing [10 ▾] per page    1–10 of 115    ← 1 2 3 … → │
└─────────────────────────────────────────────────────────┘
```

---

### Header

| Property        | Value                | Token                                   |
| --------------- | -------------------- | --------------------------------------- |
| Height          | 66px                 | —                                       |
| Background      | `#000000`            | `brand-black`                           |
| Bottom corners  | 20px radius          | `radius-20`                             |
| Top corners     | 0px                  | —                                       |
| Text colour     | `#ffffff`            | `custom/table/table_header_text_colour` |
| Font            | Manrope Bold, 13.5px | `base/BODY_TEXT_TYPEFACE` Bold          |
| Column dividers | 1px vertical line    | `border-default`                        |

The header is the only place in the UI where text appears white on a black surface. The deliberate `border-radius: 0 0 20px 20px` on the header background gives the table a rounded-bottom cap that separates it from the body rows beneath.

**Sort indicators:** Every column header includes a stacked up/down triangle pair (▲ ▼, 5px × 8px each) to the right of the label, indicating the column is sortable. The active sort direction is highlighted; the inactive triangle is subdued. Do not replace sort indicators with a single chevron — the paired triangle pattern is established across the system.

**Column label alignment:** All header labels are left-aligned within their column, including numeric columns. The data cells beneath them are right-aligned — this is an intentional asymmetry in the Figma design.

---

### Body Rows

Two row variants exist, named `SR2` (standard) and `SR1` (summary/totals).

#### Standard row — `SR2`

| Property            | Value                 | Token                             |
| ------------------- | --------------------- | --------------------------------- |
| Height              | 60px                  | —                                 |
| Background          | `#ffffff`             | `bg-surface`                      |
| Bottom border       | 1px solid `#d9d9d9`   | `border-default`                  |
| Left + right border | 1px solid `#d9d9d9`   | `border-default`                  |
| Font                | Manrope Regular, 15px | `base/BODY_TEXT_TYPEFACE` Regular |
| Text colour         | `#161616`             | `text-primary`                    |
| Left cell padding   | 30px                  | `space-30`                        |
| Column dividers     | 1px vertical line     | `border-default`                  |

Note: body row text uses 15px — slightly larger than the 13.5px header label. This is intentional; the data is the primary content.

#### Totals / Summary row — `SR1`

| Property    | Value                                     | Token            |
| ----------- | ----------------------------------------- | ---------------- |
| Height      | 60px                                      | —                |
| Background  | `#f7f7f8`                                 | `bg-subtle`      |
| Border      | 1px solid `#d9d9d9` (bottom, left, right) | `border-default` |
| Font        | Manrope Bold, 15px                        | —                |
| Text colour | `#161616`                                 | `text-primary`   |

The totals row appears at the bottom of the data rows, before the footer. It spans across the table with a "Totals" label in the first column. Not all columns show a total — only those where aggregation is meaningful (Quantity, Transactions, Net, VAT, Gross). Columns with no total value (e.g. Card Identifier) are left blank.

---

### Column Alignment

| Column type                | Header alignment | Cell alignment |
| -------------------------- | ---------------- | -------------- |
| Name / identifier (text)   | Left             | Left           |
| Quantity / count (integer) | Left             | Right          |
| Currency (£0.00)           | Left             | Right          |
| Masked card number         | Left             | Left           |

Numeric and currency cells are right-aligned for vertical scanning. Apply tabular figures to all numeric and currency columns so values stack correctly when widths vary.

---

### Column Structure (Fuel Cards Table)

| #   | Column                 | Data type     | Width  | Notes                      |
| --- | ---------------------- | ------------- | ------ | -------------------------- |
| 1   | Card Holder            | Text          | ~268px | Driver name                |
| 2   | Card Identifier        | Text (masked) | ~280px | Format: `1234********7890` |
| 3   | Quantity (Litres)      | Integer       | ~200px | Right-aligned              |
| 4   | Number of Transactions | Integer       | ~200px | Right-aligned              |
| 5   | Net                    | Currency      | ~107px | `£0.00`, right-aligned     |
| 6   | VAT                    | Currency      | ~90px  | `£0.00`, right-aligned     |
| 7   | Gross                  | Currency      | ~102px | `£0.00`, right-aligned     |

Total table width: ~1440px (fills the content area at the desktop breakpoint).

---

### Footer

The footer sits below the totals row with a 20px top padding and a `1px solid #0591e5` (UI Blue, `custom/table/table_footer_line`) top border — the only use of blue as a structural element in the table.

#### Three-part layout

**Left — Per-page selector**

```
Showing  [10 ▾]  per page
```

| Property               | Value                                |
| ---------------------- | ------------------------------------ |
| Label text             | Manrope Regular, 13.5px, `#161616`   |
| Dropdown width         | 86px                                 |
| Dropdown height        | 40px                                 |
| Dropdown border radius | 4px                                  |
| Dropdown border        | 1px solid `#b9b9b9` (`border-input`) |
| Dropdown background    | `#ffffff`                            |
| Dropdown value font    | Manrope Regular, 16px                |
| Default value          | 10                                   |

**Centre — Results count**

```
Showing 1 to 10 of 115 results
```

| Property | Value                                             |
| -------- | ------------------------------------------------- |
| Font     | Manrope Regular, 13.5px                           |
| Colour   | `#000000`                                         |
| Numbers  | Manrope Bold — "1", "10", "115" are bolded inline |

**Right — Pagination**

```
← [1] [2] [3] [4] [5] … [12] →
```

| Property            | Value                                                               | Token          |
| ------------------- | ------------------------------------------------------------------- | -------------- |
| Button size         | 40px × 40px                                                         | —              |
| Border radius       | 4px                                                                 | `radius-4`     |
| Border              | 1px solid `#b9b9b9`                                                 | `border-input` |
| Active page bg      | `#f7f7f8`                                                           | `bg-subtle`    |
| Inactive page bg    | `#ffffff`                                                           | `bg-surface`   |
| Font                | Manrope Regular, 16px                                               | —              |
| Colour              | `#161616`                                                           | `text-primary` |
| Prev/Next           | Icon buttons (arrow left / arrow right), same 40px size             | —              |
| Ellipsis            | `…` character, no border, between last numbered page and final page | —              |
| Gap between buttons | 10px                                                                | `space-10`     |

---

### Table variants (from Data table example, node `1:8022`)

Beyond the base fuel-cards summary spec above, the full card-listing table adds:

- **Grouped rows** — rows are grouped under a driver-name group header row (name only, no borders between the group header and its first card row). One driver may own multiple cards.
- **Toolbar** — above the header: search input with icon, an On/Off radio toggle, a "Show Stopped / Expired Cards" checkbox, and `PDF` / `Excel` export buttons (ghosted, leading download icon) right-aligned.
- **Action column** — final column holds a compact red icon button (`icon-search` magnifier, "View Card") per row.
- **Table actions footer** — below the table: `+ Add Cards` (ghosted) and `✓ Submit order` (primary) right-aligned.
- **Brand lozenges** — the Group/Type column renders fuel-brand lozenges per the Data section.

---

### Tokens Summary

| Token                                   | Value     | Usage                                |
| --------------------------------------- | --------- | ------------------------------------ |
| `custom/table/table_header_text_colour` | `#ffffff` | Header label colour                  |
| `custom/table/table_footer_line`        | `#0591e5` | Footer top border                    |
| `color/text/primary`                    | `#161616` | Body cell text (= `text-primary`)    |
| `color/border/default`                  | `#d9d9d9` | Row borders, column dividers         |
| `color/border/inputs`                   | `#b9b9b9` | Footer dropdown + pagination borders |
| `color/background/subtle`               | `#f7f7f8` | Totals row, active page button       |
| `base/BODY_TEXT_TYPEFACE`               | Manrope   | All table text                       |

## Alerts (dashboard alert panel)

Alert panel structure:

1. Severity icon (coloured — never colour alone; always pair with label)
2. Alert count at that severity
3. One-line summary of the most critical alert
4. "View all →" text link

Severity tokens:

- Critical: `alert-critical` — matches error
- Warning: `alert-warning`
- Info: `alert-info`
- Success / no alerts: `success`

## Interactive States

One row per component; transcribe missing cells from the Figma hover/state variants rather than inventing them.

| Component      | Default                           | Hover                      | Focus                    | Disabled                      | Error                    |
| -------------- | --------------------------------- | -------------------------- | ------------------------ | ----------------------------- | ------------------------ |
| Button primary | `action-primary` bg               | `action-primary-hover` bg  | ⚠️ verify (red ring?)    | ⚠️ TODO                       | —                        |
| Button ghosted | white bg, 1px border              | ⚠️ TODO (from `1:18850`)   | ⚠️ verify                | ⚠️ TODO                       | —                        |
| Text link      | red, underline on hover ⚠️ verify | hover variant in `1:18900` | ⚠️ verify                | —                             | —                        |
| Input          | `border-input` 1px                | —                          | `border-focus` ⚠️ verify | `bg-subtle` + `text-disabled` | `error` border + message |
| Table row      | `bg-surface`                      | `bg-table-selected`        | —                        | —                             | —                        |
| Tab            | white, border                     | ⚠️ TODO                    | ⚠️ verify                | —                             | —                        |
| Checkbox tile  | white, 1px border                 | ⚠️ TODO                    | ⚠️ verify                | —                             | red rule + error line    |

## Do's and Don'ts

- **Do** use `brand-primary` sparingly — it carries heavy semantic load (error, action, focus, brand)
- **Do** apply tabular figures (`"tnum"`) to all numeric data in tables and KPIs
- **Do** use 1px borders (`border-default`) for panel separation — not shadows
- **Do** use `text-secondary` for metadata and supporting labels
- **Don't** introduce drop shadows on dashboard cards — Velocity is flat by design
- **Don't** use `chart-fuel` or `chart-ev` outside chart contexts
- **Don't** show raw numbers without units and labels
- **Don't** invent border radii — controls are `radius-4`, cards/panels are `radius-10`; new-style tables use `radius-10` for their top (header) and bottom (summary row) caps; `radius-20` exists solely for the **legacy** table header's bottom corners
- **Don't** build legacy-style tables unless the prompt says "Use legacy tables" — new work uses the New Style table (rounded card silhouette, 104px rows, inline summary row, arrow-only pagination)
- **Don't** use `bg-subtle` as a general card surface — it exists only for subtle secondary separation (e.g. the marketing sidebar panel) and disabled fields

## Icons

Icon SVG definitions live in `icons.svg`, attached to this design system
(generated via the velocity-icon-export skill). That file is the source of
truth for icon path data — one `<symbol>` per icon.

### How to use icons in a prototype

**Do NOT reference `icons.svg` as an external file path** (e.g.
`<use href="icons.svg#icon-name">`). The generated prototype is a
self-contained document — `icons.svg` will not exist alongside it, and the
reference will silently resolve to nothing.

**Instead, inline the symbols.** When generating a prototype that uses
icons:

1. Copy the needed `<symbol>` definitions — verbatim, including their full
   `<path>` data — from the attached `icons.svg` into a hidden SVG block at
   the top of the prototype's `<body>`:

```html
<svg style="display:none" aria-hidden="true">
    <symbol id="icon-lightning-bolt" viewBox="0 0 32 32"><!-- paths copied from icons.svg --></symbol>
    <symbol id="icon-arrow-right" viewBox="0 0 32 32"><!-- paths copied from icons.svg --></symbol>
</svg>
```

2. Reference them same-document wherever needed:

```html
<svg width="32" height="32"><use href="#icon-lightning-bolt"></use></svg>
```

Only inline the symbols the prototype actually uses — not the whole
catalog. Copy path data exactly as it appears in `icons.svg`; never
approximate, simplify, or invent icon shapes. If a requested icon is not in
the catalog below, say so rather than substituting an invented drawing.

### Colouring

Monochrome icons use `fill="currentColor"` — set CSS `color` on the icon's
container and it inherits. No per-icon overrides needed:

- Inside a solid button → container `color` is `text-inverse` (white)
- In a card, tile, or other white-surface component → container `color` is `brand-primary`
- In table headers / black surfaces → white

**Fixed-colour exceptions** (these carry their own fills and ignore
`currentColor`): `icon-cross-solid` (red), `icon-tick-solid` (green),
`icon-tool-tip` (blue), `icon-radius-r-fill` (brand red), `icon-e-route-pin`
(brand red), `icon-notifications` (red badge dot). Use them where their
built-in status colour is the point.

### Sizing

All icons are 32×32 viewBox unless noted; scale to 22px inside buttons
(set width/height on the outer `<svg>`, never on the `<use>`).

Non-32 viewBoxes: `icon-electric-charge-points`, `icon-energy-transition`,
`icon-ev-charge-cards`, `icon-fleet-charging` (31×31); `icon-filters`,
`icon-line-graph` (34×32); `icon-radius-r-fill` (32×33). ⚠️ Consider
normalising to 32 at next export.

### Catalog

Available symbol ids (all `icon-` prefixed):

`account`, `arrow-left`, `arrow-right`, `cancellations`, `card-details`,
`closed-hamburger`, `cross-solid`, `cross`, `download`, `e-route-pin`,
`e-route`, `edit`, `electric-car-and-van`, `electric-charge-points`,
`electric-van`, `electricity`, `email`, `energy-management`,
`energy-transition`, `error`, `ev-charge-cards`, `ev-charging`,
`expense-management`, `eye-closed`, `eye-open`, `filters`,
`fleet-charging`, `fuel-and-ev-card`, `fuel-cards`, `fuel-pump-price`,
`fuel-pump`, `hamburger`, `home`, `kilowatts`, `lightning-bolt`,
`line-graph`, `litres`, `manage-cards`, `minus`, `new-card`,
`notifications`, `password`, `plus`, `radius-r-fill`, `search`,
`single-chevron-down`, `single-chevron-left`, `single-chevron-right`,
`single-chevron-up`, `tick-simple`, `tick-solid`, `tick`, `tool-tip`,
`vehicle-tracking`, `velos-card`

Assigned usages (add here as icons gain established contexts):

| Icon                     | Usage                                                      | Notes                    |
| ------------------------ | ---------------------------------------------------------- | ------------------------ |
| icon-arrow-right         | Primary CTA trailing icon (e.g. "Choose your fuel card →") | Scaled to 22px in-button |
| icon-arrow-left          | Back-button leading icon; table pagination prev            | —                        |
| icon-search              | Table search input; "View Card" red action button          | —                        |
| icon-download            | PDF / Excel export buttons                                 | —                        |
| icon-single-chevron-down | Dropdown field trailing indicator                          | —                        |
| icon-error               | Inline form errors, error summary                          | —                        |
| icon-tool-tip            | Hint text info marker                                      | Fixed blue               |
| icon-fuel-pump           | Use for "Fuel" related sections                            | –                        |
| icon-ev-charging         | Use for "EV" related sections                              | –                        |
| icon-expense-management  | Use for Fuel / EV Charge Card sections                     | –                        |

# Velocity — Fuel & EV Charge Cards Dashboard Redesign
**Status:** Planning  
**Last updated:** 2026-06-29  
**Primary user:** Fleet Manager  
**Platform:** Web (responsive — desktop primary, mobile supported)

---

## 1. Goals

- Establish clear information hierarchy: actionable data first, reference data last
- Surface key metrics at a glance without requiring page scanning
- Unify Fuel Card and EV Charge Card data into a coherent, parallel structure
- Introduce Alerts summary (fuel and EV) as a first-class element
- Add a global date range picker to make the dashboard time-contextual
- Accommodate a business-required marketing sidebar without it dominating the layout
- Lay a foundation that can support configurability in a future iteration

---

## 2. Non-Goals (Deferred)

- **Configurable dashboard** (show/hide or drag-to-reorder panels) — nice-to-have, out of scope for v1
- **Card management actions** (issue, block, set limits) — not in current feature set
- **Driver assignment UI** — data may be available but no management UI in this phase
- **Full invoice detail view** — summary only; link out to dedicated invoicing section
- **Dedicated EV charging map** — reuse existing fuel station map with EV toggle if possible

---

## 3. User

**Fleet Manager** — monitors spending, card status, and usage trends across the fleet. Primarily a read/review behaviour pattern. Visits the dashboard to answer questions like:

- How much have we spent on fuel/charging this period?
- Are any cards expiring or flagged?
- Are there any anomalies or alerts I should act on?
- Where is the fleet fuelling/charging?

They do not typically need to take action directly from this dashboard, but should be able to navigate quickly to relevant detail views.

---

## 4. Current State Problems

| Issue | Impact |
|-------|--------|
| Account start date displayed prominently | Occupies prime real estate with low-value info |
| Admin contact details in dashboard | Reference data, not monitoring data |
| No transaction summary metrics | Key financial KPIs missing at-a-glance |
| No alerts surface | Anomalies require active investigation |
| Fuel and EV cards not clearly separated | Creates visual ambiguity |
| No date context | Charts and figures lack temporal anchoring |
| Spend threshold label unclear | "Total limit of all charge card transactions?" — needs definition |

---

## 5. Information Architecture

Sections ordered by priority — top to bottom on desktop, stacked on mobile.

### 5.1 Page Header
- Page title: "Fuel & Charge Cards"
- **Global date range picker** (affects all time-based data on the page)
- Quick links: Help · Report a Problem · Fuel Site Map
- Account context: small, subdued — period start date as picker lower bound, not displayed

### 5.2 KPI Strip
Five metrics, equal weight, single row on desktop / 2-col grid on mobile:

| Metric | Source |
|--------|--------|
| Total Transactions | Transactions data |
| Total Fuel Volume (litres) | Fuel card data |
| Average Fuel Price (p/litre) | Derived |
| Total Net Spend (£) | Transactions data |
| Average Spend per Driver (£) | Derived: total ÷ active drivers |

All figures respect the global date range picker.

### 5.3 Cards Overview
Two panels side by side (desktop) / stacked (mobile):

**Fuel Cards** | **EV Charge Cards**
- Brand breakdown with card count per brand
- For each brand: Active · Expiring Soon · Stopped counts
- Expiring Soon highlighted as a prompt to act (link to card management)
- Total spend per brand (for selected period)
- Link: "Manage Cards" → card management view
- Link: "Order Cards" → card ordering flow

### 5.4 Alerts Row
Two compact alert summary panels side by side (desktop) / stacked (mobile):

**Fuel Alerts** | **EV Alerts**
- Count of active alerts by severity (e.g. 3 critical, 7 warnings)
- Brief description of top alert(s)
- CTA: "View all alerts →"

Empty state: "No alerts for this period" with a subtle success indicator.

### 5.5 Spend Chart + Insights Sidebar
**Left (main content):** 8-week fuel + EV volume/spend bar or line chart
- Toggle: Volume (litres) / Spend (£)
- Toggle: Fuel / EV / Both
- Respects global date range where applicable; otherwise shows trailing 8 weeks

**Right (sidebar, ~280px):**
- Latest invoice summary (period, total amount, due date, status, link to full invoice)
- Latest Insights PDF report (title, date, download link)
- Marketing cross-sell panel (business requirement — sits at bottom of sidebar, clearly delineated)

### 5.6 Fuel & Charge Station Map
Full-width map of fuel stations and EV charge points used in the selected period.
- Filter toggle: Fuel / EV / Both
- Clustered pins for dense areas
- Tap/click pin for station name, transaction count, total spend

### 5.7 Deprioritised / Removed from Dashboard
- Account start date → implicit (used as date picker lower bound only)
- Admin contact details → move to Account Settings or a footer/help drawer

---

## 6. Layout Structure

### Desktop (≥1200px)
```
┌─────────────────────────────────────────────────────────────────────┐
│ Page Header: Title · Date Picker · Quick Links                      │
├───────┬───────┬───────┬───────┬─────────────────────────────────────┤
│  KPI  │  KPI  │  KPI  │  KPI  │  KPI                                │
├───────────────────────────┬─────────────────────────────────────────┤
│ Fuel Cards                │ EV Charge Cards                         │
├───────────────────────────┴─────────────────────────────────────────┤
│ Fuel Alerts               │ EV Alerts                               │
├───────────────────────────────────────────┬─────────────────────────┤
│ Spend Chart (8-week)                      │ Invoice Summary         │
│                                           │ Insights PDF            │
│                                           │ ─────────────────────── │
│                                           │ Marketing / Cross-sell  │
├───────────────────────────────────────────┴─────────────────────────┤
│ Station Map (full width)                                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile (≤600px)
All sections stack full-width. Section order:
1. Page header (date picker collapses to icon/bottom sheet)
2. KPI strip (2-column grid, 3 rows)
3. Fuel Cards → EV Charge Cards (stacked)
4. Fuel Alerts → EV Alerts (stacked)
5. Spend Chart (horizontal scroll or simplified sparkline)
6. Invoice summary · Insights PDF link (stacked cards)
7. Marketing panel (dismissible banner)
8. Station map (reduced height, full width)

---

## 7. Design Constraints

- Must use Velocity's existing design system (Figma tokens)
- Date range picker must be a single global control — no per-panel pickers
- Marketing sidebar must not use primary brand colours or compete visually with data panels
- Alerts must use established severity colours (critical/warning/info) — do not invent new ones
- Charts must be accessible: do not rely on colour alone to differentiate data series
- Map component: reuse existing implementation where possible

---

## 8. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | What is the exact definition of "Spend Threshold"? Is it per-card or account-wide? | Product | Open |
| 2 | Should Expiring Soon cards link directly to card management, or trigger a modal? | UX | Open |
| 3 | Is the 8-week chart period fixed, or does it respond to the global date picker? | Product | Open |
| 4 | What constitutes an "alert" — is there an existing alerts model in the platform? | Engineering | Open |
| 5 | Does the marketing sidebar content change dynamically, or is it static per account tier? | Marketing | Open |
| 6 | Can the map reuse the existing fuel/EV map component from the main map feature? | Engineering | Open |
| 7 | Is there a Latest Insights PDF per account or a single global one? | Product | Open |

---

## 9. Deliverables

| Deliverable | Tool | Phase |
|-------------|------|-------|
| `plan.md` | — | ✅ Phase 1 |
| `design.md` | Claude Design + Figma MCP | Phase 1 |
| Desktop wireframe (lo-fi) | Figma / Claude Design | Phase 2 |
| Mobile wireframe (lo-fi) | Figma / Claude Design | Phase 2 |
| Interactive HTML prototype | Claude Design | Phase 2 |
| Desktop mockup (hi-fi, with tokens) | Figma | Phase 3 |
| Mobile mockup (hi-fi) | Figma | Phase 3 |
| Handoff annotations | Figma | Phase 4 |

---

## 10. Phases

### Phase 1 — Scope & Foundation (current)
- [x] Brief Q&A and scope definition
- [x] `plan.md` created
- [ ] `design.md` created (Velocity tokens + guidelines)

### Phase 2 — Wireframes & Prototype
- [ ] Lo-fi desktop wireframe in Figma
- [ ] Lo-fi mobile wireframe in Figma
- [ ] Interactive HTML prototype (Claude Design) for stakeholder review

### Phase 3 — Hi-fi Design
- [ ] Apply Velocity design tokens to all components
- [ ] Hi-fi desktop mockup
- [ ] Hi-fi mobile mockup
- [ ] Dark mode pass (if applicable)

### Phase 4 — Handoff
- [ ] Component annotations
- [ ] Interaction notes
- [ ] Open questions resolved and documented

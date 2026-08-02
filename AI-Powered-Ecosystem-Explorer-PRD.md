# PRD: AI-Powered Ecosystem Explorer

**Author:** Akshat | **Status:** Draft v1 | **Date:** July 16, 2026

---

## 1. Problem & Opportunity

Redington has built out "AI-Powered Ecosystem" journeys for multiple industries (Healthcare, Banking, Retail today — more likely later). Right now this content lives as static slide decks. Static decks are one-directional and don't let a prospect self-navigate to *their* use case or *their* stage of the journey.

We want an interactive, tap-through web app — usable on a kiosk/tablet at events or shared as a link — where someone can:
- Pick an industry
- Walk the end-to-end journey (step 1 → N)
- Drill into any step to see the specific use cases ("key experiences") and outcomes
- See the actual tech stack / ISV partners powering that step
- Come away with a shortlist of relevant solutions for their situation

## 2. Goals

| Goal | Metric |
|---|---|
| Replace static deck walkthroughs in conversations | Used in ≥80% of relevant sales/booth conversations within a quarter |
| Let users self-serve to their specific use case fast | Median time-to-relevant-step < 30 seconds |
| Make tech stack mapping legible | Every journey step shows key experiences + powered-by solutions + outcomes without needing a narrator |
| Easy to extend | New industry/journey addable by editing content JSON, no code changes |

**Non-goals (v1):** lead capture/CRM integration, user accounts, deep analytics dashboards, real-time data from Redington systems. (Flagged as fast-follow candidates in §9.)

## 3. Users

- **Primary:** Prospects/customers exploring self-serve at a booth, kiosk, or via a shared link during a sales conversation.
- **Secondary:** Redington sales reps, using it as a guided prop while presenting.

## 4. Content Model

Content is industry-agnostic and config-driven — each industry is one JSON object.

```
Industry
├── id, name, accentColor, tagline, description
├── heroStats[]                  // e.g. "9 Solution Touchpoints", "40+ Countries"
├── journey: Step[]              // the numbered 1→N flow
│   ├── stepNumber, title, icon, description
│   ├── keyExperiences: string[]           // bullet use cases
│   └── poweredBySolutions: string[]       // vendor/product names
├── businessOutcomes[]           // icon + title + short description
└── portfolioTable: Row[]        // ISV mapping table
    ├── touchpoint, icon
    ├── portfolioPartners: string[]
    ├── capabilitiesDelivered: string[]
    └── outcomesEnabled: string[]
```

This maps directly onto the source slides:
- Slide 1/4/7 (industry hero) → `Industry` header fields + `heroStats`
- Slide 2/5/8 (numbered journey) → `journey[]`
- Slide 3/6/9 (ISV portfolio table) → `portfolioTable[]`

Content for the three industries (Healthcare, Banking, Retail) will be transcribed from the existing decks into this JSON schema as the first implementation task — this is largely data entry, not design work.

## 5. Core User Flow

1. **Landing screen** — Redington branding, three (or more) industry tiles (Healthcare / Banking / Retail), each with its accent color and one-line tagline.
2. **Industry overview screen** — hero stats + tagline + a horizontal numbered stepper (matches the "1 → 2 → 3..." slide layout). Tapping any step number jumps to it; steps are also swipeable in sequence.
3. **Step detail view** — for the selected step:
   - Title + description
   - "Key Experiences" (use cases) as a tappable/scrollable list
   - "Powered By" tech stack, shown as logo/chips
   - Optional: tapping a solution chip shows a one-line description (tooltip/expand)
4. **Outcomes strip** — persistent footer or end-of-journey screen summarizing business outcomes (always visible or reached at step N+1).
5. **Portfolio table view** — a separate accessible screen (button from overview) showing the full ISV mapping table for that industry, filterable by touchpoint.
6. **Idle/reset** — if kiosk-deployed, auto-return to landing screen after N seconds of inactivity (configurable, default 90s).

Optional v1.1 stretch: a **"Build my stack"** mode — user multi-selects the steps relevant to them across the journey, and the app generates a consolidated, de-duplicated list of solutions + outcomes as a summary screen (shareable/printable).

## 6. Screens (MVP scope)

1. Landing / industry select
2. Industry overview + stepper navigation
3. Step detail (use cases + tech stack + outcomes for that step)
4. ISV portfolio table (per industry)
5. Idle/attract screen (kiosk mode only)

## 7. Tech Stack Recommendation

Given this is content-driven, visual, touch-first, and needs to be quick to stand up and easy to re-skin per industry:

- **Frontend:** React + Tailwind CSS, single-page app. No backend needed for v1 — content lives in local JSON/TS files bundled with the app.
- **Navigation:** client-side state (no real routing needed for kiosk mode); if shared as a public link, add lightweight routing (React Router) so steps/industries are deep-linkable (`/healthcare/step-4`).
- **Animation/transitions:** Framer Motion or CSS transitions for step-to-step swipe/tap feel — this matters a lot for "tap-through" to feel good on a touchscreen.
- **Icons:** lucide-react (covers the stethoscope/shield/chart-style icons seen in the decks) or custom SVGs exported from the original slide icon set for exact visual match.
- **Hosting:** static hosting (Vercel/Netlify/S3+CloudFront) — no server required for MVP.
- **Content updates:** JSON files in the repo; a simple internal spreadsheet-to-JSON script (or just hand-editing) is enough at this scale (3 industries × ~9 steps).
- **Kiosk mode:** browser in fullscreen/kiosk mode on the touchscreen device; a small idle-timer component handles auto-reset.

No database, auth, or backend is needed for MVP — this keeps time-to-first-demo short. If lead capture or CMS-style editing becomes a requirement later, that's the point to introduce a backend (see §9).

## 8. Non-Functional Requirements

- **Touch-first:** large tap targets (≥44px), swipe gestures between steps.
- **Performance:** should load in <2s on kiosk hardware/venue wifi; assets optimized (SVGs over large PNGs where possible).
- **Responsive:** must work on tablet (primary), large touchscreen kiosk, and desktop browser (secondary, for remote demos).
- **Offline-tolerant:** since it may run at a booth with unreliable wifi, MVP should be fully static/bundled so it works with no network dependency at all.
- **Brand fidelity:** match Redington's visual language per industry (blue/healthcare, orange/banking, green/retail — consistent with source decks).

## 9. Fast-Follow / Phase 2 Candidates (not in MVP)

- Lead capture form at end of journey (name/email/interest area) → CRM webhook
- "Build my stack" summary export (PDF/email)
- CMS-backed content (so non-engineers can edit copy without a code change) — e.g. a simple JSON-editing admin screen or headless CMS
- Analytics on which industries/steps get the most engagement
- Additional industries beyond Healthcare/Banking/Retail

## 10. Open Questions

- Primary deployment target: dedicated kiosk hardware at events, iPad/tablet handed to prospects, or a shareable web link (or all three)? This affects whether kiosk-mode/idle-reset is must-have for MVP.
- Is there a need for the app to be usable **offline** at a venue with no reliable connectivity, or is venue wifi guaranteed?
- Should the "Build my stack" flow be MVP or explicitly phase 2?

## 11. Rough Milestones

| Milestone | Scope |
|---|---|
| M1 | Content transcription: all 3 industries into JSON schema |
| M2 | Static UI shell: landing → industry overview → step detail (1 industry, hardcoded styling) |
| M3 | Wire in remaining 2 industries + accent theming per industry |
| M4 | Portfolio table view + idle/reset (if kiosk) |
| M5 | Polish: animations, touch gestures, QA on target device |

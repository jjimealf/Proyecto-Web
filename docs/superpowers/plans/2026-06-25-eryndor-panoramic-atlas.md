# Panoramic Eryndor Atlas Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Eryndor map the dominant visual element on `/mundo` and reorganize the selected-region content into a wide editorial panel below it.

**Architecture:** Keep the existing URL-backed state and data model. Change only the page composition, semantic grouping, region-panel markup, and atlas CSS; retain current accessible controls and responsive fallbacks.

**Tech Stack:** React 19, TypeScript, native CSS, Vitest, Testing Library, Playwright.

---

## Chunk 1: Panoramic composition

### Task 1: Restructure the explorer

**Files:**

- Modify: `src/pages/WorldPage.tsx`
- Modify: `src/components/world/WorldRegionPanel.tsx`
- Modify: `src/pages/WorldPage.test.tsx`

- [ ] Add a failing test that asserts map, selector, and region panel appear in that order inside `.world-explorer__content`.
- [ ] Replace the side-by-side wrapper with a vertical panoramic wrapper.
- [ ] Move the region selector between map and panel.
- [ ] Group region-panel content into `world-region__intro`, `world-region__story`, and `world-region__landmarks` columns.
- [ ] Run `npm test -- src/pages/WorldPage.test.tsx` and expect PASS.

### Task 2: Implement the wide visual system

**Files:**

- Modify: `src/styles/index.css`

- [ ] Increase the explorer width to `min(92rem, calc(100% - 2rem))`.
- [ ] Make the map full-width and reduce framing overhead.
- [ ] Style the region selector as a full-width atlas index.
- [ ] Convert the region panel to a three-column editorial grid.
- [ ] Add two-column tablet and single-column mobile rules.
- [ ] Run format, lint, unit tests, E2E tests, and build.

### Task 3: Commit the redesign

- [ ] Stage only the page, panel, test, stylesheet, and this plan.
- [ ] Commit with `feat: enlarge Eryndor world map`.

# Anya Theme Design — Clawd on Desk Custom

**Date:** 2026-04-29
**Character:** Anya Forger (Spy x Family)
**Asset source:** ChatGPT Images 2.0 (AI-generated)
**Fork:** https://github.com/chapakook/clawd-on-desk

---

## Overview

Create a custom Clawd on Desk theme featuring Anya Forger from Spy x Family. Assets are generated using ChatGPT Images 2.0 with per-state prompts. The scaffold is created first, then assets are filled in progressively using `validate-theme.js` to verify at each step.

---

## Section 1: Project Setup

The working directory (`clawd-on-desk-custom`) is an empty git repo. Setup steps:

1. Add the user's fork as `origin` and pull the codebase
2. Run `npm install`
3. Run `node scripts/create-theme.js anya` to generate the scaffold
4. Write the prompt kit to `prompts/anya-prompts.md`

---

## Section 2: Theme Scaffold Structure

```
themes/anya/
├── theme.json
└── assets/
    ├── idle.png
    ├── thinking.gif
    ├── typing.gif
    ├── building.gif
    ├── juggling.gif
    ├── conducting.gif
    ├── error.gif
    ├── happy.gif
    ├── notification.gif
    ├── sweeping.gif
    ├── carrying.gif
    └── sleeping.gif
```

- Eye tracking is disabled (no SVG idle); all states use PNG/GIF
- Placeholder images fill missing states until real assets are ready
- `node scripts/validate-theme.js themes/anya` used to verify after each asset addition

---

## Section 3: ChatGPT Images 2.0 Prompt Kit

### Base Style (applied to all prompts)

```
Anya Forger from Spy x Family anime, chibi pixel art style,
transparent background, 200x200px, front-facing,
consistent pink hair with two side-up buns, green eyes,
simple clean lines, limited color palette
```

### Per-State Variations

| State | Expression / Pose Keywords |
|-------|---------------------------|
| idle | neutral expression, slight smile, blinking |
| thinking | furrowed brows, hand on chin |
| typing | excited, hands moving, leaning forward |
| happy | big smile, arms up, sparkles |
| error | pouting, arms crossed |
| sleeping | eyes closed, zzz bubble, slumped |
| notification | surprised, eyes wide, exclamation above head |
| building | determined, holding tools |
| juggling | overwhelmed but focused, multiple items in air |
| conducting | commanding pose, one arm raised |
| sweeping | cleaning motion, broom in hand |
| carrying | straining, carrying a large object |

### Output Format

- **idle:** PNG (static)
- **all others:** Multiple frames as PNG → assemble into GIF using external tool (e.g., ezgif.com or ffmpeg)

---

## Section 4: Workflow

```
1. [Claude] git remote add origin + pull fork
2. [Claude] npm install
3. [Claude] node scripts/create-theme.js anya
4. [Claude] Write prompts/anya-prompts.md
5. [User]   Generate images via ChatGPT Images 2.0
6. [User]   Place images in themes/anya/assets/
7. [Claude] node scripts/validate-theme.js themes/anya
8. [User]   npm start → Settings → Theme → anya
9. Repeat steps 5–8 for each additional state
```

### Deliverables

| File | Description |
|------|-------------|
| `themes/anya/theme.json` | Theme metadata and asset mapping |
| `themes/anya/assets/` | Asset folder (placeholders + real images) |
| `prompts/anya-prompts.md` | ChatGPT prompt kit for all animation states |

---

## Constraints & Notes

- ChatGPT Images 2.0 does not natively export animated GIF; frames must be assembled separately
- Anya is a copyrighted character (Tatsuya Endo / Shueisha) — theme is for personal use only
- SVG eye-tracking requires vector format; skipped in this design (PNG idle instead)

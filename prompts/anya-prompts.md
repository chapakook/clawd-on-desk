<!-- FINDINGS FROM TASK 2

scaffold output path (Linux/WSL2): ~/.config/clawd-on-desk/themes/anya
  (uses $XDG_CONFIG_HOME if set, otherwise ~/.config)
  override with: node scripts/create-theme.js anya --target ./themes/anya

files created by create-theme.js:
  - theme.json (patched from themes/template/theme.json)
  - assets/ directory (copied from themes/template/assets/)

theme.json required fields (validator enforces as errors):
  - schemaVersion: 1
  - name: (non-empty string)
  - version: (non-empty string)
  - viewBox: { x, y, width, height }  with width > 0 and height > 0
  - states: object containing at minimum: idle, working, thinking
    (each must have at least one file, or fallbackTo chain ending in real files)

theme.json recommended fields (validator warns if missing):
  - author
  - description

key state name mappings (template → plan):
  - "working"  maps to typing/working animation (not "typing")
  - "sleeping" + sleepSequence.mode="direct" → no yawning/dozing needed
  - eyeTracking.enabled: false → no SVG required for idle

validate-theme.js expected path format:
  node scripts/validate-theme.js ~/.config/clawd-on-desk/themes/anya
  OR with --target:
  node scripts/validate-theme.js ./themes/anya

pass: exit 0 — "All checks passed!" or "Passed with N warning(s)"
fail: exit 1 — "N error(s)"
-->

# Anya Theme — ChatGPT Images 2.0 Prompt Kit

## How to Use

1. Open ChatGPT with Images 2.0 enabled
2. For each asset below, generate **8 separate PNG images** using the per-frame prompts
3. Assemble 8 frames into GIF (see GIF Assembly below)
4. Place file at the listed **Target path**
5. Run validation: `node scripts/validate-theme.js ./themes/anya`
6. Repeat for each asset

**Priority order:** Start with `idle.gif`, `thinking.gif`, `typing.gif` — these are required. Then add the rest.

---

## Base Style

Copy this into **every** prompt (replace `[BASE STYLE]`):

```
Anya Forger from Spy x Family anime, chibi pixel art style,
transparent background, 200x200px, front-facing,
consistent pink hair with two side-up buns, green eyes,
simple clean lines, limited color palette, no background
```

---

## GIF Assembly

**Option A — ezgif.com (no install):**
1. Go to https://ezgif.com/maker
2. Upload 8 frames (PNG) in order
3. Set delay to `12` (= ~8fps), click "Make GIF"
4. Download and rename

**Option B — ffmpeg:**
```bash
# frames named frame1.png, frame2.png, ... frame8.png
ffmpeg -framerate 8 -i frame%d.png -vf "scale=200:200" output.gif
```

---

## Validation

```bash
node scripts/validate-theme.js ./themes/anya
```

---

## Assets

### REQUIRED (core states)

---

#### `idle.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/idle.gif`
**Format:** GIF, 8 frames @ 8fps (looping blink)
**When used:** Default resting state

| Frame | Description |
|-------|-------------|
| 1 | Eyes fully open, neutral smile, relaxed pose |
| 2 | Eyes fully open (same as 1 — hold) |
| 3 | Eyes half-closed, beginning blink |
| 4 | Eyes fully closed |
| 5 | Eyes opening, half-open |
| 6 | Eyes fully open, neutral smile |
| 7 | Eyes fully open (same as 6 — hold) |
| 8 | Eyes fully open (same as 6 — hold longer) |

**Per-frame prompts:**

Frame 1–2 & 6–8:
```
[BASE STYLE]
neutral relaxed expression, slight smile, standing still,
eyes fully open looking forward, calm resting pose
```

Frame 3:
```
[BASE STYLE]
neutral relaxed expression, slight smile, standing still,
eyes one-third closed in slow blink, calm resting pose
```

Frame 4:
```
[BASE STYLE]
neutral relaxed expression, slight smile, standing still,
eyes fully closed in blink, calm resting pose
```

Frame 5:
```
[BASE STYLE]
neutral relaxed expression, slight smile, standing still,
eyes half-open reopening from blink, calm resting pose
```

---

#### `thinking.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/thinking.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Agent is processing / thinking

| Frame | Description |
|-------|-------------|
| 1 | Arms at sides, eyes forward, neutral |
| 2 | Right hand begins rising |
| 3 | Right hand near shoulder, eyes shift left |
| 4 | Right hand at chin, eyes upper-left |
| 5 | Hand at chin, eyes shift to upper-right |
| 6 | Hand at chin, eyes return center, slight head tilt |
| 7 | Hand at chin (hold), eyebrows furrowed |
| 8 | Same as frame 7 (hold) |

**Per-frame prompts:**

Frame 1:
```
[BASE STYLE]
neutral expression, arms relaxed at sides, eyes looking forward
```
Frame 2:
```
[BASE STYLE]
curious expression, right hand beginning to rise toward face, eyes forward
```
Frame 3:
```
[BASE STYLE]
thinking expression, right hand near shoulder level, eyes shifting left
```
Frame 4–5:
```
[BASE STYLE]
furrowed brows, right hand raised to chin in thinking pose,
eyes looking upward-left, concentrated expression
```
Frame 6–8:
```
[BASE STYLE]
furrowed brows, right hand on chin, slight head tilt to the right,
eyes looking forward-slightly-down, deep in thought
```

---

#### `typing.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/typing.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** 1 active agent session working

| Frame | Description |
|-------|-------------|
| 1 | Left hand raised high, right hand lowered |
| 2 | Left hand mid, right hand mid (crossing) |
| 3 | Left hand lowered, right hand raised high |
| 4 | Left hand mid, right hand mid (crossing) |
| 5 | Left hand raised high, right hand lowered |
| 6 | Left hand mid, right hand mid |
| 7 | Left hand lowered, right hand raised high |
| 8 | Left hand mid, right hand mid |

**Per-frame prompts:**

Frames 1, 5 (left up):
```
[BASE STYLE]
excited eager expression, leaning slightly forward, wide open eyes,
left hand raised high in typing motion, right hand lowered, energetic pose
```
Frames 3, 7 (right up):
```
[BASE STYLE]
excited eager expression, leaning slightly forward, wide open eyes,
right hand raised high in typing motion, left hand lowered, energetic pose
```
Frames 2, 4, 6, 8 (both mid):
```
[BASE STYLE]
excited eager expression, leaning slightly forward, wide open eyes,
both hands at mid-level in typing motion, energetic focused pose
```

---

### RECOMMENDED (improves experience)

---

#### `building.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/building.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** 3+ active agent sessions (workingTiers)

| Frame | Description |
|-------|-------------|
| 1–2 | Wrench held up, determined face |
| 3–4 | Wrench swings down-right |
| 5–6 | Wrench at lowest point |
| 7–8 | Wrench swings back up |

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
determined serious expression, right hand raised holding a small wrench above head,
focused eyes slightly narrowed, construction working pose
```
Frames 3–4:
```
[BASE STYLE]
determined expression, right hand swinging wrench downward to the right,
focused eyes, mid-swing construction pose
```
Frames 5–6:
```
[BASE STYLE]
determined expression, right hand holding wrench at lowest point,
arms slightly extended, construction working pose
```
Frames 7–8:
```
[BASE STYLE]
determined expression, right hand swinging wrench back upward,
focused eyes, return swing construction pose
```

---

#### `juggling.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/juggling.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** 2+ active agent sessions

| Frame | Description |
|-------|-------------|
| 1 | Left hand high, orb above left hand |
| 2 | Orb at peak left, right orb rising |
| 3 | Center orb at top, both hands mid |
| 4 | Right orb at peak, left orb falling |
| 5 | Right hand high, orb above right hand |
| 6 | Orb falling right, left orb rising |
| 7 | Center orb at top again |
| 8 | Return to frame 1 position |

**Per-frame prompts:**

Frames 1, 5:
```
[BASE STYLE]
overwhelmed but determined expression, one hand raised high,
two colorful glowing orbs visible in the air, slightly stressed wide eyes
```
Frames 3, 7:
```
[BASE STYLE]
overwhelmed but determined expression, both hands at mid-level,
three colorful glowing orbs in arc above her head, mouth open in concentration
```
Frames 2, 4, 6, 8:
```
[BASE STYLE]
overwhelmed but focused expression, hands in motion,
colorful orbs mid-arc in the air around her, stressed concentrated expression
```

---

#### `conducting.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/conducting.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** 2+ subagents (jugglingTiers override)

| Frame | Description |
|-------|-------------|
| 1–2 | Baton raised high, eyes closed |
| 3–4 | Baton sweeps down-left |
| 5–6 | Baton at lowest point, slight body lean |
| 7–8 | Baton sweeps back up |

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
commanding confident expression, right arm raised high holding a small baton,
eyes closed in concentration, left hand extended outward, authoritative pose
```
Frames 3–4:
```
[BASE STYLE]
commanding expression, right arm sweeping down-left with baton,
eyes still closed, conducting motion mid-sweep
```
Frames 5–6:
```
[BASE STYLE]
commanding expression, right arm at lowest point with baton,
slight forward lean, conducting downbeat pose
```
Frames 7–8:
```
[BASE STYLE]
commanding expression, right arm rising back upward with baton,
eyes beginning to open, completing conducting upbeat
```

---

#### `happy.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/happy.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Attention / task complete state

| Frame | Description |
|-------|-------------|
| 1 | Arms beginning to raise, big smile forming |
| 2 | Arms halfway up, smile wide |
| 3 | Arms fully raised, eyes crescent with joy |
| 4 | Sparkles appear around her |
| 5 | Slight upward bounce, sparkles |
| 6 | At peak of bounce, sparkles everywhere |
| 7 | Coming back down, arms still raised |
| 8 | Return to arms raised (loop) |

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
huge open smile, arms rising upward, eyes wide with excitement,
happy celebratory expression beginning
```
Frames 3–4:
```
[BASE STYLE]
huge open smile, both arms fully raised up in celebration,
eyes crescent-shaped from joy, sparkles around her
```
Frames 5–6:
```
[BASE STYLE]
extremely happy expression, both arms raised, slight upward jump,
sparkles and small stars all around, eyes crescent with joy
```
Frames 7–8:
```
[BASE STYLE]
huge open smile, both arms raised, coming back to ground,
sparkles fading slightly, joyful celebratory pose
```

---

#### `notification.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/notification.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Incoming notification / permission request

| Frame | Description |
|-------|-------------|
| 1 | Neutral pose |
| 2 | Eyes widening, slight backward lean |
| 3 | Eyes fully wide, ! mark appearing |
| 4 | ! mark fully visible, hand raised |
| 5 | ! mark pulsing larger |
| 6 | ! mark normal size, eyebrows raised high |
| 7 | Slight forward lean returning |
| 8 | Alert pose held |

**Per-frame prompts:**

Frame 1:
```
[BASE STYLE]
neutral expression, arms relaxed, looking forward
```
Frames 2–3:
```
[BASE STYLE]
surprised expression beginning, eyes widening, eyebrows raising,
slight backward lean, startled reaction
```
Frames 4–6:
```
[BASE STYLE]
surprised startled expression, eyes wide open, eyebrows raised high,
small red exclamation mark ! floating above her head,
one hand raised near face, alert attentive pose
```
Frames 7–8:
```
[BASE STYLE]
alert attentive expression, eyes wide, ! mark above head,
leaning slightly forward, ready and waiting pose
```

---

#### `sleeping.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/sleeping.gif`
**Format:** GIF, 8 frames @ 6fps (slower = more peaceful)
**When used:** Idle for 60+ seconds

| Frame | Description |
|-------|-------------|
| 1–2 | Slumped, eyes closed, small zzz |
| 3–4 | Head bobs slightly down, zzz grows |
| 5–6 | Head bobs back up, zzz floats higher |
| 7–8 | Head at rest again, zzz resets small |

**Per-frame prompts:**

Frames 1–2 & 7–8:
```
[BASE STYLE]
eyes completely closed, slumped drooping posture,
small white zzz bubble near head, relaxed arms hanging,
soft peaceful sleeping expression, slightly tilted to one side
```
Frames 3–4:
```
[BASE STYLE]
eyes completely closed, head drooping slightly lower,
medium zzz bubble floating upward, deeply asleep pose
```
Frames 5–6:
```
[BASE STYLE]
eyes completely closed, head slightly raised from droop,
larger zzz bubble floating higher above head, peaceful sleeping
```

---

#### `waking.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/waking.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Waking from sleep when mouse moves

| Frame | Description |
|-------|-------------|
| 1–2 | Still slumped, eyes barely opening |
| 3–4 | Yawn begins, one arm starting to stretch |
| 5–6 | Full yawn, arm stretched high |
| 7 | Yawn closing, blinking awake |
| 8 | Eyes open, upright, awake |

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
eyes barely cracked open, still slumped, drowsy sleepy expression,
just beginning to wake up
```
Frames 3–4:
```
[BASE STYLE]
mouth open in yawn, eyes half-open, one arm beginning to stretch upward,
waking up pose, disheveled tired look
```
Frames 5–6:
```
[BASE STYLE]
full wide yawn mouth open, one arm fully stretched up high,
other hand rubbing eye, very tired waking pose
```
Frame 7:
```
[BASE STYLE]
yawn finishing, mouth closing, eyes blinking open wider,
arm lowering from stretch, waking up expression
```
Frame 8:
```
[BASE STYLE]
eyes fully open, upright awake posture, slight smile,
fully awake and alert expression
```

---

### OPTIONAL (idle variety + reactions)

---

#### `idle-look.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/idle-look.gif`
**Format:** GIF, 8 frames @ 6fps
**When used:** Random idle animation (plays occasionally during idle)

| Frame | Description |
|-------|-------------|
| 1–2 | Eyes forward, neutral |
| 3–4 | Eyes and head turning right |
| 5–6 | Eyes far right, curious |
| 7–8 | Returning to center |

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
neutral expression, eyes looking directly forward, relaxed idle pose
```
Frames 3–4:
```
[BASE STYLE]
curious expression, eyes shifting to the right, slight head turn right,
eyebrow slightly raised
```
Frames 5–6:
```
[BASE STYLE]
curious expression, eyes looking far to the right, head turned right,
noticing something off-screen
```
Frames 7–8:
```
[BASE STYLE]
neutral expression, eyes returning to center, head turning back forward,
finishing looking to the side
```

---

#### `react-drag.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/react-drag.gif`
**Format:** GIF, 8 frames @ 10fps (fast)
**When used:** User is dragging Anya around the screen

**Per-frame prompts:**

Frames 1, 3, 5, 7 (arms left):
```
[BASE STYLE]
surprised flailing expression, left arm flung out wide, right arm lower,
eyes wide open in shock, mouth open in surprised O, hair flying upward
```
Frames 2, 4, 6, 8 (arms right):
```
[BASE STYLE]
surprised flailing expression, right arm flung out wide, left arm lower,
eyes wide open in shock, mouth open in surprised O, hair flying upward
```

---

#### `react-left.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/react-left.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Single click on left side

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
neutral expression, upright pose
```
Frames 3–5:
```
[BASE STYLE]
slightly annoyed poked expression, leaning strongly to the left,
one eye squinting, small pout, reacting to being tapped on the left
```
Frames 6–8:
```
[BASE STYLE]
mildly annoyed expression, slowly returning upright from left lean,
small pout fading, recovering from tap
```

---

#### `react-right.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/react-right.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Single click on right side

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
neutral expression, upright pose
```
Frames 3–5:
```
[BASE STYLE]
slightly annoyed poked expression, leaning strongly to the right,
one eye squinting, small pout, reacting to being tapped on the right
```
Frames 6–8:
```
[BASE STYLE]
mildly annoyed expression, slowly returning upright from right lean,
small pout fading, recovering from tap
```

---

#### `react-double.gif` — animated GIF, 8 frames
**Target:** `themes/anya/assets/react-double.gif`
**Format:** GIF, 8 frames @ 8fps
**When used:** Double-click

**Per-frame prompts:**

Frames 1–2:
```
[BASE STYLE]
startled expression, eyes wide, beginning of dizzy reaction from double-tap
```
Frames 3–4:
```
[BASE STYLE]
dizzy expression, stars or swirls appearing around head, eyes spinning
```
Frames 5–6:
```
[BASE STYLE]
very dizzy expression, swaying to the left, stars fully surrounding head,
eyes crossed or spinning
```
Frames 7–8:
```
[BASE STYLE]
recovering from dizzy, stars fading, slight sway to the right,
eyes returning to normal, shaking off the double-tap
```

---

### AUDIO (not image prompts)

The theme references `sounds/complete.mp3` and `sounds/confirm.mp3`.
These are audio files — source or create short sound effects separately.
Place at `themes/anya/sounds/complete.mp3` and `themes/anya/sounds/confirm.mp3`.
Set fields to `null` in theme.json to disable sounds and use app defaults instead.

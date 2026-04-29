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
2. For each asset below, copy the **Base Style** block + the state's **Prompt Addition**
3. Generate → download as PNG
4. For animated states: generate 4–6 frames with slightly varied poses
5. Assemble frames into GIF (see GIF Assembly below)
6. Place file at the listed **Target path**
7. Run validation: `node scripts/validate-theme.js ./themes/anya`
8. Repeat until all required assets are placed

**Priority order:** Start with `idle.png`, `thinking.gif`, `typing.gif` — these are required. Then add the rest.

---

## Base Style

Copy this into **every** prompt:

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
2. Upload frames (PNG), set delay to 25 (= 4fps), click "Make GIF"
3. Download and rename

**Option B — ffmpeg:**
```bash
# frames named frame1.png, frame2.png, ...
ffmpeg -framerate 4 -i frame%d.png -vf "scale=200:200" output.gif
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

#### `idle.png` — static PNG
**Target:** `themes/anya/assets/idle.png`
**Format:** PNG (static, no animation)
**When used:** Default resting state

**Prompt:**
```
[BASE STYLE]
neutral expression, slight smile, standing relaxed, arms loosely at sides,
eyes open and looking forward, calm and content
```

---

#### `thinking.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/thinking.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** Agent is processing / thinking

**Prompt:**
```
[BASE STYLE]
furrowed brows, one hand raised to chin in thinking pose,
eyes looking upward-left, slight head tilt, concentrated expression
```
Frames: hand moves slightly toward chin, eyes shift left then right

---

#### `typing.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/typing.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** 1 active agent session working

**Prompt:**
```
[BASE STYLE]
excited eager expression, leaning slightly forward,
both hands raised and moving as if typing rapidly,
wide open eyes, energetic focused pose
```
Frames: hands alternate up/down

---

### RECOMMENDED (improves experience)

---

#### `building.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/building.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** 3+ active agent sessions (workingTiers)

**Prompt:**
```
[BASE STYLE]
determined serious expression, holding a small wrench in one hand,
focused eyes slightly narrowed, leaning forward with purpose,
construction or tool-use pose
```
Frames: wrench moves in small arc

---

#### `juggling.gif` — animated GIF, 6 frames
**Target:** `themes/anya/assets/juggling.gif`
**Format:** GIF, 6 frames @ 6fps
**When used:** 2+ active agent sessions (workingTiers + jugglingTiers)

**Prompt:**
```
[BASE STYLE]
overwhelmed but determined expression, both hands raised,
three small colorful glowing orbs floating in the air around her,
slightly stressed wide eyes, mouth open in concentration
```
Frames: orbs rotate in arc above hands, one hand slightly higher each frame

---

#### `conducting.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/conducting.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** 2+ subagents (jugglingTiers override)

**Prompt:**
```
[BASE STYLE]
commanding confident expression, one arm raised high holding a small baton,
eyes closed in concentration, other hand extended outward,
authoritative conductor pose
```
Frames: baton arm sweeps up then down, slight body sway

---

#### `happy.gif` — animated GIF, 6 frames
**Target:** `themes/anya/assets/happy.gif`
**Format:** GIF, 6 frames @ 6fps
**When used:** Attention / alert state (also used as attention fallback)

**Prompt:**
```
[BASE STYLE]
huge open smile, both arms raised up in celebration,
sparkles and small stars around her, eyes crescent-shaped from joy,
slight bounce or jump, extremely happy expression
```
Frames: arms go up, sparkles appear, small downward bounce, arms come back up

---

#### `notification.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/notification.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** Incoming notification / permission request

**Prompt:**
```
[BASE STYLE]
surprised startled expression, eyes wide open, eyebrows raised high,
small red exclamation mark ! floating above her head,
one hand raised near face, slight backward lean
```
Frames: ! mark appears and pulses, slight flinch backward then forward

---

#### `sleeping.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/sleeping.gif`
**Format:** GIF, 4 frames @ 3fps
**When used:** Idle for 60+ seconds (sleep mode)

**Prompt:**
```
[BASE STYLE]
eyes completely closed, slumped drooping posture,
small white zzz bubble floating upward above head,
relaxed arms hanging down, soft peaceful expression,
slightly tilted to one side
```
Frames: zzz bubble grows larger and floats upward, head bobs slightly

---

#### `waking.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/waking.gif`
**Format:** GIF, 4 frames @ 4fps
**When used:** Waking from sleep (direct sleep mode — plays when mouse moves)

**Prompt:**
```
[BASE STYLE]
eyes half-open drowsy expression, mid-yawn mouth,
one arm raised in a stretch upward, other hand rubbing eye,
tired but waking up pose, slight disheveled look
```
Frames: yawn opens, stretch arm goes up, eyes open wider, normal posture returns

---

### OPTIONAL (idle variety + reactions)

---

#### `idle-look.gif` — animated GIF, 6 frames
**Target:** `themes/anya/assets/idle-look.gif`
**Format:** GIF, 6 frames @ 4fps
**When used:** Random idle animation (plays occasionally during idle)

**Prompt:**
```
[BASE STYLE]
curious expression, head turning slowly to look to the right,
eyes following something off-screen, slight eyebrow raise,
then returning to forward gaze
```
Frames: head and eyes gradually turn right, pause, turn back to center

---

#### `react-drag.gif` — animated GIF, 4 frames
**Target:** `themes/anya/assets/react-drag.gif`
**Format:** GIF, 4 frames @ 8fps
**When used:** User is dragging Anya around the screen

**Prompt:**
```
[BASE STYLE]
surprised flailing expression, arms spread out wide,
eyes wide open in shock, mouth open in a surprised O,
hair flying upward as if moving fast, being carried pose
```
Frames: arms flail alternately, hair bounces

---

#### `react-left.gif` — animated GIF, 3 frames
**Target:** `themes/anya/assets/react-left.gif`
**Format:** GIF, 3 frames @ 6fps
**When used:** Single click on left side

**Prompt:**
```
[BASE STYLE]
slightly annoyed poked expression, leaning to the left,
one eye squinting, small pout, arms at sides stiffened,
reacting to being tapped on the left
```
Frames: lean left, exaggerated lean, return to center

---

#### `react-right.gif` — animated GIF, 3 frames
**Target:** `themes/anya/assets/react-right.gif`
**Format:** GIF, 3 frames @ 6fps
**When used:** Single click on right side

**Prompt:**
```
[BASE STYLE]
slightly annoyed poked expression, leaning to the right,
one eye squinting, small pout, arms at sides stiffened,
reacting to being tapped on the right
```
Frames: lean right, exaggerated lean, return to center

---

#### `react-double.gif` — animated GIF, 5 frames
**Target:** `themes/anya/assets/react-double.gif`
**Format:** GIF, 5 frames @ 6fps
**When used:** Double-click

**Prompt:**
```
[BASE STYLE]
startled dizzy expression from being double-tapped,
stars or swirls around head, eyes spinning or crossed,
slight stumble pose, exaggerated reaction
```
Frames: initial startle, stars appear, sway left, sway right, recover

---

### AUDIO (not image prompts)

The theme references `sounds/complete.mp3` and `sounds/confirm.mp3`.
These are audio files — source or create short sound effects separately.
Place at `themes/anya/sounds/complete.mp3` and `themes/anya/sounds/confirm.mp3`.
Set fields to `null` in theme.json to disable sounds and use app defaults instead.

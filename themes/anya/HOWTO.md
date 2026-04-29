# Anya Theme — Handoff Guide

## What's Ready

| Item | Status |
|------|--------|
| `themes/anya/theme.json` | Configured — eye tracking off, all states mapped |
| `prompts/anya-prompts.md` | 15 asset prompts ready for ChatGPT Images 2.0 |
| `themes/anya/assets/` | Folder exists, waiting for your images |

---

## Missing Assets (15 total)

### Required — app won't load theme without these

| File | State |
|------|-------|
| `idle.png` | Default idle standing pose |
| `thinking.gif` | Claude is thinking |
| `typing.gif` | Claude is working (1 agent) |

### Recommended — theme works but falls back without these

| File | State |
|------|-------|
| `building.gif` | Working with 3+ sub-agents |
| `juggling.gif` | Working with 2+ sub-agents |
| `conducting.gif` | Juggling with 2+ agents |
| `happy.gif` | Task complete / attention |
| `notification.gif` | Permission request / notification |
| `sleeping.gif` | Idle timeout sleep |
| `waking.gif` | Waking from sleep |

### Optional — extra polish

| File | State |
|------|-------|
| `idle-look.gif` | Idle animation variation |
| `react-drag.gif` | Dragged reaction |
| `react-left.gif` | Clicked left reaction |
| `react-right.gif` | Clicked right reaction |
| `react-double.gif` | Double-clicked reaction |

---

## Next Steps

### 1. Open the prompt kit
```
prompts/anya-prompts.md
```

### 2. Generate Required assets first (start here)

For each Required asset:

1. Open [ChatGPT](https://chatgpt.com) with Images 2.0 enabled
2. Copy the **Base Style** block from `prompts/anya-prompts.md`
3. Append the prompt for the state you're generating
4. Generate → download as PNG
5. For GIF states: generate 4–6 frames with slightly varied poses

### 3. Place the file

```
themes/anya/assets/<filename>
```

Example:
```bash
cp ~/Downloads/anya-idle.png themes/anya/assets/idle.png
```

### 4. Validate

```bash
node scripts/validate-theme.js ./themes/anya
```

Errors should decrease as you add files. Structural checks (schema, fallbacks, capabilities) all pass already.

### 5. Test in the app

```bash
npm start
```

Go to **Settings → Theme → Anya** to select and preview.

---

## GIF Assembly

**Option A — ezgif (no install needed):**
1. Go to https://ezgif.com/maker
2. Upload your PNG frames
3. Set delay to `25` (= 4 fps)
4. Click "Make GIF" → download

**Option B — ffmpeg:**
```bash
# frames named frame1.png, frame2.png, ...
ffmpeg -framerate 4 -i frame%d.png -vf "scale=200:200" output.gif
```

---

## Iterative Workflow

Repeat this loop for each additional asset:

```
Generate → Place → Validate → Test → Commit
```

```bash
# After placing a new asset:
node scripts/validate-theme.js ./themes/anya
npm start  # verify it looks right

# Commit when happy:
git add themes/anya/assets/<filename>
git commit -m "feat: add anya <state> asset"
```

---

## Full Prompt Reference

`prompts/anya-prompts.md` — base style + per-state prompts for all 15 assets

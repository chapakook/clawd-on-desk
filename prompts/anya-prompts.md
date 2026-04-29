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

(Full prompts will be added in Task 5)

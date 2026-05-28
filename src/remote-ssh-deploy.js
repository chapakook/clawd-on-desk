// corp-safe: Remote SSH deployment disabled.

"use strict";

const HOOK_FILES = [];

function resolveHooksDir() { return ""; }
function deploy() { return Promise.resolve({ ok: false, disabled: true, reason: "corp-safe build" }); }
function startCodexMonitor() { return Promise.resolve({ ok: false, disabled: true }); }
function stopCodexMonitor() { return Promise.resolve(); }

module.exports = {
  HOOK_FILES,
  resolveHooksDir,
  deploy,
  startCodexMonitor,
  stopCodexMonitor,
};

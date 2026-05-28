#!/usr/bin/env node
// corp-safe: Antigravity CLI hook installation disabled.
// Does NOT modify ~/.gemini/config/hooks.json.

"use strict";

function registerAntigravityHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function noop() { return ""; }
function hasAntigravityConfig() { return false; }

module.exports = {
  HOOK_GROUP_ID: "",
  MARKER: "",
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  ANTIGRAVITY_HOOK_EVENTS: [],
  registerAntigravityHooks,
  __test: {
    buildAntigravityHookCommand: noop,
    buildAntigravityHooks: () => [],
    buildWindowsAntigravityHookCommand: noop,
    decodeWindowsEncodedCommand: noop,
    extractExistingAntigravityNodeBin: () => null,
    extractNodeBinFromCommand: () => null,
    hasAntigravityConfig,
    normalizeSettings: (s) => s || {},
    resolveAntigravityNodeBin: () => null,
  },
};

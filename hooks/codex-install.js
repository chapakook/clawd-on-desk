#!/usr/bin/env node
// corp-safe: Codex CLI hook installation disabled.
// Does NOT modify ~/.codex/.

"use strict";

function registerCodexHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function unregisterCodexHooks() { return { removed: 0, skipped: true }; }
function buildCodexStateHookCommand() { return ""; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  DEFAULT_FEATURES_CONFIG: {},
  CODEX_OFFICIAL_HOOK_EVENTS: [],
  CODEX_STATE_HOOK_EVENTS: [],
  buildCodexStateHookCommand,
  registerCodexHooks,
  unregisterCodexHooks,
};

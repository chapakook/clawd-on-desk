#!/usr/bin/env node
// corp-safe: Cursor IDE hook installation disabled.
// Does NOT modify ~/.cursor/hooks.json.

"use strict";

function registerCursorHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function buildCursorHookCommand() { return ""; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  registerCursorHooks,
  CURSOR_HOOK_EVENTS: [],
  buildCursorHookCommand,
};

#!/usr/bin/env node
// corp-safe: Gemini CLI hook installation disabled.
// Does NOT modify ~/.gemini/settings.json.

"use strict";

function registerGeminiHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function buildGeminiHookCommand() { return ""; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  registerGeminiHooks,
  GEMINI_HOOK_EVENTS: [],
  __test: { buildGeminiHookCommand },
};

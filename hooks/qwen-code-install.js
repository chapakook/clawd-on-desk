#!/usr/bin/env node
// corp-safe: Qwen Code hook installation disabled.
// Does NOT modify ~/.qwen/settings.json.

"use strict";

function registerQwenCodeHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function buildQwenCodeHookCommand() { return ""; }
function matcherForQwenCodeEvent() { return ""; }
function timeoutForQwenCodeEvent() { return 0; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  MARKER: "",
  QWEN_CODE_HOOK_EVENTS: [],
  buildQwenCodeHookCommand,
  matcherForQwenCodeEvent,
  registerQwenCodeHooks,
  timeoutForQwenCodeEvent,
};

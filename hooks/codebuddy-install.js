#!/usr/bin/env node
// corp-safe: CodeBuddy hook installation disabled.
// Does NOT modify ~/.codebuddy/settings.json.

"use strict";

function registerCodeBuddyHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  registerCodeBuddyHooks,
  CODEBUDDY_HOOK_EVENTS: [],
};

#!/usr/bin/env node
// corp-safe: Copilot CLI hook installation disabled.
// Does NOT modify ~/.copilot/hooks/hooks.json.

"use strict";

function registerCopilotHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function resolveCopilotHome() { return ""; }
function resolveCopilotHooksPath() { return ""; }
function resolveCopilotSettingsPath() { return ""; }
function buildCopilotHookCommands() { return []; }
function buildCopilotHookEntry() { return null; }

module.exports = {
  MARKER: "",
  COPILOT_HOOK_EVENTS: [],
  TIMEOUT_SEC: 0,
  resolveCopilotHome,
  resolveCopilotHooksPath,
  resolveCopilotSettingsPath,
  buildCopilotHookCommands,
  buildCopilotHookEntry,
  registerCopilotHooks,
};

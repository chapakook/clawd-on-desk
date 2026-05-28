#!/usr/bin/env node
// corp-safe: Kimi Code CLI hook installation disabled.
// Does NOT modify ~/.kimi/config.toml.

"use strict";

function registerKimiHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function normalizePermissionMode() { return null; }
function extractExistingPermissionMode() { return null; }
function findKimiHookCommands() { return []; }
function stripClawdKimiHookBlocks(text) { return text || ""; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  registerKimiHooks,
  KIMI_HOOK_EVENTS: [],
  normalizePermissionMode,
  extractExistingPermissionMode,
  findKimiHookCommands,
  stripClawdKimiHookBlocks,
  MODE_EXPLICIT: "explicit",
  MODE_SUSPECT: "suspect",
};

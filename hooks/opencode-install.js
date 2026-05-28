#!/usr/bin/env node
// corp-safe: opencode plugin installation disabled.
// Does NOT modify ~/.config/opencode/opencode.json.

"use strict";

function registerOpencodePlugin() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function resolvePluginDir() { return ""; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_CONFIG_PATH: "",
  registerOpencodePlugin,
  resolvePluginDir,
};

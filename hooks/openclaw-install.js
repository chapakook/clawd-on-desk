#!/usr/bin/env node
// corp-safe: OpenClaw plugin installation disabled.
// Does NOT modify ~/.openclaw/openclaw.json.

"use strict";

function registerOpenClawPlugin() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function unregisterOpenClawPlugin() { return { removed: 0, skipped: true }; }
function ensureOpenClawConfigLinked() { return false; }
function hasIncludeDirective() { return false; }
function hasOpenClawCommand() { return false; }
function resolveOpenClawPaths() { return { configPath: "", stateDir: "", pluginDir: "" }; }
function resolvePluginDir() { return ""; }

module.exports = {
  DEFAULT_CONFIG_PATH: "",
  DEFAULT_STATE_DIR: "",
  PLUGIN_DIR_NAME: "",
  PLUGIN_ID: "",
  ensureOpenClawConfigLinked,
  hasIncludeDirective,
  hasOpenClawCommand,
  registerOpenClawPlugin,
  resolveOpenClawPaths,
  resolvePluginDir,
  unregisterOpenClawPlugin,
};

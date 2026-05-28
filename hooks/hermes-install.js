#!/usr/bin/env node
// corp-safe: Hermes Agent plugin installation disabled.

"use strict";

function registerHermesPlugin() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function unregisterHermesPlugin() { return { removed: 0, skipped: true }; }
function isHermesInstalled() { return false; }
function copyManagedPluginFiles() { return { copied: 0, skipped: true }; }
function formatHermesCommand() { return ""; }
function resolveHermesCommand() { return null; }
function resolveHermesHome() { return ""; }
function resolvePluginSourceDir() { return ""; }
function runHermesCli() { return Promise.resolve({ ok: false, disabled: true }); }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_PLUGIN_DIR: "",
  MANAGED_PLUGIN_FILES: [],
  PLUGIN_ID: "",
  copyManagedPluginFiles,
  formatHermesCommand,
  isHermesInstalled,
  registerHermesPlugin,
  resolveHermesCommand,
  resolveHermesHome,
  resolvePluginSourceDir,
  runHermesCli,
  unregisterHermesPlugin,
};

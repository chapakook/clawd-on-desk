#!/usr/bin/env node
// corp-safe: Pi extension installation disabled.
// Does NOT modify ~/.pi/agent/extensions/.

"use strict";

function registerPiExtension() { return { added: 0, updated: 0, skipped: true, disabled: true }; }
function unregisterPiExtension() { return { removed: 0, skipped: true }; }
function hasPiCommand() { return false; }
function isManagedMarker() { return false; }
function buildMarker() { return ""; }
function resolveExtensionDir() { return ""; }
function resolveSourcePath() { return ""; }
function writeTextAtomic() { return false; }

module.exports = {
  CORE_FILE: "",
  DEFAULT_EXTENSION_DIR: "",
  DEFAULT_EXTENSIONS_DIR: "",
  DEFAULT_PARENT_DIR: "",
  EXTENSION_DIR_NAME: "",
  EXTENSION_FILE: "",
  MARKER_FILE: "",
  buildMarker,
  hasPiCommand,
  isManagedMarker,
  registerPiExtension,
  resolveExtensionDir,
  resolveSourcePath,
  unregisterPiExtension,
  writeTextAtomic,
};

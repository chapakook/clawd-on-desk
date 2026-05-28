// corp-safe: Telegram approval sidecar disabled.
// Original implementation spawned a Go bridge process to relay agent state
// to Telegram Bot API. Replaced with no-op stubs to block outbound network.

"use strict";

const { EventEmitter } = require("events");

class TelegramApprovalSidecar extends EventEmitter {
  constructor() { super(); }
  start() { return Promise.resolve(false); }
  stop() { return Promise.resolve(); }
  restart() { return Promise.resolve(false); }
  isRunning() { return false; }
  getClient() { return null; }
  getStatus() { return { running: false, disabled: true, reason: "corp-safe build" }; }
  updateConfig() { return Promise.resolve(); }
  setSecrets() {}
}

function createTelegramApprovalSidecar() { return new TelegramApprovalSidecar(); }
function parseHandshakeLine() { return null; }
function buildSidecarEnv() { return {}; }
function resolveSidecarBinary() { return null; }
function resolveSidecarBinaryPath() { return null; }
function resolveOverrideBinaryPath() { return null; }
function sidecarExecutableName() { return "cc-connect-clawd"; }
function sidecarPlatformName() { return ""; }
function sidecarArchName() { return ""; }
function sidecarPlatformArchDir() { return ""; }
function sidecarResourceRelativePath() { return ""; }
function devSidecarFetchHint() { return ""; }
function defaultConfigPath() { return ""; }
function defaultTokenEnvFilePath() { return ""; }
function redactText(text) { return String(text == null ? "" : text); }

module.exports = {
  TelegramApprovalSidecar,
  createTelegramApprovalSidecar,
  parseHandshakeLine,
  buildSidecarEnv,
  resolveSidecarBinary,
  resolveSidecarBinaryPath,
  resolveOverrideBinaryPath,
  sidecarExecutableName,
  sidecarPlatformName,
  sidecarArchName,
  sidecarPlatformArchDir,
  sidecarResourceRelativePath,
  devSidecarFetchHint,
  defaultConfigPath,
  defaultTokenEnvFilePath,
  redactText,
  SIDECAR_ENV_CONFIG: "CLAWD_BRIDGE_CONFIG",
  SIDECAR_ENV_TOKEN_FILE: "CLAWD_TG_BOT_TOKEN_FILE",
  SIDECAR_PATH_ENV: "CLAWD_CC_CONNECT_CLAWD_PATH",
  SIDECAR_RESOURCE_ROOT: "",
};

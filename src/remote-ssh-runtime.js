// corp-safe: Remote SSH runtime disabled.
// Original implementation spawned ssh/scp to deploy hooks and forward state
// to remote servers. Replaced with no-op stubs.

"use strict";

const { EventEmitter } = require("events");

function detectSsh() { return Promise.resolve({ available: false, version: null }); }
function parseOpenSshVersion() { return null; }
function isUnsupportedWindowsOpenSsh() { return false; }
function buildSshArgs() { return []; }
function buildScpArgs() { return []; }
function classifyStderr() { return "disabled"; }
function classifyProbeExit() { return "disabled"; }
function buildProbeCommand() { return ""; }
function backoffMsForAttempt() { return 0; }
function looksLikeWindowsCmdStderr() { return false; }

function createRemoteSshRuntime() {
  const runtime = new EventEmitter();
  runtime.start = () => Promise.resolve(false);
  runtime.stop = () => Promise.resolve();
  runtime.probe = () => Promise.resolve({ ok: false, disabled: true });
  runtime.deploy = () => Promise.resolve({ ok: false, disabled: true });
  runtime.status = () => ({ running: false, disabled: true, reason: "corp-safe build" });
  runtime.listProfiles = () => [];
  runtime.getProfile = () => null;
  runtime.setProfile = () => Promise.resolve(false);
  runtime.removeProfile = () => Promise.resolve(false);
  return runtime;
}

module.exports = {
  detectSsh,
  parseOpenSshVersion,
  isUnsupportedWindowsOpenSsh,
  buildSshArgs,
  buildScpArgs,
  classifyStderr,
  classifyProbeExit,
  buildProbeCommand,
  backoffMsForAttempt,
  looksLikeWindowsCmdStderr,
  WINDOWS_CMD_STDERR_RX: /(?!)/,
  createRemoteSshRuntime,
  CLAWD_SERVER_HEADER: "",
  CLAWD_SERVER_ID: "",
  PROBE_WINDOW_MS: 0,
  PROBE_MIN_GAP_MS: 0,
  PROBE_CHILD_TIMEOUT_MS: 0,
  BACKOFF_SCHEDULE_MS: [],
  UNKNOWN_STRIKES_LIMIT: 0,
};

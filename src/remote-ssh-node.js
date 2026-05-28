// corp-safe: Remote SSH node probing disabled.

"use strict";

const NODE_PROBE_TIMEOUT_MS = 0;
const NODE_PROBE_SENTINEL = "";
const MIN_REMOTE_NODE_MAJOR = 0;

function buildRemoteNodeProbeCommand() { return ""; }
function parseRemoteNodeProbeOutput() { return null; }
function isValidRemoteNodeBin() { return false; }
function isSupportedRemoteNodeVersion() { return false; }
function clearRemoteNodeCache() {}
function clearCachedRemoteNodeBin() {}
function getProfileRemoteNodeBin() { return null; }
function getCachedRemoteNodeBin() { return null; }
function setCachedRemoteNodeBin() {}
function resolveRemoteNodeBin() { return Promise.resolve(null); }
function buildRemoteHookNodeCommand() { return ""; }
function buildRemoteNodeEvalCommand() { return ""; }

module.exports = {
  NODE_PROBE_TIMEOUT_MS,
  NODE_PROBE_SENTINEL,
  MIN_REMOTE_NODE_MAJOR,
  buildRemoteNodeProbeCommand,
  parseRemoteNodeProbeOutput,
  isValidRemoteNodeBin,
  isSupportedRemoteNodeVersion,
  clearRemoteNodeCache,
  clearCachedRemoteNodeBin,
  getProfileRemoteNodeBin,
  getCachedRemoteNodeBin,
  setCachedRemoteNodeBin,
  resolveRemoteNodeBin,
  buildRemoteHookNodeCommand,
  buildRemoteNodeEvalCommand,
};

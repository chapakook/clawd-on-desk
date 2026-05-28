// corp-safe: Telegram approval HTTP client disabled.

"use strict";

class TelegramApprovalClient {
  constructor() {}
  requestApproval() { return Promise.resolve({ disabled: true }); }
  cancel() {}
}

function normalizeApprovalPayload() { return null; }
function parseDecision() { return null; }
function normalizeEndpoint() { return ""; }

module.exports = {
  TelegramApprovalClient,
  normalizeApprovalPayload,
  parseDecision,
  normalizeEndpoint,
  APPROVAL_PATH: "/approval",
};

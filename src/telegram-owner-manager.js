// corp-safe: Telegram owner manager disabled.

"use strict";

class InvariantError extends Error {}

class TelegramOwnerManager {
  constructor() {}
  acquire() { return Promise.resolve(null); }
  release() { return Promise.resolve(); }
  isOwner() { return false; }
}

module.exports = {
  TelegramOwnerManager,
  InvariantError,
  DEFAULT_SETTLE_MS: 0,
  DEFAULT_STOP_GRACE_MS: 0,
};

// corp-safe: Telegram Bot API native client disabled.

"use strict";

class TelegramApiError extends Error {
  constructor(message) { super(message || "telegram disabled (corp-safe)"); }
}

class TelegramNativeClient {
  constructor() {}
  start() { return Promise.resolve(false); }
  stop() { return Promise.resolve(); }
  sendMessage() { return Promise.resolve(null); }
  isRunning() { return false; }
}

const ERROR_CLASSES = Object.freeze({});
function classifyError() { return "disabled"; }
function pollWithConflictRetry() { return Promise.resolve(null); }
const DEFAULT_RETRY_OPTS = Object.freeze({});

module.exports = {
  TelegramNativeClient,
  TelegramApiError,
  ERROR_CLASSES,
  classifyError,
  pollWithConflictRetry,
  DEFAULT_RETRY_OPTS,
};

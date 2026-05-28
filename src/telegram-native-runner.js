// corp-safe: Telegram native runner disabled.

"use strict";

function createTelegramNativeRunner() {
  return {
    start() { return Promise.resolve(false); },
    stop() { return Promise.resolve(); },
    isRunning() { return false; },
    requestApproval() { return Promise.resolve({ disabled: true }); },
    getStatus() { return { running: false, disabled: true }; },
  };
}

function buildApprovalText() { return ""; }

module.exports = {
  createTelegramNativeRunner,
  buildApprovalText,
};

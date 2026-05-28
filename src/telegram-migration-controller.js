// corp-safe: Telegram migration controller disabled.

"use strict";

function createTelegramMigrationController() {
  return {
    init() { return Promise.resolve(); },
    dispose() {},
    getState() { return "disabled"; },
    handleEvent() { return Promise.resolve(null); },
    onTransition() { return () => {}; },
  };
}

module.exports = { createTelegramMigrationController };

// corp-safe: Telegram token store disabled.

"use strict";

function envFileTokenStore() {
  return {
    read() { return Promise.resolve(null); },
    write() { return Promise.resolve(false); },
    delete() { return Promise.resolve(false); },
    exists() { return Promise.resolve(false); },
    getPath() { return ""; },
  };
}

function parseTokenFromEnvFileText() { return null; }
function buildEnvFileText() { return ""; }
function isValidToken() { return false; }

module.exports = {
  envFileTokenStore,
  parseTokenFromEnvFileText,
  buildEnvFileText,
  isValidToken,
};

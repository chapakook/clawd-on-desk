// corp-safe: Remote SSH IPC handlers disabled.
// No IPC handlers registered, so renderer cannot trigger remote SSH actions.

"use strict";

function registerRemoteSshIpc() {
  return { dispose() {} };
}

module.exports = {
  registerRemoteSshIpc,
};

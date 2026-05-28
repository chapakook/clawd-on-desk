// corp-safe: Auto-updater disabled.
// Original implementation used electron-updater + git pull + npm install to
// auto-update the app. Replaced with no-op stubs so the app never fetches
// or installs new code at runtime. To update, run `git pull upstream main`
// manually after reviewing the diff, then rebuild.

"use strict";

function compareVersions(v1, v2) {
  const a = String(v1 || "").split(".").map(Number);
  const b = String(v2 || "").split(".").map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i] || 0;
    const y = b[i] || 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

function findWindowsArm64InstallerAsset() { return null; }
function formatVersionForMessage(version) { return version ? `v${version}` : ""; }
function isUpdate404Error() { return false; }
function shouldPromptNativeArm64() { return false; }

function makeTranslate(ctx) {
  return function t(_key, fallback) { return fallback || ""; };
}

function initUpdater(ctx) {
  const t = makeTranslate(ctx);

  function noopAsync() { return Promise.resolve(); }
  function noopSync() {}

  function setupAutoUpdater() { /* corp-safe: no autoUpdater wired */ }
  function checkForUpdates() { return Promise.resolve({ disabled: true }); }
  function quietDiscover() { return Promise.resolve(null); }
  function handlePendingVersion() { return Promise.resolve(); }
  function reconcilePendingOnStartup() { return Promise.resolve(); }
  function onSilentModeExit() { return Promise.resolve(); }
  function getPendingUpdateVersion() { return ""; }
  function startUpdateScheduler() { /* corp-safe: scheduler disabled */ }
  function stopUpdateScheduler() {}
  function isSchedulerRunning() { return false; }

  function getUpdateMenuLabel() {
    return t("checkForUpdates", "Check for Updates (disabled)");
  }

  function getUpdateMenuItem() {
    return {
      label: getUpdateMenuLabel(),
      enabled: false,
      click: () => {},
    };
  }

  return {
    setupAutoUpdater,
    checkForUpdates,
    getUpdateMenuItem,
    getUpdateMenuLabel,
    quietDiscover,
    handlePendingVersion,
    reconcilePendingOnStartup,
    onSilentModeExit,
    getPendingUpdateVersion,
    startUpdateScheduler,
    stopUpdateScheduler,
    isSchedulerRunning,
  };
}

module.exports = initUpdater;
module.exports.__test = {
  compareVersions,
  findWindowsArm64InstallerAsset,
  formatVersionForMessage,
  isUpdate404Error,
  shouldPromptNativeArm64,
};

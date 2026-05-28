#!/usr/bin/env node
// corp-safe: Kiro CLI hook installation disabled.
// Does NOT modify ~/.kiro/agents/.

"use strict";

function registerKiroHooks() { return { added: 0, updated: 0, skipped: true, disabled: true }; }

module.exports = {
  DEFAULT_PARENT_DIR: "",
  DEFAULT_AGENTS_DIR: "",
  registerKiroHooks,
  KIRO_HOOK_EVENTS: [],
  __test: {
    formatHookCommand: () => "",
    generateClawdTemplateFromBuiltin: () => "",
    getKiroCliCandidates: () => [],
    injectHooksIntoFile: () => false,
    syncClawdAgentFromBuiltin: () => false,
  },
};

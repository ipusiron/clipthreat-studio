import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { m } from '../js/clipthreat-messages.js';
import { createDemoTimers, writeClipboardText } from '../js/clipboard-access.js';

test('ClickFix writes a fixed harmless explanation, renders redaction with textContent', () => {
  assert.equal(m('clickfix.safe'), 'これは ClipThreat Studio のデモです。攻撃コマンドはクリップボードに書き込まれていません。');
  const source = readFileSync(new URL('../js/clickfix.js', import.meta.url), 'utf8');
  assert.match(source, /const payload = m\('clickfix.safe'\)/);
  assert.match(source, /function simulateClipboardCopy\(\) \{\s+const payload = m\('clickfix.safe'\)/);
  assert.match(source, /preview.textContent = m\(result.key, result.values\)/);
  assert.doesNotMatch(source, /backdoor\.ps1|windowstyle|\biwr\b|\biex\b/i);
  assert.equal((source.match(/timers.cancel\(\)/g) || []).length, 2);
});

test('cancelled demo timers never run after reset', async () => {
  const timers = createDemoTimers();
  let calls = 0;
  timers.later(() => calls++, 5);
  timers.cancel();
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(calls, 0);
});

test('queued clearing follows a pending copy, and denied clipboard rejects safely', async () => {
  const calls = [];
  const original = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: {
    async writeText(text) { await new Promise(resolve => setTimeout(resolve, 5)); calls.push(text); }
  } } });
  try {
    await Promise.all([writeClipboardText('demo'), writeClipboardText('')]);
    assert.deepEqual(calls, ['demo', '']);
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {} });
    await assert.rejects(writeClipboardText(''), /unavailable/);
  } finally {
    if (original) Object.defineProperty(globalThis, 'navigator', original);
    else delete globalThis.navigator;
  }
});

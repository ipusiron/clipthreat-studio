import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { messages } from '../js/clipthreat-messages.js';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('CSP, referrer, modules and noscript; no inline execution or styles', () => {
  const csp = html.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/)[1];
  for (const directive of ["default-src 'self'", "script-src 'self'", "style-src 'self'",
    "connect-src 'none'", "base-uri 'none'", "object-src 'none'", "form-action 'none'"]) assert.ok(csp.includes(directive));
  assert.doesNotMatch(csp, /unsafe-inline|unsafe-eval|frame-ancestors|X-Frame-Options/);
  assert.match(html, /<meta name="referrer" content="no-referrer"/);
  assert.match(html, /<noscript>/);
  for (const script of html.matchAll(/<script\b[^>]*>/g)) assert.match(script[0], /type="module"/);
  for (const source of [html, ...Object.values(messages).flat(),
    ...readdirSync(new URL('../js/', import.meta.url)).map(name =>
      readFileSync(new URL('../js/' + name, import.meta.url), 'utf8'))]) {
    assert.doesNotMatch(source, /\son\w+\s*=|\sstyle\s*=|\.style\./i);
  }
});

test('seven accessible tabs, eleven keyboard accordions and a labelled dialog', () => {
  assert.equal((html.match(/role="tab"/g) || []).length, 7);
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 7);
  assert.equal((html.match(/aria-expanded="false"/g) || []).length, 11);
  assert.match(html, /role="dialog" aria-modal="true" aria-labelledby="helpTitle"/);
  assert.match(html, /class="modal-close" aria-label="閉じる"/);
  for (const id of ['clipboardInput', 'clipboardOutput', 'watchLog', 'sniffInput', 'sniffLog',
    'clickfixLog', 'autoInput', 'autoLog', 'weirdOutput', 'tipsOutput']) assert.ok(html.includes(`id="${id}"`));
  for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert.match(link[0], /rel="noopener noreferrer"/);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
});

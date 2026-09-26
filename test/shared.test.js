import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { escapeHtml, isWebUrl, detectContentType, detectDataType,
  analyzeCharacters, buildInspectorUrl, clickFixPreview } from '../js/shared.js';
import { m, messages } from '../js/clipthreat-messages.js';

test('escaping matches textContent serialization including quotes and Unicode', () => {
  assert.equal(escapeHtml('&<>"\' 😀　'), '&amp;&lt;&gt;"\' 😀　');
  assert.equal(escapeHtml(''), '');
  assert.equal(escapeHtml('a'.repeat(100000)), 'a'.repeat(100000));
});

for (const text of ['', '日本語', '😀', '　', 'a@b.c', 'a@b.a|b', 'a@b.ab|cd']) {
  test(`non-email boundary: ${JSON.stringify(text)}`, () => {
    assert.equal(detectContentType(text).key, 'type.text');
    assert.equal(detectDataType(text).key, 'type.text');
    assert.equal(detectDataType(text, true).key, 'type.text');
  });
}

test('classification keeps established categories and length boundaries', () => {
  assert.equal(detectContentType('https://example.com').key, 'type.url');
  assert.equal(detectContentType('a@b.co').key, 'type.emailWatch');
  assert.equal(detectDataType('a@b.co').key, 'type.email');
  assert.equal(detectDataType('a@b.co', true).key, 'type.email');
  assert.equal(detectContentType('1234 5678 1234 5678').key, 'type.cardWatch');
  assert.equal(detectDataType('1234-5678-1234-5678').key, 'type.card');
  assert.equal(detectContentType('a'.repeat(20)).key, 'type.text');
  assert.equal(detectContentType('a'.repeat(21)).key, 'type.base64');
  assert.equal(detectDataType('a'.repeat(31), true).key, 'type.text');
  assert.equal(detectDataType('a'.repeat(32), true).key, 'type.token');
  assert.equal(detectDataType('a'.repeat(100000), true).key, 'type.token');
  assert.equal(detectDataType('password').key, 'type.password');
  assert.equal(detectDataType('export TEST=example', true).key, 'type.env');
});

test('URL TLD is at least two letters, not a pipe or executable scheme', () => {
  for (const url of ['https://example.co', 'http://example.com/path?q=1']) assert.equal(isWebUrl(url), true);
  for (const url of ['https://example.c', 'https://example.a|b', 'javascript:alert(1)', '']) {
    assert.equal(isWebUrl(url), false);
  }
});

test('Unicode code points include surrogate pairs and actual bidi controls', () => {
  assert.deepEqual(analyzeCharacters('😀\u202E　').map(x => [x.hex, x.key]),
    [['1F600', 'char.visible'], ['202E', 'char.control'], ['3000', 'char.visible']]);
  assert.deepEqual(analyzeCharacters(''), []);
});

test('Inspector uses a fragment, safely round-trips text and metadata', () => {
  const text = "'&?#😀\u200B";
  const url = new URL(buildInspectorUrl(text, 'test'));
  assert.equal(url.search, '');
  assert.ok(url.hash.startsWith('#text='));
  const params = new URLSearchParams(url.hash.slice(1));
  assert.equal(params.get('text'), text);
  assert.equal(params.get('source'), 'clipthreat-studio');
  assert.equal(params.get('attack_type'), 'test');
});

test('ClickFix preview contains only a label and redaction', () => {
  const result = clickFixPreview();
  assert.equal(m(result.key, result.values), '本物の攻撃はここに実行コマンドを仕込みます：PowerShell …（危険部分は伏せ字）');
  assert.doesNotMatch(m(result.key, result.values), /https?:|iex|iwr|Invoke-| -c/i);
});

test('pure module is DOM-free and has no Japanese literal or pipe character class bug', () => {
  const source = readFileSync(new URL('../js/shared.js', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /document\.|navigator\.|window\.|[\u3040-\u30ff\u3400-\u9fff]/);
  assert.doesNotMatch(source, /\[A-Z\|a-z\]/);
});

test('every UI dictionary reference exists; UI modules contain no Japanese outside comments', () => {
  for (const name of readdirSync(new URL('../js/', import.meta.url))) {
    if (['clipthreat-messages.js', 'clipthreat-ui-messages.js'].includes(name)) continue;
    const source = readFileSync(new URL('../js/' + name, import.meta.url), 'utf8');
    for (const match of source.matchAll(/\bm\('([^']+)'/g)) assert.ok(Object.hasOwn(messages, match[1]), `${name}:${match[1]}`);
    const code = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
    assert.doesNotMatch(code, /[\u3040-\u30ff\u3400-\u9fff]/, name);
  }
});

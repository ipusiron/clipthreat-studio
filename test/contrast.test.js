import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');
const colors = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[a-f\d]{6})/gi)].map(m => [m[1], m[2]]));
function luminance(hex) {
  return hex.slice(1).match(/../g).map(s => parseInt(s, 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}
for (const [fg, bg] of [['text', 'paper'], ['muted', 'paper'], ['paper', 'primary'],
  ['paper', 'success'], ['paper', 'danger'], ['paper', 'warning'], ['muted', '#e9ecef'],
  ['primary', '#e3f2fd'], ['success', '#e8f5e9'], ['warning', '#fff3e0']]) {
  test(`contrast ${fg} on ${bg} is at least 4.5:1`, () => {
    const a = luminance(colors[fg] || fg), b = luminance(colors[bg] || bg);
    assert.ok((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= 4.5);
  });
}

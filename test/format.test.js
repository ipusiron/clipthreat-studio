import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
const root = new URL('../', import.meta.url);
test('sources and tests remain readable, not minified', () => {
  const paths = ['index.html', 'style.css', ...['js', 'test'].flatMap(dir =>
    readdirSync(new URL(dir + '/', root)).filter(n => n.endsWith('.js')).map(n => `${dir}/${n}`))];
  for (const path of paths) {
    const source = readFileSync(new URL(path, root), 'utf8');
    const lines = source.split(/\r?\n/);
    assert.ok(lines.length >= (path === 'index.html' ? 900 : path === 'style.css' ? 1000 : 5), path);
    lines.forEach((line, index) => assert.ok(line.length <= (path.endsWith('.html') ? 250 : 160), `${path}:${index + 1}`));
  }
});

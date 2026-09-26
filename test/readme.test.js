import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const readme = read('README.md');
const html = read('index.html');

test('README counts are recomputed from the UI, checklist source and tests', () => {
  const rows = Object.fromEntries([...readme.matchAll(/^\| ([^|]+) \| (\d+) \|$/gm)].map(m => [m[1], Number(m[2])]));
  assert.equal(rows['学習タブ'], (html.match(/role="tab"/g) || []).length);
  assert.equal(rows['文字細工のコピー例'], (html.match(/data-action="copy(?:ZeroWidthSpaces|RTLTrick|MixedScript|HomographAttack)"/g) || []).length);
  assert.equal(rows['Tipsチェックリスト'], (html.match(/data-action="show\w+Checklist"/g) || []).length);
  const checklists = [...read('js/tips.js').matchAll(/const (?:user|dev|admin)Items = \[([\s\S]*?)\n    \];/g)];
  assert.equal(checklists.length, 3);
  for (const block of checklists) {
    assert.equal(rows['各チェックリストの項目'], (block[1].match(/category:/g) || []).length);
  }
  assert.equal(rows['テストファイル'], readdirSync(new URL('test/', root)).filter(n => n.endsWith('.test.js')).length);
});

test('all README images exist, are 1280x800 and at most 300KB; no unreferenced PNG', () => {
  const images = [...readme.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)].map(m => m[1]);
  assert.equal(images.length, 3);
  const files = readdirSync(new URL('assets/', root)).filter(n => n.endsWith('.png')).map(n => 'assets/' + n);
  assert.deepEqual(images.sort(), files.sort());
  for (const path of images) {
    assert.ok(existsSync(new URL(path, root)));
    const png = readFileSync(new URL(path, root));
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    assert.equal(png.readUInt32BE(16), 1280);
    assert.equal(png.readUInt32BE(20), 800);
    assert.ok(png.length <= 300 * 1024);
    assert.ok(readme.includes(png.length.toLocaleString('en-US') + 'バイト'));
  }
});

test('directory tree includes every tracked/new project file and descriptions', () => {
  const tree = readme.match(/```text\n(clipthreat-studio\/[\s\S]*?)```/)[1];
  const stack = [];
  const listed = [];
  for (const line of tree.trimEnd().split('\n').slice(1)) {
    const match = line.match(/^([│ ]*)(?:├──|└──) ([^#]+)\s+#\s+(.+)$/);
    assert.ok(match, line);
    const depth = match[1].length / 4;
    const name = match[2].trim();
    stack.length = depth;
    if (name.endsWith('/')) stack[depth] = name.slice(0, -1);
    else listed.push([...stack, name].join('/'));
  }
  const actual = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'],
    { cwd: root, encoding: 'utf8' }).trim().split(/\r?\n/);
  assert.deepEqual(listed.sort(), [...new Set(actual)].sort());
});

test('metadata identity, structure and safe documentation remain consistent', () => {
  const original = execFileSync('git', ['show', 'HEAD:README.md'], { cwd: root, encoding: 'utf8' });
  const metadata = s => s.match(/<!--\s*---([\s\S]*?)---\s*-->/)[1];
  const keys = s => [...metadata(s).matchAll(/^([a-z_]+):/gm)].map(m => m[1]);
  assert.deepEqual(keys(readme), keys(original));
  for (const key of ['id', 'slug', 'repo_url', 'demo_url', 'hub']) {
    const value = s => metadata(s).match(new RegExp(`^${key}:.*$`, 'm'))[0];
    assert.equal(value(readme), value(original));
  }
  assert.match(readme, /# ClipThreat Studio - クリップボード悪用攻撃の体験ツール/);
  assert.equal((readme.match(/https:\/\/img.shields.io\//g) || []).length, 5);
  const headings = [...readme.matchAll(/^## (.+)$/gm)].map(m => m[1]);
  assert.deepEqual(headings.slice(-4), ['📁 ディレクトリー構造', '💻 動作環境', '📄 ライセンス', '🛠️ このツールについて']);
  assert.doesNotMatch(readme, /Invoke-Expression|Invoke-WebRequest|windowstyle|attacker-c2|\?text=|別途実装予定/i);
  assert.ok(readme.includes('page_id=42163'));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const readme = read('README.md');
const html = read('index.html');
const english = read('README.en.md');
const countLabels = {
  'Learning tabs': '学習タブ', 'Unicode copy samples': '文字細工のコピー例',
  'Tips checklists': 'Tipsチェックリスト', 'Items in each checklist': '各チェックリストの項目', 'Test files': 'テストファイル'
};

for (const [name, content] of [['README.md', readme], ['README.en.md', english]]) {
test(`${name} counts are recomputed from the UI, checklist source and tests`, () => {
  const rows = Object.fromEntries([...content.matchAll(/^\| ([^|]+) \| (\d+) \|$/gm)]
    .map(m => [countLabels[m[1]] || m[1], Number(m[2])]));
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

test(`${name} images exist, are 1280x800 and at most 300KB; no unreferenced PNG`, () => {
  const images = [...content.matchAll(/!\[[^\]]*\]\((assets\/[^)]+)\)/g)].map(m => m[1]);
  assert.equal(images.length, 4);
  const dir = name === 'README.md' ? 'assets/' : 'assets/en/';
  const files = readdirSync(new URL(dir, root)).filter(n => n.endsWith('.png')).map(n => dir + n);
  assert.deepEqual(images.sort(), files.sort());
  for (const path of images) {
    assert.ok(existsSync(new URL(path, root)));
    const png = readFileSync(new URL(path, root));
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    assert.equal(png.readUInt32BE(16), 1280);
    assert.equal(png.readUInt32BE(20), 800);
    assert.ok(png.length <= 300 * 1024);
    assert.ok(content.includes(png.length.toLocaleString('en-US') + (name === 'README.md' ? 'バイト' : ' bytes')));
  }
});

test(`${name} directory tree includes every tracked/new project file and descriptions`, () => {
  const tree = content.match(/```text\n(clipthreat-studio\/[\s\S]*?)```/)[1];
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
}

test('README detection tables match all ten fixed expected rows in both languages', () => {
  const expected = [[0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false], [0, 0, false],
    [0, 0, true], [0, 0, true], [0, 1, false], [1, 0, false], [0, 0, false]];
  for (const content of [readme, english]) {
    const actual = [...content.matchAll(/^\| [^|]+ \| (\d+) \| (\d+) \| (true|false) \|$/gm)]
      .map(row => [Number(row[1]), Number(row[2]), row[3] === 'true']);
    assert.deepEqual(actual, expected);
    for (const number of ['100,000', 'U+00AD', 'U+180E', 'U+200B', 'U+200D', 'U+2060', 'U+FEFF',
      'U+E0000', 'U+E007F', 'U+200E', 'U+200F', 'U+202A', 'U+202E', 'U+2066', 'U+2069']) assert.ok(content.includes(number));
  }
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

const headingPairs = [
  ['ClipThreat Studio - クリップボード悪用攻撃の体験ツール', 'ClipThreat Studio - Explore clipboard abuse safely'],
  ['🌐 デモページ', '🌐 Demo'], ['📸 スクリーンショット', '📸 Screenshots'], ['🎯 特徴', '🎯 Features'],
  ['📋 基本操作タブ', '📋 Basics tab'], ['🔍 監視タブ', '🔍 Monitoring tab'], ['🎭 盗聴タブ', '🎭 Paste sniffing tab'],
  ['🚨 ClickFix攻撃タブ', '🚨 ClickFix tab'], ['🧲 自動送信タブ', '🧲 Automatic submission tab'],
  ['🧪 文字細工タブ', '🧪 Unicode tricks tab'], ['🔒 セキュリティTipsタブ', '🔒 Security tips tab'],
  ['🛡️ 貼り付け前チェックタブ', '🛡️ Pre-paste check tab'], ['🎛️ 共通機能', '🎛️ Shared features'],
  ['🛠️ 使い方', '🛠️ Usage'], ['基本的な使用手順', 'Basic workflow'], ['推奨学習順序', 'Suggested learning order'],
  ['🌐 言語の切り替え', '🌐 Language selection'], ['🔍 WeirdString Inspector連携', '🔍 WeirdString Inspector integration'],
  ['アクセス先URL形式', 'Destination URL format'], ['パラメーター詳細', 'Parameters'],
  ['連携する攻撃タイプ', 'Supported demonstration types'], ['受け渡し時のプライバシー', 'Privacy when passing text'],
  ['🧠 教育・啓発目的での活用例', '🧠 Educational uses'], ['🛡️ セキュリティ解説', '🛡️ Security background'],
  ['クリップボード攻撃の脅威レベル', 'Clipboard threat level'],
  ['📋 基本的なクリップボード攻撃シナリオ', '📋 Basic clipboard attack scenarios'],
  ['シナリオ1: パスワード盗取攻撃', 'Scenario 1: Password theft'],
  ['シナリオ2: 暗号通貨アドレス置換攻撃', 'Scenario 2: Cryptocurrency address replacement'],
  ['🎭 ペーストイベント監視攻撃', '🎭 Paste-event monitoring attacks'], ['攻撃の仕組み', 'How the attack works'],
  ['🚨 ClickFix攻撃の詳細メカニズム', '🚨 How ClickFix works'], ['攻撃フロー', 'Attack flow'],
  ['利用者と管理者の防御', 'Defenses for users and administrators'],
  ['🧪 Unicode文字細工攻撃の技術詳細', '🧪 Technical details of Unicode tricks'],
  ['1. ゼロ幅スペース攻撃', '1. Zero-width-space tricks'], ['2. RTL文字による拡張子偽装', '2. RTL extension spoofing'],
  ['3. 同形異義文字攻撃（IDN偽装）', '3. Homographs and IDN spoofing'],
  ['🧲 自動送信攻撃への対策', '🧲 Defending against automatic submission'], ['攻撃シナリオ', 'Attack scenario'],
  ['🛡️ 攻撃対策とベストプラクティス', '🛡️ Defenses and best practices'],
  ['1. 技術的対策', '1. Technical controls'], ['2. ユーザー教育', '2. User education'], ['3. 組織的対策', '3. Organizational measures'],
  ['🧪 テスト', '🧪 Tests'], ['🔒 教材の安全設計と制限', '🔒 Safety design and limitations'],
  ['📁 ディレクトリー構造', '📁 Directory structure'], ['💻 動作環境', '💻 Requirements'],
  ['📄 ライセンス', '📄 License'], ['🛠️ このツールについて', '🛠️ About this tool']
];

test('README headings match in number, meaning, order and depth; language links and metadata are correct', () => {
  const headings = text => [...text.matchAll(/^(#{1,4}) (.+)$/gm)].map(match => [match[1].length, match[2].trim()]);
  const ja = headings(readme), en = headings(english);
  assert.equal(ja.length, headingPairs.length);
  assert.equal(en.length, headingPairs.length);
  headingPairs.forEach(([j, e], index) => {
    assert.deepEqual(ja[index], [en[index][0], j]);
    assert.equal(en[index][1], e);
  });
  assert.ok(readme.startsWith('[English](README.en.md) · 日本語'));
  assert.ok(english.startsWith('English · [日本語](README.md)'));
  assert.match(english, /\*\*Day033 - 100 Security Tools with Generative AI\*\*/);
  assert.doesNotMatch(english, /<!--\s*---/);
});

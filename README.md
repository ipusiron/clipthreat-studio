# ClipThreat Studio - クリップボード悪用攻撃の体験ツール

![GitHub Repo stars](https://img.shields.io/github/stars/ipusiron/clipthreat-studio?style=social)
![GitHub forks](https://img.shields.io/github/forks/ipusiron/clipthreat-studio?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/ipusiron/clipthreat-studio)
![GitHub license](https://img.shields.io/github/license/ipusiron/clipthreat-studio)

**Day033 - 生成AIで作るセキュリティツール100**

**ClipThreat Studio** は、JavaScriptによるクリップボードAPIの悪用手法を再現し、クリック1つで体験できる「クリップボード悪用攻撃の可視化＆体験ツール」です。

クリップボードに対する「読み取り」「書き込み」「paste監視」「ClickFix誘導」など、心理操作と技術的悪用を組み合わせた脅威を、複数タブ構成で体験できます。

---

## 🌐 デモページ

👉 [https://ipusiron.github.io/clipthreat-studio/](https://ipusiron.github.io/clipthreat-studio/)

---

## 📸 スクリーンショット

> ![ダミー](assets/screenshot.png)
>
> *ダミー*

---

## 🎯 特徴

- 📋 `clipboard.readText()` / `.writeText()` を体験できる操作パネル
- 🔍 クリップボード内容の自動監視・ログ表示
- 🎭 pasteイベントを使ったスニッフィング攻撃の再現
- 🚨 ClickFix攻撃（修復誘導型コピー攻撃）の完全再現
- 🧲 自動ペースト→自動送信型のフォーム偽装攻撃
- 🧪 Unicode文字細工攻撃（ゼロ幅スペース、RTL文字、同形異義文字など）
- 🔍 WeirdString Inspector連携による詳細Unicode分析
- 🔒 セキュリティTipsタブによる包括的な対策ガイド

---

## 🛠️ 使い方

1. このリポジトリを `git clone` するか、上記の[GitHub Pages上のデモサイト](https://ipusiron.github.io/clipthreat-studio/)にアクセス
2. タブを切り替えて各攻撃手法を体験
3. 各操作に対して、コピーされた内容や挙動をログ表示
4. Tipsタブで技術的背景と防御法を確認

---

## 🔍 WeirdString Inspector連携

文字細工タブ（Unicode文字細工攻撃）では、各攻撃デモの実行後に **「🔍 WeirdString Inspectorで調査」** ボタンが表示されます。

### アクセス先URL形式

ボタンをクリックすると、以下の形式でWeirdString Inspectorにアクセスします：

```
https://ipusiron.github.io/weirdstring-inspector/?text={攻撃文字列}&source=clipthreat-studio&attack_type={攻撃タイプ}
```

### パラメーター詳細

| パラメーター | 説明 | 例 |
|-----------|------|-----|
| `text` | 攻撃に使用されたUnicode文字列（URLエンコード済み） | `f%E2%80%8Bl%E2%80%8Ba%E2%80%8Bg.txt` |
| `source` | ClipThreat Studioからのアクセスを示す識別子 | `clipthreat-studio` |
| `attack_type` | 実行された攻撃タイプ | `ゼロ幅スペース攻撃` |

### 連携する攻撃タイプ

- **ゼロ幅スペース攻撃**: 見た目に分からない不可視文字の混入
- **RTL文字拡張子偽装**: 右から左文字による拡張子偽装
- **スクリプト混在攻撃**: 複数文字体系の混在によるフィッシング
- **同形異義文字攻撃**: 見た目が同じ異なる文字によるドメイン偽装

### 実装例

```javascript
// 例：ゼロ幅スペース攻撃の場合
const text = "f\u200Bl\u200Ba\u200Bg.txt";  // 実際の攻撃文字列
const attackType = "ゼロ幅スペース攻撃";
const url = `https://ipusiron.github.io/weirdstring-inspector/?text=${encodeURIComponent(text)}&source=clipthreat-studio&attack_type=${encodeURIComponent(attackType)}`;
window.open(url, '_blank');
```

> **注意**: WeirdString Inspector側でのGETパラメータ受信機能は別途実装予定です。

---

## 🧠 教育・啓発目的での活用例

- セキュリティ研修・授業の教材として
- 展示会・セミナーでの啓発デモツール
- CTFチームやRed Teamの新人教育用
- 「なぜオートフィルを使うべきか」の実感体験

---

## 🧩 フォルダー構成

```
clipthreat-studio/
├── index.html # タブUIと本体構成
├── script.js # 各タブの挙動制御
├── style.css # カードUI・警告色・タブ切替など
├── assets/ # 攻撃デモ用画像・アイコン等
└── README.md
```

---

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) をご覧ください。

---

## 🛠 このツールについて

本ツールは、「生成AIで作るセキュリティツール100」プロジェクトの一環として開発されました。 このプロジェクトでは、AIの支援を活用しながら、セキュリティに関連するさまざまなツールを100日間にわたり制作・公開していく取り組みを行っています。

プロジェクトの詳細や他のツールについては、以下のページをご覧ください。

🔗 [https://akademeia.info/?page_id=42163](https://akademeia.info/?page_id=42163)

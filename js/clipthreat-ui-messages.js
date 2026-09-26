// Static UI text and attribute dictionary. Keep both languages paired.
export const uiMessages = {
  'ui.0': {
    ja: "この教材にはJavaScriptが必要です。スクリプトを許可してから再読み込みしてください。",
    en: "This lesson requires JavaScript. Enable scripts and reload the page."
  },
  'ui.1': {
    ja: "ヘルプ・使い方を表示",
    en: "Show help and instructions"
  },
  'ui.2': {
    ja: "クリップボード悪用攻撃の可視化＆体験ツール",
    en: "Explore and visualize clipboard abuse safely"
  },
  'ui.3': {
    ja: "学習テーマ",
    en: "Learning topics"
  },
  'ui.4': {
    ja: "📋 基本操作",
    en: "📋 Basics"
  },
  'ui.5': {
    ja: "🔍 監視モード",
    en: "🔍 Monitoring"
  },
  'ui.6': {
    ja: "🎭 pasteイベントスニッフィング",
    en: "🎭 Paste-event sniffing"
  },
  'ui.7': {
    ja: "🚨 ClickFix攻撃",
    en: "🚨 ClickFix"
  },
  'ui.8': {
    ja: "🧲 自動送信",
    en: "🧲 Automatic submission"
  },
  'ui.9': {
    ja: "🧪 文字細工",
    en: "🧪 Unicode tricks"
  },
  'ui.10': {
    ja: "🔒 セキュリティTips",
    en: "🔒 Security tips"
  },
  'ui.11': {
    ja: "🛡️ 貼り付け前チェック",
    en: "🛡️ Pre-paste check"
  },
  'ui.12': {
    ja: "見えない文字・方向の制御文字・Latin／Cyrillic／Greekの混在を調べます。安全を保証するものではありません。",
    en: "Check invisible characters, direction controls, and mixed Latin/Cyrillic/Greek scripts. This do" +
      "es not guarantee safety."
  },
  'ui.13': {
    ja: "チェックするテキスト（最大100,000コードポイント）",
    en: "Text to check (up to 100,000 code points)"
  },
  'ui.14': {
    ja: "チェックする",
    en: "Check text"
  },
  'ui.15': {
    ja: "クリップボードを読み取ってチェック",
    en: "Read clipboard and check"
  },
  'ui.16': {
    ja: "リセット",
    en: "Reset"
  },
  'ui.17': {
    ja: "WeirdString Inspectorで詳しく調べる",
    en: "Inspect with WeirdString Inspector"
  },
  'ui.18': {
    ja: "クリップボードへの書き込みや外部送信はしません。連携先にはURLのハッシュで渡すため、サーバーへは送られません。 連携先の画面は内容を読み取れます。機密情報は渡さないでください。",
    en: "No clipboard writes or external transmission. The integration passes text in the URL fragment, " +
      "not to the server. The destination page can read it. Never pass secrets."
  },
  'ui.19': {
    ja: "📋 クリップボード基本操作",
    en: "📋 Clipboard basics"
  },
  'ui.20': {
    ja: "💡 使い方",
    en: "💡 How to use"
  },
  'ui.21': {
    ja: "クリップボードから読み取る",
    en: "Read clipboard"
  },
  'ui.22': {
    ja: "：現在クリップボードに保存されている内容を表示します",
    en: ": display the current clipboard contents"
  },
  'ui.23': {
    ja: "クリップボードに書き込む",
    en: "Write to clipboard"
  },
  'ui.24': {
    ja: "：テキストエリアの内容をクリップボードにコピーします",
    en: ": copy the text area contents to the clipboard"
  },
  'ui.25': {
    ja: "クリップボードをクリア",
    en: "Clear clipboard"
  },
  'ui.26': {
    ja: "：クリップボードを空にします",
    en: ": empty the clipboard"
  },
  'ui.27': {
    ja: "セキュリティ注意：",
    en: "Security note:"
  },
  'ui.28': {
    ja: "クリップボードの読み取りはユーザーのプライバシーに関わるため、ブラウザーは必ず許可を求めます。",
    en: "Reading the clipboard affects privacy, so the browser requests permission."
  },
  'ui.29': {
    ja: "🎯 実際に試してみよう！",
    en: "🎯 Try it yourself!"
  },
  'ui.30': {
    ja: "まず、このテキストを選択してコピーしてみましょう：",
    en: "First, select and copy this sample text:"
  },
  'ui.31': {
    ja: "クリップボードの実験テキストです🧪",
    en: "Clipboard experiment sample 🧪"
  },
  'ui.32': {
    ja: "↑ クリックして選択 → Ctrl+Cでコピー",
    en: "↑ Click to select → Ctrl+C to copy"
  },
  'ui.33': {
    ja: "次に「📋 クリップボードから読み取る」ボタンをクリックして、コピーした内容を確認しましょう",
    en: "Next, click “📋 Read clipboard” to check the copied text."
  },
  'ui.34': {
    ja: "⚠️ 重要：",
    en: "⚠️ Important:"
  },
  'ui.35': {
    ja: "ブラウザーから「クリップボードへのアクセスを許可しますか？」というダイアログが表示されます。",
    en: "The browser displays a dialog asking whether to allow clipboard access."
  },
  'ui.36': {
    ja: "これはセキュリティ上の保護機能です。今回は実験のため",
    en: "This is a security safeguard. For this experiment, please"
  },
  'ui.37': {
    ja: "「許可」をクリック",
    en: "click “Allow”"
  },
  'ui.38': {
    ja: "してください。",
    en: "to continue."
  },
  'ui.39': {
    ja: "テキストエリアに好きな文字を入力して「✍️ クリップボードに書き込む」をクリック",
    en: "Enter some text in the text area and click “✍️ Write to clipboard”."
  },
  'ui.40': {
    ja: "他のアプリ（メモ帳など）やブラウザーの検索欄にて、Ctrl+Vで貼り付けて確認！",
    en: "Use Ctrl+V in another app (such as Notepad) or a browser search field to verify the copy."
  },
  'ui.41': {
    ja: "✅ 確認できました",
    en: "✅ Verified"
  },
  'ui.42': {
    ja: "🔄 チュートリアルをリセット",
    en: "🔄 Reset tutorial"
  },
  'ui.43': {
    ja: "クリップボード実験用テキスト",
    en: "Text for clipboard experiments"
  },
  'ui.44': {
    ja: "ここにテキストを入力してコピー・ペースト実験...",
    en: "Enter text here to experiment with copying and pasting..."
  },
  'ui.45': {
    ja: "クリップボードの現在の内容を表示",
    en: "Display the current clipboard contents"
  },
  'ui.46': {
    ja: "📋 クリップボードから読み取る",
    en: "📋 Read clipboard"
  },
  'ui.47': {
    ja: "テキストエリアの内容をクリップボードにコピー",
    en: "Copy the text area contents to the clipboard"
  },
  'ui.48': {
    ja: "✍️ クリップボードに書き込む",
    en: "✍️ Write to clipboard"
  },
  'ui.49': {
    ja: "クリップボードを空にする",
    en: "Empty the clipboard"
  },
  'ui.50': {
    ja: "🗑️ クリップボードをクリア",
    en: "🗑️ Clear clipboard"
  },
  'ui.51': {
    ja: "デモの状態をリセットする",
    en: "Reset the demo state"
  },
  'ui.52': {
    ja: "🔄 デモをリセット",
    en: "🔄 Reset demo"
  },
  'ui.53': {
    ja: "💡 Ctrl+Enterで書き込みも可能です",
    en: "💡 You can also write with Ctrl+Enter."
  },
  'ui.54': {
    ja: "💡 この機能について",
    en: "💡 About this feature"
  },
  'ui.55': {
    ja: "クリップボードの内容を定期的に監視し、変化を検出します。",
    en: "Periodically checks the clipboard for changes."
  },
  'ui.56': {
    ja: "⚠️ これは悪用されると、ユーザーがコピーした情報を盗み見ることが可能です。",
    en: "⚠️ If abused, this can expose information that a user has copied."
  },
  'ui.57': {
    ja: "🔒 重要な注意事項：",
    en: "🔒 Important notes:"
  },
  'ui.58': {
    ja: "1. 初回使用時にブラウザーから許可ダイアログが表示されます。",
    en: "1. The browser requests permission on first use. Please"
  },
  'ui.59': {
    ja: "2. 監視中はこのタブをアクティブにしておいてください。他のタブやアプリに切り替えると監視が一時停止します。",
    en: "2. Keep this tab active while monitoring. Switching to another tab or app may pause monitoring."
  },
  'ui.60': {
    ja: "3. ローカルファイル(file://)での実行は制限があります。HTTPサーバーでの実行を推奨します。",
    en: "3. Local files (file://) are restricted. Use an HTTP server."
  },
  'ui.61': {
    ja: "まず「📡 自動監視を有効にする」チェックボックスをオンにして監視を開始しましょう",
    en: "First, select “📡 Enable automatic monitoring” to start monitoring."
  },
  'ui.62': {
    ja: "他のアプリ（メモ帳、ブラウザーなど）で何かテキストをコピーしてみましょう",
    en: "Copy some text in another app, such as Notepad or your browser."
  },
  'ui.63': {
    ja: "例：メモ帳に「テスト文字列」と入力してCtrl+A、Ctrl+C でコピー",
    en: "Example: enter “Test text” in Notepad, then press Ctrl+A and Ctrl+C."
  },
  'ui.64': {
    ja: "ClipThreat Studioの「監視モード」タブに戻ると、下のログにクリップボード変化が記録されているか確認",
    en: "Return to the Monitoring tab and check the log below for clipboard changes."
  },
  'ui.65': {
    ja: "💡 タブがアクティブでないと一部ブラウザーでは検出できない場合があります",
    en: "💡 Some browsers cannot detect changes while the tab is inactive."
  },
  'ui.66': {
    ja: "異なる種類のデータ（URL、メールアドレスなど）もコピーして、タイプ判別機能を確認してみましょう",
    en: "Copy different types of data, such as URLs and email addresses, to try classification."
  },
  'ui.67': {
    ja: "例：https://example.com、test@example.com など",
    en: "Examples: https://example.com and test@example.com"
  },
  'ui.68': {
    ja: "監視間隔を変更して、検出の反応速度の違いを体験してみましょう",
    en: "Change the monitoring interval and compare detection speed."
  },
  'ui.69': {
    ja: "推奨：0.5秒にして素早い反応を確認後、5秒にして違いを体感",
    en: "Suggestion: try 0.5 seconds for a quick response, then compare with 5 seconds."
  },
  'ui.70': {
    ja: "✅ 体験できました",
    en: "✅ Tried it"
  },
  'ui.71': {
    ja: "📡 自動監視を有効にする",
    en: "📡 Enable automatic monitoring"
  },
  'ui.72': {
    ja: "監視間隔：",
    en: "Monitoring interval:"
  },
  'ui.73': {
    ja: "0.5秒",
    en: "0.5 seconds"
  },
  'ui.74': {
    ja: "1秒",
    en: "1 second"
  },
  'ui.75': {
    ja: "2秒",
    en: "2 seconds"
  },
  'ui.76': {
    ja: "5秒",
    en: "5 seconds"
  },
  'ui.77': {
    ja: "🗑️ ログをクリア",
    en: "🗑️ Clear log"
  },
  'ui.78': {
    ja: "📊 監視状態：停止中 | 検出数：0",
    en: "📊 Monitoring: stopped | Detections: 0"
  },
  'ui.79': {
    ja: "pasteイベントスニフィングは、ユーザーが入力欄に貼り付けを行った瞬間に、その内容を",
    en: "Paste-event sniffing lets a page"
  },
  'ui.80': {
    ja: "傍受・記録",
    en: "intercept and record"
  },
  'ui.81': {
    ja: "する技術です。",
    en: "the contents as soon as a user pastes into an input field."
  },
  'ui.82': {
    ja: "仕組み：",
    en: "How it works:"
  },
  'ui.83': {
    ja: "JavaScriptの",
    en: "JavaScript uses the"
  },
  'ui.84': {
    ja: "イベントを使用して、クリップボードデータを読み取ります。",
    en: "event to read clipboard data."
  },
  'ui.85': {
    ja: "セキュリティリスク：",
    en: "Security risk:"
  },
  'ui.86': {
    ja: "悪意あるサイトが、パスワードや機密情報を含む貼り付け内容を盗み取る可能性があります。",
    en: "A malicious site may steal pasted passwords and other confidential information."
  },
  'ui.87': {
    ja: "📋 自動送信攻撃との違い：",
    en: "📋 Difference from automatic submission:"
  },
  'ui.88': {
    ja: "pasteスニフィング",
    en: "Paste sniffing"
  },
  'ui.89': {
    ja: "：内容を傍受・記録（後で送信）",
    en: ": intercepts and records content (possibly sending it later)"
  },
  'ui.90': {
    ja: "自動送信攻撃",
    en: "Automatic submission"
  },
  'ui.91': {
    ja: "：貼り付けと同時に即座に外部送信",
    en: ": sends content externally as soon as it is pasted"
  },
  'ui.92': {
    ja: "まず、テスト用の文字列をコピーしましょう（下の文字列をクリックして選択）",
    en: "First, copy the test string (click the sample below to select it)."
  },
  'ui.93': {
    ja: "テスト用パスワード: SecretPass123!",
    en: "Test password: SecretPass123!"
  },
  'ui.94': {
    ja: "下の入力欄に貼り付けてください（Ctrl+V）",
    en: "Paste into the input field below (Ctrl+V)."
  },
  'ui.95': {
    ja: "💡 貼り付けた瞬間にpasteイベントが発生し、内容が傍受されます",
    en: "💡 Pasting triggers a paste event, allowing the page to intercept its contents."
  },
  'ui.96': {
    ja: "ログエリアに表示された傍受された内容を確認しましょう",
    en: "Check the intercepted content displayed in the log."
  },
  'ui.97': {
    ja: "⚠️ 実際の攻撃では、この情報が攻撃者のサーバーに送信されます",
    en: "⚠️ In a real attack, this information would be sent to an attacker-controlled server."
  },
  'ui.98': {
    ja: "✅ 理解しました",
    en: "✅ Understood"
  },
  'ui.99': {
    ja: "別の種類のデータも試してみましょう（クレジットカード風の数字）",
    en: "Try a different type of data, such as a card-like number."
  },
  'ui.100': {
    ja: "↑ この偽カード番号をコピーして貼り付けてみてください",
    en: "↑ Copy and paste this fictional card number."
  },
  'ui.101': {
    ja: "実際のWebサイトでは、このような危険性があることを覚えておきましょう",
    en: "Remember that this risk exists on real websites."
  },
  'ui.102': {
    ja: "🛡️ 重要な情報は信頼できるサイトでのみ貼り付けるようにしてください",
    en: "🛡️ Only paste important information on trusted sites."
  },
  'ui.103': {
    ja: "セキュアログインポータル（仮想のフィッシング詐欺ページ）",
    en: "Secure login portal (simulated phishing page)"
  },
  'ui.104': {
    ja: "安全",
    en: "Safe"
  },
  'ui.105': {
    ja: "パスワード / 認証コード / 機密情報",
    en: "Password / authentication code / confidential information"
  },
  'ui.106': {
    ja: "パスワードまたは認証コードを貼り付けてください...",
    en: "Paste a password or authentication code..."
  },
  'ui.107': {
    ja: "💡 パスワードマネージャーからの貼り付けも可能です",
    en: "💡 Pasting from a password manager is also possible."
  },
  'ui.108': {
    ja: "🛡️ SSL暗号化通信中",
    en: "🛡️ SSL encrypted connection"
  },
  'ui.109': {
    ja: "✓ 認証済みサイト",
    en: "✓ Verified site"
  },
  'ui.110': {
    ja: "⚠️ 実際の攻撃シナリオを確認する",
    en: "⚠️ Explore attack scenarios"
  },
  'ui.111': {
    ja: "フィッシングサイト",
    en: "Phishing sites"
  },
  'ui.112': {
    ja: "：偽のログインフォームで、ユーザーがパスワードマネージャーから貼り付けたパスワードを盗取",
    en: ": fake login forms steal passwords pasted from password managers"
  },
  'ui.113': {
    ja: "偽の支払いページ",
    en: "Fake payment pages"
  },
  'ui.114': {
    ja: "：クレジットカード情報や暗号通貨ウォレットアドレスの貼り付けを監視",
    en: ": monitor pasted card details or cryptocurrency wallet addresses"
  },
  'ui.115': {
    ja: "偽のファイル共有サイト",
    en: "Fake file-sharing sites"
  },
  'ui.116': {
    ja: "：機密文書やプライベートキーの貼り付けを傍受",
    en: ": intercept confidential documents and private keys"
  },
  'ui.117': {
    ja: "ソーシャルエンジニアリング",
    en: "Social engineering"
  },
  'ui.118': {
    ja: "：「エラーログを貼り付けてください」等の指示で、システム情報を取得",
    en: ": requests such as “paste the error log” obtain system information"
  },
  'ui.119': {
    ja: "偽のサポートサイト",
    en: "Fake support sites"
  },
  'ui.120': {
    ja: "：技術サポートを装い、設定ファイルやログファイルの貼り付けを要求",
    en: ": impersonate support staff and request configuration files or logs"
  },
  'ui.121': {
    ja: "悪意あるWebアプリ",
    en: "Malicious web apps"
  },
  'ui.122': {
    ja: "：便利ツールを装い、ユーザーのデータ入力を監視",
    en: ": pose as useful tools while monitoring user input"
  },
  'ui.123': {
    ja: "重要：",
    en: "Important:"
  },
  'ui.124': {
    ja: "この攻撃は、ユーザーが貼り付け操作を行うだけで実行されます。特別な権限や複雑な手順は不要です。",
    en: "Simply pasting can trigger this attack. No special permission or complicated procedure is neede" +
      "d."
  },
  'ui.125': {
    ja: "🛡️ 対策方法を確認する",
    en: "🛡️ View defenses"
  },
  'ui.126': {
    ja: "サイトの信頼性確認",
    en: "Verify site trust"
  },
  'ui.127': {
    ja: "：URLやSSL証明書を必ず確認してから貼り付けを行う",
    en: ": check the URL and SSL certificate before pasting"
  },
  'ui.128': {
    ja: "手動入力の優先",
    en: "Prefer manual entry"
  },
  'ui.129': {
    ja: "：重要な情報は可能な限り手動で入力する",
    en: ": type important information manually where possible"
  },
  'ui.130': {
    ja: "ブラウザー拡張機能",
    en: "Browser extensions"
  },
  'ui.131': {
    ja: "：pasteイベントを制限する拡張機能を使用",
    en: ": use an extension that restricts paste events"
  },
  'ui.132': {
    ja: "開発者ツール確認",
    en: "Inspect developer tools"
  },
  'ui.133': {
    ja: "：F12キーで開発者ツールを開き、怪しいJavaScriptがないかチェック",
    en: ": open developer tools with F12 and check for suspicious JavaScript"
  },
  'ui.134': {
    ja: "パスワードマネージャーの活用",
    en: "Use a password manager"
  },
  'ui.135': {
    ja: "：自動入力機能により貼り付けを避ける",
    en: ": avoid pasting by using autofill"
  },
  'ui.136': {
    ja: "コンテンツセキュリティポリシー",
    en: "Content Security Policy"
  },
  'ui.137': {
    ja: "：CSPヘッダーでJavaScriptの実行を制限",
    en: ": restrict JavaScript execution through CSP headers"
  },
  'ui.138': {
    ja: "ブラウザーの設定",
    en: "Browser settings"
  },
  'ui.139': {
    ja: "：JavaScriptを部分的に無効化できるブラウザー設定を活用",
    en: ": use settings that selectively disable JavaScript"
  },
  'ui.140': {
    ja: "開発者向け：",
    en: "For developers:"
  },
  'ui.141': {
    ja: "ウェブサイト運営者は、pasteイベントリスナーの使用を最小限に抑え、必要な場合は透明性を保つことが重要です。",
    en: "Site operators should minimize paste-event listeners and be transparent when they are necessary" +
      "."
  },
  'ui.142': {
    ja: "🚨 ClickFix攻撃シミュレーション",
    en: "🚨 ClickFix simulation"
  },
  'ui.143': {
    ja: "💡 ClickFix攻撃とは",
    en: "💡 What is ClickFix?"
  },
  'ui.144': {
    ja: "ClickFix攻撃は、ユーザーを騙して悪意あるコマンドを実行させるソーシャルエンジニアリング攻撃です。",
    en: "ClickFix is a social-engineering attack that tricks users into running malicious commands."
  },
  'ui.145': {
    ja: "偽のエラーメッセージや「修復」ボタンで、危険なコマンドをクリップボードにコピーし、実行を促します。",
    en: "Fake errors and “repair” buttons copy dangerous commands to the clipboard and urge users to exe" +
      "cute them."
  },
  'ui.146': {
    ja: "一見無害なボタンクリックで、システム全体を乗っ取られる可能性があります。",
    en: "A seemingly harmless button click can lead to compromise of the entire system."
  },
  'ui.147': {
    ja: "🎯 ClickFix攻撃を体験しよう！",
    en: "🎯 Explore ClickFix safely!"
  },
  'ui.148': {
    ja: "まず、上のClickFix攻撃の説明を読んで仕組みを理解しましょう",
    en: "First, read the explanation above to understand how ClickFix works."
  },
  'ui.149': {
    ja: "💡 攻撃の概要と危険性を把握してから実際の体験に移ります",
    en: "💡 Understand the attack and its risks before trying the simulation."
  },
  'ui.150': {
    ja: "✅ ClickFix攻撃の説明を読んだ",
    en: "✅ I read the ClickFix explanation"
  },
  'ui.151': {
    ja: "下の偽エラーダイアログの仕掛けを観察した後、「🔧 今すぐ修復する（推奨）」ボタンをクリックして攻撃の流れを体験",
    en: "Observe the fake error dialog below, then click “🔧 Repair now (recommended)” to follow the simu" +
      "lated attack."
  },
  'ui.152': {
    ja: "💡 偽のエラー表示による心理的誘導に注目",
    en: "💡 Notice the psychological pressure created by the fake error."
  },
  'ui.153': {
    ja: "このデモがコピーするのは無害な説明文だけです。実行操作はしないでください。",
    en: "This demo copies only a harmless explanation. Do not execute anything."
  },
  'ui.154': {
    ja: "下のログエリアで段階的な攻撃の進行を確認しましょう",
    en: "Follow the attack stages in the log below."
  },
  'ui.155': {
    ja: "🎓 各ステップでの攻撃手法と危険性を学習",
    en: "🎓 Learn the technique and risk at each step."
  },
  'ui.156': {
    ja: "✅ ステップ4まで読んだ",
    en: "✅ I read through step 4"
  },
  'ui.157': {
    ja: "「❌ 後で修復」ボタンもクリックして、キャンセルボタンの罠を確認した後、下の対策方法を読みましょう",
    en: "Click “❌ Repair later” to learn about the cancel-button trap, then read the defenses below."
  },
  'ui.158': {
    ja: "🛡️ 安全な対処法と具体的な対策テクニックを学習",
    en: "🛡️ Learn safe responses and practical defenses."
  },
  'ui.159': {
    ja: "✅ 対策方法を読んだ",
    en: "✅ I read the defenses"
  },
  'ui.160': {
    ja: "システムエラー - 緊急修復が必要",
    en: "System error — urgent repair required"
  },
  'ui.161': {
    ja: "緊急",
    en: "Urgent"
  },
  'ui.162': {
    ja: "重要な警告：",
    en: "Important warning:"
  },
  'ui.163': {
    ja: "システムファイルが破損しています。",
    en: "System files are corrupted."
  },
  'ui.164': {
    ja: "すぐに修復しないと、データが失われる可能性があります。",
    en: "Data may be lost unless you repair them immediately."
  },
  'ui.165': {
    ja: "エラーコード: 0x80070057",
    en: "Error code: 0x80070057"
  },
  'ui.166': {
    ja: "影響ファイル: system32\\kernel.dll",
    en: "Affected file: system32\\kernel.dll"
  },
  'ui.167': {
    ja: "推定修復時間: 2-3分",
    en: "Estimated repair time: 2–3 minutes"
  },
  'ui.168': {
    ja: "🔧 今すぐ修復する（推奨）",
    en: "🔧 Repair now (recommended)"
  },
  'ui.169': {
    ja: "❌ 後で修復",
    en: "❌ Repair later"
  },
  'ui.170': {
    ja: "🛡️ ClickFix攻撃への対策方法",
    en: "🛡️ Defenses against ClickFix"
  },
  'ui.171': {
    ja: "🚨 即座に対処すべきこと",
    en: "🚨 Immediate actions"
  },
  'ui.172': {
    ja: "ページを閉じる",
    en: "Close the page"
  },
  'ui.173': {
    ja: "：「修復」や「キャンセル」ボタンを押さず、ブラウザーを閉じる",
    en: ": close the browser without clicking “Repair” or “Cancel”"
  },
  'ui.174': {
    ja: "クリップボードを確認",
    en: "Check the clipboard"
  },
  'ui.175': {
    ja: "：怪しいコマンドがコピーされていないかチェック",
    en: ": check whether a suspicious command was copied"
  },
  'ui.176': {
    ja: "PowerShell実行の回避",
    en: "Avoid running PowerShell"
  },
  'ui.177': {
    ja: "：Win+Rダイアログでは絶対にコマンドを実行しない",
    en: ": never run commands from these instructions in the Win+R dialog"
  },
  'ui.178': {
    ja: "🛡️ 予防対策",
    en: "🛡️ Prevention"
  },
  'ui.179': {
    ja: "疑いの習慣",
    en: "Stay skeptical"
  },
  'ui.180': {
    ja: "：突然のエラーメッセージやシステム警告は疑う",
    en: ": question unexpected error messages and system warnings"
  },
  'ui.181': {
    ja: "公式チャネルの利用",
    en: "Use official channels"
  },
  'ui.182': {
    ja: "：システム修復は公式サポートやWindows Updateで行う",
    en: ": repair your system through official support or Windows Update"
  },
  'ui.183': {
    ja: "URLの確認",
    en: "Check URLs"
  },
  'ui.184': {
    ja: "：信頼できないサイトでの作業を避ける",
    en: ": avoid working on untrusted sites"
  },
  'ui.185': {
    ja: "最新ブラウザーの使用",
    en: "Use an up-to-date browser"
  },
  'ui.186': {
    ja: "：セキュリティ機能が向上したブラウザーを使用",
    en: ": use a browser with current security protections"
  },
  'ui.187': {
    ja: "⚙️ 技術的対策",
    en: "⚙️ Technical measures"
  },
  'ui.188': {
    ja: "PowerShell実行ポリシー",
    en: "PowerShell execution policy"
  },
  'ui.189': {
    ja: "：ExecutionPolicyをRestrictedに設定",
    en: ": set ExecutionPolicy to Restricted"
  },
  'ui.190': {
    ja: "クリップボード監視ツール",
    en: "Clipboard monitoring tools"
  },
  'ui.191': {
    ja: "：怪しいコマンドのコピーを検知するツール使用",
    en: ": use tools that detect suspicious commands being copied"
  },
  'ui.192': {
    ja: "：悪意あるスクリプトをブロックする拡張機能の導入",
    en: ": install extensions that block malicious scripts"
  },
  'ui.193': {
    ja: "ユーザーアカウント制御(UAC)",
    en: "User Account Control (UAC)"
  },
  'ui.194': {
    ja: "：管理者権限が必要な操作で確認ダイアログを表示",
    en: ": require confirmation for operations needing administrator privileges"
  },
  'ui.195': {
    ja: "企業向け対策：",
    en: "For organizations:"
  },
  'ui.196': {
    ja: "社員教育でClickFix攻撃の認知度を高め、定期的なセキュリティ訓練を実施することが重要です。",
    en: "Raise employee awareness of ClickFix and conduct regular security training."
  },
  'ui.197': {
    ja: "🧲 自動送信攻撃シミュレーション",
    en: "🧲 Automatic-submission simulation"
  },
  'ui.198': {
    ja: "💡 自動送信攻撃とは",
    en: "💡 What is automatic submission?"
  },
  'ui.199': {
    ja: "ユーザーが入力欄に貼り付けを行った瞬間に、その内容を攻撃者のサーバーへ",
    en: "When a user pastes into an input field, the content is"
  },
  'ui.200': {
    ja: "即座に自動送信",
    en: "immediately sent automatically"
  },
  'ui.201': {
    ja: "する攻撃です。",
    en: "to an attacker-controlled server."
  },
  'ui.202': {
    ja: "pasteイベントと組み合わせて、即座にfetch()やXMLHttpRequestで外部サーバーに送信します。",
    en: "The attack combines paste events with fetch() or XMLHttpRequest to send data to an external ser" +
      "ver immediately."
  },
  'ui.203': {
    ja: "APIキー、設定ファイル、SSH鍵などが",
    en: "API keys, configuration files, and SSH keys can be sent"
  },
  'ui.204': {
    ja: "リアルタイムで",
    en: "in real time"
  },
  'ui.205': {
    ja: "攻撃者に送信されます。",
    en: "to the attacker."
  },
  'ui.206': {
    ja: "📋 pasteスニフィングとの違い：",
    en: "📋 Difference from paste sniffing:"
  },
  'ui.207': {
    ja: "🎯 自動送信攻撃を体験しよう！",
    en: "🎯 Explore automatic submission safely!"
  },
  'ui.208': {
    ja: "まず、上の自動送信攻撃の説明を読んで仕組みを理解しましょう",
    en: "First, read the explanation above to understand automatic-submission attacks."
  },
  'ui.209': {
    ja: "💡 pasteスニフィングとの違いも確認してください",
    en: "💡 Also note how this differs from paste sniffing."
  },
  'ui.210': {
    ja: "✅ 攻撃の仕組みを理解した",
    en: "✅ I understand the mechanism"
  },
  'ui.211': {
    ja: "テスト用のAPIキーをコピーしましょう（下の文字列をクリックして選択）",
    en: "Copy the fictional API key below (click to select)."
  },
  'ui.212': {
    ja: "下の開発者コンソールの入力欄に貼り付けして自動送信攻撃を体験",
    en: "Paste into the simulated developer console below to explore the attack."
  },
  'ui.213': {
    ja: "⚠️ 本物の攻撃では外部送信されます。このデモは表示だけで、実際の通信は行いません。",
    en: "⚠️ Real attacks send data externally. This demo only displays a simulation and makes no request" +
      "."
  },
  'ui.214': {
    ja: "ログで段階的な攻撃進行を確認し、リアルタイム送信の危険性を学習",
    en: "Follow the stages in the log to learn about real-time transmission risks."
  },
  'ui.215': {
    ja: "🎓 送信タイミングと影響について理解を深めましょう",
    en: "🎓 Consider the timing and impact of transmission."
  },
  'ui.216': {
    ja: "✅ 送信攻撃を理解した",
    en: "✅ I understand the submission attack"
  },
  'ui.217': {
    ja: "開発者コンソール",
    en: "Developer console"
  },
  'ui.218': {
    ja: "環境変数とAPIキーの設定",
    en: "Environment-variable and API-key settings"
  },
  'ui.219': {
    ja: "APIキー / トークン / 設定値",
    en: "API key / token / configuration value"
  },
  'ui.220': {
    ja: "export API_KEY=sk-1234... または設定値を貼り付けてください",
    en: "Paste export API_KEY=sk-1234... or a configuration value"
  },
  'ui.221': {
    ja: "💡 上の架空の見本だけを使ってください。実際の秘密情報や設定ファイルは貼り付けないでください。",
    en: "💡 Use only the fictional sample above. Never paste real secrets or configuration files."
  },
  'ui.222': {
    ja: "⚡ ターミナル接続中",
    en: "⚡ Terminal connected"
  },
  'ui.223': {
    ja: "🔒 SSH暗号化通信",
    en: "🔒 SSH encrypted connection"
  },
  'ui.224': {
    ja: "🛡️ 自動送信攻撃の対策方法",
    en: "🛡️ Defenses against automatic submission"
  },
  'ui.225': {
    ja: "🔧 技術的対策",
    en: "🔧 Technical measures"
  },
  'ui.226': {
    ja: "：外部への不正通信をブロック",
    en: ": block unauthorized external communication"
  },
  'ui.227': {
    ja: "CORS設定",
    en: "CORS configuration"
  },
  'ui.228': {
    ja: "：信頼できるオリジンからの通信のみ許可",
    en: ": allow communication only from trusted origins"
  },
  'ui.229': {
    ja: "入力値サニタイゼーション",
    en: "Input sanitization"
  },
  'ui.230': {
    ja: "：危険な文字列パターンの検出と除去",
    en: ": detect and remove dangerous string patterns"
  },
  'ui.231': {
    ja: "：短時間での大量リクエストを制限",
    en: ": limit large bursts of requests"
  },
  'ui.232': {
    ja: "HTTPS強制",
    en: "Enforce HTTPS"
  },
  'ui.233': {
    ja: "：通信の暗号化でMITM攻撃を防止",
    en: ": encrypt traffic to prevent MITM attacks"
  },
  'ui.234': {
    ja: "👤 ユーザー対策",
    en: "👤 User precautions"
  },
  'ui.235': {
    ja: "信頼できないサイトでの貼り付け回避",
    en: "Avoid pasting into untrusted sites"
  },
  'ui.236': {
    ja: "：APIキーや設定情報は慎重に",
    en: ": handle API keys and configuration data carefully"
  },
  'ui.237': {
    ja: "ブラウザのセキュリティ設定",
    en: "Browser security settings"
  },
  'ui.238': {
    ja: "：クリップボード権限の確認",
    en: ": review clipboard permissions"
  },
  'ui.239': {
    ja: "開発者ツールでの検証",
    en: "Inspect developer tools"
  },
  'ui.240': {
    ja: "：Networkタブでの通信監視",
    en: ": monitor requests in the Network tab"
  },
  'ui.241': {
    ja: "パスワードマネージャー活用",
    en: "Use password managers"
  },
  'ui.242': {
    ja: "：手動コピペの削減",
    en: ": reduce manual copying and pasting"
  },
  'ui.243': {
    ja: "定期的なAPIキー更新",
    en: "Rotate API keys regularly"
  },
  'ui.244': {
    ja: "：漏洩リスクの最小化",
    en: ": minimize exposure risks"
  },
  'ui.245': {
    ja: "🏢 組織的対策",
    en: "🏢 Organizational measures"
  },
  'ui.246': {
    ja: "セキュリティ教育",
    en: "Security training"
  },
  'ui.247': {
    ja: "：開発者向けのクリップボード攻撃啓発",
    en: ": teach developers about clipboard attacks"
  },
  'ui.248': {
    ja: "コードレビュー",
    en: "Code review"
  },
  'ui.249': {
    ja: "：pasteイベントハンドラーの監査",
    en: ": audit paste-event handlers"
  },
  'ui.250': {
    ja: "監視システム",
    en: "Monitoring systems"
  },
  'ui.251': {
    ja: "：異常な外部通信の検知",
    en: ": detect unusual external traffic"
  },
  'ui.252': {
    ja: "インシデント対応",
    en: "Incident response"
  },
  'ui.253': {
    ja: "：情報漏洩時の迅速な対処プロセス",
    en: ": establish a rapid response to data leaks"
  },
  'ui.254': {
    ja: "定期的監査",
    en: "Regular audits"
  },
  'ui.255': {
    ja: "：Webアプリケーションのセキュリティチェック",
    en: ": assess web-application security"
  },
  'ui.256': {
    ja: "🚨 緊急時対応",
    en: "🚨 Emergency response"
  },
  'ui.257': {
    ja: "APIキー即座無効化",
    en: "Revoke API keys immediately"
  },
  'ui.258': {
    ja: "：漏洩疑いがある場合の緊急停止",
    en: ": disable keys when a leak is suspected"
  },
  'ui.259': {
    ja: "アクセスログ確認",
    en: "Review access logs"
  },
  'ui.260': {
    ja: "：不正使用の痕跡調査",
    en: ": investigate signs of unauthorized use"
  },
  'ui.261': {
    ja: "通信ログ分析",
    en: "Analyze network logs"
  },
  'ui.262': {
    ja: "：データ送信先と内容の特定",
    en: ": identify destinations and transmitted data"
  },
  'ui.263': {
    ja: "被害範囲特定",
    en: "Determine the impact"
  },
  'ui.264': {
    ja: "：影響を受けるシステムとデータの調査",
    en: ": investigate affected systems and data"
  },
  'ui.265': {
    ja: "関係者通知",
    en: "Notify stakeholders"
  },
  'ui.266': {
    ja: "：セキュリティチームや管理者への報告",
    en: ": report to the security team and administrators"
  },
  'ui.267': {
    ja: "🧪 Unicode文字細工攻撃",
    en: "🧪 Unicode character tricks"
  },
  'ui.268': {
    ja: "💡 Unicode文字細工攻撃とは",
    en: "💡 What are Unicode character tricks?"
  },
  'ui.269': {
    ja: "見た目上は正常に見えるが、実際は不正な文字（ゼロ幅文字、制御文字、RTL文字など）を含む文字列を使った攻撃手法です。",
    en: "These attacks use seemingly normal strings containing hidden characters, controls, or right-to-" +
      "left characters."
  },
  'ui.270': {
    ja: "危険性：",
    en: "Risks:"
  },
  'ui.271': {
    ja: "ファイル名偽装、フィッシング詐欺、セキュリティ検証の回避などに悪用される可能性があります。",
    en: "They can be used to spoof filenames, support phishing, and bypass security checks."
  },
  'ui.272': {
    ja: "攻撃例：",
    en: "Examples:"
  },
  'ui.273': {
    ja: "実行ファイル(.exe)をクリック率の高い画像ファイル(.jpg)に見せかける、URLを偽装するなど",
    en: "Disguising an executable (.exe) as an attractive image (.jpg), or spoofing a URL"
  },
  'ui.274': {
    ja: "🎯 Unicode攻撃を体験しよう！",
    en: "🎯 Explore Unicode tricks!"
  },
  'ui.275': {
    ja: "まず基本的なゼロ幅スペース攻撃を体験しましょう",
    en: "Start with a basic zero-width-space example."
  },
  'ui.276': {
    ja: "一見普通のファイル名に見えますが、隠された文字が含まれています",
    en: "This looks like an ordinary filename but contains hidden characters."
  },
  'ui.277': {
    ja: "ゼロ幅スペース混入ファイル名をコピーして体験してください",
    en: "Copy a filename containing a zero-width space."
  },
  'ui.278': {
    ja: "💡 下のボタンをクリックしてからテキストエディタに貼り付けてみてください",
    en: "💡 Click the button below, then paste into a text editor."
  },
  'ui.279': {
    ja: "今度はRTL（右から左）文字によるファイル拡張子偽装を体験しましょう",
    en: "Next, try file-extension spoofing with right-to-left (RTL) characters."
  },
  'ui.280': {
    ja: "⚠️ 実行ファイルが画像ファイルに見えるトリックです",
    en: "⚠️ The trick makes an executable look like an image file."
  },
  'ui.281': {
    ja: "すべての攻撃パターンを理解できました",
    en: "You have explored all the attack patterns."
  },
  'ui.282': {
    ja: "🎓 これらの手法がどのように悪用されるかを確認しましょう",
    en: "🎓 Review how these techniques can be abused."
  },
  'ui.283': {
    ja: "✅ 完全理解しました",
    en: "✅ I understand the patterns"
  },
  'ui.284': {
    ja: "🎯 攻撃実演デモ",
    en: "🎯 Demonstration samples"
  },
  'ui.285': {
    ja: "ゼロ幅文字が混入されたファイル名をコピー",
    en: "Copy a filename containing zero-width characters"
  },
  'ui.286': {
    ja: "📁 ゼロ幅スペース攻撃",
    en: "📁 Zero-width-space trick"
  },
  'ui.287': {
    ja: "RTL文字による拡張子偽装をコピー",
    en: "Copy RTL extension spoofing"
  },
  'ui.288': {
    ja: "🔄 RTL拡張子偽装",
    en: "🔄 RTL extension spoofing"
  },
  'ui.289': {
    ja: "複数スクリプトが混在した文字列をコピー",
    en: "Copy a string containing mixed scripts"
  },
  'ui.290': {
    ja: "🌐 スクリプト混在攻撃",
    en: "🌐 Mixed-script trick"
  },
  'ui.291': {
    ja: "同形異義文字による偽装をコピー",
    en: "Copy a homograph spoofing sample"
  },
  'ui.292': {
    ja: "👥 同形異義文字攻撃",
    en: "👥 Homograph trick"
  },
  'ui.293': {
    ja: "⚠️ 実際の攻撃シナリオ詳細",
    en: "⚠️ Detailed attack scenarios"
  },
  'ui.294': {
    ja: "🎭 ゼロ幅スペース攻撃",
    en: "🎭 Zero-width-space tricks"
  },
  'ui.295': {
    ja: "ファイル名偽装",
    en: "Filename spoofing"
  },
  'ui.296': {
    ja: "：flag.txt が実際は fla[ZWSP]g.txt となっている",
    en: ": an apparent flag.txt is actually fla[ZWSP]g.txt"
  },
  'ui.297': {
    ja: "検索回避",
    en: "Search evasion"
  },
  'ui.298': {
    ja: "：システムの検索機能で見つからないファイル名を作成",
    en: ": create filenames that evade system searches"
  },
  'ui.299': {
    ja: "重複ファイル作成",
    en: "Duplicate filenames"
  },
  'ui.300': {
    ja: "：見た目上同じ名前で複数ファイルを作成",
    en: ": create several files with visually identical names"
  },
  'ui.301': {
    ja: "セキュリティツール回避",
    en: "Security-tool evasion"
  },
  'ui.302': {
    ja: "：ブラックリストに載ったファイル名の検出回避",
    en: ": avoid detection of blocked filenames"
  },
  'ui.303': {
    ja: "🔄 RTL文字攻撃",
    en: "🔄 RTL tricks"
  },
  'ui.304': {
    ja: "拡張子偽装",
    en: "Extension spoofing"
  },
  'ui.305': {
    ja: "：evil[RTL]gnp.exe が exe.png に見える",
    en: ": evil[RTL]gnp.exe appears to end in exe.png"
  },
  'ui.306': {
    ja: "URL偽装",
    en: "URL spoofing"
  },
  'ui.307': {
    ja: "：悪意あるドメインを信頼できるサイトに見せかけ",
    en: ": make a malicious domain resemble a trusted site"
  },
  'ui.308': {
    ja: "フィッシング詐欺",
    en: "Phishing"
  },
  'ui.309': {
    ja: "：正規サイトそっくりのURLを作成",
    en: ": create a URL that resembles a legitimate site"
  },
  'ui.310': {
    ja: "マルウェア配布",
    en: "Malware distribution"
  },
  'ui.311': {
    ja: "：実行ファイルを無害なファイルに偽装",
    en: ": disguise an executable as a harmless file"
  },
  'ui.312': {
    ja: "ドメインなりすまし",
    en: "Domain impersonation"
  },
  'ui.313': {
    ja: "：аpple.com（キリル文字のа）でapple.comを偽装",
    en: ": use аpple.com (Cyrillic а) to imitate apple.com"
  },
  'ui.314': {
    ja: "IDN偽装攻撃",
    en: "IDN spoofing"
  },
  'ui.315': {
    ja: "：国際化ドメイン名の脆弱性を悪用",
    en: ": exploit internationalized domain names"
  },
  'ui.316': {
    ja: "認証情報詐取",
    en: "Credential theft"
  },
  'ui.317': {
    ja: "：正規サイトと見分けがつかない偽サイト作成",
    en: ": create a fake site that looks identical to the real one"
  },
  'ui.318': {
    ja: "：信頼性の高い企業名を模倣",
    en: ": imitate the names of trusted companies"
  },
  'ui.319': {
    ja: "これらの攻撃は視覚的に判別が困難で、技術的な知識がない一般ユーザーでも簡単に騙される可能性があります。",
    en: "These attacks are difficult to identify visually and can deceive users without technical knowle" +
      "dge."
  },
  'ui.320': {
    ja: "🛡️ Unicode攻撃の対策方法",
    en: "🛡️ Defenses against Unicode tricks"
  },
  'ui.321': {
    ja: "文字列正規化",
    en: "String normalization"
  },
  'ui.322': {
    ja: "：Unicode正規化（NFC、NFD）でゼロ幅文字を除去",
    en: ": remove zero-width characters through Unicode normalization (NFC, NFD)"
  },
  'ui.323': {
    ja: "文字種制限",
    en: "Character restrictions"
  },
  'ui.324': {
    ja: "：許可する文字セットを明確に定義",
    en: ": explicitly define allowed character sets"
  },
  'ui.325': {
    ja: "IDN表示",
    en: "IDN display"
  },
  'ui.326': {
    ja: "：ブラウザーでPunycodeを表示させる設定",
    en: ": configure the browser to display Punycode"
  },
  'ui.327': {
    ja: "ファイル名検証",
    en: "Filename validation"
  },
  'ui.328': {
    ja: "：制御文字やRTL文字の混入を検出",
    en: ": detect control and RTL characters"
  },
  'ui.329': {
    ja: "フォント設定",
    en: "Font settings"
  },
  'ui.330': {
    ja: "：ゼロ幅文字を可視化するフォント使用",
    en: ": use fonts that visualize zero-width characters"
  },
  'ui.331': {
    ja: "URL確認",
    en: "Check the URL"
  },
  'ui.332': {
    ja: "：アドレスバーを注意深く確認する",
    en: ": inspect the address bar carefully"
  },
  'ui.333': {
    ja: "ファイル検証",
    en: "Verify files"
  },
  'ui.334': {
    ja: "：ダウンロードしたファイルの拡張子を確認",
    en: ": check downloaded file extensions"
  },
  'ui.335': {
    ja: "ブックマーク活用",
    en: "Use bookmarks"
  },
  'ui.336': {
    ja: "：重要なサイトは手動入力ではなくブックマークから",
    en: ": open important sites from bookmarks rather than typing addresses"
  },
  'ui.337': {
    ja: "セキュリティソフト",
    en: "Security software"
  },
  'ui.338': {
    ja: "：最新のアンチウイルスソフトを使用",
    en: ": use up-to-date antivirus software"
  },
  'ui.339': {
    ja: "デベロッパーツール活用",
    en: "Use developer tools"
  },
  'ui.340': {
    ja: "：疑わしいファイル名をコピーして検証",
    en: ": copy and inspect suspicious filenames"
  },
  'ui.341': {
    ja: "🏢 システム対策",
    en: "🏢 System defenses"
  },
  'ui.342': {
    ja: "入力値検証",
    en: "Input validation"
  },
  'ui.343': {
    ja: "：Webアプリケーションでの厳密な文字種チェック",
    en: ": validate character types strictly in web applications"
  },
  'ui.344': {
    ja: "ファイルアップロード制限",
    en: "File-upload restrictions"
  },
  'ui.345': {
    ja: "：不正文字を含むファイル名の拒否",
    en: ": reject filenames containing disallowed characters"
  },
  'ui.346': {
    ja: "メール フィルタリング",
    en: "Email filtering"
  },
  'ui.347': {
    ja: "：不正なUnicode文字を含むメールの検出",
    en: ": detect emails containing suspicious Unicode characters"
  },
  'ui.348': {
    ja: "DNS設定",
    en: "DNS configuration"
  },
  'ui.349': {
    ja: "：IDN偽装攻撃に対するDNSフィルタリング",
    en: ": use DNS filtering against IDN spoofing"
  },
  'ui.350': {
    ja: "定期監査",
    en: "Regular audits"
  },
  'ui.351': {
    ja: "：システム内の不正ファイル名の定期チェック",
    en: ": periodically check systems for suspicious filenames"
  },
  'ui.352': {
    ja: "入力値の検証時は視覚的な類似性だけでなく、Unicode文字の実際のコードポイントを確認することが重要です。",
    en: "Validate actual Unicode code points, not just the visual appearance of text."
  },
  'ui.353': {
    ja: "🔒 クリップボードセキュリティ完全ガイド",
    en: "🔒 Complete clipboard security guide"
  },
  'ui.354': {
    ja: "💡 このガイドについて",
    en: "💡 About this guide"
  },
  'ui.355': {
    ja: "このタブでは、クリップボード関連の脅威に対する包括的なセキュリティ対策をまとめています。",
    en: "This tab collects comprehensive defenses against clipboard-related threats."
  },
  'ui.356': {
    ja: "対象：",
    en: "Audience:"
  },
  'ui.357': {
    ja: "一般ユーザー、開発者、システム管理者、情報セキュリティ担当者",
    en: "General users, developers, system administrators, and security staff"
  },
  'ui.358': {
    ja: "学習目標：",
    en: "Learning objective:"
  },
  'ui.359': {
    ja: "クリップボード攻撃を理解し、適切な対策を実装・運用できるようになる",
    en: "Understand clipboard attacks and implement and operate appropriate defenses"
  },
  'ui.360': {
    ja: "👤 一般ユーザー向けセキュリティ対策",
    en: "👤 Security practices for users"
  },
  'ui.361': {
    ja: "🔒 基本的な安全対策",
    en: "🔒 Basic precautions"
  },
  'ui.362': {
    ja: "：パスワード、APIキー、個人情報は信頼できるサイトでのみ貼り付け",
    en: ": paste passwords, API keys, and personal information only into trusted sites"
  },
  'ui.363': {
    ja: "ブラウザーの権限確認",
    en: "Check browser permissions"
  },
  'ui.364': {
    ja: "：クリップボードアクセス許可ダイアログは慎重に判断",
    en: ": carefully evaluate clipboard permission prompts"
  },
  'ui.365': {
    ja: "：自動入力機能でコピペのリスクを削減",
    en: ": reduce copying and pasting risks with autofill"
  },
  'ui.366': {
    ja: "貼り付け前の確認",
    en: "Check before pasting"
  },
  'ui.367': {
    ja: "：重要な情報は貼り付け前に内容を確認",
    en: ": inspect important content before pasting"
  },
  'ui.368': {
    ja: "定期的なクリップボードクリア",
    en: "Clear the clipboard regularly"
  },
  'ui.369': {
    ja: "：機密情報使用後はクリップボードを空にする",
    en: ": empty the clipboard after using confidential information"
  },
  'ui.370': {
    ja: "⚠️ 危険な行動パターン",
    en: "⚠️ Risky behavior"
  },
  'ui.371': {
    ja: "フィッシングサイトでの貼り付け",
    en: "Pasting into phishing sites"
  },
  'ui.372': {
    ja: "：URLを確認せずパスワードを貼り付け",
    en: ": pasting a password without checking the URL"
  },
  'ui.373': {
    ja: "公共端末での機密情報コピー",
    en: "Copying secrets on shared devices"
  },
  'ui.374': {
    ja: "：共有PCでのパスワードやカード情報の使用",
    en: ": using passwords or card details on a shared PC"
  },
  'ui.375': {
    ja: "メール・チャットでの直接貼り付け",
    en: "Pasting directly into email or chat"
  },
  'ui.376': {
    ja: "：暗号化されていない通信での機密情報共有",
    en: ": sharing secrets over unencrypted channels"
  },
  'ui.377': {
    ja: "不明なサイトでの「修復」ボタンクリック",
    en: "Clicking “Repair” on an unfamiliar site"
  },
  'ui.378': {
    ja: "：ClickFix攻撃への対応",
    en: ": falling for ClickFix prompts"
  },
  'ui.379': {
    ja: "ファイル名の見た目だけで判断",
    en: "Judging filenames only by appearance"
  },
  'ui.380': {
    ja: "：Unicode攻撃による偽装の見落とし",
    en: ": overlooking Unicode spoofing"
  },
  'ui.381': {
    ja: "🛡️ 推奨ツールと設定",
    en: "🛡️ Recommended tools and settings"
  },
  'ui.382': {
    ja: "ブラウザー設定",
    en: "Browser settings"
  },
  'ui.383': {
    ja: "：不要なサイトからのクリップボードアクセスを制限",
    en: ": restrict clipboard access for sites that do not need it"
  },
  'ui.384': {
    ja: "セキュリティ拡張機能",
    en: "Security extensions"
  },
  'ui.385': {
    ja: "：クリップボード保護機能を持つ拡張機能の導入",
    en: ": install extensions that protect the clipboard"
  },
  'ui.386': {
    ja: "アンチウイルスソフト",
    en: "Antivirus software"
  },
  'ui.387': {
    ja: "：クリップボード監視機能を持つ製品の選択",
    en: ": choose products with clipboard monitoring"
  },
  'ui.388': {
    ja: "2要素認証",
    en: "Two-factor authentication"
  },
  'ui.389': {
    ja: "：パスワード漏洩時のリスク軽減",
    en: ": reduce the impact of leaked passwords"
  },
  'ui.390': {
    ja: "定期的なパスワード更新",
    en: "Regular password changes"
  },
  'ui.391': {
    ja: "：漏洩リスクを考慮した運用",
    en: ": manage passwords with exposure risks in mind"
  },
  'ui.392': {
    ja: "💻 開発者向けセキュリティ実装",
    en: "💻 Security implementation for developers"
  },
  'ui.393': {
    ja: "🔧 技術的対策の実装",
    en: "🔧 Technical implementation"
  },
  'ui.394': {
    ja: "：外部への不正通信をブロックするヘッダー設定",
    en: ": configure headers to block unauthorized external communication"
  },
  'ui.395': {
    ja: "：pasteイベントで取得したデータの厳密なバリデーション",
    en: ": strictly validate data obtained through paste events"
  },
  'ui.396': {
    ja: "：短時間での大量リクエストを制限するAPI設計",
    en: ": design APIs to limit request bursts"
  },
  'ui.397': {
    ja: "ログ記録",
    en: "Logging"
  },
  'ui.398': {
    ja: "：異常なクリップボード操作やpaste イベントの監視",
    en: ": monitor unusual clipboard operations and paste events"
  },
  'ui.399': {
    ja: "暗号化",
    en: "Encryption"
  },
  'ui.400': {
    ja: "：機密データの暗号化保存と通信",
    en: ": encrypt confidential data in storage and in transit"
  },
  'ui.401': {
    ja: "📝 安全なコーディング慣行",
    en: "📝 Secure coding practices"
  },
  'ui.402': {
    ja: "pasteイベントの最小限使用",
    en: "Minimize paste-event use"
  },
  'ui.403': {
    ja: "：必要最小限での利用とユーザーへの透明性確保",
    en: ": use only what is necessary and inform users transparently"
  },
  'ui.404': {
    ja: "データサニタイゼーション",
    en: "Data sanitization"
  },
  'ui.405': {
    ja: "：ユーザー入力の適切な無害化処理",
    en: ": safely handle user input"
  },
  'ui.406': {
    ja: "：全通信の暗号化とMITM攻撃対策",
    en: ": encrypt all traffic and defend against MITM attacks"
  },
  'ui.407': {
    ja: "エラーハンドリング",
    en: "Error handling"
  },
  'ui.408': {
    ja: "：機密情報を含まないエラーメッセージ",
    en: ": keep secrets out of error messages"
  },
  'ui.409': {
    ja: "セキュリティテスト",
    en: "Security testing"
  },
  'ui.410': {
    ja: "：定期的な脆弱性スキャンとペネトレーションテスト",
    en: ": run regular vulnerability scans and penetration tests"
  },
  'ui.411': {
    ja: "🎓 セキュアな開発例",
    en: "🎓 Secure development examples"
  },
  'ui.412': {
    ja: "Clipboard API の適切な使用",
    en: "Proper Clipboard API use"
  },
  'ui.413': {
    ja: "：権限チェックとエラーハンドリング",
    en: ": check permissions and handle errors"
  },
  'ui.414': {
    ja: "フロントエンド保護",
    en: "Frontend protection"
  },
  'ui.415': {
    ja: "：重要な処理はサーバーサイドで実行",
    en: ": perform sensitive operations on the server"
  },
  'ui.416': {
    ja: "監査ログ",
    en: "Audit logs"
  },
  'ui.417': {
    ja: "：セキュリティイベントの記録と分析",
    en: ": record and analyze security events"
  },
  'ui.418': {
    ja: "依存関係管理",
    en: "Dependency management"
  },
  'ui.419': {
    ja: "：サードパーティライブラリの脆弱性管理",
    en: ": manage vulnerabilities in third-party libraries"
  },
  'ui.420': {
    ja: "セキュリティヘッダー",
    en: "Security headers"
  },
  'ui.421': {
    ja: "：包括的なHTTPセキュリティヘッダーの設定",
    en: ": configure comprehensive HTTP security headers"
  },
  'ui.422': {
    ja: "🏢 システム管理者向け運用対策",
    en: "🏢 Operational defenses for administrators"
  },
  'ui.423': {
    ja: "🛡️ 組織レベルでの対策",
    en: "🛡️ Organization-wide measures"
  },
  'ui.424': {
    ja: "ポリシー策定",
    en: "Define policies"
  },
  'ui.425': {
    ja: "：クリップボード使用に関するセキュリティポリシーの制定",
    en: ": establish policies for secure clipboard use"
  },
  'ui.426': {
    ja: "従業員教育",
    en: "Employee training"
  },
  'ui.427': {
    ja: "：定期的なセキュリティ意識向上トレーニング",
    en: ": provide regular security-awareness training"
  },
  'ui.428': {
    ja: "技術的制御",
    en: "Technical controls"
  },
  'ui.429': {
    ja: "：エンドポイント保護ソフトによるクリップボード監視",
    en: ": monitor the clipboard with endpoint protection software"
  },
  'ui.430': {
    ja: "ネットワーク監視",
    en: "Network monitoring"
  },
  'ui.431': {
    ja: "：異常な外部通信の検出と分析",
    en: ": detect and analyze unusual external traffic"
  },
  'ui.432': {
    ja: "：クリップボード関連の情報漏洩対応手順",
    en: ": define procedures for clipboard-related data leaks"
  },
  'ui.433': {
    ja: "📊 監視と分析",
    en: "📊 Monitoring and analysis"
  },
  'ui.434': {
    ja: "ログ分析",
    en: "Log analysis"
  },
  'ui.435': {
    ja: "：Webアプリケーションログでの異常検出",
    en: ": detect anomalies in web-application logs"
  },
  'ui.436': {
    ja: "ネットワーク分析",
    en: "Network analysis"
  },
  'ui.437': {
    ja: "：DLP (Data Loss Prevention) ツールの活用",
    en: ": use Data Loss Prevention (DLP) tools"
  },
  'ui.438': {
    ja: "エンドポイント監視",
    en: "Endpoint monitoring"
  },
  'ui.439': {
    ja: "：不審なクリップボード操作の検出",
    en: ": detect suspicious clipboard activity"
  },
  'ui.440': {
    ja: "脅威インテリジェンス",
    en: "Threat intelligence"
  },
  'ui.441': {
    ja: "：最新の攻撃手法情報の収集",
    en: ": collect information on current attack techniques"
  },
  'ui.442': {
    ja: "：セキュリティ対策の有効性評価",
    en: ": evaluate the effectiveness of defenses"
  },
  'ui.443': {
    ja: "🚨 インシデント対応",
    en: "🚨 Incident response"
  },
  'ui.444': {
    ja: "初動対応",
    en: "Initial response"
  },
  'ui.445': {
    ja: "：クリップボード攻撃が疑われる場合の緊急手順",
    en: ": follow emergency procedures when a clipboard attack is suspected"
  },
  'ui.446': {
    ja: "証拠保全",
    en: "Preserve evidence"
  },
  'ui.447': {
    ja: "：フォレンジック調査のためのデータ保存",
    en: ": retain data for forensic investigation"
  },
  'ui.448': {
    ja: "影響評価",
    en: "Assess impact"
  },
  'ui.449': {
    ja: "：漏洩したデータの範囲と影響度の評価",
    en: ": determine the scope and consequences of leaked data"
  },
  'ui.450': {
    ja: "復旧手順",
    en: "Recovery procedures"
  },
  'ui.451': {
    ja: "：システムとデータの安全な復旧プロセス",
    en: ": restore systems and data safely"
  },
  'ui.452': {
    ja: "事後対策",
    en: "Follow-up measures"
  },
  'ui.453': {
    ja: "：再発防止のための改善施策",
    en: ": improve controls to prevent recurrence"
  },
  'ui.454': {
    ja: "🚨 緊急時対応ガイド",
    en: "🚨 Emergency response guide"
  },
  'ui.455': {
    ja: "⚡ クリップボード攻撃を受けた場合",
    en: "⚡ If a clipboard attack occurs"
  },
  'ui.456': {
    ja: "即座に切断",
    en: "Disconnect immediately"
  },
  'ui.457': {
    ja: "：疑わしいサイトからすぐに離れる",
    en: ": leave the suspicious site at once"
  },
  'ui.458': {
    ja: "クリップボードクリア",
    en: "Clear the clipboard"
  },
  'ui.459': {
    ja: "：機密情報をクリップボードから削除",
    en: ": remove confidential data from the clipboard"
  },
  'ui.460': {
    ja: "パスワード変更",
    en: "Change passwords"
  },
  'ui.461': {
    ja: "：影響を受ける可能性のあるアカウント",
    en: ": secure potentially affected accounts"
  },
  'ui.462': {
    ja: "2要素認証確認",
    en: "Check two-factor authentication"
  },
  'ui.463': {
    ja: "：不審なログイン試行をチェック",
    en: ": review suspicious login attempts"
  },
  'ui.464': {
    ja: "ネットワーク遮断",
    en: "Disconnect the network"
  },
  'ui.465': {
    ja: "：必要に応じてネットワーク接続を切断",
    en: ": disconnect network access if necessary"
  },
  'ui.466': {
    ja: "セキュリティチーム連絡",
    en: "Contact the security team"
  },
  'ui.467': {
    ja: "：組織内での報告と連携",
    en: ": report and coordinate within the organization"
  },
  'ui.468': {
    ja: "：スクリーンショットやログの保存",
    en: ": save screenshots and logs"
  },
  'ui.469': {
    ja: "影響調査",
    en: "Investigate impact"
  },
  'ui.470': {
    ja: "：漏洩した可能性のあるデータの特定",
    en: ": identify potentially exposed data"
  },
  'ui.471': {
    ja: "🔍 被害確認の方法",
    en: "🔍 How to assess damage"
  },
  'ui.472': {
    ja: "ブラウザーの開発者ツール",
    en: "Browser developer tools"
  },
  'ui.473': {
    ja: "：Networkタブで不審な通信を確認",
    en: ": check the Network tab for suspicious requests"
  },
  'ui.474': {
    ja: "アカウント活動ログ",
    en: "Account activity logs"
  },
  'ui.475': {
    ja: "：各サービスでの異常なアクセス履歴をチェック",
    en: ": review unusual access history in each service"
  },
  'ui.476': {
    ja: "クレジットカード明細",
    en: "Credit-card statements"
  },
  'ui.477': {
    ja: "：不正利用がないかの確認",
    en: ": check for unauthorized charges"
  },
  'ui.478': {
    ja: "システムログ",
    en: "System logs"
  },
  'ui.479': {
    ja: "：企業環境での異常なアクセスパターン検出",
    en: ": detect unusual access patterns in enterprise systems"
  },
  'ui.480': {
    ja: "メール確認",
    en: "Check email"
  },
  'ui.481': {
    ja: "：アカウント変更通知などの有無",
    en: ": look for account-change notifications"
  },
  'ui.482': {
    ja: "📞 連絡先と報告",
    en: "📞 Contacts and reporting"
  },
  'ui.483': {
    ja: "組織内セキュリティチーム",
    en: "Internal security team"
  },
  'ui.484': {
    ja: "：社内CSIRT or情報システム部門",
    en: ": contact the CSIRT or IT department"
  },
  'ui.485': {
    ja: "関連サービス提供者",
    en: "Relevant service providers"
  },
  'ui.486': {
    ja: "：影響を受けた可能性のあるサービス",
    en: ": contact potentially affected services"
  },
  'ui.487': {
    ja: "法執行機関",
    en: "Law enforcement"
  },
  'ui.488': {
    ja: "：重大な被害の場合はサイバー犯罪相談窓口",
    en: ": contact cybercrime support in serious cases"
  },
  'ui.489': {
    ja: "セキュリティベンダー",
    en: "Security vendors"
  },
  'ui.490': {
    ja: "：インシデント対応支援の要請",
    en: ": request incident-response assistance"
  },
  'ui.491': {
    ja: "保険会社",
    en: "Insurer"
  },
  'ui.492': {
    ja: "：サイバー保険加入時の連絡",
    en: ": contact your cyber-insurance provider, if applicable"
  },
  'ui.493': {
    ja: "🔍 最新脅威動向と対策トレンド",
    en: "🔍 Threat trends and defensive developments"
  },
  'ui.494': {
    ja: "📈 クリップボード攻撃の主な傾向",
    en: "📈 Clipboard-attack trends"
  },
  'ui.495': {
    ja: "AI生成フィッシング",
    en: "AI-generated phishing"
  },
  'ui.496': {
    ja: "：より巧妙化するソーシャルエンジニアリング手法",
    en: ": increasingly sophisticated social engineering"
  },
  'ui.497': {
    ja: "モバイル端末への拡大",
    en: "Expansion to mobile devices"
  },
  'ui.498': {
    ja: "：スマートフォン・タブレットでの攻撃増加",
    en: ": increasing attacks on smartphones and tablets"
  },
  'ui.499': {
    ja: "ゼロクリック攻撃",
    en: "Zero-click attacks"
  },
  'ui.500': {
    ja: "：ユーザー操作を必要としない高度な攻撃",
    en: ": advanced attacks requiring no user action"
  },
  'ui.501': {
    ja: "サプライチェーン攻撃",
    en: "Supply-chain attacks"
  },
  'ui.502': {
    ja: "：信頼できるソフトウェアの悪用",
    en: ": abuse of trusted software"
  },
  'ui.503': {
    ja: "暗号資産狙い撃ち",
    en: "Cryptocurrency targeting"
  },
  'ui.504': {
    ja: "：ウォレットアドレスやシードフレーズの狙い撃ち",
    en: ": targeting wallet addresses and seed phrases"
  },
  'ui.505': {
    ja: "🛡️ 新しい防御技術",
    en: "🛡️ Emerging defenses"
  },
  'ui.506': {
    ja: "機械学習ベースの検知",
    en: "Machine-learning detection"
  },
  'ui.507': {
    ja: "：異常な貼り付けパターンの自動検出",
    en: ": automatically detect unusual paste patterns"
  },
  'ui.508': {
    ja: "ゼロトラストアーキテクチャ",
    en: "Zero-trust architecture"
  },
  'ui.509': {
    ja: "：すべての通信を検証する設計",
    en: ": verify all communication"
  },
  'ui.510': {
    ja: "行動分析",
    en: "Behavior analysis"
  },
  'ui.511': {
    ja: "：ユーザーの正常な行動パターンとの比較",
    en: ": compare activity with normal user behavior"
  },
  'ui.512': {
    ja: "リアルタイム脅威インテリジェンス",
    en: "Real-time threat intelligence"
  },
  'ui.513': {
    ja: "：最新攻撃手法の即座な対応",
    en: ": respond promptly to new attack techniques"
  },
  'ui.514': {
    ja: "分離実行環境",
    en: "Isolated execution environments"
  },
  'ui.515': {
    ja: "：仮想環境での安全な操作",
    en: ": operate safely in virtual environments"
  },
  'ui.516': {
    ja: "🎯 今後予想される脅威",
    en: "🎯 Potential future threats"
  },
  'ui.517': {
    ja: "量子コンピューティング対応",
    en: "Quantum-computing readiness"
  },
  'ui.518': {
    ja: "：既存暗号化の突破と対策",
    en: ": prepare for attacks on existing encryption"
  },
  'ui.519': {
    ja: "IoTデバイス連携攻撃",
    en: "IoT cross-device attacks"
  },
  'ui.520': {
    ja: "：複数デバイス間でのクリップボード共有悪用",
    en: ": abuse clipboard sharing across devices"
  },
  'ui.521': {
    ja: "VR/AR環境での攻撃",
    en: "Attacks in VR/AR environments"
  },
  'ui.522': {
    ja: "：新しいインターフェースでの脅威",
    en: ": threats through new interfaces"
  },
  'ui.523': {
    ja: "生体認証の回避",
    en: "Bypassing biometrics"
  },
  'ui.524': {
    ja: "：バイオメトリクス技術への対応",
    en: ": respond to threats against biometric technology"
  },
  'ui.525': {
    ja: "クラウドサービス悪用",
    en: "Cloud-service abuse"
  },
  'ui.526': {
    ja: "：合法的サービスを使った攻撃手法",
    en: ": attacks using legitimate services"
  },
  'ui.527': {
    ja: "✅ セキュリティチェックリスト",
    en: "✅ Security checklists"
  },
  'ui.528': {
    ja: "個人ユーザー向けチェック項目",
    en: "Checklist for individual users"
  },
  'ui.529': {
    ja: "👤 個人用チェック",
    en: "👤 User checklist"
  },
  'ui.530': {
    ja: "開発者向けチェック項目",
    en: "Checklist for developers"
  },
  'ui.531': {
    ja: "💻 開発者用チェック",
    en: "💻 Developer checklist"
  },
  'ui.532': {
    ja: "システム管理者向けチェック項目",
    en: "Checklist for system administrators"
  },
  'ui.533': {
    ja: "🏢 管理者用チェック",
    en: "🏢 Administrator checklist"
  },
  'ui.534': {
    ja: "🔄 リセット",
    en: "🔄 Reset"
  },
  'ui.535': {
    ja: "📋 上のボタンからセキュリティチェックリストを表示できます。自身の役割に応じて確認してください。",
    en: "📋 Use the buttons above to show the checklist for your role."
  },
  'ui.536': {
    ja: "❓ ClipThreat Studio ヘルプ",
    en: "❓ ClipThreat Studio help"
  },
  'ui.537': {
    ja: "閉じる",
    en: "Close"
  },
  'ui.538': {
    ja: "🎯 このツールについて",
    en: "🎯 About this tool"
  },
  'ui.539': {
    ja: "ClipThreat Studioは、クリップボード関連のセキュリティ脅威を体験・学習するための教育ツールです。",
    en: "ClipThreat Studio is an educational tool for safely experiencing and learning about clipboard s" +
      "ecurity threats."
  },
  'ui.540': {
    ja: "📋 各タブの機能",
    en: "📋 Tab features"
  },
  'ui.541': {
    ja: "：クリップボードAPIの基本的な読み書き操作を体験",
    en: ": explore basic Clipboard API reading and writing"
  },
  'ui.542': {
    ja: "：クリップボード内容の自動監視機能を体験",
    en: ": try automatic clipboard monitoring"
  },
  'ui.543': {
    ja: "：貼り付け内容の傍受攻撃を体験",
    en: ": explore interception of pasted content"
  },
  'ui.544': {
    ja: "：偽の修復ボタンによる攻撃手法を体験",
    en: ": explore attacks using fake repair buttons"
  },
  'ui.545': {
    ja: "：貼り付けと同時に外部送信される攻撃を体験",
    en: ": explore attacks that send data immediately after pasting"
  },
  'ui.546': {
    ja: "：Unicode文字を悪用した攻撃手法を体験",
    en: ": explore attacks that abuse Unicode characters"
  },
  'ui.547': {
    ja: "：包括的なセキュリティ対策ガイド",
    en: ": read a comprehensive security guide"
  },
  'ui.548': {
    ja: "🔧 使い方のコツ",
    en: "🔧 Learning tips"
  },
  'ui.549': {
    ja: "チュートリアル",
    en: "Tutorials"
  },
  'ui.550': {
    ja: "：各タブにある「実際に試してみよう！」から始めてください",
    en: ": begin with “Try it yourself!” in each tab"
  },
  'ui.551': {
    ja: "ステップ進行",
    en: "Step-by-step learning"
  },
  'ui.552': {
    ja: "：OKボタンを押してステップを進めながら学習できます",
    en: ": use the confirmation buttons to move through the steps"
  },
  'ui.553': {
    ja: "リセット機能",
    en: "Reset"
  },
  'ui.554': {
    ja: "：各タブのリセットボタンで初期状態に戻せます",
    en: ": return to the initial state with each tab’s reset button"
  },
  'ui.555': {
    ja: "詳細調査",
    en: "Detailed inspection"
  },
  'ui.556': {
    ja: "：文字細工タブではWeirdString Inspectorと連携できます",
    en: ": open WeirdString Inspector from the Unicode tricks tab"
  },
  'ui.557': {
    ja: "⚠️ 注意事項",
    en: "⚠️ Important notes"
  },
  'ui.558': {
    ja: "このツールは",
    en: "Use this tool"
  },
  'ui.559': {
    ja: "教育目的",
    en: "for education only"
  },
  'ui.560': {
    ja: "でのみ使用してください",
    en: "and follow safe learning practices."
  },
  'ui.561': {
    ja: "実際の攻撃には使用しないでください",
    en: "Never use it for real attacks."
  },
  'ui.562': {
    ja: "HTTPS環境でのみ正常に動作します",
    en: "Use HTTPS for normal operation."
  },
  'ui.563': {
    ja: "ブラウザーによってはクリップボード権限の許可が必要です",
    en: "Some browsers require clipboard permission."
  },
  'ui.564': {
    ja: "🔗 関連リンク",
    en: "🔗 Related links"
  },
  'ui.565': {
    ja: "GitHubリポジトリ",
    en: "GitHub repository"
  },
  'ui.566': {
    ja: "生成AIで作るセキュリティツール100",
    en: "100 Security Tools with Generative AI"
  },
  'ui.567': {
    ja: "🔗 GitHubリポジトリはこちら（",
    en: "🔗 GitHub repository ("
  },
};

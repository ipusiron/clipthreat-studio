// Japanese UI messages. HTML interpolation is escaped at the call site.
export const messages = {
  "clipboard.cleared": "クリップボードを空に戻しました。",
  "clipboard.unavailable": "クリップボードを空にできませんでした。権限または対応状況を確認し、手動で空にしてください。",
  "clickfix.safe": "これは ClipThreat Studio のデモです。攻撃コマンドはクリップボードに書き込まれていません。",
  "clickfix.safeTitle": "無害な説明文だけをコピーしました",
  "type.url": "URL",
  "type.base64": "Base64?",
  "type.emailWatch": "Email",
  "type.cardWatch": "カード番号?",
  "type.text": "テキスト",
  "type.card": "クレジットカード番号",
  "type.email": "メールアドレス",
  "type.password": "パスワード",
  "type.openai": "OpenAI APIキー",
  "type.slack": "Slack Bot Token",
  "type.github": "GitHub Personal Access Token",
  "type.token": "APIキー/トークン",
  "type.env": "環境変数設定",
  "type.secret": "機密設定情報",
  "type.ssh": "SSH秘密鍵",
  "char.control": "制御文字",
  "char.visible": "",
  "clickfix.masked": [
    "本物の攻撃はここに実行コマンドを仕込みます：",
    " …（危険部分は伏せ字）"
  ],
  "clipboard.1": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>おめでとうございます！</strong><br>\n" +
    "            クリップボード基本操作をマスターしました！<br>\n" +
    "            📋 読み取り・書き込み・クリアの操作方法を習得<br>\n" +
    "            🔒 セキュリティの重要性も理解<br>\n" +
    "            次は他のタブで更なる脅威について学習しましょう！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "clipboard.2": "<div class=\"message info\">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>",
  "clipboard.3": "<div class=\"message info\">📋 デモをリセットしました。基本的なクリップボード操作を体験してください。</div>",
  "clipboard.4": "クリップボードのクリアに失敗しました。",
  "clipboard.5": "クリップボードをクリアしました。",
  "clipboard.6": "クリップボードの読み取りに失敗しました。ブラウザーの許可ダイアログで「許可」を選択してください。",
  "clipboard.7": "セキュリティエラー：HTTPSで接続されているか確認してください。<br><small>クリップボードAPIはHTTPS接続が必須です。</small>",
  "clipboard.8": "クリップボードの読み取り権限がありません。「許可」をクリックしてください。<br><small>※これはブラウザーのセキュリティ機能で、悪意あるサイトが勝手にクリップボードを読み取" +
    "ることを防いでいます。</small>",
  "clipboard.9": "クリップボードから読み取りました",
  "clipboard.10": "クリップボードは空です。",
  "clipboard.11": "クリップボードへの書き込みに失敗しました。HTTPSで接続されているか確認してください。",
  "clipboard.12": "クリップボードに書き込みました",
  "clipboard.13": "書き込むテキストを入力してください。",
  "clipboard.14": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\"><code>",
    "</code></div>\n" +
    "          <div class=\"meta\">\n" +
    "            <span>文字数: ",
    "</span>\n" +
    "            <span>行数: ",
    "</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"action-explanation\">\n" +
    "          ",
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "clipboard.15": "<small>✔️ テキストエリアに反映されました</small>",
  "clipboard.16": "<small>✔️ 他のアプリでCtrl+Vで貼り付け可能です</small>",
  "clipboard.17": "クリップボードに書き込みました",
  "watch.1": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>おめでとうございます！監視モードをマスターしました！</strong><br>\n" +
    "            📡 リアルタイム監視の仕組みを理解<br>\n" +
    "            🔍 データタイプ判別機能を体験<br>\n" +
    "            ⚙️ 監視間隔の調整方法を習得<br>\n" +
    "            次は他のタブでより高度な脅威について学習しましょう！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "watch.2": "タブがアクティブになりました。",
  "watch.3": "タブが非アクティブになりました。監視は継続しますが、一部ブラウザーではクリップボードアクセスが制限される場合があります。",
  "watch.4": "監視を停止しました",
  "watch.5": [
    "監視を開始しました (間隔: ",
    "ms)"
  ],
  "watch.6": "クリップボードの許可を確認中...",
  "watch.7": "ブラウザーの許可ダイアログで「許可」をクリックしてください。",
  "watch.8": "監視中にエラーが継続しています。監視を停止します。",
  "watch.9": "クリップボードの読み取り権限がありません。ブラウザーの許可ダイアログで「許可」をクリックしてください。",
  "watch.10": [
    "変化検出 - ",
    "<br><div class=\"preview-content\">",
    "</div>"
  ],
  "watch.11": [
    "文字数: ",
    " | タイプ: ",

  ],
  "watch.12": "<div class=\"log-empty\">📋 まだログがありません</div>",
  "watch.13": [
    "📊 監視状態：",
    " | 検出数：",
    " | 経過時間：",
    "秒"
  ],
  "watch.14": "⚪ 停止中",
  "watch.15": "🔴 監視中",
  "sniff.1": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">✅ pasteイベント検知 #",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\"><code>",
    "</code></div>\n" +
    "          <div class=\"meta\">\n" +
    "            <span>文字数: ",
    "</span>\n" +
    "            <span>データタイプ: ",
    "</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"action-explanation\">\n" +
    "          <small>⚠️ 実際の攻撃では、この情報が攻撃者のサーバーに送信されます</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "sniff.2": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>おめでとうございます！</strong><br>\n" +
    "            pasteイベントスニッフィングの仕組みを完全理解！<br>\n" +
    "            🎭 貼り付け内容の傍受方法を体験<br>\n" +
    "            🔍 データタイプ判別機能を確認<br>\n" +
    "            ⚠️ セキュリティリスクの深刻さを認識<br>\n" +
    "            今後は信頼できないサイトでの貼り付けに注意しましょう！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "sniff.3": "<div class=\"message info\">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>",
  "sniff.4": "<div class=\"message info\">📋 デモをリセットしました。上の入力欄に何かを貼り付けて、pasteイベントスニッフィングを体験してください。</div>",
  "clickfix.1": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 ClickFix攻撃チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>🎓 完璧！ClickFix攻撃とその対策を完全にマスターしました！</strong><br>\n" +
    "            ✅ 攻撃の仕組みと視覚的トリックを理解<br>\n" +
    "            ✅ 段階的な攻撃手法と危険性を体験<br>\n" +
    "            ✅ キャンセルボタンの罠も認識<br>\n" +
    "            ✅ 包括的な対策方法も学習済み<br><br>\n" +
    "            <strong>🛡️ あなたは今、ClickFix攻撃から身を守る知識と技術を身に付けました。</strong><br>\n" +
    "            実際にこのような攻撃に遭遇した際は、学習した対策を思い出して適切に対処してください！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "clickfix.2": "<div class=\"message info\">📋 「修復する」ボタンをクリックして攻撃の流れを体験してください。</div>",
  "clickfix.3": "<div class=\"message info\">📋 デモをリセットしました。「修復する」ボタンをクリックして攻撃の流れを体験してください。</div>",
  "clickfix.4": "<div class=\"legacy-style-17\">\n" +
    "         <strong>⚠️ 注意：</strong>一部のClickFix攻撃では、「キャンセル」や「後で」ボタンでも攻撃が実行される場合があります。<br>\n" +
    "         安全な対処法は、<strong>ページを閉じる</strong>ことです。\n" +
    "       </div>",
  "clickfix.5": "キャンセルボタンの罠",
  "clickfix.6": "<div class=\"legacy-style-18\">\n" +
    "         <strong>🎓 ここで学習ポイント：</strong><br>\n" +
    "         • 一見正当な「修復」ボタンが攻撃の入り口<br>\n" +
    "         • クリップボードに危険なコマンドが仕込まれる<br>\n" +
    "         • ユーザーが手動で実行することで攻撃完了<br>\n" +
    "         • 技術的知識がなくても簡単に騙される<br><br>\n" +
    "         <strong>🛡️ 対策：</strong><br>\n" +
    "         • 突然のエラーメッセージは疑う<br>\n" +
    "         • PowerShellコマンドの実行前に内容を確認<br>\n" +
    "         • 公式サポートを通じて問題を解決する\n" +
    "       </div>",
  "clickfix.7": "攻撃の完了と教育的解説",
  "clickfix.8": "本物の攻撃はOSの実行画面への貼り付けを要求します。指示に従わず、公式の窓口で確認してください。このデモでは実行操作を行いません。",
  "clickfix.9": "ユーザーへの実行指示",
  "clickfix.10": "❌ コピーに失敗しました。ブラウザーの制限またはユーザー操作が必要です。<br>\n" +
    "         実際の攻撃では、この段階で成功することが多いです。",
  "clickfix.11": "クリップボードコピー失敗",
  "clickfix.12": [
    "このデモでは無害な説明文だけをコピーします。",

  ],
  "clickfix.13": "無害な説明文をコピー",
  "clickfix.14": "ユーザーは一見無害な修復ボタンをクリックしました。<br>この時点で攻撃が開始されます。",
  "clickfix.15": "ユーザーが「修復」ボタンをクリック",
  "clickfix.16": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">",
    " ステップ",
    ": ",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\">",
    "</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "autopaste.1": "<div class=\"message info\">📋 上の入力欄に何かを貼り付けて、自動送信攻撃を体験してください。</div>",
  "autopaste.2": "<div class=\"message info\">📋 デモをリセットしました。上の入力欄に何かを貼り付けて、自動送信攻撃を体験してください。</div>",
  "autopaste.3": "<div class=\"message info\">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>",
  "autopaste.4": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 自動送信攻撃チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>🎓 完璧！自動送信攻撃の危険性を完全理解しました！</strong><br>\n" +
    "            ✅ 即座に外部送信される仕組みを理解<br>\n" +
    "            ✅ 開発者が狙われやすいデータタイプを認識<br>\n" +
    "            ✅ pasteスニフィングとの違いを把握<br>\n" +
    "            ✅ リアルタイム送信の深刻さを体験<br><br>\n" +
    "            <strong>🛡️ 開発者として重要な教訓：</strong><br>\n" +
    "            信頼できないサイトではAPIキーや設定情報を貼り付けないよう注意しましょう！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "autopaste.5": [
    "<div class=\"legacy-style-18\">\n" +
    "           <strong>🎓 攻撃完了 - 学習ポイント:</strong><br>\n" +
    "           • 一回の貼り付けで機密情報が盗取完了<br>\n" +
    "           • ユーザーは攻撃に全く気づかない<br>\n" +
    "           • ",
    "の漏洩により以下のリスクが発生:<br>\n" +
    "           ",
    "<br><br>\n" +
    "           <strong>🛡️ 対策の重要性:</strong><br>\n" +
    "           信頼できないサイトでは貴重な情報を貼り付けないことが重要です。\n" +
    "         </div>"
  ],
  "autopaste.6": "&nbsp;&nbsp;→ プライバシー侵害、情報悪用",
  "autopaste.7": "&nbsp;&nbsp;→ アカウント乗っ取り、不正ログイン",
  "autopaste.8": "パスワード",
  "autopaste.9": "&nbsp;&nbsp;→ 本番環境への不正アクセス、設定改ざん",
  "autopaste.10": "環境変数設定",
  "autopaste.11": "&nbsp;&nbsp;→ データベース侵入、顧客情報漏洩",
  "autopaste.12": "機密設定情報",
  "autopaste.13": "&nbsp;&nbsp;→ サーバー侵入、システム全体の乗っ取り",
  "autopaste.14": "SSH秘密鍵",
  "autopaste.15": "&nbsp;&nbsp;→ サービス不正利用、高額課金、データ漏洩",
  "autopaste.16": "APIキー",
  "autopaste.17": "攻撃完了と影響分析",
  "autopaste.18": [
    "外部送信の危険性を説明する模擬表示です。実際の通信は行いません。<br>内容: <code>",
    "</code><br>データタイプ: ",

  ],
  "autopaste.19": "外部サーバーへ自動送信",
  "autopaste.20": [
    "クリップボードから機密データを抽出中...<br>\n" +
    "         <div class=\"legacy-style-19\">\n" +
    "           <strong>抽出されたデータ:</strong><br>\n" +
    "           内容: <code>",
    "</code><br>\n" +
    "           データタイプ: ",
    "<br>\n" +
    "           文字数: ",
    "\n" +
    "         </div>\n" +
    "         <strong>⚠️ 危険度判定:</strong> ",

  ],
  "autopaste.21": "🟡 中危険",
  "autopaste.22": "🟠 高危険",
  "autopaste.23": "環境変数設定",
  "autopaste.24": "パスワード",
  "autopaste.25": "🔴 最高危険",
  "autopaste.26": "機密設定情報",
  "autopaste.27": "SSH秘密鍵",
  "autopaste.28": "APIキー",
  "autopaste.29": "データ抽出・分析",
  "autopaste.30": "ユーザーの貼り付け操作を検知しました。<br>この瞬間から攻撃が開始されます。",
  "autopaste.31": "pasteイベント検知",
  "autopaste.32": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">",
    " ステップ",
    ": ",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\">",
    "</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "weirdchar.1": "<div class=\"message info\">📋 各種Unicode攻撃を体験してください。まずはチュートリアルから始めましょう！</div>",
  "weirdchar.2": "<div class=\"message info\">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>",
  "weirdchar.3": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">🎉 Unicode文字細工攻撃チュートリアル完了！</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview legacy-style-16\">\n" +
    "            <strong>🎓 素晴らしい！Unicode攻撃の深刻さを完全理解しました！</strong><br>\n" +
    "            ✅ ゼロ幅スペース攻撃の仕組みを体験<br>\n" +
    "            ✅ RTL文字による拡張子偽装を確認<br>\n" +
    "            ✅ 同形異義文字攻撃の危険性を認識<br>\n" +
    "            ✅ 複数の攻撃パターンを理解<br><br>\n" +
    "            <strong>🛡️ これで見た目に騙されない知識を身に付けました。</strong><br>\n" +
    "            今後はファイル名やURLの見た目だけでなく、技術的な検証も心がけましょう！\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "weirdchar.4": "<div class=\"message info\">📋 デモをリセットしました。上のボタンで各種Unicode攻撃を体験してください。</div>",
  "weirdchar.5": "❌ コピーに失敗しました。",
  "weirdchar.6": "👥 キリル文字「а」（U+0430）がラテン文字「a」（U+0061）そっくりに表示されます。IDN偽装攻撃の典型例です。",
  "weirdchar.7": "同形異義文字攻撃",
  "weirdchar.8": "❌ コピーに失敗しました。",
  "weirdchar.9": "🌐 一見正常なURLですが、キリル文字「оо」（U+043E）がラテン文字「oo」（U+006F）に偽装されています。フィッシング詐欺に悪用されます。",
  "weirdchar.10": "スクリプト混在攻撃",
  "weirdchar.11": "❌ コピーに失敗しました。",
  "weirdchar.12": "🚨 実行ファイル（.exe）が画像ファイル（.png）に見えるトリックです。マルウェア配布に頻繁に悪用されます！",
  "weirdchar.13": "RTL文字拡張子偽装",
  "weirdchar.14": "❌ コピーに失敗しました。",
  "weirdchar.15": "⚠️ 見た目上同じファイル名でも、検索や照合で異なる結果となります。フィルタリング回避やファイル偽装に悪用される可能性があります。",
  "weirdchar.16": "ゼロ幅スペース攻撃",
  "weirdchar.17": "ゼロ幅",
  "weirdchar.18": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">",
    " ",
    " #",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\">\n" +
    "            <strong>見た目:</strong> <code>",
    "</code><br>\n" +
    "            <strong>実際:</strong> <code>",
    "</code><br>\n" +
    "            <strong>Unicode詳細:</strong> <code class=\"legacy-style-20\">",
    "</code>\n" +
    "            <div class=\"legacy-style-21\">\n" +
    "              <strong>🔍 詳細分析:</strong> WeirdString Inspector で詳しく調査\n" +
    "              <button type=\"button\" class=\"inspector-button legacy-style-22\"",
    "",
    " \n" +
    "                     >\n" +
    "                🔍 WeirdString Inspectorで調査\n" +
    "              </button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"meta\">\n" +
    "            <span>文字数: ",
    "</span>\n" +
    "            <span>バイト数: ",
    "</span>\n" +
    "            <span>攻撃タイプ: ",
    "</span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"action-explanation\">\n" +
    "          <small>",
    "</small>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "tips.1": "<div class=\"message info\">📋 上のボタンからセキュリティチェックリストを表示できます。自身の役割に応じて確認してください。</div>",
  "tips.2": "組織レベルでのクリップボードセキュリティ対策と運用体制を確認しましょう。",
  "tips.3": "システム管理者向けセキュリティチェックリスト",
  "tips.4": "重大なセキュリティインシデント発生時の事業継続計画がある",
  "tips.5": "事業継続計画",
  "tips.6": "セキュリティ対策の有効性を定期的に評価・改善している",
  "tips.7": "定期監査",
  "tips.8": "最新の攻撃手法情報を定期的に収集・分析している",
  "tips.9": "脅威インテリジェンス",
  "tips.10": "Data Loss Prevention ツールで機密情報の流出を防いでいる",
  "tips.11": "DLP導入",
  "tips.12": "Webアプリケーションログの異常検出システムを運用している",
  "tips.13": "ログ分析",
  "tips.14": "クリップボード関連のセキュリティインシデント対応手順が確立されている",
  "tips.15": "インシデント対応体制",
  "tips.16": "異常な外部通信を検出する監視システムを運用している",
  "tips.17": "ネットワーク監視",
  "tips.18": "クリップボード監視機能を持つEDRソリューションを導入している",
  "tips.19": "エンドポイント保護",
  "tips.20": "定期的なセキュリティ意識向上研修を実施している",
  "tips.21": "従業員教育",
  "tips.22": "クリップボード使用に関する組織のセキュリティポリシーを策定・周知している",
  "tips.23": "セキュリティポリシー",
  "tips.24": "Webアプリケーション開発におけるクリップボード関連のセキュリティ実装を確認しましょう。",
  "tips.25": "開発者向けセキュリティチェックリスト",
  "tips.26": "セキュリティインシデント発生時の対応手順が文書化されている",
  "tips.27": "インシデント対応",
  "tips.28": "pasteイベントハンドラーを含むセキュリティ関連コードのレビュー体制がある",
  "tips.29": "コードレビュー",
  "tips.30": "定期的な脆弱性スキャンとペネトレーションテストを実施している",
  "tips.31": "セキュリティテスト",
  "tips.32": "サードパーティライブラリの脆弱性を定期的にチェックしている",
  "tips.33": "依存関係管理",
  "tips.34": "セキュリティイベントの適切な記録と分析システムを構築している",
  "tips.35": "監査ログ",
  "tips.36": "短時間での大量リクエストを制限するAPI設計を実装している",
  "tips.37": "機密情報を含まないエラーメッセージとログ出力を実装している",
  "tips.38": "エラーハンドリング",
  "tips.39": "すべての通信をHTTPS化し、クリップボードAPIを安全に使用している",
  "tips.40": "HTTPS強制",
  "tips.41": "pasteイベントで取得したデータに対して厳密なバリデーションを実装している",
  "tips.42": "入力値検証",
  "tips.43": "Content Security Policyを適切に設定し、外部への不正通信をブロックしている",
  "tips.44": "CSP設定",
  "tips.45": "日常のクリップボード使用における個人レベルでのセキュリティ対策を確認しましょう。",
  "tips.46": "個人ユーザー向けセキュリティチェックリスト",
  "tips.47": "最新のサイバー攻撃手法について定期的に情報収集している",
  "tips.48": "セキュリティ教育",
  "tips.49": "重要なデータは定期的にバックアップを取っている",
  "tips.50": "バックアップ",
  "tips.51": "怪しいメールのリンクから貼り付け操作を求められても応じない",
  "tips.52": "フィッシング対策",
  "tips.53": "共有PCやカフェのWi-Fiで機密情報を扱わない",
  "tips.54": "公共端末利用",
  "tips.55": "ブラウザーとセキュリティソフトを最新版に保っている",
  "tips.56": "ソフトウェア更新",
  "tips.57": "機密情報使用後は必ずクリップボードをクリアしている",
  "tips.58": "クリップボード管理",
  "tips.59": "重要なアカウントには2要素認証を設定している",
  "tips.60": "2要素認証",
  "tips.61": "重要な情報を貼り付ける前にURLとSSL証明書を確認している",
  "tips.62": "サイト確認",
  "tips.63": "パスワードマネージャーを使用し、手動コピペを最小限に抑えている",
  "tips.64": "パスワード管理",
  "tips.65": "クリップボードアクセス権限を信頼できるサイトのみに制限している",
  "tips.66": "ブラウザー設定",
  "tips.67": [
    "\n" +
    "      <div class=\"clipboard-result\">\n" +
    "        <div class=\"action-info\">\n" +
    "          <span class=\"action\">✅ ",
    "</span>\n" +
    "          <span class=\"timestamp\">",
    "</span>\n" +
    "        </div>\n" +
    "        <div class=\"content-info\">\n" +
    "          <div class=\"preview\">\n" +
    "            <p class=\"legacy-style-23\"><strong>",
    "</strong></p>\n" +
    "            ",
    "\n" +
    "            <div class=\"legacy-style-24\">\n" +
    "              💡 <strong>使い方：</strong>各項目をチェックして、自身のセキュリティ対策状況を確認してください。すべてチェックできるよう対策を進めま" +
    "しょう。\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    "
  ],
  "tips.68": "低優先度",
  "tips.69": "中優先度",
  "tips.70": "高優先度",
};

Object.assign(messages, {
  'paste.warning': '危険の兆候あり。内容と貼り付け先を確認してください。',
  'paste.clear': '問題なし。今回の検出対象は見つかりませんでした。安全を保証する判定ではありません。',
  'paste.tooLong': '入力は100,000コードポイント以内にしてください。',
  'paste.invisible': '見えない文字',
  'paste.bidi': '方向の制御文字',
  'paste.mixed': '文字体系の混在（ホモグラフの疑い）',
  'paste.none': 'なし',
  'paste.detected': ['検出：', '件。位置（1文字目から）：', ''],
  'paste.denied': '読み取れませんでした。権限を確認するか、入力欄に手入力してください。',
  'paste.reset': '入力と結果を初期化しました。クリップボードは変更していません。'
});

export function m(key, values = []) {
  const message = messages[key];
  if (message === undefined) throw new Error('Unknown message: ' + key);
  return Array.isArray(message)
    ? message.map((part, index) => part + (values[index] ?? '')).join('')
    : message;
}

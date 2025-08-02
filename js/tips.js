// tips.js - セキュリティTipsの挿入処理

window.addEventListener("DOMContentLoaded", () => {
  const tipsSection = document.getElementById("tab-tips");

  if (!tipsSection) return;

  const tips = [
    "📋 クリップボードの読み取りには通常、ユーザー操作（クリックなど）が必要です。",
    "🔒 `navigator.clipboard` は HTTPS ページでのみ有効です。",
    "🎭 `paste` イベントを使えば、ユーザーが貼り付けた内容を奪うことができます。",
    "🧲 クリップボードは監視・改ざんされる可能性があるため、貼り付け操作には注意が必要です。",
    "✅ セキュリティ上重要なデータ（パスワード、トークンなど）は極力オートフィルで入力し、コピー＆ペーストを避けましょう。",
    "⚠️ 不審なボタンを押す前に、本当に信頼できるかを確認しましょう。ClickFix攻撃に注意。",
    "🕵️‍♂️ JavaScript だけで「コピー」や「貼り付け」の挙動を操作できます。コードを過信しないこと。",
    "👀 ユーザー操作がトリガーになっているからといって、安全とは限りません。"
  ];

  const ul = document.createElement("ul");
  ul.classList.add("tips-list");

  tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    ul.appendChild(li);
  });

  tipsSection.appendChild(ul);
});

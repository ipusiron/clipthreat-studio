// clipboard.js - クリップボードの読み取り・書き込み処理

window.addEventListener("DOMContentLoaded", () => {
  const inputArea = document.getElementById("clipboardInput");
  const outputBox = document.getElementById("clipboardOutput");

  // 書き込み処理
  window.writeClipboard = function () {
    const text = inputArea.value;
    if (!text) {
      outputBox.innerHTML = "⚠️ 書き込むテキストが空です。";
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      outputBox.innerHTML = `✅ テキストをクリップボードにコピーしました：<br><code>${text}</code>`;
    }).catch(err => {
      outputBox.innerHTML = "❌ クリップボードへの書き込みに失敗しました。ブラウザの制限がある可能性があります。";
      console.error("Clipboard write failed:", err);
    });
  };

  // 読み取り処理
  window.readClipboard = function () {
    navigator.clipboard.readText().then(text => {
      outputBox.innerHTML = `📋 クリップボードの現在の内容：<br><code>${text}</code>`;
    }).catch(err => {
      outputBox.innerHTML = "❌ クリップボードの読み取りに失敗しました。ユーザー操作が必要な場合があります。";
      console.error("Clipboard read failed:", err);
    });
  };
});

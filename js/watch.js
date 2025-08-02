// watch.js - クリップボードの内容を定期監視する処理

window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("watchToggle");
  const logArea = document.getElementById("watchLog");

  let intervalId = null;
  let lastClipboardContent = "";

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      logArea.innerHTML = "📡 監視を開始しました...";
      intervalId = setInterval(async () => {
        try {
          const current = await navigator.clipboard.readText();

          if (current !== lastClipboardContent) {
            const timestamp = new Date().toLocaleTimeString();
            logArea.innerHTML += `<br>🕒 ${timestamp} - 変化検出：<code>${current}</code>`;
            lastClipboardContent = current;
          }
        } catch (err) {
          logArea.innerHTML += "<br>❌ 監視中にエラーが発生しました（ブラウザー制限の可能性）";
          console.error("Clipboard read error:", err);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
      intervalId = null;
      logArea.innerHTML += "<br>🛑 監視を停止しました。";
    }
  });
});

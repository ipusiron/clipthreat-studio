// weirdchar.js - ゼロ幅スペースや制御文字を含むテキストのコピー処理

window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("weirdOutput");

  window.copyWeirdText = function () {
    // 表示上は "flag.txt" に見えるが、実際はゼロ幅スペースを含む
    const invisibleFlag = "f\u200Bl\u200Ba\u200Bg.txt"; // U+200B ゼロ幅スペース

    // 右から左文字（U+202E）で拡張子を偽装（例：jpg.exe を exe.jpg に見せる）
    const rtlTrick = "evil\u202Egnp.exe"; // 表示上は evilexe.png に見える

    const payload = `不正文字列例:\n1. invisible: ${invisibleFlag}\n2. RTL: ${rtlTrick}`;

    navigator.clipboard.writeText(payload).then(() => {
      output.innerHTML = `
        ✅ 以下の不正文字列がクリップボードにコピーされました：<br><br>
        <strong>1. ゼロ幅スペース混入:</strong><br>
        <code>${invisibleFlag}</code><br><br>
        <strong>2. 右から左制御文字（RTL）:</strong><br>
        <code>${rtlTrick}</code><br><br>
        ⚠️ 貼り付け時に拡張子やファイル名が偽装される可能性があります。
      `;
    }).catch(err => {
      output.innerHTML = "❌ コピーに失敗しました。";
      console.error("Clipboard write failed:", err);
    });
  };
});

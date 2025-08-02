// main.js - タブ切り替え制御（ClipThreat Studio）

window.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      // ボタンの active を更新
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // コンテンツの active を更新
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });
  });
});

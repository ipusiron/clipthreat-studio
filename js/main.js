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

// ヘルプモーダル制御
window.showHelpModal = function() {
  const helpModal = document.getElementById('helpModal');
  helpModal.style.display = 'flex';
  
  // Escapeキーでモーダルを閉じる
  document.addEventListener('keydown', handleEscapeKey);
  
  // モーダル外クリックで閉じる
  helpModal.addEventListener('click', handleModalOutsideClick);
};

window.closeHelpModal = function() {
  const helpModal = document.getElementById('helpModal');
  helpModal.style.display = 'none';
  
  // イベントリスナーを削除
  document.removeEventListener('keydown', handleEscapeKey);
  helpModal.removeEventListener('click', handleModalOutsideClick);
};

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeHelpModal();
  }
}

function handleModalOutsideClick(event) {
  if (event.target === event.currentTarget) {
    closeHelpModal();
  }
}

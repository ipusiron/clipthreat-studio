import { setDisplay } from './ui.js';
import './i18n.js';
// main.js - タブ切り替え制御（ClipThreat Studio）

window.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;
      const previous = document.querySelector('.tab-content.active');
      if (previous && previous.id !== targetId) previous.dispatchEvent(new Event('demoleave'));

      // ボタンの active を更新
      tabButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute('aria-selected', String(btn === button));
        btn.tabIndex = btn === button ? 0 : -1;
      });
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

  tabButtons.forEach((button, index) => {
    button.addEventListener('keydown', event => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabButtons.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabButtons.length) % tabButtons.length;
      tabButtons[next].focus();
      tabButtons[next].click();
    });
  });

  // Bind the fixed markup actions after all modules have initialized.
  document.querySelectorAll('[data-action]').forEach(element => {
    element.addEventListener('click', () => {
      const action = window[element.dataset.action];
      if (typeof action !== 'function') return;
      action(element.dataset.self ? element : undefined);
      if (element.classList.contains('accordion-header')) {
        element.setAttribute('aria-expanded', String(element.nextElementSibling.classList.contains('open')));
      }
    });
    if (element.classList.contains('accordion-header')) {
      element.setAttribute('aria-controls', element.nextElementSibling.id);
      element.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          element.click();
        }
      });
    }
  });
});

// ヘルプモーダル制御
let previousFocus = null;
window.showHelpModal = function() {
  const helpModal = document.getElementById('helpModal');
  previousFocus = document.activeElement;
  setDisplay(helpModal, 'flex');
  for (const sibling of document.body.children) if (sibling !== helpModal) sibling.inert = true;
  helpModal.querySelector('.modal-close').focus();

  // Escapeキーでモーダルを閉じる
  document.addEventListener('keydown', handleEscapeKey);

  // モーダル外クリックで閉じる
  helpModal.addEventListener('click', handleModalOutsideClick);
};

window.closeHelpModal = function() {
  const helpModal = document.getElementById('helpModal');
  setDisplay(helpModal, 'none');
  for (const sibling of document.body.children) sibling.inert = false;
  previousFocus?.focus();

  // イベントリスナーを削除
  document.removeEventListener('keydown', handleEscapeKey);
  helpModal.removeEventListener('click', handleModalOutsideClick);
};

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeHelpModal();
  }
  if (event.key === 'Tab') {
    const elements = [...document.querySelectorAll('#helpModal button, #helpModal a[href]')];
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function handleModalOutsideClick(event) {
  if (event.target === event.currentTarget) {
    closeHelpModal();
  }
}

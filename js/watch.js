import { setDisplay } from './ui.js';
import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml, detectContentType as classifyContent } from './shared.js';
import { m } from './clipthreat-messages.js';

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const toggle = document.getElementById("watchToggle");
  const logArea = document.getElementById("watchLog");
  const intervalSelect = document.getElementById("watchInterval");
  const statsSpan = document.getElementById("watchStats");

  let intervalId = null;
  let statsIntervalId = null;
  let lastClipboardContent = "";
  let detectionCount = 0;
  let watchStartTime = null;
  let logEntries = [];
  const MAX_LOG_ENTRIES = 50;
  let watchTutorialStep = 1;


  function updateStats() {
    const status = intervalId ? m('watch.15') : m('watch.14');
    const duration = watchStartTime ?
      Math.floor((Date.now() - watchStartTime) / 1000) : 0;
    statsSpan.innerHTML = m('watch.13', [status, detectionCount, duration]);
  }

  function addLogEntry(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const entry = {
      time: timestamp,
      message: message,
      type: type
    };

    logEntries.push(entry);
    if (logEntries.length > MAX_LOG_ENTRIES) {
      logEntries.shift();
      // 上限に達した場合のみ全体を再描画
      renderLog();
    } else {
      // 新しいエントリのみを先頭に追加
      addLogEntryToDOM(entry);
    }

    // チュートリアル進行チェック（基本的な進行のみ）
    if (type === 'detection') {
      if (watchTutorialStep === 2) {
        updateWatchTutorialStep(3);
      } else if (watchTutorialStep === 3) {
        updateWatchTutorialStep(4);
      }
    }
  }

  function addLogEntryToDOM(entry) {
    const icon = entry.type === 'detection' ? '🔍' :
                 entry.type === 'error' ? '❌' :
                 entry.type === 'start' ? '🟢' :
                 entry.type === 'stop' ? '🔴' : '📌';

    const className = `log-entry log-${entry.type}`;
    const entryHTML = `<div class="${className}">
                        <span class="log-time">${entry.time}</span>
                        <span class="log-icon">${icon}</span>
                        <span class="log-message">${entry.message}</span>
                      </div>`;

    // 空のログメッセージがある場合は削除
    const emptyLog = logArea.querySelector('.log-empty');
    if (emptyLog) {
      emptyLog.remove();
    }

    // 新しいエントリを先頭に追加
    logArea.insertAdjacentHTML('afterbegin', entryHTML);
  }

  function renderLog() {
    const reversedEntries = [...logEntries].reverse();
    const html = reversedEntries.map(entry => {
      const icon = entry.type === 'detection' ? '🔍' :
                   entry.type === 'error' ? '❌' :
                   entry.type === 'start' ? '🟢' :
                   entry.type === 'stop' ? '🔴' : '📌';

      const className = `log-entry log-${entry.type}`;
      return `<div class="${className}">
                <span class="log-time">${entry.time}</span>
                <span class="log-icon">${icon}</span>
                <span class="log-message">${entry.message}</span>
              </div>`;
    }).join('');

    logArea.innerHTML = html || m('watch.12');
  }


  let consecutiveErrors = 0;
  const MAX_CONSECUTIVE_ERRORS = 5;
  let lastSuccessTime = Date.now();

  async function checkClipboard() {
    const generation = timers.generation;
    try {
      const current = await navigator.clipboard.readText();
      if (generation !== timers.generation || !intervalId) return;
      consecutiveErrors = 0;
      lastSuccessTime = Date.now();

      if (current && current !== lastClipboardContent) {
        detectionCount++;
        const escapedText = escapeHtml(current);
        const preview = current.length > 100 ?
          escapedText.substring(0, 100) + '...' : escapedText;

        const contentType = detectContentType(current);
        const info = m('watch.11', [current.length, contentType]);
        addLogEntry(m('watch.10', [info, preview]), 'detection');

        // ステップ4でのチュートリアル進行チェック（URLまたはメールアドレス検出時）
        if (watchTutorialStep === 4 && (contentType === 'URL' || contentType === 'Email')) {
          updateWatchTutorialStep(5);
          // ステップ5でOKボタンを表示
          const okButton = document.querySelector('#watch-step5 .step-ok-button');
          if (okButton) {
            setDisplay(okButton, 'inline-block');
          }
        }

        lastClipboardContent = current;

        if ('vibrate' in navigator) {
          navigator.vibrate(200);
        }
      }
    } catch (err) {
      if (generation !== timers.generation || !intervalId) return;
      consecutiveErrors++;

      if (err.name === 'NotAllowedError') {
        if (err.message.includes('not focused') || document.hidden || !document.hasFocus()) {
          // フォーカス関連のエラーは静かに処理（ログ出力せずにスキップ）
          return;
        } else {
          // 許可関連のエラー
          if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
            addLogEntry(m('watch.9'), 'error');
            stopWatching();
          }
        }
      } else {
        if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          addLogEntry(m('watch.8'), 'error');
          stopWatching();
        }
      }
    }
  }

  function detectContentType(text) {
    return m(classifyContent(text).key);
  }

  async function requestClipboardPermission() {
    const generation = timers.generation;
    try {
      await navigator.clipboard.readText();
      return true;
    } catch (err) {
      if (generation !== timers.generation) return false;
      if (err.name === 'NotAllowedError') {
        addLogEntry(m('watch.7'), 'info');
        return false;
      }
      addLogEntry(m('clipboard.unavailable'), 'error');
      return false;
    }
  }

  async function startWatching() {
    const generation = timers.generation;
    const interval = parseInt(intervalSelect.value);

    // 監視開始前に許可を取得
    addLogEntry(m('watch.6'), 'info');
    const hasPermission = await requestClipboardPermission();
    if (generation !== timers.generation || !toggle.checked) return;

    if (!hasPermission) {
      toggle.checked = false;
      return;
    }

    watchStartTime = Date.now();
    detectionCount = 0;

    addLogEntry(m('watch.5', [interval]), 'start');

    intervalId = setInterval(() => {
      checkClipboard();
    }, interval);

    // 統計は1秒間隔で更新（監視間隔と独立）
    statsIntervalId = setInterval(() => {
      if (intervalId) {
        updateStats();
      }
    }, 1000);

    updateStats();
  }

  function stopWatching() {
    timers.cancel();
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      addLogEntry(m('watch.4'), 'stop');
      watchStartTime = null;
      updateStats();
    }
    if (statsIntervalId) {
      clearInterval(statsIntervalId);
      statsIntervalId = null;
    }
    toggle.checked = false;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      if (watchTutorialStep === 1) {
        updateWatchTutorialStep(2);
      }
      startWatching();
    } else {
      stopWatching();
    }
  });

  intervalSelect.addEventListener('change', () => {
    if (watchTutorialStep === 4 || watchTutorialStep === 5) {
      updateWatchTutorialStep(5);
      // ステップ5でOKボタンを表示
      const okButton = document.querySelector('#watch-step5 .step-ok-button');
      if (okButton) {
        setDisplay(okButton, 'inline-block');
      }
    }
    if (intervalId) {
      stopWatching();
      toggle.checked = true;
      startWatching();
    }
  });

  window.clearWatchLog = function() {
    logEntries = [];
    detectionCount = 0;
    renderLog();
    updateStats();
  };

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && intervalId) {
      addLogEntry(m('watch.3'), 'info');
    } else if (!document.hidden && toggle.checked && intervalId) {
      addLogEntry(m('watch.2'), 'info');
      consecutiveErrors = 0;
    }
  });

  window.addEventListener('focus', () => {
    if (toggle.checked && intervalId) {
      consecutiveErrors = 0;
    }
  });

  // チュートリアル機能
  function updateWatchTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-watch .step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });

    const currentStep = document.getElementById(`watch-step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
    watchTutorialStep = stepNumber;
  }

  window.resetWatchTutorial = function() {
    document.querySelectorAll('#tab-watch .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('watch-step1').classList.add('active');
    watchTutorialStep = 1;

    // 監視停止とログクリア
    if (intervalId) {
      stopWatching();
    }
    clearWatchLog();

    // OKボタンを非表示にする
    const okButton = document.querySelector('#watch-step5 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('watchCelebrationMessage');
    if (celebrationDiv) {
      setDisplay(celebrationDiv, 'none');
    }
  };

  window.confirmWatchStep5 = function() {
    // ステップ5完了
    document.getElementById('watch-step5').classList.add('completed');
    document.getElementById('watch-step5').classList.remove('active');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#watch-step5 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('watchCelebrationMessage');
    celebrationDiv.innerHTML = m('watch.1', [new Date().toLocaleTimeString('ja-JP')]);
    setDisplay(celebrationDiv, 'block');
  };


  renderLog();
  updateStats();

  // チュートリアルを初期化
  document.getElementById('watch-step1').classList.add('active');
  installDemoResets(["resetWatchTutorial"], logArea, () => timers.cancel());
});

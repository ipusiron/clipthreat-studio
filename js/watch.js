window.addEventListener("DOMContentLoaded", () => {
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

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function updateStats() {
    const status = intervalId ? '🔴 監視中' : '⚪ 停止中';
    const duration = watchStartTime ? 
      Math.floor((Date.now() - watchStartTime) / 1000) : 0;
    statsSpan.innerHTML = `📊 監視状態：${status} | 検出数：${detectionCount} | 経過時間：${duration}秒`;
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
    
    // チュートリアル進行チェック
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
    
    logArea.innerHTML = html || '<div class="log-empty">📋 まだログがありません</div>';
  }


  let consecutiveErrors = 0;
  const MAX_CONSECUTIVE_ERRORS = 5;
  let lastSuccessTime = Date.now();

  async function checkClipboard() {
    try {
      const current = await navigator.clipboard.readText();
      consecutiveErrors = 0;
      lastSuccessTime = Date.now();
      
      if (current && current !== lastClipboardContent) {
        detectionCount++;
        const escapedText = escapeHtml(current);
        const preview = current.length > 100 ? 
          escapedText.substring(0, 100) + '...' : escapedText;
        
        const info = `文字数: ${current.length} | タイプ: ${detectContentType(current)}`;
        addLogEntry(`変化検出 - ${info}<br><div class="preview-content">${preview}</div>`, 'detection');
        
        lastClipboardContent = current;
        
        if ('vibrate' in navigator) {
          navigator.vibrate(200);
        }
      }
    } catch (err) {
      consecutiveErrors++;
      
      if (err.name === 'NotAllowedError') {
        if (err.message.includes('not focused') || document.hidden || !document.hasFocus()) {
          // フォーカス関連のエラーは静かに処理（ログ出力せずにスキップ）
          return;
        } else {
          // 許可関連のエラー
          if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
            addLogEntry('クリップボードの読み取り権限がありません。ブラウザーの許可ダイアログで「許可」をクリックしてください。', 'error');
            stopWatching();
          }
        }
      } else {
        if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          addLogEntry('監視中にエラーが継続しています。監視を停止します。', 'error');
          stopWatching();
        }
      }
      
      console.error('Clipboard read error:', err);
    }
  }

  function detectContentType(text) {
    if (/^https?:\/\//.test(text)) return 'URL';
    if (/^[A-Za-z0-9+\/=]+$/.test(text) && text.length > 20) return 'Base64?';
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(text)) return 'Email';
    if (/^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(text)) return 'カード番号?';
    return 'テキスト';
  }

  async function requestClipboardPermission() {
    try {
      await navigator.clipboard.readText();
      return true;
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        addLogEntry('ブラウザーの許可ダイアログで「許可」をクリックしてください。', 'info');
        return false;
      }
      throw err;
    }
  }

  async function startWatching() {
    const interval = parseInt(intervalSelect.value);
    
    // 監視開始前に許可を取得
    addLogEntry('クリップボードの許可を確認中...', 'info');
    const hasPermission = await requestClipboardPermission();
    
    if (!hasPermission) {
      toggle.checked = false;
      return;
    }
    
    watchStartTime = Date.now();
    detectionCount = 0;
    retryCount = 0;
    
    addLogEntry(`監視を開始しました (間隔: ${interval}ms)`, 'start');
    
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
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      addLogEntry('監視を停止しました', 'stop');
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
      addLogEntry('タブが非アクティブになりました。監視は継続しますが、一部ブラウザーではクリップボードアクセスが制限される場合があります。', 'info');
    } else if (!document.hidden && toggle.checked && intervalId) {
      addLogEntry('タブがアクティブになりました。', 'info');
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
  };


  renderLog();
  updateStats();
  
  // チュートリアルを初期化
  document.getElementById('watch-step1').classList.add('active');
});

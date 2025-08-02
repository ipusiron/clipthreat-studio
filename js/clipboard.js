window.addEventListener("DOMContentLoaded", () => {
  const inputArea = document.getElementById("clipboardInput");
  const outputBox = document.getElementById("clipboardOutput");

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showMessage(message, type = 'info') {
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: '📋'
    };
    const icon = icons[type] || icons.info;
    outputBox.innerHTML = `<div class="message ${type}">${icon} ${message}</div>`;
  }

  function showClipboardContent(text, action) {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const escapedText = escapeHtml(text);
    const preview = text.length > 100 ? escapedText.substring(0, 100) + '...' : escapedText;
    
    outputBox.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">${action}</span>
          <span class="timestamp">${timestamp}</span>
        </div>
        <div class="content-info">
          <div class="preview"><code>${preview}</code></div>
          <div class="meta">
            <span>文字数: ${text.length}</span>
            <span>行数: ${text.split('\n').length}</span>
          </div>
        </div>
        <div class="action-explanation">
          ${action === 'クリップボードに書き込みました' ? 
            '<small>✔️ 他のアプリでCtrl+Vで貼り付け可能です</small>' :
            '<small>✔️ テキストエリアに反映されました</small>'}
        </div>
      </div>
    `;
  }

  window.writeClipboard = async function () {
    const text = inputArea.value.trim();
    if (!text) {
      showMessage('書き込むテキストを入力してください。', 'warning');
      inputArea.focus();
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      showClipboardContent(text, 'クリップボードに書き込みました');
      inputArea.select();
    } catch (err) {
      showMessage('クリップボードへの書き込みに失敗しました。HTTPSで接続されているか確認してください。', 'error');
      console.error('Clipboard write failed:', err);
    }
  };

  window.readClipboard = async function () {
    try {
      const text = await navigator.clipboard.readText();
      if (!text) {
        showMessage('クリップボードは空です。', 'info');
        return;
      }
      showClipboardContent(text, 'クリップボードから読み取りました');
      inputArea.value = text;
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        showMessage('クリップボードの読み取り権限がありません。「許可」をクリックしてください。<br><small>※これはブラウザーのセキュリティ機能で、悪意あるサイトが勝手にクリップボードを読み取ることを防いでいます。</small>', 'error');
      } else if (err.name === 'SecurityError') {
        showMessage('セキュリティエラー：HTTPSで接続されているか確認してください。<br><small>クリップボードAPIはHTTPS接続が必須です。</small>', 'error');
      } else {
        showMessage('クリップボードの読み取りに失敗しました。ブラウザーの許可ダイアログで「許可」を選択してください。', 'error');
      }
      console.error('Clipboard read failed:', err);
    }
  };

  window.clearClipboard = async function () {
    try {
      await navigator.clipboard.writeText('');
      showMessage('クリップボードをクリアしました。', 'success');
      inputArea.value = '';
    } catch (err) {
      showMessage('クリップボードのクリアに失敗しました。', 'error');
      console.error('Clipboard clear failed:', err);
    }
  };

  inputArea.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      writeClipboard();
    }
  });

  window.selectText = function(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, 2000);
    
    updateTutorialStep(2);
  };

  window.resetTutorial = function() {
    document.querySelectorAll('.step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('step1').classList.add('active');
    inputArea.value = '';
    outputBox.innerHTML = '<div class="message info">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>';
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  window.confirmStep4 = function() {
    // ステップ4完了
    document.getElementById('step4').classList.add('completed');
    document.getElementById('step4').classList.remove('active');
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
    
    // 全ステップ完了のお祝いメッセージ
    outputBox.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">🎉 チュートリアル完了！</span>
          <span class="timestamp">${new Date().toLocaleTimeString('ja-JP')}</span>
        </div>
        <div class="content-info">
          <div class="preview" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50;">
            <strong>おめでとうございます！</strong><br>
            クリップボード基本操作をマスターしました！<br>
            📋 読み取り・書き込み・クリアの操作方法を習得<br>
            🔒 セキュリティの重要性も理解<br>
            次は他のタブで更なる脅威について学習しましょう！
          </div>
        </div>
      </div>
    `;
  };

  function updateTutorialStep(stepNumber) {
    document.querySelectorAll('.step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });
    
    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
  }

  const originalReadClipboard = window.readClipboard;
  window.readClipboard = async function() {
    await originalReadClipboard();
    updateTutorialStep(3);
  };

  const originalWriteClipboard = window.writeClipboard;
  window.writeClipboard = async function() {
    await originalWriteClipboard();
    updateTutorialStep(4);
    // ステップ4でOKボタンを表示
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'inline-block';
    }
  };

  document.getElementById('step1').classList.add('active');
});

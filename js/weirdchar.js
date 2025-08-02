// weirdchar.js - Unicode文字細工攻撃デモ

window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("weirdOutput");
  let weirdTutorialStep = 1;
  let attackCount = 0;

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showAttackResult(title, description, originalText, displayText, attackType = 'info') {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const icons = {
      info: '📋',
      warning: '⚠️',
      danger: '🚨',
      success: '✅'
    };
    const icon = icons[attackType] || icons.info;
    attackCount++;

    // Unicode文字の詳細分析
    const codePoints = [...originalText].map(char => {
      const code = char.codePointAt(0);
      const hex = code.toString(16).toUpperCase().padStart(4, '0');
      return `U+${hex} (${char.charCodeAt(0) === 8206 || char.charCodeAt(0) === 8207 || char.charCodeAt(0) === 8232 || char.charCodeAt(0) === 8203 ? '制御文字' : char})`;
    }).join(', ');

    output.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">${icon} ${title} #${attackCount}</span>
          <span class="timestamp">${timestamp}</span>
        </div>
        <div class="content-info">
          <div class="preview">
            <strong>見た目:</strong> <code>${escapeHtml(displayText)}</code><br>
            <strong>実際:</strong> <code>${escapeHtml(originalText)}</code><br>
            <strong>Unicode詳細:</strong> <code style="font-size: 0.8rem;">${codePoints}</code>
          </div>
          <div class="meta">
            <span>文字数: ${originalText.length}</span>
            <span>バイト数: ${new Blob([originalText]).size}</span>
            <span>攻撃タイプ: ${title}</span>
          </div>
        </div>
        <div class="action-explanation">
          <small>${description}</small>
        </div>
      </div>
    `;

    // チュートリアル進行
    if (weirdTutorialStep === 2 && title.includes('ゼロ幅')) {
      updateWeirdTutorialStep(3);
    } else if (weirdTutorialStep === 3 && title.includes('RTL')) {
      updateWeirdTutorialStep(4);
      // ステップ4のOKボタンを表示
      const step4Button = document.querySelector('#weird-step4 .step-ok-button');
      if (step4Button) {
        step4Button.style.display = 'inline-block';
      }
    }

    // 攻撃シミュレーション（実際の送信は行わない）
    console.log("Unicode attack simulated:", {
      original: originalText,
      display: displayText,
      type: title,
      codePoints: [...originalText].map(char => char.codePointAt(0))
    });
  }

  // 個別攻撃関数
  window.copyZeroWidthSpaces = function() {
    // ゼロ幅スペース（U+200B）を混入させたファイル名
    const invisibleFlag = "f\u200Bl\u200Ba\u200Bg.txt";
    const displayFlag = "flag.txt";
    
    navigator.clipboard.writeText(invisibleFlag).then(() => {
      showAttackResult(
        "ゼロ幅スペース攻撃",
        "⚠️ 見た目上同じファイル名でも、検索や照合で異なる結果となります。フィルタリング回避やファイル偽装に悪用される可能性があります。",
        invisibleFlag,
        displayFlag,
        'warning'
      );
    }).catch(err => {
      output.innerHTML = "❌ コピーに失敗しました。";
      console.error("Clipboard write failed:", err);
    });
  };

  window.copyRTLTrick = function() {
    // 右から左文字（U+202E）で拡張子を偽装
    const rtlTrick = "evil\u202Egnp.exe";
    const displayTrick = "exe.png"; // 実際にはこう見える
    
    navigator.clipboard.writeText(rtlTrick).then(() => {
      showAttackResult(
        "RTL文字拡張子偽装",
        "🚨 実行ファイル（.exe）が画像ファイル（.png）に見えるトリックです。マルウェア配布に頻繁に悪用されます！",
        rtlTrick,
        displayTrick,
        'danger'
      );
    }).catch(err => {
      output.innerHTML = "❌ コピーに失敗しました。";
      console.error("Clipboard write failed:", err);
    });
  };

  window.copyMixedScript = function() {
    // 複数の文字体系を混在させた攻撃
    const mixedScript = "gооgle.com"; // キリル文字のооを含む
    const displayScript = "google.com";
    
    navigator.clipboard.writeText(mixedScript).then(() => {
      showAttackResult(
        "スクリプト混在攻撃",
        "🌐 一見正常なURLですが、キリル文字「оо」（U+043E）がラテン文字「oo」（U+006F）に偽装されています。フィッシング詐欺に悪用されます。",
        mixedScript,
        displayScript,
        'danger'
      );
    }).catch(err => {
      output.innerHTML = "❌ コピーに失敗しました。";
      console.error("Clipboard write failed:", err);
    });
  };

  window.copyHomographAttack = function() {
    // 同形異義文字攻撃（アップルをキリル文字で偽装）
    const homograph = "аpple.com"; // キリル文字のа（U+0430）
    const displayHomograph = "apple.com";
    
    navigator.clipboard.writeText(homograph).then(() => {
      showAttackResult(
        "同形異義文字攻撃",
        "👥 キリル文字「а」（U+0430）がラテン文字「a」（U+0061）そっくりに表示されます。IDN偽装攻撃の典型例です。",
        homograph,
        displayHomograph,
        'danger'
      );
    }).catch(err => {
      output.innerHTML = "❌ コピーに失敗しました。";
      console.error("Clipboard write failed:", err);
    });
  };

  // 旧関数との互換性維持
  window.copyWeirdText = function() {
    copyZeroWidthSpaces();
  };

  // デモリセット機能
  window.resetWeirdDemo = function() {
    attackCount = 0;
    output.innerHTML = '<div class="message info">📋 デモをリセットしました。上のボタンで各種Unicode攻撃を体験してください。</div>';
  };

  // チュートリアル機能
  function updateWeirdTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-weirdchar .step').forEach((step, index) => {
      step.classList.remove('active');
      if (index < stepNumber - 1) {
        step.classList.add('completed');
      }
    });
    
    const currentStep = document.getElementById(`weird-step${stepNumber}`);
    if (currentStep) {
      currentStep.classList.add('active');
    }
    weirdTutorialStep = stepNumber;
  }

  window.confirmWeirdStep1 = function() {
    // ステップ1完了、ステップ2へ進む
    updateWeirdTutorialStep(2);
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#weird-step1 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
  };

  window.confirmWeirdStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('weird-step4').classList.add('completed');
    document.getElementById('weird-step4').classList.remove('active');
    
    // OKボタンを非表示にする
    const okButton = document.querySelector('#weird-step4 .step-ok-button');
    if (okButton) {
      okButton.style.display = 'none';
    }
    
    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('weirdCelebrationMessage');
    celebrationDiv.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">🎉 Unicode文字細工攻撃チュートリアル完了！</span>
          <span class="timestamp">${new Date().toLocaleTimeString('ja-JP')}</span>
        </div>
        <div class="content-info">
          <div class="preview" style="background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50;">
            <strong>🎓 素晴らしい！Unicode攻撃の深刻さを完全理解しました！</strong><br>
            ✅ ゼロ幅スペース攻撃の仕組みを体験<br>
            ✅ RTL文字による拡張子偽装を確認<br>
            ✅ 同形異義文字攻撃の危険性を認識<br>
            ✅ 複数の攻撃パターンを理解<br><br>
            <strong>🛡️ これで見た目に騙されない知識を身に付けました。</strong><br>
            今後はファイル名やURLの見た目だけでなく、技術的な検証も心がけましょう！
          </div>
        </div>
      </div>
    `;
    celebrationDiv.style.display = 'block';
  };

  window.resetWeirdTutorial = function() {
    document.querySelectorAll('#tab-weirdchar .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('weird-step1').classList.add('active');
    weirdTutorialStep = 1;
    attackCount = 0;
    
    // 全てのOKボタンを適切な状態にリセット
    const step1Button = document.querySelector('#weird-step1 .step-ok-button');
    if (step1Button) {
      step1Button.style.display = 'inline-block'; // ステップ1のボタンは表示
    }
    
    const step4Button = document.querySelector('#weird-step4 .step-ok-button');
    if (step4Button) {
      step4Button.style.display = 'none'; // ステップ4のボタンは非表示
    }
    
    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('weirdCelebrationMessage');
    if (celebrationDiv) {
      celebrationDiv.style.display = 'none';
    }
    
    // ログをリセット
    output.innerHTML = '<div class="message info">📋 チュートリアルをリセットしました。ステップ1から始めましょう！</div>';
  };

  // アコーディオン機能
  window.toggleWeirdAttackAccordion = function() {
    const header = document.querySelector('#weirdAttackAccordionContent').previousElementSibling;
    const content = document.getElementById('weirdAttackAccordionContent');
    const icon = header.querySelector('.accordion-icon');
    
    header.classList.toggle('active');
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleWeirdCountermeasuresAccordion = function() {
    const header = document.querySelector('#weirdCountermeasuresAccordionContent').previousElementSibling;
    const content = document.getElementById('weirdCountermeasuresAccordionContent');
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
  document.getElementById('weird-step1').classList.add('active');
  output.innerHTML = '<div class="message info">📋 各種Unicode攻撃を体験してください。まずはチュートリアルから始めましょう！</div>';
});

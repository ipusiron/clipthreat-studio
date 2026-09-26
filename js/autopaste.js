import { setDisplay } from './ui.js';
import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml, detectDataType as classifyData } from './shared.js';
import { m } from './clipthreat-messages.js';

// autopaste.js - 自動送信攻撃シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const autoInput = document.getElementById("autoInput");
  const autoLog = document.getElementById("autoLog");
  let attackStep = 0;
  let autoTutorialStep = 1;


  function showAttackStep(step, title, content, type = 'info') {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const icons = {
      info: '📋',
      warning: '⚠️',
      danger: '🚨',
      success: '✅'
    };
    const icon = icons[type] || icons.info;

    autoLog.innerHTML += m('autopaste.32', [icon, step, title, timestamp, content]);

    // 自動スクロール
    autoLog.scrollTop = autoLog.scrollHeight;
  }

  function detectDataType(text) {
    return m(classifyData(text, true).key);
  }

  autoInput.addEventListener("paste", (event) => {
    timers.cancel();
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
    timers.later(() => {
      attackStep++;
      showAttackStep(1, m('autopaste.31'),
        m('autopaste.30'), 'warning');
    }, 100);

    // ステップ2: データ抽出・分析
    timers.later(() => {
      attackStep++;
      showAttackStep(2, m('autopaste.29'),
        m('autopaste.20', [escapedText, dataType, pasted.length,
           dataType.includes(m('autopaste.28')) || dataType.includes('Token') ||
           dataType === m('autopaste.27') || dataType === m('autopaste.26') ? m('autopaste.25') :
           dataType === m('autopaste.24') || dataType === m('autopaste.23') ? m('autopaste.22') :
           m('autopaste.21')]), 'danger');
    }, 1500);

    // ステップ3: 外部サーバーへ送信
    timers.later(() => {
      attackStep++;
      showAttackStep(3, m('autopaste.19'),
        m('autopaste.18', [escapedText, dataType]), 'danger');
    }, 3000);

    // ステップ4: 攻撃完了と教育的解説
    timers.later(() => {
      attackStep++;
      showAttackStep(4, m('autopaste.17'),
        m('autopaste.5', [dataType, dataType.includes(m('autopaste.16')) || dataType.includes('Token') ? m('autopaste.15') :
             dataType === m('autopaste.14') ? m('autopaste.13') :
             dataType === m('autopaste.12') ? m('autopaste.11') :
             dataType === m('autopaste.10') ? m('autopaste.9') :
             dataType === m('autopaste.8') ? m('autopaste.7') :
             m('autopaste.6')]), 'success');

      // チュートリアル進行：ステップ4でOKボタンを表示
      if (autoTutorialStep === 4) {
        const step4Button = document.querySelector('#auto-step4 .step-ok-button');
        if (step4Button) {
          setDisplay(step4Button, 'inline-block');
        }
      }
    }, 4500);

    // 実際の送信は行わないが、シミュレーションとしてコンソール出力

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
    timers.later(() => {
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
      setDisplay(okButton, 'none');
    }
  };

  window.confirmAutoStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('auto-step4').classList.add('completed');
    document.getElementById('auto-step4').classList.remove('active');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#auto-step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    celebrationDiv.innerHTML = m('autopaste.4', [new Date().toLocaleTimeString('ja-JP')]);
    setDisplay(celebrationDiv, 'block');
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
      setDisplay(step1Button, 'inline-block'); // ステップ1のボタンは表示
    }

    const step4Button = document.querySelector('#auto-step4 .step-ok-button');
    if (step4Button) {
      setDisplay(step4Button, 'none'); // ステップ4のボタンは非表示
    }

    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    if (celebrationDiv) {
      setDisplay(celebrationDiv, 'none');
    }

    // ログをリセット
    autoLog.innerHTML = m('autopaste.3');
  };

  // デモリセット機能
  window.resetAutoDemo = function() {
    attackStep = 0;
    autoLog.innerHTML = m('autopaste.2');

    // 入力欄をクリア
    autoInput.value = '';

    // お祝いメッセージを非表示
    const celebrationDiv = document.getElementById('autoCelebrationMessage');
    if (celebrationDiv) {
      setDisplay(celebrationDiv, 'none');
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
  autoLog.innerHTML = m('autopaste.1');
  document.getElementById('auto-step1').classList.add('active');

  // ステップ1のボタンを初期表示
  const step1Button = document.querySelector('#auto-step1 .step-ok-button');
  if (step1Button) {
    setDisplay(step1Button, 'inline-block');
  }
  installDemoResets(["resetAutoDemo","resetAutoTutorial"], autoLog, () => timers.cancel());
});

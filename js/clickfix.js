import { setDisplay } from './ui.js';
import { clickFixPreview } from './shared.js';
import { writeClipboardText, clearDemoClipboard, createDemoTimers } from './clipboard-access.js';
import { m } from './clipthreat-messages.js';

// clickfix.js - ClickFix攻撃シミュレーション

window.addEventListener("DOMContentLoaded", () => {
  const logArea = document.getElementById("clickfixLog");
  let attackStep = 0;
  let clickfixTutorialStep = 1;

  // OSクリップボードへは説明文のみ。実行可能なコマンドを保持しない。
  const payload = m('clickfix.safe');
  const timers = createDemoTimers();
  logArea.setAttribute('aria-live', 'polite');
  logArea.closest('.tab-content').addEventListener('demoleave', () => window.resetClickFixTutorial());


  function showAttackStep(step, title, content, type = 'info') {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    const icons = {
      info: '📋',
      warning: '⚠️',
      danger: '🚨',
      success: '✅'
    };
    const icon = icons[type] || icons.info;

    logArea.innerHTML += m('clickfix.16', [icon, step, title, timestamp, content]);

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
      setDisplay(okButton, 'none');
    }
  };

  // ステップ3確認ボタンの処理
  window.confirmClickFixStep3 = function() {
    // ステップ3完了、ステップ4へ進む
    updateClickFixTutorialStep(4);

    // OKボタンを非表示にする
    const okButton = document.querySelector('#clickfix-step3 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
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
      showAttackStep(1, m('clickfix.15'),
        m('clickfix.14'), 'warning');

      timers.later(() => {
        simulateClipboardCopy();
      }, 1500);
    }
  };

  function simulateClipboardCopy() {
    const generation = timers.generation;
    writeClipboardText(payload).then(() => {
      if (generation !== timers.generation) return;
      attackStep++;
      showAttackStep(2, m('clickfix.safeTitle'), '', 'info');
      const preview = logArea.lastElementChild.querySelector('.preview');
      const result = clickFixPreview();
      preview.textContent = m(result.key, result.values);

      timers.later(() => {
        showInstructionStep();
      }, 2000);
    }).catch(err => {
      if (generation !== timers.generation) return;
      showAttackStep(2, m('clickfix.11'),
        m('clickfix.10'), 'warning');
    });
  }

  function showInstructionStep() {
    attackStep++;
    showAttackStep(3, m('clickfix.9'),
      m('clickfix.8'), 'danger');

    timers.later(() => {
      showEducationalMessage();
    }, 3000);
  }

  function showEducationalMessage() {
    attackStep++;
    showAttackStep(4, m('clickfix.7'),
      m('clickfix.6'), 'success');
    void clearDemoClipboard(logArea);

    // チュートリアル進行：ステップ3のOKボタンを表示
    if (clickfixTutorialStep === 3) {
      const step3Button = document.querySelector('#clickfix-step3 .step-ok-button');
      if (step3Button) {
        setDisplay(step3Button, 'inline-block');
      }
    }
  }

  // 「後で修復」ボタンの処理
  window.showCancelWarning = function() {
    showAttackStep(0, m('clickfix.5'),
      m('clickfix.4'), 'warning');

    // チュートリアル進行
    if (clickfixTutorialStep === 4) {
      // ステップ4でOKボタンを表示
      const okButton = document.querySelector('#clickfix-step4 .step-ok-button');
      if (okButton) {
        setDisplay(okButton, 'inline-block');
      }
    }
  };

  // リセット機能
  window.resetClickFixDemo = function() {
    timers.cancel();
    attackStep = 0;
    setDisplay(document.getElementById('clickfixCelebrationMessage'), 'none');
    logArea.innerHTML = m('clickfix.3');
    void clearDemoClipboard(logArea);
  };

  // 初期化専用（リセットメッセージなし）
  function initializeClickFixDemo() {
    attackStep = 0;
    logArea.innerHTML = m('clickfix.2');
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
    timers.cancel();
    document.querySelectorAll('#tab-clickfix .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('clickfix-step1').classList.add('active');
    clickfixTutorialStep = 1;

    // 全てのOKボタンを適切な状態にリセット
    const step1Button = document.querySelector('#clickfix-step1 .step-ok-button');
    if (step1Button) {
      setDisplay(step1Button, 'inline-block'); // ステップ1のボタンは表示
    }

    const step3Button = document.querySelector('#clickfix-step3 .step-ok-button');
    if (step3Button) {
      setDisplay(step3Button, 'none'); // ステップ3のボタンは非表示
    }

    const step4Button = document.querySelector('#clickfix-step4 .step-ok-button');
    if (step4Button) {
      setDisplay(step4Button, 'none'); // ステップ4のボタンは非表示
    }

    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('clickfixCelebrationMessage');
    if (celebrationDiv) {
      setDisplay(celebrationDiv, 'none');
    }

    // チュートリアルリセット時は初期化専用関数を使用
    initializeClickFixDemo();
    void clearDemoClipboard(logArea);
  };

  window.confirmClickFixStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('clickfix-step4').classList.add('completed');
    document.getElementById('clickfix-step4').classList.remove('active');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#clickfix-step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('clickfixCelebrationMessage');
    celebrationDiv.innerHTML = m('clickfix.1', [new Date().toLocaleTimeString('ja-JP')]);
    setDisplay(celebrationDiv, 'block');
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
    setDisplay(step1Button, 'inline-block');
  }
});

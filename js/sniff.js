import { setDisplay } from './ui.js';
import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml, detectDataType as classifyData } from './shared.js';
import { m } from './clipthreat-messages.js';

// sniff.js - pasteイベントスニッフィング処理

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const sniffInput = document.getElementById("sniffInput");
  const sniffLog = document.getElementById("sniffLog");
  let sniffTutorialStep = 1;
  let pasteCount = 0;


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
    timers.later(() => {
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
    sniffLog.innerHTML = m('sniff.4');
  };

  window.resetSniffTutorial = function() {
    document.querySelectorAll('#tab-sniff .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('sniff-step1').classList.add('active');
    sniffTutorialStep = 1;
    pasteCount = 0;
    sniffInput.value = '';
    sniffLog.innerHTML = m('sniff.3');

    // 全ボタンを非表示にする
    const step3Button = document.querySelector('#sniff-step3 .step-ok-button');
    if (step3Button) {
      setDisplay(step3Button, 'none');
    }
    const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
    if (step5Button) {
      setDisplay(step5Button, 'none');
    }
  };

  window.confirmStep3 = function() {
    // ステップ3完了、ステップ4へ進む
    updateSniffTutorialStep(4);

    // OKボタンを非表示にする
    const okButton = document.querySelector('#sniff-step3 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }
  };

  window.confirmStep5 = function() {
    // ステップ5完了、チュートリアル終了
    document.getElementById('sniff-step5').classList.add('completed');
    document.getElementById('sniff-step5').classList.remove('active');

    // ボタンを非表示にする
    const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
    if (step5Button) {
      setDisplay(step5Button, 'none');
    }

    // お祝いメッセージを表示
    sniffLog.innerHTML = m('sniff.2', [new Date().toLocaleTimeString('ja-JP')]);
  };

  function detectDataType(text) {
    return m(classifyData(text, false).key);
  }

  sniffInput.addEventListener("paste", (event) => {
    // クリップボードから貼り付けられたテキストを取得
    const pastedText = event.clipboardData.getData("text");
    const escapedText = escapeHtml(pastedText);
    const dataType = detectDataType(pastedText);
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    pasteCount++;

    // 可視化ログに表示
    sniffLog.innerHTML = m('sniff.1', [pasteCount, timestamp, escapedText, pastedText.length, dataType]);

    // チュートリアル進行管理
    if (sniffTutorialStep === 2) {
      updateSniffTutorialStep(3);
      // ステップ3でOKボタンを表示
      const okButton = document.querySelector('#sniff-step3 .step-ok-button');
      if (okButton) {
        setDisplay(okButton, 'inline-block');
      }
    } else if (sniffTutorialStep === 4 && pasteCount >= 2) {
      updateSniffTutorialStep(5);
      // ステップ5で理解しましたボタンを表示
      const step5Button = document.querySelector('#sniff-step5 .step-ok-button');
      if (step5Button) {
        setDisplay(step5Button, 'inline-block');
      }
    }

    // 攻撃シミュレーション（送信処理は行わないが、実際は fetch() など）


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
  installDemoResets(["resetSniffDemo","resetSniffTutorial"], sniffLog, () => timers.cancel());
});

import { setDisplay } from './ui.js';
import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml, analyzeCharacters, buildInspectorUrl } from './shared.js';
import { m } from './clipthreat-messages.js';

// weirdchar.js - Unicode文字細工攻撃デモ

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const output = document.getElementById("weirdOutput");
  let weirdTutorialStep = 1;
  let attackCount = 0;


  // WeirdString Inspectorで文字列を調査する関数
  window.openWeirdStringInspector = function(text, attackType) {
    const fullUrl = buildInspectorUrl(text, attackType);
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

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
    const codePoints = analyzeCharacters(originalText).map(item =>
      `U+${item.hex} (${item.key === 'char.control' ? m(item.key) : escapeHtml(item.char)})`
    ).join(', ');

    output.innerHTML = m('weirdchar.18', [icon, escapeHtml(title), attackCount, timestamp,
      escapeHtml(displayText), escapeHtml(originalText), codePoints, '', '', originalText.length,
      new Blob([originalText]).size, escapeHtml(title), escapeHtml(description)]);
    const inspectorButton = output.querySelector('.inspector-button');
    inspectorButton.dataset.text = originalText;
    inspectorButton.dataset.attackType = title;
    inspectorButton.addEventListener('click', () => {
      window.openWeirdStringInspector(inspectorButton.dataset.text, inspectorButton.dataset.attackType);
    });

    // チュートリアル進行
    if (weirdTutorialStep === 2 && title.includes(m('weirdchar.17'))) {
      updateWeirdTutorialStep(3);
    } else if (weirdTutorialStep === 3 && title.includes('RTL')) {
      updateWeirdTutorialStep(4);
      // ステップ4のOKボタンを表示
      const step4Button = document.querySelector('#weird-step4 .step-ok-button');
      if (step4Button) {
        setDisplay(step4Button, 'inline-block');
      }
    }

    // 攻撃シミュレーション（実際の送信は行わない）

  }

  // 個別攻撃関数
  window.copyZeroWidthSpaces = function() {
    // ゼロ幅スペース（U+200B）を混入させたファイル名
    const invisibleFlag = "f\u200Bl\u200Ba\u200Bg.txt";
    const displayFlag = "flag.txt";

    const generation = timers.generation;
    writeClipboardText(invisibleFlag).then(() => {
      if (generation !== timers.generation) return;
      showAttackResult(
        m('weirdchar.16'),
        m('weirdchar.15'),
        invisibleFlag,
        displayFlag,
        'warning'
      );
    }).catch(err => {
      if (generation !== timers.generation) return;
      output.innerHTML = m('weirdchar.14');
    });
  };

  window.copyRTLTrick = function() {
    // 右から左文字（U+202E）で拡張子を偽装
    const rtlTrick = "evil\u202Egnp.exe";
    const displayTrick = "exe.png"; // 実際にはこう見える

    const generation = timers.generation;
    writeClipboardText(rtlTrick).then(() => {
      if (generation !== timers.generation) return;
      showAttackResult(
        m('weirdchar.13'),
        m('weirdchar.12'),
        rtlTrick,
        displayTrick,
        'danger'
      );
    }).catch(err => {
      if (generation !== timers.generation) return;
      output.innerHTML = m('weirdchar.11');
    });
  };

  window.copyMixedScript = function() {
    // 複数の文字体系を混在させた攻撃
    const mixedScript = "gооgle.com"; // キリル文字のооを含む
    const displayScript = "google.com";

    const generation = timers.generation;
    writeClipboardText(mixedScript).then(() => {
      if (generation !== timers.generation) return;
      showAttackResult(
        m('weirdchar.10'),
        m('weirdchar.9'),
        mixedScript,
        displayScript,
        'danger'
      );
    }).catch(err => {
      if (generation !== timers.generation) return;
      output.innerHTML = m('weirdchar.8');
    });
  };

  window.copyHomographAttack = function() {
    // 同形異義文字攻撃（アップルをキリル文字で偽装）
    const homograph = "аpple.com"; // キリル文字のа（U+0430）
    const displayHomograph = "apple.com";

    const generation = timers.generation;
    writeClipboardText(homograph).then(() => {
      if (generation !== timers.generation) return;
      showAttackResult(
        m('weirdchar.7'),
        m('weirdchar.6'),
        homograph,
        displayHomograph,
        'danger'
      );
    }).catch(err => {
      if (generation !== timers.generation) return;
      output.innerHTML = m('weirdchar.5');
    });
  };

  // 旧関数との互換性維持
  window.copyWeirdText = function() {
    copyZeroWidthSpaces();
  };

  // デモリセット機能
  window.resetWeirdDemo = function() {
    attackCount = 0;
    output.innerHTML = m('weirdchar.4');
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
      setDisplay(okButton, 'none');
    }
  };

  window.confirmWeirdStep4 = function() {
    // ステップ4完了、チュートリアル終了
    document.getElementById('weird-step4').classList.add('completed');
    document.getElementById('weird-step4').classList.remove('active');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#weird-step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // 完了メッセージを専用領域に表示
    const celebrationDiv = document.getElementById('weirdCelebrationMessage');
    celebrationDiv.innerHTML = m('weirdchar.3', [new Date().toLocaleTimeString('ja-JP')]);
    setDisplay(celebrationDiv, 'block');
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
      setDisplay(step1Button, 'inline-block'); // ステップ1のボタンは表示
    }

    const step4Button = document.querySelector('#weird-step4 .step-ok-button');
    if (step4Button) {
      setDisplay(step4Button, 'none'); // ステップ4のボタンは非表示
    }

    // お祝いメッセージを非表示にする
    const celebrationDiv = document.getElementById('weirdCelebrationMessage');
    if (celebrationDiv) {
      setDisplay(celebrationDiv, 'none');
    }

    // ログをリセット
    output.innerHTML = m('weirdchar.2');
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
  output.innerHTML = m('weirdchar.1');
  installDemoResets(["resetWeirdDemo","resetWeirdTutorial"], output, () => timers.cancel());
});

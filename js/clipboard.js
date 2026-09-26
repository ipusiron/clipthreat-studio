import { setDisplay } from './ui.js';
import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml } from './shared.js';
import { m } from './clipthreat-messages.js';

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const inputArea = document.getElementById("clipboardInput");
  const outputBox = document.getElementById("clipboardOutput");


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

    outputBox.innerHTML = m('clipboard.14', [action, timestamp, preview, text.length, text.split('\n').length, action === m('clipboard.17') ?
            m('clipboard.16') :
            m('clipboard.15')]);
  }

  window.writeClipboard = async function () {
    const generation = timers.generation;
    const text = inputArea.value.trim();
    if (!text) {
      showMessage(m('clipboard.13'), 'warning');
      inputArea.focus();
      return;
    }

    try {
      await writeClipboardText(text);
      if (generation !== timers.generation) return;
      showClipboardContent(text, m('clipboard.12'));
      inputArea.select();
      return true;
    } catch (err) {
      if (generation !== timers.generation) return false;
      showMessage(m('clipboard.11'), 'error');
    }
  };

  window.readClipboard = async function () {
    const generation = timers.generation;
    try {
      const text = await navigator.clipboard.readText();
      if (generation !== timers.generation) return;
      if (!text) {
        showMessage(m('clipboard.10'), 'info');
        return;
      }
      showClipboardContent(text, m('clipboard.9'));
      inputArea.value = text;
      return true;
    } catch (err) {
      if (generation !== timers.generation) return false;
      if (err.name === 'NotAllowedError') {
        showMessage(m('clipboard.8'), 'error');
      } else if (err.name === 'SecurityError') {
        showMessage(m('clipboard.7'), 'error');
      } else {
        showMessage(m('clipboard.6'), 'error');
      }
    }
  };

  window.clearClipboard = async function () {
    try {
      await writeClipboardText('');
      showMessage(m('clipboard.5'), 'success');
      inputArea.value = '';
    } catch (err) {
      showMessage(m('clipboard.4'), 'error');
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
    timers.later(() => {
      element.classList.remove('selected');
    }, 2000);

    updateTutorialStep(2);
  };

  window.resetBasicDemo = function() {
    inputArea.value = '';
    outputBox.innerHTML = m('clipboard.3');
  };

  window.resetTutorial = function() {
    document.querySelectorAll('#tab-clipboard .step').forEach(step => {
      step.classList.remove('completed', 'active');
    });
    document.getElementById('step1').classList.add('active');
    inputArea.value = '';
    outputBox.innerHTML = m('clipboard.2');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }
  };

  window.confirmStep4 = function() {
    // ステップ4完了
    document.getElementById('step4').classList.add('completed');
    document.getElementById('step4').classList.remove('active');

    // OKボタンを非表示にする
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'none');
    }

    // 全ステップ完了のお祝いメッセージ
    outputBox.innerHTML = m('clipboard.1', [new Date().toLocaleTimeString('ja-JP')]);
  };

  function updateTutorialStep(stepNumber) {
    document.querySelectorAll('#tab-clipboard .step').forEach((step, index) => {
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
    const generation = timers.generation;
    if (await originalReadClipboard() && generation === timers.generation) updateTutorialStep(3);
  };

  const originalWriteClipboard = window.writeClipboard;
  window.writeClipboard = async function() {
    const generation = timers.generation;
    if (!await originalWriteClipboard() || generation !== timers.generation) return;
    updateTutorialStep(4);
    // ステップ4でOKボタンを表示
    const okButton = document.querySelector('#step4 .step-ok-button');
    if (okButton) {
      setDisplay(okButton, 'inline-block');
    }
  };

  document.getElementById('step1').classList.add('active');
  installDemoResets(["resetBasicDemo","resetTutorial"], outputBox, () => timers.cancel());
});

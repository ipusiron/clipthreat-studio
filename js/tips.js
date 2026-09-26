import { writeClipboardText, installDemoResets, createDemoTimers } from './clipboard-access.js';
import { escapeHtml } from './shared.js';
import { m } from './clipthreat-messages.js';

// tips.js - セキュリティTips表示処理

window.addEventListener("DOMContentLoaded", () => {
  const timers = createDemoTimers();
  const tipsOutput = document.getElementById("tipsOutput");


  function showChecklist(title, items, description) {
    const timestamp = new Date().toLocaleTimeString('ja-JP');

    const checklistHtml = items.map((item, index) => {
      return `
        <div class="display-flex legacy-style-13">
          <input type="checkbox" id="check-${index}" class="legacy-style-14">
          <label for="check-${index}" class="legacy-style-15">
            <strong>${item.category}:</strong> ${item.description}
            ${item.priority ? `<span class="priority-${item.priority}">[${
              item.priority === 'high' ? m('tips.70') : item.priority === 'medium' ? m('tips.69') : m('tips.68')
            }]</span>` : ''}
          </label>
        </div>
      `;
    }).join('');

    tipsOutput.innerHTML = m('tips.67', [title, timestamp, description, checklistHtml]);
  }

  // 個人ユーザー向けチェックリスト
  window.showUserChecklist = function() {
    const userItems = [
      {
        category: m('tips.66'),
        description: m('tips.65'),
        priority: "high"
      },
      {
        category: m('tips.64'),
        description: m('tips.63'),
        priority: "high"
      },
      {
        category: m('tips.62'),
        description: m('tips.61'),
        priority: "high"
      },
      {
        category: m('tips.60'),
        description: m('tips.59'),
        priority: "high"
      },
      {
        category: m('tips.58'),
        description: m('tips.57'),
        priority: "medium"
      },
      {
        category: m('tips.56'),
        description: m('tips.55'),
        priority: "medium"
      },
      {
        category: m('tips.54'),
        description: m('tips.53'),
        priority: "medium"
      },
      {
        category: m('tips.52'),
        description: m('tips.51'),
        priority: "medium"
      },
      {
        category: m('tips.50'),
        description: m('tips.49'),
        priority: "low"
      },
      {
        category: m('tips.48'),
        description: m('tips.47'),
        priority: "low"
      }
    ];

    showChecklist(
      m('tips.46'),
      userItems,
      m('tips.45')
    );
  };

  // 開発者向けチェックリスト
  window.showDeveloperChecklist = function() {
    const devItems = [
      {
        category: m('tips.44'),
        description: m('tips.43'),
        priority: "high"
      },
      {
        category: m('tips.42'),
        description: m('tips.41'),
        priority: "high"
      },
      {
        category: m('tips.40'),
        description: m('tips.39'),
        priority: "high"
      },
      {
        category: m('tips.38'),
        description: m('tips.37'),
        priority: "high"
      },
      {
        category: "Rate Limiting",
        description: m('tips.36'),
        priority: "medium"
      },
      {
        category: m('tips.35'),
        description: m('tips.34'),
        priority: "medium"
      },
      {
        category: m('tips.33'),
        description: m('tips.32'),
        priority: "medium"
      },
      {
        category: m('tips.31'),
        description: m('tips.30'),
        priority: "medium"
      },
      {
        category: m('tips.29'),
        description: m('tips.28'),
        priority: "low"
      },
      {
        category: m('tips.27'),
        description: m('tips.26'),
        priority: "low"
      }
    ];

    showChecklist(
      m('tips.25'),
      devItems,
      m('tips.24')
    );
  };

  // システム管理者向けチェックリスト
  window.showAdminChecklist = function() {
    const adminItems = [
      {
        category: m('tips.23'),
        description: m('tips.22'),
        priority: "high"
      },
      {
        category: m('tips.21'),
        description: m('tips.20'),
        priority: "high"
      },
      {
        category: m('tips.19'),
        description: m('tips.18'),
        priority: "high"
      },
      {
        category: m('tips.17'),
        description: m('tips.16'),
        priority: "high"
      },
      {
        category: m('tips.15'),
        description: m('tips.14'),
        priority: "medium"
      },
      {
        category: m('tips.13'),
        description: m('tips.12'),
        priority: "medium"
      },
      {
        category: m('tips.11'),
        description: m('tips.10'),
        priority: "medium"
      },
      {
        category: m('tips.9'),
        description: m('tips.8'),
        priority: "medium"
      },
      {
        category: m('tips.7'),
        description: m('tips.6'),
        priority: "low"
      },
      {
        category: m('tips.5'),
        description: m('tips.4'),
        priority: "low"
      }
    ];

    showChecklist(
      m('tips.3'),
      adminItems,
      m('tips.2')
    );
  };

  // リセット機能
  window.resetTipsDemo = function() {
    tipsOutput.innerHTML = m('tips.1');
  };

  // アコーディオン機能
  window.toggleUserTipsAccordion = function() {
    const header = document.querySelector('#userTipsAccordionContent').previousElementSibling;
    const content = document.getElementById('userTipsAccordionContent');
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleDeveloperTipsAccordion = function() {
    const header = document.querySelector('#developerTipsAccordionContent').previousElementSibling;
    const content = document.getElementById('developerTipsAccordionContent');
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleAdminTipsAccordion = function() {
    const header = document.querySelector('#adminTipsAccordionContent').previousElementSibling;
    const content = document.getElementById('adminTipsAccordionContent');
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleEmergencyAccordion = function() {
    const header = document.querySelector('#emergencyAccordionContent').previousElementSibling;
    const content = document.getElementById('emergencyAccordionContent');
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };

  window.toggleThreatInfoAccordion = function() {
    const header = document.querySelector('#threatInfoAccordionContent').previousElementSibling;
    const content = document.getElementById('threatInfoAccordionContent');
    const icon = header.querySelector('.accordion-icon');

    header.classList.toggle('active');
    content.classList.toggle('open');

    if (content.classList.contains('open')) {
      icon.textContent = '▲';
    } else {
      icon.textContent = '▼';
    }
  };
  installDemoResets(["resetTipsDemo"], tipsOutput, () => timers.cancel());
});

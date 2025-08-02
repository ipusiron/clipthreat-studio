// tips.js - セキュリティTips表示処理

window.addEventListener("DOMContentLoaded", () => {
  const tipsOutput = document.getElementById("tipsOutput");

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showChecklist(title, items, description) {
    const timestamp = new Date().toLocaleTimeString('ja-JP');
    
    const checklistHtml = items.map((item, index) => {
      return `
        <div style="display: flex; align-items: flex-start; gap: 0.5rem; margin: 0.5rem 0; padding: 0.5rem; background: #f9f9f9; border-radius: 4px;">
          <input type="checkbox" id="check-${index}" style="margin-top: 0.2rem; width: auto;">
          <label for="check-${index}" style="flex: 1; cursor: pointer; line-height: 1.5;">
            <strong>${item.category}:</strong> ${item.description}
            ${item.priority ? `<span style="color: ${item.priority === 'high' ? '#d32f2f' : item.priority === 'medium' ? '#f57c00' : '#388e3c'}; font-size: 0.8rem; margin-left: 0.5rem;">[${item.priority === 'high' ? '高優先度' : item.priority === 'medium' ? '中優先度' : '低優先度'}]</span>` : ''}
          </label>
        </div>
      `;
    }).join('');

    tipsOutput.innerHTML = `
      <div class="clipboard-result">
        <div class="action-info">
          <span class="action">✅ ${title}</span>
          <span class="timestamp">${timestamp}</span>
        </div>
        <div class="content-info">
          <div class="preview">
            <p style="margin-top: 0;"><strong>${description}</strong></p>
            ${checklistHtml}
            <div style="margin-top: 1rem; padding: 0.5rem; background: #e3f2fd; border-radius: 4px; font-size: 0.9rem;">
              💡 <strong>使い方：</strong>各項目をチェックして、自身のセキュリティ対策状況を確認してください。すべてチェックできるよう対策を進めましょう。
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 個人ユーザー向けチェックリスト
  window.showUserChecklist = function() {
    const userItems = [
      {
        category: "ブラウザー設定",
        description: "クリップボードアクセス権限を信頼できるサイトのみに制限している",
        priority: "high"
      },
      {
        category: "パスワード管理",
        description: "パスワードマネージャーを使用し、手動コピペを最小限に抑えている",
        priority: "high"
      },
      {
        category: "サイト確認",
        description: "重要な情報を貼り付ける前にURLとSSL証明書を確認している",
        priority: "high"
      },
      {
        category: "2要素認証",
        description: "重要なアカウントには2要素認証を設定している",
        priority: "high"
      },
      {
        category: "クリップボード管理",
        description: "機密情報使用後は必ずクリップボードをクリアしている",
        priority: "medium"
      },
      {
        category: "ソフトウェア更新",
        description: "ブラウザーとセキュリティソフトを最新版に保っている",
        priority: "medium"
      },
      {
        category: "公共端末利用",
        description: "共有PCやカフェのWi-Fiで機密情報を扱わない",
        priority: "medium"
      },
      {
        category: "フィッシング対策",
        description: "怪しいメールのリンクから貼り付け操作を求められても応じない",
        priority: "medium"
      },
      {
        category: "バックアップ",
        description: "重要なデータは定期的にバックアップを取っている",
        priority: "low"
      },
      {
        category: "セキュリティ教育",
        description: "最新のサイバー攻撃手法について定期的に情報収集している",
        priority: "low"
      }
    ];

    showChecklist(
      "個人ユーザー向けセキュリティチェックリスト",
      userItems,
      "日常のクリップボード使用における個人レベルでのセキュリティ対策を確認しましょう。"
    );
  };

  // 開発者向けチェックリスト
  window.showDeveloperChecklist = function() {
    const devItems = [
      {
        category: "CSP設定",
        description: "Content Security Policyを適切に設定し、外部への不正通信をブロックしている",
        priority: "high"
      },
      {
        category: "入力値検証",
        description: "pasteイベントで取得したデータに対して厳密なバリデーションを実装している",
        priority: "high"
      },
      {
        category: "HTTPS強制",
        description: "すべての通信をHTTPS化し、クリップボードAPIを安全に使用している",
        priority: "high"
      },
      {
        category: "エラーハンドリング",
        description: "機密情報を含まないエラーメッセージとログ出力を実装している",
        priority: "high"
      },
      {
        category: "Rate Limiting",
        description: "短時間での大量リクエストを制限するAPI設計を実装している",
        priority: "medium"
      },
      {
        category: "監査ログ",
        description: "セキュリティイベントの適切な記録と分析システムを構築している",
        priority: "medium"
      },
      {
        category: "依存関係管理",
        description: "サードパーティライブラリの脆弱性を定期的にチェックしている",
        priority: "medium"
      },
      {
        category: "セキュリティテスト",
        description: "定期的な脆弱性スキャンとペネトレーションテストを実施している",
        priority: "medium"
      },
      {
        category: "コードレビュー",
        description: "pasteイベントハンドラーを含むセキュリティ関連コードのレビュー体制がある",
        priority: "low"
      },
      {
        category: "インシデント対応",
        description: "セキュリティインシデント発生時の対応手順が文書化されている",
        priority: "low"
      }
    ];

    showChecklist(
      "開発者向けセキュリティチェックリスト",
      devItems,
      "Webアプリケーション開発におけるクリップボード関連のセキュリティ実装を確認しましょう。"
    );
  };

  // システム管理者向けチェックリスト
  window.showAdminChecklist = function() {
    const adminItems = [
      {
        category: "セキュリティポリシー",
        description: "クリップボード使用に関する組織のセキュリティポリシーを策定・周知している",
        priority: "high"
      },
      {
        category: "従業員教育",
        description: "定期的なセキュリティ意識向上研修を実施している",
        priority: "high"
      },
      {
        category: "エンドポイント保護",
        description: "クリップボード監視機能を持つEDRソリューションを導入している",
        priority: "high"
      },
      {
        category: "ネットワーク監視",
        description: "異常な外部通信を検出する監視システムを運用している",
        priority: "high"
      },
      {
        category: "インシデント対応体制",
        description: "クリップボード関連のセキュリティインシデント対応手順が確立されている",
        priority: "medium"
      },
      {
        category: "ログ分析",
        description: "Webアプリケーションログの異常検出システムを運用している",
        priority: "medium"
      },
      {
        category: "DLP導入",
        description: "Data Loss Prevention ツールで機密情報の流出を防いでいる",
        priority: "medium"
      },
      {
        category: "脅威インテリジェンス",
        description: "最新の攻撃手法情報を定期的に収集・分析している",
        priority: "medium"
      },
      {
        category: "定期監査",
        description: "セキュリティ対策の有効性を定期的に評価・改善している",
        priority: "low"
      },
      {
        category: "事業継続計画",
        description: "重大なセキュリティインシデント発生時の事業継続計画がある",
        priority: "low"
      }
    ];

    showChecklist(
      "システム管理者向けセキュリティチェックリスト",
      adminItems,
      "組織レベルでのクリップボードセキュリティ対策と運用体制を確認しましょう。"
    );
  };

  // リセット機能
  window.resetTipsDemo = function() {
    tipsOutput.innerHTML = '<div class="message info">📋 上のボタンからセキュリティチェックリストを表示できます。自身の役割に応じて確認してください。</div>';
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
});
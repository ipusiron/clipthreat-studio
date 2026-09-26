// Pure helpers: no DOM, clipboard access, network or translated labels.
export function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function isWebUrl(text) {
  try {
    const url = new URL(text);
    return /^https?:$/.test(url.protocol) &&
      /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.test(url.hostname);
  } catch {
    return false;
  }
}

const email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const card = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;

export function detectContentType(text) {
  if (isWebUrl(text)) return { key: 'type.url' };
  if (/^[A-Za-z0-9+\/=]+$/.test(text) && text.length > 20) return { key: 'type.base64' };
  if (email.test(text)) return { key: 'type.emailWatch' };
  if (card.test(text)) return { key: 'type.cardWatch' };
  return { key: 'type.text' };
}

export function detectDataType(text, developer = false) {
  if (developer) {
    if (/^sk-[a-zA-Z0-9]{40,}$/.test(text)) return { key: 'type.openai' };
    if (/^xoxb-[a-zA-Z0-9-]+$/.test(text)) return { key: 'type.slack' };
    if (/^ghp_[a-zA-Z0-9]{36}$/.test(text)) return { key: 'type.github' };
    if (/^[A-Za-z0-9]{32,}$/.test(text)) return { key: 'type.token' };
    if (/^export\s+\w+\s*=/.test(text)) return { key: 'type.env' };
    if (/DATABASE_URL|DB_PASSWORD|SECRET_KEY|PRIVATE_KEY/i.test(text)) return { key: 'type.secret' };
    if (/^-----BEGIN [A-Z ]+-----/.test(text)) return { key: 'type.ssh' };
  } else if (card.test(text)) return { key: 'type.card' };
  if (email.test(text)) return { key: 'type.email' };
  if (isWebUrl(text)) return { key: 'type.url' };
  if (developer ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/i.test(text) : /password|pass|pwd/i.test(text)) {
    return { key: 'type.password' };
  }
  return { key: 'type.text' };
}

export function analyzeCharacters(text) {
  return [...text].map(char => ({
    char, hex: char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'),
    key: /[\u200B-\u200F\u2028-\u202E\u2066-\u2069\uFEFF]/u.test(char) ? 'char.control' : 'char.visible'
  }));
}

export function buildInspectorUrl(text, attackType) {
  const params = new URLSearchParams({ text, source: 'clipthreat-studio', attack_type: attackType });
  return `https://ipusiron.github.io/weirdstring-inspector/#${params}`;
}

export function clickFixPreview() {
  return { key: 'clickfix.masked', values: ['PowerShell'] };
}

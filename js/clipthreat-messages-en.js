// English counterparts retain the interpolation slots of the Japanese dictionary.
const completion = text => [
  '<div class="clipboard-result"><div class="action-info">🎉 Tutorial complete! <span class="timestamp">',
  '</span></div><div class="preview legacy-style-16">' + text + '</div></div>'
];
const info = text => `<div class="message info">📋 ${text}</div>`;
const reset = info('Tutorial reset. Start again from step 1!');
const stages = [
  '<div class="clipboard-result"><div class="action-info"><span class="action">',
  ' Step ', ': ', '</span><span class="timestamp">',
  '</span></div><div class="content-info"><div class="preview">', '</div></div></div>'
];

const translated = {
  'language.toggle': 'JA',
  'language.label': 'Switch to Japanese (resets demos)',
  'clipboard.cleared': 'The clipboard has been cleared.',
  'clipboard.unavailable': 'Could not clear the clipboard. Check permissions and browser support, then clear it manually.',
  'clickfix.safe': 'This is a ClipThreat Studio demo. No attack command has been written to the clipboard.',
  'clickfix.safeTitle': 'Only a harmless explanation was copied',
  'type.cardWatch': 'Card number?', 'type.text': 'Text', 'type.card': 'Credit card number',
  'type.email': 'Email address', 'type.password': 'Password', 'type.openai': 'OpenAI API key',
  'type.token': 'API key/token', 'type.env': 'Environment-variable setting', 'type.secret': 'Confidential configuration',
  'type.ssh': 'SSH private key', 'char.control': 'Control character',
  'clickfix.masked': ['A real attack would insert an executable command here: ', ' … (dangerous content redacted)'],
  'clipboard.1': completion('Congratulations! You have learned clipboard reading, writing, and clearing, ' +
    'and why security matters. Explore the other tabs to learn about further threats.'),
  'clipboard.2': reset,
  'clipboard.3': info('Demo reset. Try the basic clipboard operations.'),
  'clipboard.4': 'Failed to clear the clipboard.',
  'clipboard.5': 'Clipboard cleared.',
  'clipboard.6': 'Failed to read the clipboard. Select “Allow” in the browser permission dialog.',
  'clipboard.7': 'Security error: check that you are using HTTPS.<br><small>The Clipboard API requires a secure connection.</small>',
  'clipboard.8': 'Clipboard reading is not permitted. Click “Allow”.<br><small>This browser safeguard prevents ' +
    'malicious sites from reading your clipboard without permission.</small>',
  'clipboard.9': 'Read from clipboard', 'clipboard.10': 'The clipboard is empty.',
  'clipboard.11': 'Failed to write to the clipboard. Check that you are using HTTPS.',
  'clipboard.12': 'Written to clipboard', 'clipboard.13': 'Enter text to write.',
  'clipboard.14': [
    '<div class="clipboard-result"><div class="action-info"><span class="action">',
    '</span><span class="timestamp">', '</span></div><div class="content-info"><div class="preview"><code>',
    '</code></div><div class="meta"><span>Characters: ', '</span><span>Lines: ',
    '</span></div></div><div class="action-explanation">', '</div></div>'
  ],
  'clipboard.15': '<small>✔️ Loaded into the text area</small>',
  'clipboard.16': '<small>✔️ You can paste into another app with Ctrl+V</small>',
  'clipboard.17': 'Written to clipboard',
  'watch.1': completion('Congratulations! You have learned real-time monitoring, data classification, and interval adjustment. ' +
    'Explore the other tabs to learn about more advanced threats.'),
  'watch.2': 'The tab is now active.',
  'watch.3': 'The tab is inactive. Monitoring continues, but some browsers may restrict clipboard access.',
  'watch.4': 'Monitoring stopped', 'watch.5': ['Monitoring started (interval: ', ' ms)'],
  'watch.6': 'Checking clipboard permission...', 'watch.7': 'Click “Allow” in the browser permission dialog.',
  'watch.8': 'Repeated monitoring errors occurred. Stopping monitoring.',
  'watch.9': 'Clipboard reading is not permitted. Click “Allow” in the browser permission dialog.',
  'watch.10': ['Change detected — ', '<br><div class="preview-content">', '</div>'],
  'watch.11': ['Characters: ', ' | Type: '],
  'watch.12': '<div class="log-empty">📋 No log entries yet</div>',
  'watch.13': ['📊 Monitoring: ', ' | Detections: ', ' | Elapsed: ', ' seconds'],
  'watch.14': '⚪ Stopped', 'watch.15': '🔴 Monitoring',
  'sniff.1': [
    '<div class="clipboard-result"><div class="action-info"><span class="action">✅ Paste event detected #',
    '</span><span class="timestamp">', '</span></div><div class="content-info"><div class="preview"><code>',
    '</code></div><div class="meta"><span>Characters: ', '</span><span>Data type: ',
    '</span></div></div><small>⚠️ In a real attack, this information would be sent to the attacker’s server.</small></div>'
  ],
  'sniff.2': completion('Congratulations! You have explored paste interception and data classification, ' +
    'and learned about the risks. Be careful when pasting into untrusted sites.'),
  'sniff.3': reset,
  'sniff.4': info('Demo reset. Paste into the field above to explore paste-event sniffing.'),
  'clickfix.1': completion('🎓 You have learned how ClickFix works, its visual tricks and stages, the cancel-button trap, ' +
    'and practical defenses.<br><strong>🛡️ You now have the knowledge to protect yourself.</strong><br>' +
    'If you encounter a real attack, remember these defenses and respond safely.'),
  'clickfix.2': info('Click “Repair now” to follow the simulated attack.'),
  'clickfix.3': info('Demo reset. Click “Repair now” to follow the simulated attack.'),
  'clickfix.4': '<div class="legacy-style-17"><strong>⚠️ Warning:</strong> Some ClickFix attacks also trigger from ' +
    '“Cancel” or “Later” buttons.<br>The safe response is to <strong>close the page</strong>.</div>',
  'clickfix.5': 'The cancel-button trap',
  'clickfix.6': '<div class="legacy-style-18"><strong>🎓 Learning points:</strong><br>' +
    '• A seemingly legitimate repair button can start an attack.<br>• Dangerous commands may be placed in the clipboard.<br>' +
    '• The attack relies on the user executing them manually.<br>• Users without technical knowledge can be deceived.<br><br>' +
    '<strong>🛡️ Defenses:</strong><br>• Question unexpected errors.<br>' +
    '• Inspect PowerShell commands before running them.<br>• Resolve issues through official support.</div>',
  'clickfix.7': 'Completion and educational explanation',
  'clickfix.8': 'Real attacks ask you to paste into an OS execution dialog. Do not follow those instructions; ' +
    'contact official support. This demo does not execute anything.',
  'clickfix.9': 'Instructions given to the user',
  'clickfix.10': '❌ Copy failed. Browser restrictions or a user action may be required.<br>Real attacks often succeed at this stage.',
  'clickfix.11': 'Clipboard copy failed',
  'clickfix.12': ['This demo copies only a harmless explanation.'],
  'clickfix.13': 'Copying a harmless explanation',
  'clickfix.14': 'The user clicked a seemingly harmless repair button.<br>This is where the simulated attack begins.',
  'clickfix.15': 'User clicks the repair button', 'clickfix.16': stages,
  'autopaste.1': info('Paste into the field above to explore automatic submission.'),
  'autopaste.2': info('Demo reset. Paste into the field above to explore automatic submission.'),
  'autopaste.3': reset,
  'autopaste.4': completion('🎓 You have learned how immediate transmission works, which developer data is targeted, ' +
    'how it differs from paste sniffing, and why real-time leaks matter.<br><strong>🛡️ Key lesson for developers:</strong><br>' +
    'Never paste API keys or configuration data into untrusted sites.'),
  'autopaste.5': [
    '<div class="legacy-style-18"><strong>🎓 Learning points:</strong><br>• One paste can expose secrets.<br>' +
      '• Users may not notice the attack.<br>• Exposure of ',
    ' creates the following risks:<br>', '<br><br><strong>🛡️ Prevention:</strong><br>' +
      'Do not paste valuable information into untrusted sites.</div>'
  ],
  'autopaste.6': '&nbsp;&nbsp;→ Privacy violations and misuse of information',
  'autopaste.7': '&nbsp;&nbsp;→ Account takeover and unauthorized login', 'autopaste.8': 'Password',
  'autopaste.9': '&nbsp;&nbsp;→ Unauthorized production access and configuration tampering',
  'autopaste.10': 'Environment-variable setting',
  'autopaste.11': '&nbsp;&nbsp;→ Database intrusion and customer-data exposure',
  'autopaste.12': 'Confidential configuration',
  'autopaste.13': '&nbsp;&nbsp;→ Server intrusion and system takeover', 'autopaste.14': 'SSH private key',
  'autopaste.15': '&nbsp;&nbsp;→ Service abuse, unexpected charges, and data leaks', 'autopaste.16': 'API key',
  'autopaste.17': 'Completion and impact analysis',
  'autopaste.18': ['This is a display-only simulation of external transmission. No request is made.<br>Content: <code>',
    '</code><br>Data type: '],
  'autopaste.19': 'Automatic submission to an external server',
  'autopaste.20': ['Extracting clipboard data...<br><div class="legacy-style-19"><strong>Extracted data:</strong><br>Content: <code>',
    '</code><br>Data type: ', '<br>Characters: ', '</div><strong>⚠️ Risk level:</strong> '],
  'autopaste.21': '🟡 Medium risk', 'autopaste.22': '🟠 High risk', 'autopaste.23': 'Environment-variable setting',
  'autopaste.24': 'Password', 'autopaste.25': '🔴 Critical risk', 'autopaste.26': 'Confidential configuration',
  'autopaste.27': 'SSH private key', 'autopaste.28': 'API key', 'autopaste.29': 'Data extraction and analysis',
  'autopaste.30': 'A paste operation was detected.<br>The simulated attack begins at this moment.',
  'autopaste.31': 'Paste event detected', 'autopaste.32': stages,
  'weirdchar.1': info('Explore Unicode tricks. Start with the tutorial!'), 'weirdchar.2': reset,
  'weirdchar.3': completion('🎓 You have explored zero-width spaces, RTL extension spoofing, homographs, and mixed scripts.<br>' +
    '<strong>🛡️ Do not rely on appearance alone.</strong><br>Inspect filenames and URLs technically as well as visually.'),
  'weirdchar.4': info('Demo reset. Use the buttons above to explore Unicode tricks.'),
  'weirdchar.5': '❌ Copy failed.',
  'weirdchar.6': '👥 Cyrillic “а” (U+0430) resembles Latin “a” (U+0061). This is a typical IDN spoofing example.',
  'weirdchar.7': 'Homograph trick', 'weirdchar.8': '❌ Copy failed.',
  'weirdchar.9': '🌐 This URL looks normal, but Cyrillic “оо” (U+043E) imitate Latin “oo” (U+006F). This can be abused for phishing.',
  'weirdchar.10': 'Mixed-script trick', 'weirdchar.11': '❌ Copy failed.',
  'weirdchar.12': '🚨 An executable (.exe) appears to be an image (.png). This trick is often abused to distribute malware.',
  'weirdchar.13': 'RTL extension spoofing', 'weirdchar.14': '❌ Copy failed.',
  'weirdchar.15': '⚠️ Visually identical filenames can produce different search and comparison results. ' +
    'This may be abused to bypass filters or spoof files.',
  'weirdchar.16': 'Zero-width-space trick', 'weirdchar.17': 'Zero-width',
  'weirdchar.18': [
    '<div class="clipboard-result"><div class="action-info"><span class="action">', ' ', ' #',
    '</span><span class="timestamp">', '</span></div><div class="content-info"><div class="preview"><strong>Appearance:</strong> <code>',
    '</code><br><strong>Actual:</strong> <code>', '</code><br><strong>Unicode details:</strong> <code class="legacy-style-20">',
    '</code><div class="legacy-style-21"><strong>🔍 Detailed inspection:</strong> Inspect with WeirdString Inspector ' +
      '<button type="button" class="inspector-button legacy-style-22"', '',
    '>🔍 Inspect with WeirdString Inspector</button></div></div><div class="meta"><span>Characters: ',
    '</span><span>Bytes: ', '</span><span>Attack type: ', '</span></div></div><div class="action-explanation"><small>',
    '</small></div></div>'
  ],
  'tips.1': info('Use the buttons above to show the checklist for your role.'),
  'tips.2': 'Review organization-wide clipboard security measures and operational readiness.',
  'tips.3': 'Security checklist for system administrators',
  'tips.4': 'A business-continuity plan exists for serious security incidents', 'tips.5': 'Business continuity',
  'tips.6': 'Security measures are regularly evaluated and improved', 'tips.7': 'Regular audits',
  'tips.8': 'Information on current attack techniques is regularly collected and analyzed', 'tips.9': 'Threat intelligence',
  'tips.10': 'Data Loss Prevention tools help prevent confidential data leaks', 'tips.11': 'DLP deployment',
  'tips.12': 'Web-application logs are monitored for anomalies', 'tips.13': 'Log analysis',
  'tips.14': 'Clipboard-related incident-response procedures are established', 'tips.15': 'Incident-response readiness',
  'tips.16': 'Monitoring detects unusual external traffic', 'tips.17': 'Network monitoring',
  'tips.18': 'An EDR solution with clipboard monitoring is deployed', 'tips.19': 'Endpoint protection',
  'tips.20': 'Regular security-awareness training is provided', 'tips.21': 'Employee training',
  'tips.22': 'Clipboard security policies are defined and communicated', 'tips.23': 'Security policy',
  'tips.24': 'Review clipboard-related security controls in web-application development.',
  'tips.25': 'Security checklist for developers',
  'tips.26': 'Security incident-response procedures are documented', 'tips.27': 'Incident response',
  'tips.28': 'Security-sensitive code, including paste handlers, is reviewed', 'tips.29': 'Code review',
  'tips.30': 'Vulnerability scans and penetration tests are performed regularly', 'tips.31': 'Security testing',
  'tips.32': 'Third-party libraries are checked regularly for vulnerabilities', 'tips.33': 'Dependency management',
  'tips.34': 'Security events are properly recorded and analyzed', 'tips.35': 'Audit logs',
  'tips.36': 'API design limits bursts of requests',
  'tips.37': 'Error messages and logs contain no confidential information', 'tips.38': 'Error handling',
  'tips.39': 'All traffic uses HTTPS and the Clipboard API is used securely', 'tips.40': 'Enforce HTTPS',
  'tips.41': 'Data obtained from paste events is strictly validated', 'tips.42': 'Input validation',
  'tips.43': 'Content Security Policy blocks unauthorized external communication', 'tips.44': 'CSP configuration',
  'tips.45': 'Review personal security habits for everyday clipboard use.', 'tips.46': 'Security checklist for users',
  'tips.47': 'I regularly learn about current cyberattack techniques', 'tips.48': 'Security education',
  'tips.49': 'I back up important data regularly', 'tips.50': 'Backups',
  'tips.51': 'I ignore paste requests reached through suspicious email links', 'tips.52': 'Phishing prevention',
  'tips.53': 'I avoid handling secrets on shared PCs or cafe Wi-Fi', 'tips.54': 'Public devices',
  'tips.55': 'I keep my browser and security software updated', 'tips.56': 'Software updates',
  'tips.57': 'I clear the clipboard after using confidential information', 'tips.58': 'Clipboard hygiene',
  'tips.59': 'I enable two-factor authentication for important accounts', 'tips.60': 'Two-factor authentication',
  'tips.61': 'I check the URL and SSL certificate before pasting important information', 'tips.62': 'Site verification',
  'tips.63': 'I use a password manager to minimize manual copying and pasting', 'tips.64': 'Password management',
  'tips.65': 'I grant clipboard access only to trusted sites', 'tips.66': 'Browser settings',
  'tips.67': ['<div class="clipboard-result"><div class="action-info"><span class="action">✅ ',
    '</span><span class="timestamp">', '</span></div><div class="content-info"><div class="preview">' +
      '<p class="legacy-style-23"><strong>', '</strong></p>',
    '<div class="legacy-style-24">💡 <strong>How to use:</strong> Check each item to review your defenses. ' +
      'Work toward meeting every item.</div></div></div></div>'],
  'tips.68': 'Low priority', 'tips.69': 'Medium priority', 'tips.70': 'High priority',
  'paste.warning': 'Warning signs found. Check the content and where you intend to paste it.',
  'paste.clear': 'No issues found among the characters checked. This does not guarantee safety.',
  'paste.tooLong': 'Use no more than 100,000 code points.',
  'paste.invisible': 'Invisible characters', 'paste.bidi': 'Direction controls',
  'paste.mixed': 'Mixed scripts (possible homographs)', 'paste.none': 'None',
  'paste.detected': ['Detected: ', '. Positions (starting at 1): ', ''],
  'paste.denied': 'Could not read the clipboard. Check permissions or enter text manually.',
  'paste.reset': 'Input and results reset. The clipboard was not changed.'
};

export function createEnglishMessages(japanese) {
  const result = { ...japanese, ...translated };
  for (const [key, value] of Object.entries(result)) {
    if (/[\u3040-\u30ff\u3400-\u9fff]/u.test(String(value))) throw new Error('Missing English translation: ' + key);
    if (!Object.hasOwn(japanese, key)) throw new Error('Unexpected English key: ' + key);
    if (Array.isArray(value) && value.length !== japanese[key].length) throw new Error('Interpolation mismatch: ' + key);
  }
  return result;
}

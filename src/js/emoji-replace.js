// ============================================
// PARODONTO'LAGNY — Emoji → SVG Auto-Replacer
// Runs on page load to swap emojis with clean icons
// ============================================

import { icon, iconRaw } from './icons.js';

const emojiMap = {
  // Medical & Services
  '🦷': 'tooth',
  '🩺': 'stethoscope',
  '⚕️': 'medicalCross',
  '⚕': 'medicalCross',
  '🔬': 'microscope',
  '🛡️': 'shield',
  '🛡': 'shield',
  '❤️‍🩹': 'heartBroken',
  '❤️': 'heart',
  '❤': 'heart',
  '💉': 'medicalCross',

  // Risk Factors
  '🚬': 'cigarette',
  '🩸': 'droplet',
  '🧬': 'dna',
  '🧠': 'brain',
  '😰': 'frown',
  '💊': 'pill',
  '🤰': 'baby',
  '🦴': 'bone',
  '🫁': 'lung',

  // Symptoms
  '🔴': 'alertCircle',
  '💨': 'wind',
  '↔️': 'arrowsHV',
  '📐': 'ruler',
  '🍖': 'utensils',

  // Navigation & Actions
  '📅': 'calendar',
  '📍': 'pin',
  '🚆': 'train',
  '🔄': 'refresh',
  '📋': 'clipboard',
  '📊': 'chart',

  // Prevention
  '🪥': 'brush',
  '🧵': 'thread',
  '🍎': 'apple',
  '🚭': 'noSmoking',
  '💧': 'droplet',

  // Treatments
  '🧹': 'brush',
  '🔧': 'wrench',
  '🌱': 'sprout',

  // Contact & General
  '✅': 'checkCircle',
  '⚠️': 'warning',
  '⚠': 'warning',
  '✓': 'checkMark',

  // Values
  '🎯': 'target',
  '📖': 'bookOpen',
  '🎓': 'graduation',
  '🏥': 'building',
  '🌍': 'globe',
  '⏱️': 'clock',
  '⏱': 'clock',
  '♿': 'accessible',
  '🚗': 'car',
  '💳': 'creditCard',
  '🏦': 'bank',

  // NEW — previously unmapped emojis
  '⚡': 'bolt',
  '👀': 'eyes',
  '💔': 'heartCrack',
  '🤝': 'handshakeHeart',
  '💚': 'heartGreen',
  '📚': 'books',
  '👩‍⚕️': 'doctor',
  '👩\u200D⚕️': 'doctor',
  '🕐': 'clockAlt',
  '🍽️': 'plateCutlery',
  '🍽': 'plateCutlery',
  '📞': 'phone',
  '💀': 'xCircle',
  '🔥': 'bolt',
};

// Build a regex from all emoji keys (longest first to handle composed emojis)
const emojiKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
const emojiRegex = new RegExp(emojiKeys.map(e => e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g');

export function replaceEmojis() {
  // 1. Replace emojis in card-icon elements (small icons in cards)
  document.querySelectorAll('.card-icon').forEach(el => {
    const text = el.textContent.trim();
    const iconName = emojiMap[text];
    if (iconName) {
      el.innerHTML = iconRaw(iconName);
    }
  });

  // 2. Replace emojis in content-image elements (large decorative)
  document.querySelectorAll('.content-image').forEach(el => {
    const text = el.textContent.trim();
    const iconName = emojiMap[text];
    if (iconName) {
      el.innerHTML = icon(iconName, 80);
    }
  });

  // 3. Replace emojis in .result-icon elements (quiz results)
  document.querySelectorAll('.result-icon').forEach(el => {
    const text = el.textContent.trim();
    const iconName = emojiMap[text];
    if (iconName) {
      el.innerHTML = icon(iconName, 48);
    }
  });

  // 4. Replace emojis in .icon elements (trust bar, footer contact, infos-pratiques)
  document.querySelectorAll('.icon').forEach(el => {
    const text = el.textContent.trim();
    const iconName = emojiMap[text];
    if (iconName) {
      el.innerHTML = icon(iconName, 18);
      el.classList.add('svg-icon-wrapper');
    }
  });

  // 5. Replace emojis in elements with heartbeat class (autodiagnostic stethoscope)
  document.querySelectorAll('.heartbeat').forEach(el => {
    const text = el.textContent.trim();
    const iconName = emojiMap[text];
    if (iconName) {
      el.innerHTML = icon(iconName, 48);
    }
  });

  // 6. Walk the entire DOM to replace inline emoji text in all other elements
  replaceEmojisInTextNodes(document.body);
}

function replaceEmojisInTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodesToReplace = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    // Skip script/style tags
    if (node.parentElement && (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE')) {
      continue;
    }
    if (emojiRegex.test(node.textContent)) {
      nodesToReplace.push(node);
    }
  }

  nodesToReplace.forEach(node => {
    // Reset regex lastIndex
    emojiRegex.lastIndex = 0;
    const text = node.textContent;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = emojiRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(document.createTextNode(text.substring(lastIndex, match.index)));
      }
      const iconName = emojiMap[match[0]];
      if (iconName) {
        const span = document.createElement('span');
        span.className = 'svg-icon';
        span.style.cssText = 'width:1em;height:1em;display:inline-flex;align-items:center;justify-content:center;vertical-align:-0.125em;';
        span.innerHTML = iconRaw(iconName);
        parts.push(span);
      } else {
        parts.push(document.createTextNode(match[0]));
      }
      lastIndex = match.index + match[0].length;
    }

    if (parts.length > 0) {
      if (lastIndex < text.length) {
        parts.push(document.createTextNode(text.substring(lastIndex)));
      }
      const parent = node.parentNode;
      parts.forEach(part => parent.insertBefore(part, node));
      parent.removeChild(node);
    }
  });
}

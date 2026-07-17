// ============================================
// PARODONTO'LAGNY — Pré-rendu statique du layout
// Exécuté après `vite build` : injecte header/footer/CTA/nav
// directement dans le HTML de dist/ pour que les moteurs de
// recherche voient tout sans exécuter de JavaScript.
// Le runtime (layout.js) détecte l'absence des placeholders
// et ne ré-insère rien — il ne fait que brancher les interactions.
// ============================================

import { JSDOM } from 'jsdom';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';
import { pathToFileURL } from 'url';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const SITE = 'https://dentiste-parodontologie-lagny.fr';
const LAYOUT = pathToFileURL(join(ROOT, 'src/js/layout.js')).href;

// Collecte des pages HTML de dist (racine + en/ + zh/)
function collectHtml(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      if (entry === 'assets' || entry === 'images') continue;
      out.push(...collectHtml(p));
    } else if (entry.endsWith('.html')) {
      out.push(p);
    }
  }
  return out;
}

// activePage : lu depuis le fichier source correspondant (initLayout('xxx'))
function getActivePage(relPath) {
  const src = join(ROOT, relPath);
  if (!existsSync(src)) return '';
  const m = readFileSync(src, 'utf8').match(/initLayout\(\s*['"]([^'"]*)['"]\s*\)/);
  return m ? m[1] : '';
}

let n = 0;
let i = 0;
for (const file of collectHtml(DIST)) {
  const relPath = relative(DIST, file);
  const urlPath = relPath === 'index.html' ? '/' : '/' + relPath.replace(/\\/g, '/');
  const html = readFileSync(file, 'utf8');

  const dom = new JSDOM(html, { url: SITE + urlPath });
  const { window } = dom;

  // Globals pour layout.js (importé dans le contexte node)
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.NodeFilter = window.NodeFilter;
  globalThis.requestAnimationFrame = (cb) => cb(); // exécution synchrone (emojis → SVG statiques)
  globalThis.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  if (typeof window.matchMedia !== 'function') {
    window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
  }

  // Import frais par page (l'état module dépend de <html lang> et de l'URL)
  const { initLayout } = await import(`${LAYOUT}?page=${i++}`);
  initLayout(getActivePage(relPath));

  writeFileSync(file, dom.serialize());
  n++;
  window.close();
}

console.log(`✅ Pré-rendu : ${n} pages (header/footer/nav statiques)`);

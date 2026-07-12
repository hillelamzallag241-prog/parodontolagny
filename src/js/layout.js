// ============================================
// PARODONTO'LAGNY — Shared Layout & Interactions
// ============================================

import { icon } from './icons.js';
import { replaceEmojis } from './emoji-replace.js';

const DOCTOLIB_URL = 'https://www.doctolib.fr/dentiste/lagny-sur-marne/rebecca-cohen-77400-lagny-sur-marne/booking/motives?specialityId=1&telehealth=false&placeId=practice-268019&motiveCategoryIds%5B%5D=222400&profile_skipped=false&source=profile';

// --- i18n ---------------------------------------------------------------
// Langue courante déduite de <html lang="..">
const LANG = (document.documentElement.getAttribute('lang') || 'fr').slice(0, 2);

// Pages disposant d'une traduction (chemins « de base », préfixe de langue retiré)
const TRANSLATED_PAGES = ['/index.html', '/autodiagnostic.html', '/contact.html', '/tarifs.html'];

// Chemin de base de la page courante (sans /en ou /zh, avec / => /index.html)
function currentBasePath() {
  let rest = window.location.pathname.replace(/^\/(en|zh)(\/|$)/, '/');
  if (rest === '/' || rest === '') rest = '/index.html';
  return rest;
}

// Localise un chemin interne pour la langue courante
function L(path) {
  if (LANG === 'fr') return path;
  if (path === '/') return `/${LANG}/index.html`;
  return `/${LANG}${path}`;
}

// Sélecteur de langue (affiché uniquement sur les pages traduites)
function getLangSwitcher() {
  const base = currentBasePath();
  if (!TRANSLATED_PAGES.includes(base)) return '';
  const frHref = base === '/index.html' ? '/' : base;
  const enHref = '/en' + base;
  const zhHref = '/zh' + base;
  const cls = (l) => 'lang-link' + (LANG === l ? ' active' : '');
  return `
    <div class="lang-switch" role="group" aria-label="Language / Langue / 语言">
      <a href="${frHref}" class="${cls('fr')}" hreflang="fr" lang="fr">FR</a>
      <a href="${enHref}" class="${cls('en')}" hreflang="en" lang="en">EN</a>
      <a href="${zhHref}" class="${cls('zh')}" hreflang="zh" lang="zh">中文</a>
    </div>`;
}

// Dictionnaires (header/footer/CTA) pour les langues internationales
const T = {
  en: {
    navHome: 'Home',
    navTest: 'Gum self-test',
    navPricing: 'Pricing',
    navContact: 'Contact',
    rdv: 'Book an appointment',
    intlNote: 'Only the main pages are available in English. Switch to FR for the full site.',
    footerTagline: 'Dental practice focused on periodontology, dedicated to the health of your gums and the preservation of your smile. Dr. Rebecca Cohen welcomes you in Lagny-sur-Marne, near Paris.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerRer: 'RER Lagny-Thorigny (Line P)',
    footerBook: 'Book an appointment',
    footerRights: 'All rights reserved.',
    legal: 'Legal notice',
    privacy: 'Privacy',
    ctaRdvTitle: 'Take care of your gums',
    ctaRdvText: 'Consult Dr. Rebecca Cohen for a complete, personalised periodontal check-up.',
    ctaRdvBtn: 'Book an appointment',
    ctaDiagTitle: 'Assess your gum health',
    ctaDiagText: 'Answer our short self-assessment questionnaire and discover your risk level in a few minutes.',
    ctaDiagBtn: 'Take the test',
  },
  zh: {
    navHome: '首页',
    navTest: '牙龈自测',
    navPricing: '收费',
    navContact: '联系我们',
    rdv: '在线预约',
    intlNote: '目前仅主要页面提供中文。切换到 FR 可浏览完整网站。',
    footerTagline: '专注于牙周治疗的牙科诊所，致力于您的牙龈健康，守护您的笑容。Rebecca Cohen 医生在 Lagny-sur-Marne（巴黎近郊）为您服务。',
    footerNav: '导航',
    footerContact: '联系方式',
    footerRer: 'RER Lagny-Thorigny 线（P 线）',
    footerBook: '在线预约',
    footerRights: '版权所有。',
    legal: '法律声明',
    privacy: '隐私政策',
    ctaRdvTitle: '呵护您的牙龈',
    ctaRdvText: '预约 Rebecca Cohen 医生，进行全面而个性化的牙周检查。',
    ctaRdvBtn: '在线预约',
    ctaDiagTitle: '评估您的牙龈健康',
    ctaDiagText: '花几分钟完成我们的自测问卷，了解您的牙周疾病风险等级。',
    ctaDiagBtn: '开始自测',
  },
};

// --- Header (FR — nav complète, inchangée) ---
function getHeaderFR(activePage = '') {
  return `
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="/" class="logo">
        <img src="/logo-cabinet.png" alt="Logo Cabinet Dentaire du Chemin de Fer" class="logo-img">
        <div class="logo-text">Parodonto<span>'Lagny</span></div>
      </a>

      <nav class="main-nav" id="main-nav">
        <div class="nav-item">
          <a href="/cabinet.html" class="nav-link ${activePage === 'cabinet' ? 'active' : ''}">
            Le Cabinet <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="/cabinet.html">Notre philosophie</a>
            <a href="/equipe.html">L'équipe</a>
            <a href="/tarifs.html">Tarifs</a>
            <a href="/infos-pratiques.html">Infos pratiques</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="/maladies-parodontales.html" class="nav-link ${activePage === 'maladies' ? 'active' : ''}">
            Maladies <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="/maladies-parodontales.html">Vue d'ensemble</a>
            <a href="/diagnostic.html">Diagnostic</a>
            <a href="/facteurs-risque.html">Facteurs de risque</a>
            <a href="/symptomes.html">Symptômes</a>
            <a href="/consequences.html">Conséquences</a>
          </div>
        </div>

        <div class="nav-item">
          <a href="/traitements.html" class="nav-link ${activePage === 'traitements' ? 'active' : ''}">
            Traitements <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="/traitements.html">Nos traitements</a>
            <a href="/deroulement-soins.html">Déroulement des soins</a>
            <a href="/prevention.html">Prévention</a>
            <a href="/suivi.html">Suivi parodontal</a>
          </div>
        </div>

        <a href="/autodiagnostic.html" class="header-cta header-cta--diagnostic ${activePage === 'autodiagnostic' ? 'active' : ''}">
          ${icon('stethoscope', 16)} Autodiagnostic
        </a>

        <a href="/contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">
          Contact
        </a>

        <a href="/faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}">
          FAQ
        </a>

        <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" class="header-cta">
          ${icon('calendar', 16)} Prendre RDV
        </a>

        ${getLangSwitcher()}
      </nav>

      <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <div class="sticky-rdv" id="sticky-rdv">
    <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener">${icon('calendar', 16)} Prendre RDV</a>
  </div>
  `;
}

// --- Header (EN / ZH — nav simplifiée limitée aux pages traduites) ---
function getHeaderIntl(activePage = '') {
  const t = T[LANG];
  const base = currentBasePath();
  const isActive = (p) => (base === p ? 'active' : '');
  return `
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="${L('/')}" class="logo">
        <img src="/logo-cabinet.png" alt="Parodonto'Lagny — Dr. Rebecca Cohen" class="logo-img">
        <div class="logo-text">Parodonto<span>'Lagny</span></div>
      </a>

      <nav class="main-nav" id="main-nav">
        <a href="${L('/')}" class="nav-link ${isActive('/index.html')}">${t.navHome}</a>
        <a href="${L('/tarifs.html')}" class="nav-link ${isActive('/tarifs.html')}">${t.navPricing}</a>
        <a href="${L('/contact.html')}" class="nav-link ${isActive('/contact.html')}">${t.navContact}</a>

        <a href="${L('/autodiagnostic.html')}" class="header-cta header-cta--diagnostic ${isActive('/autodiagnostic.html')}">
          ${icon('stethoscope', 16)} ${t.navTest}
        </a>

        <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" class="header-cta">
          ${icon('calendar', 16)} ${t.rdv}
        </a>

        ${getLangSwitcher()}
      </nav>

      <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <div class="sticky-rdv" id="sticky-rdv">
    <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener">${icon('calendar', 16)} ${t.rdv}</a>
  </div>
  `;
}

function getHeader(activePage = '') {
  return LANG === 'fr' ? getHeaderFR(activePage) : getHeaderIntl(activePage);
}

// --- Footer (FR — inchangé) ---
function getFooterFR() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img src="/logo-cabinet.png" alt="Logo Cabinet Dentaire du Chemin de Fer, Lagny-sur-Marne" class="footer-logo-cabinet">
            <span class="logo-text">Parodonto<span>'Lagny</span></span>
          </div>
          <p>Cabinet dentaire orienté parodontologie, au service de la santé de vos gencives et de la préservation de votre sourire. Dr. Rebecca Cohen vous accueille à Lagny-sur-Marne.</p>
        </div>

        <div class="footer-col">
          <h4>Le Cabinet</h4>
          <a href="/cabinet.html">Notre philosophie</a>
          <a href="/equipe.html">L'équipe</a>
          <a href="/tarifs.html">Tarifs</a>
          <a href="/infos-pratiques.html">Infos pratiques</a>
        </div>

        <div class="footer-col">
          <h4>Parodontologie</h4>
          <a href="/maladies-parodontales.html">Maladies parodontales</a>
          <a href="/traitements.html">Traitements</a>
          <a href="/autodiagnostic.html">Autodiagnostic</a>
          <a href="/faq.html">FAQ</a>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item">
            <span class="icon">${icon('pin', 18)}</span>
            <span>46 Rue du Chemin de Fer<br>77400 Lagny-sur-Marne</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">${icon('train', 18)}</span>
            <span>RER Lagny-Thorigny (Ligne P)</span>
          </div>
          <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" style="color: var(--color-accent-light); font-weight: 600;">
            ${icon('calendar', 16)} Prendre rendez-vous
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Parodonto'Lagny — Dr. Rebecca Cohen. Tous droits réservés.</span>
        <div style="display: flex; gap: 1.5rem;">
          <a href="/mentions-legales.html">Mentions légales</a>
          <a href="/mentions-legales.html#confidentialite">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

// --- Footer (EN / ZH) ---
function getFooterIntl() {
  const t = T[LANG];
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img src="/logo-cabinet.png" alt="Parodonto'Lagny — Dr. Rebecca Cohen" class="footer-logo-cabinet">
            <span class="logo-text">Parodonto<span>'Lagny</span></span>
          </div>
          <p>${t.footerTagline}</p>
        </div>

        <div class="footer-col">
          <h4>${t.footerNav}</h4>
          <a href="${L('/')}">${t.navHome}</a>
          <a href="${L('/autodiagnostic.html')}">${t.navTest}</a>
          <a href="${L('/tarifs.html')}">${t.navPricing}</a>
          <a href="${L('/contact.html')}">${t.navContact}</a>
        </div>

        <div class="footer-col">
          <h4>${t.footerContact}</h4>
          <div class="footer-contact-item">
            <span class="icon">${icon('pin', 18)}</span>
            <span>46 Rue du Chemin de Fer<br>77400 Lagny-sur-Marne</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">${icon('train', 18)}</span>
            <span>${t.footerRer}</span>
          </div>
          <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" style="color: var(--color-accent-light); font-weight: 600;">
            ${icon('calendar', 16)} ${t.footerBook}
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Parodonto'Lagny — Dr. Rebecca Cohen. ${t.footerRights}</span>
        <div style="display: flex; gap: 1.5rem;">
          <a href="/mentions-legales.html">${t.legal}</a>
          <a href="/mentions-legales.html#confidentialite">${t.privacy}</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function getFooter() {
  return LANG === 'fr' ? getFooterFR() : getFooterIntl();
}

// --- CTA Banner ---
function getCTABanner(type = 'rdv') {
  if (LANG !== 'fr') {
    const t = T[LANG];
    if (type === 'diagnostic') {
      return `
      <section class="cta-banner">
        <div class="container">
          <h2>${t.ctaDiagTitle}</h2>
          <p>${t.ctaDiagText}</p>
          <a href="${L('/autodiagnostic.html')}" class="btn btn--accent btn--lg btn--pulse">${icon('stethoscope', 20)} ${t.ctaDiagBtn}</a>
        </div>
      </section>
      `;
    }
    return `
    <section class="cta-banner">
      <div class="container">
        <h2>${t.ctaRdvTitle}</h2>
        <p>${t.ctaRdvText}</p>
        <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" class="btn btn--accent btn--lg btn--pulse">${icon('calendar', 20)} ${t.ctaRdvBtn}</a>
      </div>
    </section>
    `;
  }

  if (type === 'diagnostic') {
    return `
    <section class="cta-banner">
      <div class="container">
        <h2>Évaluez votre santé parodontale</h2>
        <p>Répondez à notre questionnaire d'autodiagnostic en quelques minutes et découvrez votre niveau de risque.</p>
        <a href="/autodiagnostic.html" class="btn btn--accent btn--lg btn--pulse">${icon('stethoscope', 20)} Faire le test</a>
      </div>
    </section>
    `;
  }
  return `
  <section class="cta-banner">
    <div class="container">
      <h2>Prenez soin de vos gencives</h2>
      <p>Consultez le Dr. Rebecca Cohen pour un bilan parodontal complet et personnalisé.</p>
      <a href="${DOCTOLIB_URL}" target="_blank" rel="noopener" class="btn btn--accent btn--lg btn--pulse">${icon('calendar', 20)} Prendre rendez-vous</a>
    </div>
  </section>
  `;
}

// --- Initialize Layout ---
export function initLayout(activePage = '') {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = getHeader(activePage);
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooter();
  }

  // Insert CTA banner
  const ctaPlaceholder = document.getElementById('cta-placeholder');
  if (ctaPlaceholder) {
    const type = ctaPlaceholder.getAttribute('data-type') || 'rdv';
    ctaPlaceholder.outerHTML = getCTABanner(type);
  }

  // Init interactions
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
  initParticles();

  // Replace remaining emojis with SVGs
  requestAnimationFrame(() => replaceEmojis());
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const header = document.getElementById('site-header');
  if (!toggle || !nav) return;

  // Move nav outside header so position:fixed works correctly
  // (backdrop-filter on header breaks position:fixed for children)
  if (header && window.matchMedia('(max-width: 768px)').matches) {
    document.body.appendChild(nav);
  }

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Mark parent links FIRST (before attaching close handlers)
  nav.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    if (link && dropdown) {
      link.classList.add('nav-link--parent');
    }
  });

  // Close menu helper
  function closeMenu() {
    toggle.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close on sub-link click (dropdown items & standalone links only)
  nav.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  nav.querySelectorAll('a.nav-link:not(.nav-link--parent)').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Mobile dropdown accordion toggle
  nav.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    if (!link || !dropdown) return;

    link.addEventListener('click', (e) => {
      // Only act as accordion on mobile
      if (window.innerWidth > 768) return;
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('open');

      // Close all other open items
      nav.querySelectorAll('.nav-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const dd = other.querySelector('.dropdown');
          if (dd) dd.style.maxHeight = '0';
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        dropdown.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      }
    });
  });
}

// --- Header scroll shadow ---
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// --- Scroll reveal animations ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .stagger-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// --- Floating particles ---
function initParticles() {
  const containers = document.querySelectorAll('.particles');
  containers.forEach(container => {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = particle.style.height = (Math.random() * 4 + 3) + 'px';
      particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      container.appendChild(particle);
    }
  });
}

// --- Counter animation ---
export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = performance.now();

        function animate(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// --- FAQ accordion ---
export function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Open clicked
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

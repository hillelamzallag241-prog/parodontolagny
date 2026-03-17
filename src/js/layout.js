// ============================================
// PARODONTO'LAGNY — Shared Layout & Interactions
// ============================================

import { icon } from './icons.js';
import { replaceEmojis } from './emoji-replace.js';

const DOCTOLIB_URL = 'https://www.doctolib.fr/dentiste/lagny-sur-marne/rebecca-cohen-77400-lagny-sur-marne';

// --- Header HTML ---
function getHeader(activePage = '') {
  return `
  <header class="site-header" id="site-header">
    <div class="header-inner">
      <a href="/" class="logo">
        <div class="logo-icon">${icon('tooth', 28)}</div>
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

        <a href="/autodiagnostic.html" class="nav-link ${activePage === 'autodiagnostic' ? 'active' : ''}">
          Autodiagnostic
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

// --- Footer HTML ---
function getFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-text">Parodonto<span>'Lagny</span></span>
          <p>Cabinet de parodontologie dédié à la santé de vos gencives et à la préservation de votre sourire. Dr. Rebecca Cohen vous accueille à Lagny-sur-Marne.</p>
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

// --- CTA Banner ---
function getCTABanner(type = 'rdv') {
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
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('a:not(.nav-link)').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
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
        const duration = 2000;
        const start = performance.now();

        function animate(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
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

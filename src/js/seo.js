// ============================================
// PARODONTO'LAGNY — SEO Module
// Structured Data (JSON-LD), Meta Tags, etc.
// ============================================

const SITE_URL = 'https://www.parodontolagny.fr';
const DOCTOLIB_URL = 'https://www.doctolib.fr/dentiste/lagny-sur-marne/rebecca-cohen-77400-lagny-sur-marne';

// --- Organization / LocalBusiness Schema ---
export function injectOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#organization`,
    "name": "Parodonto'Lagny — Cabinet de Parodontologie",
    "alternateName": "Cabinet Parodonto'Lagny",
    "description": "Cabinet de parodontologie spécialisé dans le diagnostic, le traitement et le suivi des maladies parodontales à Lagny-sur-Marne. Dirigé par le Dr. Rebecca Cohen.",
    "url": SITE_URL,
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46 Rue du Chemin de Fer",
      "addressLocality": "Lagny-sur-Marne",
      "postalCode": "77400",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8747,
      "longitude": 2.7117
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Check",
    "areaServed": [
      {
        "@type": "City",
        "name": "Lagny-sur-Marne"
      },
      {
        "@type": "City",
        "name": "Thorigny-sur-Marne"
      },
      {
        "@type": "City",
        "name": "Pomponne"
      },
      {
        "@type": "City",
        "name": "Saint-Thibault-des-Vignes"
      },
      {
        "@type": "City",
        "name": "Bussy-Saint-Georges"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Seine-et-Marne"
      }
    ],
    "sameAs": [
      DOCTOLIB_URL
    ],
    "hasMap": "https://www.google.com/maps?q=46+Rue+du+Chemin+de+Fer+77400+Lagny-sur-Marne",
    "isAccessibleForFree": false,
    "medicalSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Parodontologie"
    },
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Bilan parodontal",
        "description": "Examen clinique complet avec sondage parodontal et bilan radiographique"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Détartrage et surfaçage radiculaire",
        "description": "Traitement non chirurgical des maladies parodontales"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Chirurgie parodontale",
        "description": "Intervention chirurgicale pour traiter les lésions parodontales profondes"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Greffe gingivale",
        "description": "Greffe de tissu gingival pour recouvrir les récessions"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Régénération osseuse guidée",
        "description": "Technique de reconstruction de l'os alvéolaire"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Maintenance parodontale",
        "description": "Suivi régulier pour maintenir les résultats du traitement"
      }
    ]
  };
  injectSchema(schema);
}

// --- Person Schema (Dr. Cohen) ---
export function injectDentistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Rebecca Cohen",
    "givenName": "Rebecca",
    "familyName": "Cohen",
    "jobTitle": "Chirurgien-dentiste spécialisée en parodontologie",
    "description": "Chirurgien-dentiste spécialisée en parodontologie, diplômée de l'Université Paris Cité et titulaire d'un D.U. de Parodontologie de l'Université Nice-Sophia-Antipolis.",
    "url": `${SITE_URL}/equipe.html`,
    "worksFor": {
      "@type": "Dentist",
      "name": "Parodonto'Lagny",
      "url": SITE_URL
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Faculté de chirurgie dentaire — Université Paris Cité"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Université Nice-Sophia-Antipolis"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Diplôme d'État",
        "name": "Docteur en chirurgie dentaire"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Diplôme Universitaire",
        "name": "D.U. Parodontologie"
      }
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "International Team for Implantology (ITI)"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46 Rue du Chemin de Fer",
      "addressLocality": "Lagny-sur-Marne",
      "postalCode": "77400",
      "addressCountry": "FR"
    },
    "medicalSpecialty": "Parodontologie"
  };
  injectSchema(schema);
}

// --- WebSite Schema with SearchAction ---
export function injectWebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Parodonto'Lagny",
    "alternateName": "Cabinet de Parodontologie Parodonto'Lagny",
    "url": SITE_URL,
    "description": "Cabinet de parodontologie du Dr. Rebecca Cohen à Lagny-sur-Marne. Diagnostic, traitement et suivi des maladies parodontales.",
    "inLanguage": "fr-FR",
    "publisher": {
      "@type": "Organization",
      "name": "Parodonto'Lagny",
      "url": SITE_URL
    }
  };
  injectSchema(schema);
}

// --- BreadcrumbList Schema ---
export function injectBreadcrumbSchema(items) {
  // items = [{name, url}, ...]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${SITE_URL}${item.url}` : undefined
    }))
  };
  injectSchema(schema);
}

// --- FAQPage Schema ---
export function injectFAQSchema(faqs) {
  // faqs = [{question, answer}, ...]
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  injectSchema(schema);
}

// --- MedicalWebPage Schema ---
export function injectMedicalPageSchema(name, description, specialty = 'Parodontologie') {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": name,
    "description": description,
    "url": window.location.href,
    "inLanguage": "fr-FR",
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": specialty
    },
    "lastReviewed": "2026-03-17",
    "reviewedBy": {
      "@type": "Person",
      "name": "Dr. Rebecca Cohen",
      "jobTitle": "Chirurgien-dentiste"
    }
  };
  injectSchema(schema);
}

// --- Utility: inject schema.org JSON-LD ---
function injectSchema(schema) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// --- Inject canonical + hreflang ---
export function injectCanonical(path = '') {
  const url = `${SITE_URL}${path}`;

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  // Hreflang
  let hreflang = document.querySelector('link[hreflang="fr"]');
  if (!hreflang) {
    hreflang = document.createElement('link');
    hreflang.rel = 'alternate';
    hreflang.hreflang = 'fr';
    document.head.appendChild(hreflang);
  }
  hreflang.href = url;
}

// --- Inject Open Graph meta tags ---
export function injectOpenGraph({ title, description, url, type = 'website' }) {
  const ogImageUrl = `${SITE_URL}/og-image.png`;
  const tags = {
    'og:title': title,
    'og:description': description,
    'og:url': `${SITE_URL}${url}`,
    'og:type': type,
    'og:locale': 'fr_FR',
    'og:site_name': "Parodonto'Lagny — Cabinet de Parodontologie",
    'og:image': ogImageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': "Cabinet Parodonto'Lagny — Dr. Rebecca Cohen, parodontologue à Lagny-sur-Marne",
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': ogImageUrl,
  };

  Object.entries(tags).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`) ||
               document.querySelector(`meta[name="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      if (property.startsWith('twitter:')) {
        meta.name = property;
      } else {
        meta.setAttribute('property', property);
      }
      document.head.appendChild(meta);
    }
    meta.content = content;
  });
}

// --- SEO Init for common pages ---
export function initSEO(pageConfig) {
  const { path, title, description, breadcrumbs, type } = pageConfig;

  injectCanonical(path);
  injectOpenGraph({ title, description, url: path, type });
  injectOrganizationSchema();
  injectWebSiteSchema();

  if (breadcrumbs) {
    injectBreadcrumbSchema(breadcrumbs);
  }
}

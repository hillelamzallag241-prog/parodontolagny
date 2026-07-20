import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cabinet: resolve(__dirname, 'cabinet.html'),
        equipe: resolve(__dirname, 'equipe.html'),
        tarifs: resolve(__dirname, 'tarifs.html'),
        infos: resolve(__dirname, 'infos-pratiques.html'),
        maladies: resolve(__dirname, 'maladies-parodontales.html'),
        diagnostic: resolve(__dirname, 'diagnostic.html'),
        facteurs: resolve(__dirname, 'facteurs-risque.html'),
        symptomes: resolve(__dirname, 'symptomes.html'),
        consequences: resolve(__dirname, 'consequences.html'),
        traitements: resolve(__dirname, 'traitements.html'),
        deroulement: resolve(__dirname, 'deroulement-soins.html'),
        prevention: resolve(__dirname, 'prevention.html'),
        suivi: resolve(__dirname, 'suivi.html'),
        autodiagnostic: resolve(__dirname, 'autodiagnostic.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        mentions: resolve(__dirname, 'mentions-legales.html'),
        // Pages SEO locales (villes)
        seo_bussy: resolve(__dirname, 'parodontologue-bussy-saint-georges.html'),
        seo_chelles: resolve(__dirname, 'parodontologue-chelles.html'),
        seo_torcy: resolve(__dirname, 'parodontologue-torcy.html'),
        seo_thorigny: resolve(__dirname, 'parodontologue-thorigny-sur-marne.html'),
        seo_mlv: resolve(__dirname, 'parodontologue-marne-la-vallee.html'),
        // Guides symptômes & traitements
        guide_saignement: resolve(__dirname, 'gencives-qui-saignent.html'),
        guide_dechaussement: resolve(__dirname, 'dechaussement-dentaire.html'),
        guide_greffe: resolve(__dirname, 'greffe-de-gencive.html'),
        guide_surfacage: resolve(__dirname, 'surfacage-radiculaire.html'),
        guide_haleine: resolve(__dirname, 'mauvaise-haleine-halitose.html'),
        // Page pilier
        pilier_parodontologie: resolve(__dirname, 'parodontologie-lagny-sur-marne.html'),
        // Guides phase 2 + hub
        hub_conseils: resolve(__dirname, 'conseils.html'),
        guide_parodontite: resolve(__dirname, 'parodontite.html'),
        guide_gingivite: resolve(__dirname, 'gingivite.html'),
        guide_mobilite: resolve(__dirname, 'dents-qui-bougent.html'),
        guide_abces: resolve(__dirname, 'abces-parodontal.html'),
        guide_gonflees: resolve(__dirname, 'gencives-gonflees.html'),
        guide_diabete: resolve(__dirname, 'diabete-et-gencives.html'),
        guide_tabac: resolve(__dirname, 'tabac-et-gencives.html'),
        guide_grossesse: resolve(__dirname, 'gencives-grossesse.html'),
        // English (MVP)
        en_index: resolve(__dirname, 'en/index.html'),
        en_autodiagnostic: resolve(__dirname, 'en/autodiagnostic.html'),
        en_contact: resolve(__dirname, 'en/contact.html'),
        en_tarifs: resolve(__dirname, 'en/tarifs.html'),
        // 中文 (MVP)
        zh_index: resolve(__dirname, 'zh/index.html'),
        zh_autodiagnostic: resolve(__dirname, 'zh/autodiagnostic.html'),
        zh_contact: resolve(__dirname, 'zh/contact.html'),
        zh_tarifs: resolve(__dirname, 'zh/tarifs.html'),
      }
    }
  }
});

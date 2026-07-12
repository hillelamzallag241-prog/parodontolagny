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

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
      }
    }
  }
});

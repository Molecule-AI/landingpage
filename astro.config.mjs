import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.moleculesai.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr', 'ja', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
          fr: 'fr-FR',
          ja: 'ja-JP',
          es: 'es-ES',
        },
      },
      // Per-URL priority + changefreq override. Marketing landing pages
      // are the conversion target (priority 1.0, weekly); pricing is
      // important but stable (0.7, monthly); legal pages exist for
      // compliance — search engines should rank them low + index rarely
      // (0.3, yearly).
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/' || /^\/(zh|es|fr|ja)\/$/.test(path)) {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (path === '/pricing/') {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        if (path.startsWith('/legal/')) {
          return { ...item, priority: 0.3, changefreq: 'yearly' };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

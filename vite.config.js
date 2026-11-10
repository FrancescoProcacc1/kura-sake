import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { launch } from 'puppeteer';

const nodeRequire = createRequire(import.meta.url);
const vitePrerender = nodeRequire('vite-plugin-prerender');

const VIEWPORT = { width: 1366, height: 768 };

class PuppeteerRenderer {
  constructor(options) {
    this.options = options || {};
    this.browser = null;
  }

  async initialize() {
    this.browser = await launch({ headless: true });
  }

  async renderRoutes(routes, prerenderer) {
    const { port } = prerenderer.getOptions().server;
    const renderedRoutes = [];

    for (const route of routes) {
      const page = await this.browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
      });
      await page.evaluate(
        () => new Promise((resolve) => setTimeout(resolve, 500)),
      );
      renderedRoutes.push({
        originalRoute: route,
        route: await page.evaluate('window.location.pathname'),
        html: await page.content(),
      });
      await page.close();
    }

    return renderedRoutes;
  }

  destroy() {
    this.browser?.close();
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerender({
      staticDir: fileURLToPath(new URL('./dist', import.meta.url)),
      routes: ['/', '/storia-del-sake', '/privacy-policy', '/cookie-policy'],
      renderer: new PuppeteerRenderer(),
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});

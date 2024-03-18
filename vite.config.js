import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: 'esnext',
  },
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      manifest: {
        theme_color: '#f69435',
        background_color: '#f69435',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'vite test',
        description: 'testing vite pwa',
        name: 'vite test',
        icons: [
          {
            src: '/clothing.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/clothing.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/clothing.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});

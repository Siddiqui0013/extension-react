import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/manifest.json', dest: '' },
        { src: 'public/sidebar.css', dest: 'assets' },
        { src: 'public/sidebar.html', dest: '' }
      ]
    })
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    watch: process.env.WATCH === 'true' ? {} : null,
    rollupOptions: {
      input: {
        contentScript: resolve(__dirname, 'src/content/content.tsx'),
        background: resolve(__dirname, 'src/background/background.ts')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // avoid pre-bundling issues with lucide-react
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),       // homepage
        research: resolve(__dirname, 'research.html') // research page
      },
    },
  },
});

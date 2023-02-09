import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  base: '/',
  plugins: [react()],
  build: {
    minify: true,
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './client/index.html'),
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

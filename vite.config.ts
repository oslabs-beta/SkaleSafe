import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client',
  base: '/',
  plugins: [react()],
  server: {
    port: 4000,
    open: '/client/index.html'
  }
})

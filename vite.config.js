import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/joao-art-site/',   // obrigatório no GitHub Pages (repo de projeto)
  server: {
    host: true,
    port: 5173,
  },
})
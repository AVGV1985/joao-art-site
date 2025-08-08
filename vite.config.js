import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // ← Isto ativa o acesso externo!
    port: 5173, // opcional, mas deixa explícito
  },
})
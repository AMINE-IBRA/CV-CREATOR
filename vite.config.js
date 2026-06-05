import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CV-CREATOR/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})

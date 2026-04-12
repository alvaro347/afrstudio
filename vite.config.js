import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/afrstudio/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})

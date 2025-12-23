import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Staging (GitHub Pages): /nurture-ngo/
    // Production (custom domain): /
    base: mode === 'staging' ? '/nurture-ngo/' : '/',
  }
})

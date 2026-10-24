import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    // the page tests type into full forms; allow for slow machines when files run in parallel
    testTimeout: 20000,
    env: {
      VITE_ERP_API_URL: 'https://erp.test',
    },
  },
})

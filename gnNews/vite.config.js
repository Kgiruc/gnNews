import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import test from 'vite-plugin-test';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.js",
  },
})

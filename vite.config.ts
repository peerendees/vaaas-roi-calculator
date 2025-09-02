import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Keine React-Plugins - deploye die HTML-Version
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})

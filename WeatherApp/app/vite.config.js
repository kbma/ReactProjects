import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true,           // équivaut à --host
    watch: {
      usePolling: true,   // <== active le mode "polling"
      interval: 1000,     // <== vérifie les changements toutes les 1s
    },
  },

})

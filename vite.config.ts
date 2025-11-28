import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use a relative base so built files load correctly when opening
  // `dist/index.html` directly or hosting on a subpath-less static server.
  base: './',
  plugins: [react()],
  server: {
    host: true,
    open: true,
  },
  publicDir: 'public',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svg from '@svgx/vite-plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg()
  ],
})

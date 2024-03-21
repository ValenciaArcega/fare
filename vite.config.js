import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fare/',
  server: {
    host: '0.0.0.0',
    open: false,
    port: 5174
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment',
  },
})
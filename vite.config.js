import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fare/',
  // server: {
  //   host: '0.0.0.0',
  //   open: false
  // },
  esbuild: {
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment',
  },
})
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署在 /<仓库名>/ 子路径下，构建时用 BASE_PATH 注入；
  // Vercel 走根路径，不传这个变量即可保持 '/'
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})

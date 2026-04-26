import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio_main/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

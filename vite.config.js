import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'index.html')
      },
      external: [
        'react',
        'react-dom',
        'react-dom/client'
      ]
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    port: 3000,
    open: true
  }
})

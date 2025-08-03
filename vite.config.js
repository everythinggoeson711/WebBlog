import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
    devSourcemap: true,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'Content-Type': 'auto',
    },
  },
})

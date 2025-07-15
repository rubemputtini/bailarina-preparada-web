import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'wght@100;200;300;400;500;600;700;800;900',
          },
          {
            name: 'Palanquin',
            styles: 'wght@100;200;300;400;500;600;700',
          },
          {
            name: 'Inter',
            styles: 'wght@900',
          },
          {
            name: 'Lato',
            styles: 'ital,wght@0,900;1,900',
          },
          {
            name: 'Noto Sans',
            styles: 'wght@900',
          }
        ],
        display: 'swap',
      }
    })
  ],
  build: {
    target: 'es2020'
  }
})

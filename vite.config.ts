import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/birthday-surprise-for-someone-special/",
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 60 },
      jpeg: { quality: 65 },
      jpg: { quality: 65 },
      webp: { lossless: false, quality: 60 },
    }),
  ],
})

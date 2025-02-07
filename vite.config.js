import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
    }),
  ],
  build: {
    outDir: 'dist', // Aseguramos que los archivos se generen en la carpeta 'dist'
  },
});
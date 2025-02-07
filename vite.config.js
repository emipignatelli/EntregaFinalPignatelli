import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Eliminamos la opción external para bootstrap CSS
    // rollupOptions: {
    //   external: ['bootstrap/dist/css/bootstrap.min.css'],
    // },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Ou 'gzip' para Gzip
      ext: '.br', // Extensão do arquivo comprimido (ou '.gz' para Gzip)
      threshold: 10240, // Apenas arquivos maiores que 10KB serão comprimidos
    }),
  ],
  base: '/MundoCriptoApp',
});

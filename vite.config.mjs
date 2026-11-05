import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'static/css',
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      input: fileURLToPath(new URL('./themes/tailbliss/assets/css/main.css', import.meta.url)),
      output: { assetFileNames: '[name].[hash][extname]' }
    }
  }
});

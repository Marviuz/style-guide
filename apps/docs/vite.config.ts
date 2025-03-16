import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import contentCollections from '@content-collections/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentCollections()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

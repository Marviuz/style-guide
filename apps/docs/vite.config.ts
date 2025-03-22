import { createApp } from 'vinxi';
import react from '@vitejs/plugin-react-swc';
import contentCollections from '@content-collections/vite';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import Sitemap from 'vite-plugin-sitemap';
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './index.html',
      base: '/',
      plugins: () => [
        tsconfigPaths(),
        TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
        react(),
        tailwindcss(),
        contentCollections(),
        Sitemap({
          hostname: 'https://style-guide.marviuz.me',
          outDir: '.vinxi/build/client',
        }),
      ],
    },
  ],
});

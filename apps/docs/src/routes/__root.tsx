import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Marviuz Style Guide' },
      { name: 'og:title', content: 'Marviuz Style Guide' },
      {
        name: 'og:description',
        content:
          'Yet another set of configs for your JavaScript/TypeScript projects',
      },
      {
        name: 'og:image',
        content: 'https://style-guide.marviuz.me/opengraph-image.jpg',
      },
      { name: 'og:image:alt', content: 'A preview of the Marviuz Style Guide' },
      { name: 'og:url', content: 'https://style-guide.marviuz.me' },
      { name: 'og:type', content: 'website' },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <>
      <HeadContent />
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

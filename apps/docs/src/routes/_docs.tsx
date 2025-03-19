import { Outlet, useParams, createFileRoute } from '@tanstack/react-router';
import { DocsNav } from '@/components/docs-nav';
import { TocNav } from '@/components/toc-nav';

export const Route = createFileRoute('/_docs')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: '/_docs/$' });

  return (
    <div className="flex justify-center">
      <DocsNav />
      <main className="w-full max-w-prose shrink-0 py-16">
        <article className="prose mx-auto divide-y px-4">
          <Outlet />
        </article>
      </main>
      {params._splat ? <TocNav slug={params._splat} /> : null}
    </div>
  );
}

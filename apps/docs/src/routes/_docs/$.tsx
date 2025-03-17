import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/$')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: '/_docs/$' });

  return params._splat ?? null;
}

import { createFileRoute, useParams } from '@tanstack/react-router';
import { MDXContent } from '@content-collections/mdx/react';
import { allContents } from 'content-collections';

export const Route = createFileRoute('/_docs/$')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: '/_docs/$' });
  const content = allContents.find(({ slug }) => slug === params._splat);

  return content ? <MDXContent code={content.mdx} /> : null;
}

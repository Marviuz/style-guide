import { createFileRoute, useParams } from '@tanstack/react-router';
import { MDXContent } from '@content-collections/mdx/react';
import { allContents } from 'content-collections';
import {
  PackageInstallerTab,
  PackageInstallerTabs,
} from '@/components/package-installer-tabs';
import {
  CodeBlockTitle,
  CodeBlockTitleContainer,
} from '@/components/code-block-title';

export const Route = createFileRoute('/_docs/$')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: '/_docs/$' });
  const content = allContents.find(({ path }) => path === params._splat);

  return content ? (
    <MDXContent
      code={content.mdx}
      components={{
        Tabs: PackageInstallerTabs,
        Tab: PackageInstallerTab,
        CodeBlockTitle,
        CodeBlockTitleContainer,
      }}
    />
  ) : null;
}

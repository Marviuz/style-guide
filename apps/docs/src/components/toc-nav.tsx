import { allContents } from 'content-collections';
import { Sidebar, SidebarContent } from './common/sidebar';

type TocNavProps = {
  slug: string;
};

export function TocNav({ slug }: TocNavProps) {
  const selectedContent = allContents.find(($tool) => $tool.slug === slug);

  return (
    <Sidebar>
      <SidebarContent>
        <figure className="space-y-4">
          <figcaption className="text-lg font-semibold">
            On this page:
          </figcaption>
        </figure>
        <pre>{JSON.stringify(selectedContent, null, 2)}</pre>
      </SidebarContent>
    </Sidebar>
  );
}

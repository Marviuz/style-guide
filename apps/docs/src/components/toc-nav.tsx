import { type DataMap } from 'vfile';
import { allContents } from 'content-collections';
import { cn } from '@/utils/cn';
import {
  Sidebar,
  SidebarContent,
  SidebarList,
  SidebarListItem,
} from './common/sidebar';

type TocNavProps = {
  slug: string;
};

export function TocNav({ slug }: TocNavProps) {
  const selectedContent = allContents.find((content) => content.slug === slug);

  return (
    <Sidebar>
      <SidebarContent>
        <figure className="space-y-4">
          <figcaption className="text-lg font-semibold">
            On this page:
          </figcaption>

          {selectedContent?.toc ? <TocList toc={selectedContent.toc} /> : null}
        </figure>
      </SidebarContent>
    </Sidebar>
  );
}

function TocList({ toc, indent }: { toc: DataMap['toc']; indent?: boolean }) {
  const [firstToc, ...rest] = toc;
  return firstToc ? (
    <SidebarList className={cn(indent && 'pl-4')} variant="compact">
      <SidebarListItem key={firstToc._id}>
        <a href={firstToc.url}>{firstToc.value}</a>
      </SidebarListItem>
      {indent ? (
        <TocList
          toc={rest}
          // FIXME: indent logic
          // indent={}
        />
      ) : null}
    </SidebarList>
  ) : null;
}

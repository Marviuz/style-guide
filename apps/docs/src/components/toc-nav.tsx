import type { DataMap } from 'vfile';
import { Fragment } from 'react';
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
  const selectedContent = allContents.find((content) => content.path === slug);

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

function TocList({
  toc,
  baseDepth,
}: {
  toc?: DataMap['toc'];
  baseDepth?: number;
}) {
  if (!toc || toc.length === 0) return null;

  const currentBaseDepth = baseDepth ?? toc[0]?.depth ?? 0;

  const currentLevelItems: DataMap['toc'] = [];
  let nextIndex = 0;

  while (nextIndex < toc.length && toc[nextIndex]?.depth === currentBaseDepth) {
    const nextToc = toc[nextIndex];
    if (nextToc) {
      currentLevelItems.push(nextToc);
    }
    nextIndex++;
  }

  return (
    <SidebarList
      className={cn(currentBaseDepth > 1 ? 'pl-4' : '')}
      variant="compact"
    >
      {currentLevelItems.map((item, index) => {
        const childrenStartIndex = nextIndex;

        const hasChildren =
          childrenStartIndex < toc.length &&
          (toc[childrenStartIndex]?.depth ?? 0) > currentBaseDepth;

        let childrenEndIndex = childrenStartIndex;

        if (hasChildren) {
          while (
            childrenEndIndex < toc.length &&
            (toc[childrenEndIndex]?.depth ?? 0) > currentBaseDepth
          ) {
            childrenEndIndex++;
          }
        }

        const childrenItems = hasChildren
          ? toc.slice(childrenStartIndex, childrenEndIndex)
          : [];

        if (hasChildren && index === currentLevelItems.length - 1) {
          nextIndex = childrenEndIndex;
        }

        return (
          <Fragment key={item._id}>
            <SidebarListItem>
              <a href={item.url}>{item.value}</a>
            </SidebarListItem>
            {childrenItems.length > 0 && (
              <TocList
                toc={childrenItems}
                baseDepth={childrenItems[0]?.depth}
              />
            )}
          </Fragment>
        );
      })}
    </SidebarList>
  );
}

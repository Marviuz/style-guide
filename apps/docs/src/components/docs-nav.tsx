import { Link } from '@tanstack/react-router';
import { groupBy, prop } from 'remeda';
import { allContents } from 'content-collections';
import {
  Sidebar,
  SidebarContent,
  SidebarList,
  SidebarListItem,
} from './common/sidebar';

export function DocsNav() {
  const data = groupBy(allContents, prop('group'));

  return (
    <Sidebar>
      <SidebarContent>
        <figure className="grid gap-6">
          <figcaption className="text-lg font-semibold">
            Table of Contents
          </figcaption>

          <div className="grid gap-6">
            {Object.entries(data).map(([k, v]) => (
              <div className="grid gap-4" key={k}>
                <div>{k}</div>
                <SidebarList className="space-y-1">
                  {v.map((content) => (
                    <SidebarListItem key={content.title}>
                      <Link
                        className="text-muted-foreground data-[status=active]:text-foreground transition hover:underline data-[status=active]:font-medium"
                        to={content.path}
                      >
                        {content.title}
                      </Link>
                    </SidebarListItem>
                  ))}
                </SidebarList>
              </div>
            ))}
          </div>
        </figure>
      </SidebarContent>
    </Sidebar>
  );
}

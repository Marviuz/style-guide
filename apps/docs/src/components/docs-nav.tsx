import { Link } from '@tanstack/react-router';
import { allContents } from 'content-collections';
import {
  Sidebar,
  SidebarContent,
  SidebarList,
  SidebarListItem,
} from './common/sidebar';

export function DocsNav() {
  return (
    <Sidebar>
      <SidebarContent>
        <figure className="space-y-4">
          <figcaption className="text-lg font-semibold">
            Table of Contents
          </figcaption>
          <SidebarList className="space-y-2">
            {allContents.map((content) => (
              <SidebarListItem key={content.title}>
                <Link
                  className="text-muted-foreground data-[active=true]:text-foreground transition hover:underline data-[active=true]:font-medium"
                  to={content._meta.path}
                >
                  {content.title}
                </Link>
              </SidebarListItem>
            ))}
          </SidebarList>
        </figure>
      </SidebarContent>
    </Sidebar>
  );
}

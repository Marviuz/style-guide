import { createFileRoute, Link } from '@tanstack/react-router';
import { groupBy, prop } from 'remeda';
import { allContents } from 'content-collections';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const data = groupBy(allContents, prop('group'));

  return (
    <main className="min-h-[calc(theme(height.svh)-theme(height.14)-theme(height.10)-theme(borderWidth.2))] py-8">
      <div className="container mx-auto px-4">
        <figure className="grid gap-6">
          <figcaption className="text-lg font-semibold">
            Getting started
          </figcaption>

          <div className="grid gap-6">
            {Object.entries(data).map(([groupName, value]) => (
              <div className="grid gap-4" key={groupName}>
                <div>{groupName}</div>
                <ul className="space-y-1">
                  {value.map((content) => (
                    <li key={content.title}>
                      <Link
                        className="text-muted-foreground transition hover:underline"
                        to={content.path}
                      >
                        {content.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </main>
  );
}

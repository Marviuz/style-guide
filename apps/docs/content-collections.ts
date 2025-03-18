import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const content = defineCollection({
  name: 'content',
  directory: 'src/content',
  include: ['**/*.md', '**/*.mdx', '**/*'],
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return {
      ...doc,
      slug: doc.title.toLowerCase().replace(/ /g, '-'),
      mdx,
    };
  },
});

// eslint-disable-next-line import/no-default-export -- config
export default defineConfig({
  collections: [content],
});

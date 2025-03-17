import { defineCollection, defineConfig } from '@content-collections/core';

const content = defineCollection({
  name: 'content',
  directory: 'src/content',
  include: ['**/*.md', '**/*.mdx', '**/*'],
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
  transform: (doc) => ({
    ...doc,
    slug: doc.title.toLowerCase().replace(/ /g, '-'),
  }),
});

// eslint-disable-next-line import/no-default-export -- config
export default defineConfig({
  collections: [content],
});

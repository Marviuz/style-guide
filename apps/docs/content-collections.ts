import { defineCollection, defineConfig } from '@content-collections/core';

const posts = defineCollection({
  name: 'posts',
  directory: 'src/content',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

// eslint-disable-next-line import/no-default-export -- config
export default defineConfig({
  collections: [posts],
});

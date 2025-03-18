import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeShiki from '@shikijs/rehype';
import { remarkInstall } from 'fumadocs-docgen';
import remarkCodeTitles from 'remark-flexible-code-titles';

const content = defineCollection({
  name: 'content',
  directory: 'src/content',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc, {
      remarkPlugins: [
        remarkInstall,
        [
          remarkCodeTitles,
          {
            titleTagName: 'CodeBlockTitle',
            containerTagName: 'CodeBlockTitleContainer',
            titleProperties: (language: string, title: string) => ({
              'data-language': language,
              title,
            }),
          },
        ],
      ],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: 'poimandres',
            langs: ['ts', 'js', 'sh'],
          },
        ],
      ],
    });

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

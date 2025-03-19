import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeShiki, { type RehypeShikiOptions } from '@shikijs/rehype';
import { remarkInstall } from 'fumadocs-docgen';
import remarkCodeTitles from 'remark-flexible-code-titles';
import { transformerNotationHighlight } from '@shikijs/transformers';
import rehypeAutolinkHeadings, { type Options } from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import type * as unist from 'unist';
import { type VFile } from 'vfile';
import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';
import { nanoid } from 'nanoid';
import { remark } from 'remark';
import { toString } from 'mdast-util-to-string';
import { type Heading } from 'mdast';

type Toc = {
  _id: string;
  value: string;
  url: string;
  depth: number;
};

declare module 'vfile' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- module augmentation
  interface DataMap {
    toc: Toc[];
  }
}

function remarkTocHeadings() {
  return (tree: unist.Parent, file: VFile) => {
    const slugger = new GithubSlugger();
    const toc: Toc[] = [];

    visit(tree, 'heading', (node: Heading) => {
      const textContent = toString(node);
      toc.push({
        _id: nanoid(),
        value: textContent,
        url: `#${slugger.slug(textContent)}`,
        depth: node.depth,
      });
    });

    file.data.toc = toc;
  };
}

async function extractTocHeadings(markdown: string) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown);
  return vfile.data.toc;
}

const content = defineCollection({
  name: 'content',
  directory: 'src/content',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    group: z.string(),
  }),
  transform: async (doc, ctx) => {
    const slugger = new GithubSlugger();
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
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' } satisfies Options],
        [
          rehypeShiki,
          {
            theme: 'poimandres',
            langs: ['ts', 'js', 'json', 'jsonc', 'sh'],
            transformers: [
              transformerNotationHighlight({
                matchAlgorithm: 'v3',
              }),
            ],
          } satisfies RehypeShikiOptions,
        ],
      ],
    });

    const toc = await extractTocHeadings(doc.content);

    return {
      ...doc,
      slug: slugger.slug(doc.title),
      path: doc._meta.path.replace(/\\/g, '/'),
      toc,
      mdx,
    };
  },
});

// eslint-disable-next-line import/no-default-export -- config
export default defineConfig({
  collections: [content],
});

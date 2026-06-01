import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    author: z.string().optional(),

    // ✅ VERY IMPORTANT: allow both "2026-02-05" and ISO strings
    publishDate: z.coerce.date(),

    updateDate: z.coerce.date().optional(),

    // ✅ allow public images like /blog_images/xxx.jpg
    image: z.string().optional(),

    category: z.string().optional(),

    tags: z.array(z.string()).optional(),

    // ✅ DEFAULT FALSE — this was killing your posts
    draft: z.boolean().default(false),

    metadata: z
      .object({
        canonical: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  post: postCollection,
};

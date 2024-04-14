import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    color: z.string(),
    metaDescription: z.string(),
  }),
});

const personal = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
});

const home = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  projects,
  personal,
  home,
};

import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

const personalCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  personal: personalCollection,
};

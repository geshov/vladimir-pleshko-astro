import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const history = defineCollection({
  type: "content",
  schema: z.object({
    year: z.number(),
    title: z.string(),
  }),
});

export const collections = {
  pages: pages,
  history: history,
};

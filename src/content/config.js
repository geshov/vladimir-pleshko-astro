import { z, defineCollection } from "astro:content";

const history = defineCollection({
  type: "content",
  schema: z.object({
    year: z.number(),
    title: z.string(),
  }),
});

export const collections = {
  history: history,
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const timelineCollection = defineCollection({
  // Le decimos a Astro dónde buscar los archivos de TinaCMS
  loader: glob({ pattern: "**/*.md", base: "./src/content/timeline" }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    image: z.string().optional(),
  })
});

export const collections = {
  'timeline': timelineCollection,
};
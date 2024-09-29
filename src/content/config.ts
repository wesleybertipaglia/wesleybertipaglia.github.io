import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string().optional(),
		deployUrl: z.string().optional(),
		repositoryUrl: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		role: z.string(),
		company: z.string(),
		location: z.string(),
		description: z.string(),
		logo: z.string().optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog, projects, work };

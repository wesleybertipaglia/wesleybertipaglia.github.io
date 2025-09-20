import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.string().optional(),
		tags: z.array(z.string()),
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
		tags: z.array(z.string()),
		repositoryLink: z.string().optional(),
		deployLink: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		role: z.string(),
		location: z.string(),
		description: z.string(),
		companyName: z.string(),
		companyLink: z.string().optional(),
		companyLogo: z.string().optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog, projects, work };

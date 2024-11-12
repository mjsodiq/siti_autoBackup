import { z } from "zod";

export const user_id = z.string().min(3, "User ID must contain 3 character");

export const db_SCHEMA = z.object({
	id: z.string(),
	user_id: user_id,
	username: z.string(),
	password: z.string().min(3),
	name: z.string(),
	email: z.string().email(),
	division: z.string(),
	section: z.string(),
	position: z.string(),
	contact: z.string(),
	report_to: z.string(),
	notes: z.string(),
	authority_level: z.number(),
	isStillActive: z.boolean(),
	createdAt: z.date(),
	createdBy: user_id,
	updatedAt: z.date(),
	updatedBy: user_id,
});

export type db_TYPE = z.infer<typeof db_SCHEMA>;

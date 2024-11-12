import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.string(),
	name: z.string(),
	employee_id: z.string(),
	date: z.date(),
	week: z.number(),
	shift: z.string(),
	line: z.string(),
	section: z.string(),
	flavor: z.string(),
	concentration: z.string(),
	category: z.string(),
	description: z.string(),
	picture_finding: z.string(),
	quickly_action: z.string(),
	confirm: z.string(),
	score: z.number(),
	status: z.string(),
	improverment_action: z.string(),
	picture_improvement: z.string(),
	notes: z.string(),
	createdAt: z.date(),
	createdBy: z.string(),
	updatedAt: z.date(),
	updatedBy: z.string(),
	Verification_Date: z.date(),
	Verified_By: z.string(),
});

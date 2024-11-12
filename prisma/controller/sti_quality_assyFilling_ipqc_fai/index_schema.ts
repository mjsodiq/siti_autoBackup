import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	WorkOrder: z.string(),
	Line: z.string(),
	Section: z.string(),
	LaserCode: z.string(),
	Date: z.date(),
	FAI_StartTime: z.date(),
	FAI_FinishTime: z.date(),
	CPK: z.string(),
	Image1: z.string(),
	Image2: z.string(),
	Image3: z.string(),
	Notes: z.string(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
	validatedAt: z.date(),
	validatedBy: user_db_SCHEMA.shape.user_id,
});

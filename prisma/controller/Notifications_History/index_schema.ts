import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.string(),
	type: z.string(),
	sender: user_db_SCHEMA.shape.user_id,
	target: z.string(),
	title: z.string(),
	message: z.string(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
});

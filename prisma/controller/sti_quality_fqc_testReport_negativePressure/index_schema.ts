import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	private_id: z.string(),
	Complete_Date: z.date(),
	IPQC_PIC: z.string(),
	Job_Order: z.string(),
	Product_Line: z.string(),
	Mould: z.string(),
	Flavor: z.string(),
	Sample_Size: z.number(),
	Result: z.string(),
	Tested_By: user_db_SCHEMA.shape.user_id,
	ConfirmedBy: user_db_SCHEMA.shape.user_id,
	Notes: z.string(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
	Verification_Date: z.date(),
	Verified_By: user_db_SCHEMA.shape.user_id,
});

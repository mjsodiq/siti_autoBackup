import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	private_id: z.string(),
	Sampling_Time: z.date(),
	Material_Number: z.string(),
	Batch_Number: z.string(),
	Flavor: z.string(),
	Sampel_Size: z.number(),
	Defect_Quantity: z.number(),
	Defect_Rate: z.number(),
	Defect_Description: z.string(),
	Result: z.string(),
	Completed_Date: z.date(),
	Note: z.string(),
	Tested_By: user_db_SCHEMA.shape.name,
	Tester_ID: user_db_SCHEMA.shape.user_id,
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
});

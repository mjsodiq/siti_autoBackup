import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	private_id: z.string(),
	Manufacture_Date: z.date(),
	Job_Order: z.string(),
	Product_Line: z.string(),
	Flavor: z.string(),
	Sampel_Size: z.number(),
	Combined_Samples_With_Inspection: z.boolean(),
	Defect_Quantity: z.number(),
	Defect_Rate: z.number(),
	Defect_Description_Note: z.string(),
	Defect_Description: z.string(),
	Result: z.string(),
	Completed_Date: z.date(),
	Note: z.string(),
	Tested_By: z.string(),
	Verified_By: z.string(),
	Verification_Date: z.date(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
});

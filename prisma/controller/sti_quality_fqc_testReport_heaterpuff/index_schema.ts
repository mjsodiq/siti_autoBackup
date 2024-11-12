import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	private_id: z.string(),
	Manufacture_Date: z.date(),
	Suction_Work_Order: z.string(),
	Batch_Number: z.string(),
	Liquid_Batch: z.string(),
	Supplier: z.string(),
	Heater_Top_Cover: z.string(),
	Silicone: z.string(),
	Heating_Holder: z.string(),
	Tube: z.string(),
	Flavor: z.string(),
	Number_Of_Sample: z.number(),
	Defect_Quantity: z.number(),
	Defect_Rate: z.number(),
	Defect_Description: z.string(),
	Defect_Description_Note: z.string(),
	Result: z.string(),
	PO_Filling_Blister_WO: z.string(),
	Completed_Date: z.date(),
	Note: z.string(),
	Tested_By: user_db_SCHEMA.shape.user_id,
	Verified_By: user_db_SCHEMA.shape.user_id,
	Verification_Date: z.date(),
	Production_Plan: z.date(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
});

import { db_SCHEMA as user_db_SCHEMA } from "@/prisma/controller/user/index_schema";
import { z } from "zod";

export const db_SCHEMA = z.object({
	id: z.number(),
	shipment_notification: z.string(),
	customer_PO: z.string(),
	material_code_serial: z.string(),
	flavor_concentration: z.string(),
	blister: z.string(),
	line: z.string(),
	associate_work_order: z.string(),
	production_order_number: z.string(),
	qty_work_order: z.number(),
	tanggal_mulai: z.date(),
	QC_sample: z.number(),
	accumulated_qty: z.number(),
	order_qty: z.number(),
	notes: z.string(),
	createdAt: z.date(),
	createdBy: user_db_SCHEMA.shape.user_id,
	updatedAt: z.date(),
	updatedBy: user_db_SCHEMA.shape.user_id,
	validatedAt: z.date(),
	validatedBy: user_db_SCHEMA.shape.user_id,
});

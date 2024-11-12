"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    shipment_notification: zod_1.z.string(),
    customer_PO: zod_1.z.string(),
    material_code_serial: zod_1.z.string(),
    flavor_concentration: zod_1.z.string(),
    blister: zod_1.z.string(),
    line: zod_1.z.string(),
    associate_work_order: zod_1.z.string(),
    production_order_number: zod_1.z.string(),
    qty_work_order: zod_1.z.number(),
    tanggal_mulai: zod_1.z.date(),
    QC_sample: zod_1.z.number(),
    accumulated_qty: zod_1.z.number(),
    order_qty: zod_1.z.number(),
    notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
    validatedAt: zod_1.z.date(),
    validatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

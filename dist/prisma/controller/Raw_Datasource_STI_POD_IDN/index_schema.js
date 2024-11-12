"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    heater_qty: zod_1.z.string(),
    RJR_verification_flavor: zod_1.z.string(),
    verification_lot: zod_1.z.string(),
    supplier: zod_1.z.string(),
    heater_top_cover: zod_1.z.string(),
    heating_holder: zod_1.z.string(),
    silicone_1: zod_1.z.string(),
    tube: zod_1.z.string(),
    plastic_and_silicone_qty: zod_1.z.string(),
    thimble: zod_1.z.string(),
    silicone_3: zod_1.z.string(),
    silicone_2: zod_1.z.string(),
    bottom_cover: zod_1.z.string(),
    ceramic_heater: zod_1.z.string(),
    finished_product_material_number: zod_1.z.string(),
    material_code: zod_1.z.string(),
    heater_puff_WO: zod_1.z.string(),
    qty: zod_1.z.number(),
    filling_or_blister_WO: zod_1.z.string(),
    production_date: zod_1.z.date(),
    extra_flavor: zod_1.z.string(),
    remark: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
    validatedAt: zod_1.z.date(),
    validatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

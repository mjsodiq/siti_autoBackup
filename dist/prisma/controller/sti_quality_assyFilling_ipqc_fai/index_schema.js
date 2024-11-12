"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    WorkOrder: zod_1.z.string(),
    Line: zod_1.z.string(),
    Section: zod_1.z.string(),
    LaserCode: zod_1.z.string(),
    Date: zod_1.z.date(),
    FAI_StartTime: zod_1.z.date(),
    FAI_FinishTime: zod_1.z.date(),
    CPK: zod_1.z.string(),
    Image1: zod_1.z.string(),
    Image2: zod_1.z.string(),
    Image3: zod_1.z.string(),
    Notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
    validatedAt: zod_1.z.date(),
    validatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

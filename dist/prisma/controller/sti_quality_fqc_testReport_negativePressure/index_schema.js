"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string(),
    Complete_Date: zod_1.z.date(),
    IPQC_PIC: zod_1.z.string(),
    Job_Order: zod_1.z.string(),
    Product_Line: zod_1.z.string(),
    Mould: zod_1.z.string(),
    Flavor: zod_1.z.string(),
    Sample_Size: zod_1.z.number(),
    Result: zod_1.z.string(),
    Tested_By: index_schema_1.db_SCHEMA.shape.user_id,
    ConfirmedBy: index_schema_1.db_SCHEMA.shape.user_id,
    Notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
    Verification_Date: zod_1.z.date(),
    Verified_By: index_schema_1.db_SCHEMA.shape.user_id,
});

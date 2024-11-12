"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string(),
    Manufacture_Date: zod_1.z.date(),
    Job_Order: zod_1.z.string(),
    Product_Line: zod_1.z.string(),
    Flavor: zod_1.z.string(),
    Sampel_Size: zod_1.z.number(),
    Combined_Samples_With_Inspection: zod_1.z.boolean(),
    Defect_Quantity: zod_1.z.number(),
    Defect_Rate: zod_1.z.number(),
    Defect_Description_Note: zod_1.z.string(),
    Defect_Description: zod_1.z.string(),
    Result: zod_1.z.string(),
    Completed_Date: zod_1.z.date(),
    Note: zod_1.z.string(),
    Tested_By: zod_1.z.string(),
    Verified_By: zod_1.z.string(),
    Verification_Date: zod_1.z.date(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

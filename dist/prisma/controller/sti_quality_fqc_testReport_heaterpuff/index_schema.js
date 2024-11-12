"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string(),
    Manufacture_Date: zod_1.z.date(),
    Suction_Work_Order: zod_1.z.string(),
    Batch_Number: zod_1.z.string(),
    Liquid_Batch: zod_1.z.string(),
    Supplier: zod_1.z.string(),
    Heater_Top_Cover: zod_1.z.string(),
    Silicone: zod_1.z.string(),
    Heating_Holder: zod_1.z.string(),
    Tube: zod_1.z.string(),
    Flavor: zod_1.z.string(),
    Number_Of_Sample: zod_1.z.number(),
    Defect_Quantity: zod_1.z.number(),
    Defect_Rate: zod_1.z.number(),
    Defect_Description: zod_1.z.string(),
    Defect_Description_Note: zod_1.z.string(),
    Result: zod_1.z.string(),
    PO_Filling_Blister_WO: zod_1.z.string(),
    Completed_Date: zod_1.z.date(),
    Note: zod_1.z.string(),
    Tested_By: index_schema_1.db_SCHEMA.shape.user_id,
    Verified_By: index_schema_1.db_SCHEMA.shape.user_id,
    Verification_Date: zod_1.z.date(),
    Production_Plan: zod_1.z.date(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

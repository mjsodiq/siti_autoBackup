"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string(),
    RJR_Verification_Flavor: zod_1.z.string(),
    Verification_Lot: zod_1.z.string(),
    Supplier: zod_1.z.string(),
    Heater_Top_Cover: zod_1.z.string(),
    Heating_Holder: zod_1.z.string(),
    Silicone_1: zod_1.z.string(),
    Tube: zod_1.z.string(),
    Plastic_Silicone_Qty: zod_1.z.string(),
    Thimble: zod_1.z.string(),
    Silicone_3: zod_1.z.string(),
    Silicone_2: zod_1.z.string(),
    Bottom_Cover: zod_1.z.string(),
    Ceramic_Heater: zod_1.z.string(),
    Nomor_Bahan_Produk_Jadi: zod_1.z.string(),
    Pengkodean_Bahan: zod_1.z.string(),
    Heater_puff_WO: zod_1.z.string(),
    Qty: zod_1.z.number(),
    PO_Filling_Blister_WO: zod_1.z.string(),
    Rasa_Ekstra: zod_1.z.string(),
    Remark: zod_1.z.string(),
    Prod_Plan: zod_1.z.date(),
    Taken_From_IQC_status: zod_1.z.boolean(),
    Taken_From_IQC_date: zod_1.z.date(),
    Put_On_Production_status: zod_1.z.boolean(),
    Put_On_Production_date: zod_1.z.date(),
    Sample_In_status: zod_1.z.boolean(),
    Sample_In_date: zod_1.z.date(),
    Sample_Tested_status: zod_1.z.boolean(),
    Sample_Tested_date: zod_1.z.date(),
    Sample_Test_Result: zod_1.z.enum(["OK", "NG"]),
    Tester: index_schema_1.db_SCHEMA.shape.user_id,
    Tester_Plan: zod_1.z.string(),
    Verification_status: zod_1.z.boolean(),
    Verification_date: zod_1.z.date(),
    Verificator: index_schema_1.db_SCHEMA.shape.user_id,
    Notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

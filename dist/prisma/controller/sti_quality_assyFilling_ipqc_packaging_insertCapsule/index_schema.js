"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.string(),
    private_id: zod_1.z.string(),
    ipqc_verification: zod_1.z.string(),
    time_insert_capsule: zod_1.z.date(),
    line_packaging: zod_1.z.string(),
    pack_machine_number: zod_1.z.string(),
    operator_name: zod_1.z.string(),
    wo_packaging: zod_1.z.string(),
    wo_assembly: zod_1.z.string(),
    filling_line: zod_1.z.string(),
    pallet_number: zod_1.z.string(),
    quantity_capsule: zod_1.z.number(),
    quantity_NG: zod_1.z.number(),
    NG_Reverse: zod_1.z.number(),
    NG_Foreign: zod_1.z.number(),
    NG_BrokenCapsule: zod_1.z.number(),
    NG_WrongCode: zod_1.z.number(),
    NG_BrokenPVC: zod_1.z.number(),
    NG_BrokenAlumuniumFilm: zod_1.z.number(),
    NG_ForeignInTube: zod_1.z.number(),
    NG_CodeAtTube: zod_1.z.number(),
    NG_LeakEliquid: zod_1.z.number(),
    NG_DamageTube: zod_1.z.number(),
    NG_HadapTerbalik: zod_1.z.number(),
    NG_MixFlavor: zod_1.z.number(),
    NG_MixConcentration: zod_1.z.number(),
    NG_Missjudge: zod_1.z.number(),
    NG_NoLaserCode: zod_1.z.number(),
    notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
    Verification_Date: zod_1.z.date(),
    Verified_By: index_schema_1.db_SCHEMA.shape.user_id,
});
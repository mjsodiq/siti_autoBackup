"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string(),
    Pengumuman_Pengiriman_Shipment_Notification: zod_1.z.string(),
    Customer_PO: zod_1.z.string(),
    Material_Code_Serial: zod_1.z.string(),
    Flavor_Concentration_Rasa: zod_1.z.string(),
    Column1: zod_1.z.string(),
    Line: zod_1.z.string(),
    Order_Qty: zod_1.z.string(),
    Work_Order: zod_1.z.string(),
    Qty_Work_Order: zod_1.z.number(),
    Tanggal_Mulai: zod_1.z.date(),
    MNF_Issue_QTY: zod_1.z.number(),
    Receipt_Qty_of_Qualified_Product_BUoM: zod_1.z.number(),
    Unreceived_Qty: zod_1.z.number(),
    Notes_Catatan: zod_1.z.string(),
    Inspection_Keramik_Batch_Number: zod_1.z.string(),
    FAI_InDate: zod_1.z.date(),
    FAI_Result: zod_1.z.enum(["OK", "NG"]),
    FAI_ResultDate: zod_1.z.date(),
    FAI_Inspector: index_schema_1.db_SCHEMA.shape.user_id,
    Inspection_InDate: zod_1.z.date(),
    Inspection_Result: zod_1.z.enum(["OK", "NG"]),
    Inspection_ResultDate: zod_1.z.date(),
    Inspection_Inspector: index_schema_1.db_SCHEMA.shape.user_id,
    AltitudeNegatifPressure_InDate: zod_1.z.date(),
    AltitudeNegatifPressure_Result: zod_1.z.enum(["OK", "NG"]),
    AltitudeNegatifPressure_ResultDate: zod_1.z.date(),
    AltitudeNegatifPressure_Inspector: index_schema_1.db_SCHEMA.shape.user_id,
    Dripping_InDate: zod_1.z.date(),
    Dripping_Result: zod_1.z.enum(["OK", "NG"]),
    Dripping_ResultDate: zod_1.z.date(),
    Dripping_Inspector: index_schema_1.db_SCHEMA.shape.user_id,
    Shift: zod_1.z.string(),
    Notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: index_schema_1.db_SCHEMA.shape.user_id,
});

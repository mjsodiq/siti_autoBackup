"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.create_INPUT_SCHEMA = void 0;
const zod_1 = require("zod");
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_checklist_rjr/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
exports.create_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id,
    Pengumuman_Pengiriman_Shipment_Notification: index_schema_1.db_SCHEMA.shape.Pengumuman_Pengiriman_Shipment_Notification,
    Customer_PO: index_schema_1.db_SCHEMA.shape.Customer_PO,
    Material_Code_Serial: index_schema_1.db_SCHEMA.shape.Material_Code_Serial,
    Flavor_Concentration_Rasa: index_schema_1.db_SCHEMA.shape.Flavor_Concentration_Rasa,
    Column1: index_schema_1.db_SCHEMA.shape.Column1,
    Line: index_schema_1.db_SCHEMA.shape.Line,
    Order_Qty: index_schema_1.db_SCHEMA.shape.Order_Qty,
    Work_Order: index_schema_1.db_SCHEMA.shape.Work_Order,
    Qty_Work_Order: index_schema_1.db_SCHEMA.shape.Qty_Work_Order,
    Tanggal_Mulai: index_schema_1.db_SCHEMA.shape.Tanggal_Mulai,
    MNF_Issue_QTY: index_schema_1.db_SCHEMA.shape.MNF_Issue_QTY,
    Receipt_Qty_of_Qualified_Product_BUoM: index_schema_1.db_SCHEMA.shape.Receipt_Qty_of_Qualified_Product_BUoM,
    Unreceived_Qty: index_schema_1.db_SCHEMA.shape.Unreceived_Qty,
    Notes_Catatan: index_schema_1.db_SCHEMA.shape.Notes_Catatan,
    Inspection_Keramik_Batch_Number: index_schema_1.db_SCHEMA.shape.Inspection_Keramik_Batch_Number,
    FAI_InDate: index_schema_1.db_SCHEMA.shape.FAI_InDate,
    FAI_Result: index_schema_1.db_SCHEMA.shape.FAI_Result,
    FAI_ResultDate: index_schema_1.db_SCHEMA.shape.FAI_ResultDate,
    FAI_Inspector: index_schema_1.db_SCHEMA.shape.FAI_Inspector,
    Inspection_InDate: index_schema_1.db_SCHEMA.shape.Inspection_InDate,
    Inspection_Result: index_schema_1.db_SCHEMA.shape.Inspection_Result,
    Inspection_ResultDate: index_schema_1.db_SCHEMA.shape.Inspection_ResultDate,
    Inspection_Inspector: index_schema_1.db_SCHEMA.shape.Inspection_Inspector,
    AltitudeNegatifPressure_InDate: index_schema_1.db_SCHEMA.shape.AltitudeNegatifPressure_InDate,
    AltitudeNegatifPressure_Result: index_schema_1.db_SCHEMA.shape.AltitudeNegatifPressure_Result,
    AltitudeNegatifPressure_ResultDate: index_schema_1.db_SCHEMA.shape.AltitudeNegatifPressure_ResultDate,
    AltitudeNegatifPressure_Inspector: index_schema_1.db_SCHEMA.shape.AltitudeNegatifPressure_Inspector,
    Dripping_InDate: index_schema_1.db_SCHEMA.shape.Dripping_InDate,
    Dripping_Result: index_schema_1.db_SCHEMA.shape.Dripping_Result,
    Dripping_ResultDate: index_schema_1.db_SCHEMA.shape.Dripping_ResultDate,
    Dripping_Inspector: index_schema_1.db_SCHEMA.shape.Dripping_Inspector,
    Shift: index_schema_1.db_SCHEMA.shape.Shift,
    Notes: index_schema_1.db_SCHEMA.shape.Notes,
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, private_id, Pengumuman_Pengiriman_Shipment_Notification, Customer_PO, Material_Code_Serial, Flavor_Concentration_Rasa, Column1, Line, Order_Qty, Work_Order, Qty_Work_Order, Tanggal_Mulai, MNF_Issue_QTY, Receipt_Qty_of_Qualified_Product_BUoM, Unreceived_Qty, Notes_Catatan, Inspection_Keramik_Batch_Number, FAI_InDate, FAI_Result, FAI_ResultDate, FAI_Inspector, Inspection_InDate, Inspection_Result, Inspection_ResultDate, Inspection_Inspector, AltitudeNegatifPressure_InDate, AltitudeNegatifPressure_Result, AltitudeNegatifPressure_ResultDate, AltitudeNegatifPressure_Inspector, Dripping_InDate, Dripping_Result, Dripping_ResultDate, Dripping_Inspector, Shift, Notes, }) {
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
        id,
        private_id,
        Pengumuman_Pengiriman_Shipment_Notification,
        Customer_PO,
        Material_Code_Serial,
        Flavor_Concentration_Rasa,
        Column1,
        Line,
        Order_Qty,
        Work_Order,
        Qty_Work_Order,
        Tanggal_Mulai,
        MNF_Issue_QTY,
        Receipt_Qty_of_Qualified_Product_BUoM,
        Unreceived_Qty,
        Notes_Catatan,
        Inspection_Keramik_Batch_Number,
        FAI_InDate,
        FAI_Result,
        FAI_ResultDate,
        FAI_Inspector,
        Inspection_InDate,
        Inspection_Result,
        Inspection_ResultDate,
        Inspection_Inspector,
        AltitudeNegatifPressure_InDate,
        AltitudeNegatifPressure_Result,
        AltitudeNegatifPressure_ResultDate,
        AltitudeNegatifPressure_Inspector,
        Dripping_InDate,
        Dripping_Result,
        Dripping_ResultDate,
        Dripping_Inspector,
        Shift,
        Notes,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.fQC_Checklist_RJR.upsert({
            where: {
                id,
            },
            create: {
                id,
                private_id,
                Pengumuman_Pengiriman_Shipment_Notification,
                Customer_PO,
                Material_Code_Serial,
                Flavor_Concentration_Rasa,
                Column1,
                Line,
                Order_Qty,
                Work_Order,
                Qty_Work_Order,
                Tanggal_Mulai,
                MNF_Issue_QTY,
                Receipt_Qty_of_Qualified_Product_BUoM,
                Unreceived_Qty,
                Notes_Catatan,
                Inspection_Keramik_Batch_Number,
                FAI_InDate,
                FAI_Result,
                FAI_ResultDate,
                FAI_Inspector,
                Inspection_InDate,
                Inspection_Result,
                Inspection_ResultDate,
                Inspection_Inspector,
                AltitudeNegatifPressure_InDate,
                AltitudeNegatifPressure_Result,
                AltitudeNegatifPressure_ResultDate,
                AltitudeNegatifPressure_Inspector,
                Dripping_InDate,
                Dripping_Result,
                Dripping_ResultDate,
                Dripping_Inspector,
                Shift,
                Notes,
            },
            update: {
                private_id,
                Pengumuman_Pengiriman_Shipment_Notification,
                Customer_PO,
                Material_Code_Serial,
                Flavor_Concentration_Rasa,
                Column1,
                Line,
                Order_Qty,
                Work_Order,
                Qty_Work_Order,
                Tanggal_Mulai,
                MNF_Issue_QTY,
                Receipt_Qty_of_Qualified_Product_BUoM,
                Unreceived_Qty,
                Notes_Catatan,
                Inspection_Keramik_Batch_Number,
                FAI_InDate,
                FAI_Result,
                FAI_ResultDate,
                FAI_Inspector,
                Inspection_InDate,
                Inspection_Result,
                Inspection_ResultDate,
                Inspection_Inspector,
                AltitudeNegatifPressure_InDate,
                AltitudeNegatifPressure_Result,
                AltitudeNegatifPressure_ResultDate,
                AltitudeNegatifPressure_Inspector,
                Dripping_InDate,
                Dripping_Result,
                Dripping_ResultDate,
                Dripping_Inspector,
                Shift,
                Notes,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.create = create;

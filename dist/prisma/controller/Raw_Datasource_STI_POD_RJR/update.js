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
exports.update = exports.update_INPUT_SCHEMA = void 0;
const zod_1 = require("zod");
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/Raw_Datasource_STI_POD_RJR/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
exports.update_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    shipment_notification: index_schema_1.db_SCHEMA.shape.shipment_notification.optional(),
    customer_PO: index_schema_1.db_SCHEMA.shape.customer_PO.optional(),
    material_code_serial: index_schema_1.db_SCHEMA.shape.material_code_serial.optional(),
    flavor_concentration: index_schema_1.db_SCHEMA.shape.flavor_concentration.optional(),
    blister: index_schema_1.db_SCHEMA.shape.blister.optional(),
    line: index_schema_1.db_SCHEMA.shape.line.optional(),
    associate_work_order: index_schema_1.db_SCHEMA.shape.associate_work_order.optional(),
    production_order_number: index_schema_1.db_SCHEMA.shape.production_order_number.optional(),
    qty_work_order: index_schema_1.db_SCHEMA.shape.qty_work_order.optional(),
    tanggal_mulai: index_schema_1.db_SCHEMA.shape.tanggal_mulai.optional(),
    QC_sample: index_schema_1.db_SCHEMA.shape.QC_sample.optional(),
    accumulated_qty: index_schema_1.db_SCHEMA.shape.accumulated_qty.optional(),
    order_qty: index_schema_1.db_SCHEMA.shape.order_qty.optional(),
    notes: index_schema_1.db_SCHEMA.shape.notes.optional(),
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt.optional(),
    createdBy: index_schema_1.db_SCHEMA.shape.createdBy.optional(),
    updatedAt: index_schema_1.db_SCHEMA.shape.updatedAt.optional(),
    updatedBy: index_schema_1.db_SCHEMA.shape.updatedBy.optional(),
    validatedAt: index_schema_1.db_SCHEMA.shape.validatedAt.optional(),
    validatedBy: index_schema_1.db_SCHEMA.shape.validatedBy.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, shipment_notification, customer_PO, material_code_serial, flavor_concentration, blister, line, associate_work_order, production_order_number, qty_work_order, tanggal_mulai, QC_sample, accumulated_qty, order_qty, notes, createdAt, createdBy, updatedAt, updatedBy, validatedAt, validatedBy, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        id,
        shipment_notification,
        customer_PO,
        material_code_serial,
        flavor_concentration,
        blister,
        line,
        associate_work_order,
        production_order_number,
        qty_work_order,
        tanggal_mulai,
        QC_sample,
        accumulated_qty,
        order_qty,
        notes,
        createdAt,
        createdBy,
        updatedAt,
        updatedBy,
        validatedAt,
        validatedBy,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.raw_Datasource_STI_POD_RJR.update({
            where: {
                id,
            },
            data: {
                shipment_notification,
                customer_PO,
                material_code_serial,
                flavor_concentration,
                blister,
                line,
                associate_work_order,
                production_order_number,
                qty_work_order,
                tanggal_mulai,
                QC_sample,
                accumulated_qty,
                order_qty,
                notes,
                createdAt,
                createdBy,
                updatedAt,
                updatedBy,
                validatedAt,
                validatedBy,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.update = update;

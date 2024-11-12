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
const index_schema_1 = require("@/prisma/controller/Raw_Datasource_STI_POD_IDN/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
exports.update_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    heater_qty: index_schema_1.db_SCHEMA.shape.heater_qty,
    RJR_verification_flavor: index_schema_1.db_SCHEMA.shape.RJR_verification_flavor,
    verification_lot: index_schema_1.db_SCHEMA.shape.verification_lot,
    supplier: index_schema_1.db_SCHEMA.shape.supplier,
    heater_top_cover: index_schema_1.db_SCHEMA.shape.heater_top_cover,
    heating_holder: index_schema_1.db_SCHEMA.shape.heating_holder,
    silicone_1: index_schema_1.db_SCHEMA.shape.silicone_1,
    tube: index_schema_1.db_SCHEMA.shape.tube,
    plastic_and_silicone_qty: index_schema_1.db_SCHEMA.shape.plastic_and_silicone_qty,
    thimble: index_schema_1.db_SCHEMA.shape.thimble,
    silicone_3: index_schema_1.db_SCHEMA.shape.silicone_3,
    silicone_2: index_schema_1.db_SCHEMA.shape.silicone_2,
    bottom_cover: index_schema_1.db_SCHEMA.shape.bottom_cover,
    ceramic_heater: index_schema_1.db_SCHEMA.shape.ceramic_heater,
    finished_product_material_number: index_schema_1.db_SCHEMA.shape.finished_product_material_number,
    material_code: index_schema_1.db_SCHEMA.shape.material_code,
    heater_puff_WO: index_schema_1.db_SCHEMA.shape.heater_puff_WO,
    qty: index_schema_1.db_SCHEMA.shape.qty,
    filling_or_blister_WO: index_schema_1.db_SCHEMA.shape.filling_or_blister_WO,
    production_date: index_schema_1.db_SCHEMA.shape.production_date,
    extra_flavor: index_schema_1.db_SCHEMA.shape.extra_flavor,
    remark: index_schema_1.db_SCHEMA.shape.remark,
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt,
    createdBy: index_schema_1.db_SCHEMA.shape.createdBy,
    updatedAt: index_schema_1.db_SCHEMA.shape.updatedAt,
    updatedBy: index_schema_1.db_SCHEMA.shape.updatedBy,
    validatedAt: index_schema_1.db_SCHEMA.shape.validatedAt,
    validatedBy: index_schema_1.db_SCHEMA.shape.validatedBy,
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, heater_qty, RJR_verification_flavor, verification_lot, supplier, heater_top_cover, heating_holder, silicone_1, tube, plastic_and_silicone_qty, thimble, silicone_3, silicone_2, bottom_cover, ceramic_heater, finished_product_material_number, material_code, heater_puff_WO, qty, filling_or_blister_WO, production_date, extra_flavor, remark, createdAt, createdBy, updatedAt, updatedBy, validatedAt, validatedBy, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        id,
        heater_qty,
        RJR_verification_flavor,
        verification_lot,
        supplier,
        heater_top_cover,
        heating_holder,
        silicone_1,
        tube,
        plastic_and_silicone_qty,
        thimble,
        silicone_3,
        silicone_2,
        bottom_cover,
        ceramic_heater,
        finished_product_material_number,
        material_code,
        heater_puff_WO,
        qty,
        filling_or_blister_WO,
        production_date,
        extra_flavor,
        remark,
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
        const data = yield client_1.db.raw_Datasource_STI_POD_IDN.update({
            where: {
                id,
            },
            data: {
                heater_qty,
                RJR_verification_flavor,
                verification_lot,
                supplier,
                heater_top_cover,
                heating_holder,
                silicone_1,
                tube,
                plastic_and_silicone_qty,
                thimble,
                silicone_3,
                silicone_2,
                bottom_cover,
                ceramic_heater,
                finished_product_material_number,
                material_code,
                heater_puff_WO,
                qty,
                filling_or_blister_WO,
                production_date,
                extra_flavor,
                remark,
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

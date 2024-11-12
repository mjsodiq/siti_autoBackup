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
const index_schema_1 = require("@/prisma/controller/Raw_Datasource_STI_POD_IDN/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
exports.create_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    heater_qty: index_schema_1.db_SCHEMA.shape.heater_qty.optional(),
    RJR_verification_flavor: index_schema_1.db_SCHEMA.shape.RJR_verification_flavor.optional(),
    verification_lot: index_schema_1.db_SCHEMA.shape.verification_lot.optional(),
    supplier: index_schema_1.db_SCHEMA.shape.supplier.optional(),
    heater_top_cover: index_schema_1.db_SCHEMA.shape.heater_top_cover.optional(),
    heating_holder: index_schema_1.db_SCHEMA.shape.heating_holder.optional(),
    silicone_1: index_schema_1.db_SCHEMA.shape.silicone_1.optional(),
    tube: index_schema_1.db_SCHEMA.shape.tube.optional(),
    plastic_and_silicone_qty: index_schema_1.db_SCHEMA.shape.plastic_and_silicone_qty.optional(),
    thimble: index_schema_1.db_SCHEMA.shape.thimble.optional(),
    silicone_3: index_schema_1.db_SCHEMA.shape.silicone_3.optional(),
    silicone_2: index_schema_1.db_SCHEMA.shape.silicone_2.optional(),
    bottom_cover: index_schema_1.db_SCHEMA.shape.bottom_cover.optional(),
    ceramic_heater: index_schema_1.db_SCHEMA.shape.ceramic_heater.optional(),
    finished_product_material_number: index_schema_1.db_SCHEMA.shape.finished_product_material_number.optional(),
    material_code: index_schema_1.db_SCHEMA.shape.material_code.optional(),
    heater_puff_WO: index_schema_1.db_SCHEMA.shape.heater_puff_WO.optional(),
    qty: index_schema_1.db_SCHEMA.shape.qty.optional(),
    filling_or_blister_WO: index_schema_1.db_SCHEMA.shape.filling_or_blister_WO.optional(),
    production_date: index_schema_1.db_SCHEMA.shape.production_date.optional(),
    extra_flavor: index_schema_1.db_SCHEMA.shape.extra_flavor.optional(),
    remark: index_schema_1.db_SCHEMA.shape.remark.optional(),
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt.optional(),
    createdBy: index_schema_1.db_SCHEMA.shape.createdBy.optional(),
    updatedAt: index_schema_1.db_SCHEMA.shape.updatedAt.optional(),
    updatedBy: index_schema_1.db_SCHEMA.shape.updatedBy.optional(),
    validatedAt: index_schema_1.db_SCHEMA.shape.validatedAt.optional(),
    validatedBy: index_schema_1.db_SCHEMA.shape.validatedBy.optional(),
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, heater_qty, RJR_verification_flavor, verification_lot, supplier, heater_top_cover, heating_holder, silicone_1, tube, plastic_and_silicone_qty, thimble, silicone_3, silicone_2, bottom_cover, ceramic_heater, finished_product_material_number, material_code, heater_puff_WO, qty, filling_or_blister_WO, production_date, extra_flavor, remark, createdAt, createdBy, updatedAt, updatedBy, validatedAt, validatedBy, }) {
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
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
        const data = yield client_1.db.raw_Datasource_STI_POD_IDN.upsert({
            where: {
                id,
            },
            create: {
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
            },
            update: {
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
                updatedAt,
                updatedBy,
                validatedAt,
                validatedBy,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.create = create;

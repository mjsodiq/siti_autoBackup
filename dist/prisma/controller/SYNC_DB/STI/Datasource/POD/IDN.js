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
exports.IDN = void 0;
const client_1 = require("@/prisma/client");
const copyFile_if_modified_1 = require("@/utils/Fs/copyFile_if_modified");
const ensure_string_or_undefined_1 = require("@/utils/ensure_string_or_undefined");
const excell_serialDate_to_javascriptDate_1 = require("@/utils/excell_serialDate_to_javascriptDate");
const fs_1 = __importDefault(require("fs"));
const log_update_1 = require("log-update");
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const zod_1 = require("zod");
const dir_copy = fs_1.default.realpathSync("./prisma/controller/SYNC_DB/STI/Datasource/POD");
const datasource = `${process.env.DATASHARE_FOLDER}/RawDatasource/POD/IDN.xlsx`;
const destination = `${dir_copy}/IDN.xlsx`;
const ColumnSchema = zod_1.z.object({
    id: zod_1.z.number(),
    heater_qty: zod_1.z.string().optional().nullable(),
    RJR_verification_flavor: zod_1.z.string().optional(),
    verification_lot: zod_1.z.string().optional(),
    supplier: zod_1.z.string().optional(),
    heater_top_cover: zod_1.z.string().optional(),
    heating_holder: zod_1.z.string().optional(),
    silicone_1: zod_1.z.string().optional(),
    tube: zod_1.z.string().optional(),
    plastic_and_silicone_qty: zod_1.z.string().optional(),
    thimble: zod_1.z.string().optional(),
    silicone_3: zod_1.z.string().optional(),
    silicone_2: zod_1.z.string().optional(),
    bottom_cover: zod_1.z.string().optional(),
    ceramic_heater: zod_1.z.string().optional(),
    finished_product_material_number: zod_1.z.string().or(zod_1.z.number()).optional(),
    material_code: zod_1.z.string().or(zod_1.z.number()).optional(),
    heater_puff_WO: zod_1.z.string().or(zod_1.z.number()).optional(),
    qty: zod_1.z.number().optional(),
    filling_or_blister_WO: zod_1.z.string().or(zod_1.z.number()).optional(),
    production_date: zod_1.z.string().or(zod_1.z.number()).optional(),
    extra_flavor: zod_1.z.string().optional(),
    remark: zod_1.z.string().or(zod_1.z.number()).optional(),
    prod_plan: zod_1.z.number().optional(),
    createdAt: zod_1.z.number().optional(),
    createdBy: zod_1.z.string().optional(),
    updatedAt: zod_1.z.number().optional(),
    updatedBy: zod_1.z.string().optional(),
    validatedAt: zod_1.z.string().optional(),
    validatedBy: zod_1.z.string().optional(),
});
const IDN = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const need_to_update = (0, copyFile_if_modified_1.copyFile_if_modified)(datasource, destination);
        if (need_to_update) {
            try {
                const workbook = node_xlsx_1.default.parse(destination.replaceAll("\\", "/"), { raw: true });
                const worksheet = workbook.filter((item) => item.name == "IDN")[0];
                const content = worksheet.data;
                const header = content[0];
                const data = content.slice(1, content.length + 1);
                const data_dict = data.map((item, index) => {
                    let data_per_row = {};
                    header.map((item2, index2) => {
                        data_per_row = Object.assign(data_per_row, { [item2]: item[index2] });
                    });
                    return data_per_row;
                });
                const data_count = data_dict.length;
                const myLog = (0, log_update_1.createLogUpdate)(process.stdout, {
                    showCursor: true,
                });
                const finished = [];
                yield Promise.all(data_dict.map((item, index) => __awaiter(void 0, void 0, void 0, function* () {
                    const validate = yield ColumnSchema.safeParseAsync(item);
                    if (validate.error) {
                        console.log(validate.error.issues);
                    }
                    else {
                        const data_to_store = {
                            id: validate.data.id,
                            heater_qty: validate.data.heater_qty,
                            RJR_verification_flavor: validate.data.RJR_verification_flavor,
                            verification_lot: validate.data.verification_lot,
                            supplier: validate.data.supplier,
                            heater_top_cover: validate.data.heater_top_cover,
                            heating_holder: validate.data.heating_holder,
                            silicone_1: validate.data.silicone_1,
                            tube: validate.data.tube,
                            plastic_and_silicone_qty: validate.data.plastic_and_silicone_qty,
                            thimble: validate.data.thimble,
                            silicone_3: validate.data.silicone_3,
                            silicone_2: validate.data.silicone_2,
                            bottom_cover: validate.data.bottom_cover,
                            ceramic_heater: validate.data.ceramic_heater,
                            finished_product_material_number: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.finished_product_material_number),
                            material_code: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.material_code),
                            heater_puff_WO: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.heater_puff_WO),
                            qty: validate.data.qty,
                            filling_or_blister_WO: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.filling_or_blister_WO),
                            production_date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.production_date),
                            extra_flavor: validate.data.extra_flavor,
                            remark: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.remark),
                            prod_plan: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.prod_plan),
                            createdAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.createdAt),
                            createdBy: validate.data.createdBy,
                            updatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.updatedAt),
                            updatedBy: validate.data.updatedBy,
                            validatedAt: validate.data.validatedAt,
                            validatedBy: validate.data.validatedBy,
                        };
                        yield client_1.db.raw_Datasource_STI_POD_IDN.upsert({
                            where: {
                                id: validate.data.id,
                            },
                            create: Object.assign({}, data_to_store),
                            update: Object.assign(Object.assign({}, data_to_store), { id: undefined, createdAt: undefined }),
                        });
                        finished.push(index);
                    }
                    myLog(`Process row IDN: ${finished.length} / ${data_count} (${((finished.length / data_count) * 100).toFixed(2)} %)`);
                })));
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("No update for Datasource/POD/IDN ");
        }
    }
    catch (error) {
        console.log("Can not copy IDN file");
    }
});
exports.IDN = IDN;

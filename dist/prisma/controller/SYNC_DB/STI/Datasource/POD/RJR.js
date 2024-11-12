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
exports.RJR = void 0;
const copyFile_if_modified_1 = require("@/utils/Fs/copyFile_if_modified");
const fs_1 = __importDefault(require("fs"));
const dir_copy = fs_1.default.realpathSync("./prisma/controller/SYNC_DB/STI/Datasource/POD");
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const zod_1 = require("zod");
const log_update_1 = require("log-update");
const client_1 = require("@/prisma/client");
const excell_serialDate_to_javascriptDate_1 = require("@/utils/excell_serialDate_to_javascriptDate");
const ensure_string_or_undefined_1 = require("@/utils/ensure_string_or_undefined");
const ensure_number_or_undefined_1 = require("@/utils/ensure_number_or_undefined");
const datasource = `${process.env.DATASHARE_FOLDER}/RawDatasource/POD/RJR.xlsx`;
const destination = `${dir_copy}/RJR.xlsx`;
const ColumnSchema = zod_1.z.object({
    id: zod_1.z.number(),
    shipment_notification: zod_1.z.string().or(zod_1.z.number()).optional(),
    customer_PO: zod_1.z.string().or(zod_1.z.number()).optional(),
    material_code_serial: zod_1.z.string().or(zod_1.z.number()).optional(),
    flavor_concentration: zod_1.z.string().optional(),
    blister: zod_1.z.string().optional(),
    line: zod_1.z.string().optional(),
    associate_work_order: zod_1.z.string().or(zod_1.z.number()).optional(),
    production_order_number: zod_1.z.string().or(zod_1.z.number()).optional(),
    qty_work_order: zod_1.z.string().or(zod_1.z.number()).optional(),
    tanggal_mulai: zod_1.z.number().optional(),
    QC_sample: zod_1.z.number().optional(),
    accumulated_qty: zod_1.z.number().optional(),
    order_qty: zod_1.z.number().optional(),
    notes: zod_1.z.string().optional(),
    createdAt: zod_1.z.number().optional(),
    createdBy: zod_1.z.string().optional(),
    updatedAt: zod_1.z.number().optional(),
    updatedBy: zod_1.z.string().optional(),
    validatedAt: zod_1.z.number().optional(),
    validatedBy: zod_1.z.string().optional(),
});
const RJR = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const need_to_update = (0, copyFile_if_modified_1.copyFile_if_modified)(datasource, destination);
        if (need_to_update) {
            try {
                const workbook = node_xlsx_1.default.parse(destination.replaceAll("\\", "/"), { raw: true });
                const worksheet = workbook.filter((item) => item.name == "RJR")[0];
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
                    var _a;
                    const validate = yield ColumnSchema.safeParseAsync(item);
                    if (validate.error) {
                        console.log(validate.error.issues);
                    }
                    else {
                        const data_to_store = {
                            id: validate.data.id,
                            shipment_notification: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.shipment_notification),
                            customer_PO: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.customer_PO),
                            material_code_serial: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.material_code_serial),
                            flavor_concentration: validate.data.flavor_concentration,
                            blister: validate.data.blister,
                            line: (_a = validate.data.line) === null || _a === void 0 ? void 0 : _a.replaceAll("STI-", ""),
                            associate_work_order: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.associate_work_order),
                            production_order_number: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.production_order_number),
                            qty_work_order: (0, ensure_number_or_undefined_1.ensure_number_or_undefined)(validate.data.qty_work_order),
                            tanggal_mulai: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.tanggal_mulai),
                            QC_sample: validate.data.QC_sample,
                            accumulated_qty: validate.data.accumulated_qty,
                            order_qty: validate.data.order_qty,
                            notes: validate.data.notes,
                            createdAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.createdAt),
                            createdBy: validate.data.createdBy,
                            updatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.updatedAt),
                            updatedBy: validate.data.updatedBy,
                            validatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.validatedAt),
                            validatedBy: validate.data.validatedBy,
                        };
                        yield client_1.db.raw_Datasource_STI_POD_RJR.upsert({
                            where: {
                                id: validate.data.id,
                            },
                            create: Object.assign({}, data_to_store),
                            update: Object.assign(Object.assign({}, data_to_store), { id: undefined, createdAt: undefined }),
                        });
                        finished.push(index);
                    }
                    myLog(`Process row RJR: ${finished.length} / ${data_count} (${((finished.length / data_count) * 100).toFixed(2)} %)`);
                })));
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("No update for Datasource/POD/RJR ");
        }
    }
    catch (error) {
        console.log("Can not copy RJR file");
    }
});
exports.RJR = RJR;

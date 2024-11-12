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
const ensure_string_or_undefined_1 = require("@/utils/ensure_string_or_undefined");
const excell_serialDate_to_javascriptDate_1 = require("@/utils/excell_serialDate_to_javascriptDate");
const sti_quality_fqc_testReport_negativePressure_1 = __importDefault(require("@/prisma/controller/sti_quality_fqc_testReport_negativePressure"));
const log_update_1 = require("log-update");
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const zod_1 = require("zod");
const ColumnSchema = zod_1.z.object({
    private_id: zod_1.z.string().optional(),
    Complete_Date: zod_1.z.number().optional(),
    Sender: zod_1.z.string().optional(),
    Job_Order: zod_1.z.string().or(zod_1.z.number()).optional(),
    Product_Line: zod_1.z.string().optional(),
    Mould: zod_1.z.string().optional(),
    Flavor: zod_1.z.string().optional(),
    Sample_Size: zod_1.z.number().optional(),
    Result: zod_1.z.string().optional(),
    Tested_By: zod_1.z.string().optional(),
    ConfirmedBy: zod_1.z.string().optional(),
    Notes: zod_1.z.string().optional(),
    createdAt: zod_1.z.string().or(zod_1.z.number()).optional(),
    createdBy: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().or(zod_1.z.number()).optional(),
    updatedBy: zod_1.z.string().optional(),
    Verified_By: zod_1.z.string().optional(),
    Verification_Date: zod_1.z.string().or(zod_1.z.number()).optional(),
});
const NEGATIVE_PRESSURE = (destination) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workbook = node_xlsx_1.default.parse(destination.replaceAll("\\", "/"), { raw: true });
        const worksheet = workbook.filter((item) => item.name == "NEGATIVE_PRESSURE")[0];
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
                console.log(item);
            }
            else {
                const data_to_store = {
                    private_id: validate.data.private_id,
                    Complete_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Complete_Date),
                    IPQC_PIC: validate.data.Sender,
                    Job_Order: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Job_Order),
                    Product_Line: validate.data.Product_Line,
                    Mould: validate.data.Mould,
                    Flavor: validate.data.Flavor,
                    Sample_Size: validate.data.Sample_Size,
                    Result: validate.data.Result,
                    Tested_By: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Tested_By),
                    ConfirmedBy: validate.data.ConfirmedBy,
                    Notes: validate.data.Notes,
                    createdAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.createdAt),
                    createdBy: validate.data.createdBy,
                    updatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.updatedAt),
                    updatedBy: validate.data.updatedBy,
                    Verified_By: validate.data.Verified_By,
                    Verification_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Verification_Date),
                };
                console.log(data_to_store);
                yield sti_quality_fqc_testReport_negativePressure_1.default.create(Object.assign(Object.assign({}, data_to_store), { sender: "S1134329" }));
                finished.push(index);
            }
            myLog(`Process row Negative Pressure: ${finished.length} / ${data_count} (${((finished.length / data_count) * 100).toFixed(2)} %)`);
        })));
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = NEGATIVE_PRESSURE;

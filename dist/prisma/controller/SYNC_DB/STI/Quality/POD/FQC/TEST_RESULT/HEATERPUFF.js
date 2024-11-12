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
const client_1 = require("@/prisma/client");
const ensure_string_or_undefined_1 = require("@/utils/ensure_string_or_undefined");
const excell_serialDate_to_javascriptDate_1 = require("@/utils/excell_serialDate_to_javascriptDate");
const log_update_1 = require("log-update");
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const zod_1 = require("zod");
const ColumnSchema = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string().optional(),
    Manufacture_Date: zod_1.z.number().optional(),
    Suction_Work_Order: zod_1.z.string().or(zod_1.z.number()).optional(),
    Batch_Number: zod_1.z.string().or(zod_1.z.number()).optional(),
    Liquid_Batch: zod_1.z.string().or(zod_1.z.number()).optional(),
    Supplier: zod_1.z.string().optional(),
    Heater_Top_Cover: zod_1.z.string().optional(),
    Silicone: zod_1.z.string().or(zod_1.z.number()).optional(),
    Heating_Holder: zod_1.z.string().optional(),
    Tube: zod_1.z.string().optional(),
    Flavor: zod_1.z.string().optional(),
    Number_Of_Sample: zod_1.z.number().optional(),
    Defect_Quantity: zod_1.z.number().optional(),
    Defect_Rate: zod_1.z.number().optional(),
    Defect_Description: zod_1.z.string().or(zod_1.z.number()).optional(),
    Defect_Description_Note: zod_1.z.string().optional(),
    Result: zod_1.z.string().optional(),
    PO_Filling_Blister_WO: zod_1.z.string().or(zod_1.z.number()).optional(),
    Completed_Date: zod_1.z.number().optional(),
    Note: zod_1.z.string().optional(),
    Tested_By: zod_1.z.string().or(zod_1.z.number()).optional(),
    Verified_By: zod_1.z.string().optional(),
    Verification_Date: zod_1.z.number().optional(),
    Production_Plan: zod_1.z.number().optional(),
    createdAt: zod_1.z.number().optional(),
    createdBy: zod_1.z.string().optional(),
    updatedAt: zod_1.z.number().optional(),
    updatedBy: zod_1.z.string().optional(),
});
const HEATERPUFF = (destination) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workbook = node_xlsx_1.default.parse(destination.replaceAll("\\", "/"), { raw: true });
        const worksheet = workbook.filter((item) => item.name == "HEATERPUFF")[0];
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
                    id: validate.data.id,
                    private_id: validate.data.private_id,
                    Manufacture_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Manufacture_Date),
                    Suction_Work_Order: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Suction_Work_Order),
                    Batch_Number: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Batch_Number),
                    Liquid_Batch: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Liquid_Batch),
                    Supplier: validate.data.Supplier,
                    Heater_Top_Cover: validate.data.Heater_Top_Cover,
                    Silicone: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Silicone),
                    Heating_Holder: validate.data.Heating_Holder,
                    Tube: validate.data.Tube,
                    Flavor: validate.data.Flavor,
                    Number_Of_Sample: validate.data.Number_Of_Sample,
                    Defect_Quantity: validate.data.Defect_Quantity,
                    Defect_Rate: validate.data.Defect_Rate,
                    Defect_Description: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Defect_Description),
                    Defect_Description_Note: validate.data.Defect_Description_Note,
                    Result: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Result),
                    PO_Filling_Blister_WO: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.PO_Filling_Blister_WO),
                    Completed_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Completed_Date),
                    Note: validate.data.Note,
                    Tested_By: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.Tested_By),
                    Verified_By: validate.data.Verified_By,
                    Verification_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Verification_Date),
                    Production_Plan: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Production_Plan),
                    createdAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.createdAt),
                    createdBy: validate.data.createdBy,
                    updatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.updatedAt),
                    updatedBy: validate.data.updatedBy,
                };
                yield client_1.db.sTI_Quality_FQC_TestReport_Heaterpuff.upsert({
                    where: {
                        id: validate.data.id,
                    },
                    create: Object.assign({}, data_to_store),
                    update: Object.assign(Object.assign({}, data_to_store), { id: undefined, createdAt: undefined }),
                });
                finished.push(index);
            }
            myLog(`Process row HEATERPUFF: ${finished.length} / ${data_count} (${((finished.length / data_count) * 100).toFixed(2)} %)`);
        })));
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = HEATERPUFF;

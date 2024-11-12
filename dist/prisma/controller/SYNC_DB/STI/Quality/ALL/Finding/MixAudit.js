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
exports.MixAudit = void 0;
const client_1 = require("@/prisma/client");
const copyFile_if_modified_1 = require("@/utils/Fs/copyFile_if_modified");
const ensure_string_or_undefined_1 = require("@/utils/ensure_string_or_undefined");
const excell_serialDate_to_javascriptDate_1 = require("@/utils/excell_serialDate_to_javascriptDate");
const fs_1 = __importDefault(require("fs"));
const log_update_1 = require("log-update");
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const zod_1 = require("zod");
const dir_copy = fs_1.default.realpathSync("./prisma/controller/SYNC_DB/STI/Quality/ALL/Finding");
const datasource = `${process.env.DATASHARE_FOLDER}/RawDatasource/All/Finding/Mix_Audit_Clear.xlsx`;
const destination = `${dir_copy}/Mix_Audit_Clear.xlsx`;
const ColumnSchema = zod_1.z.object({
    id: zod_1.z.number(),
    private_id: zod_1.z.string().or(zod_1.z.number()).optional(),
    name: zod_1.z.string().optional(),
    employee_id: zod_1.z.string().optional(),
    date: zod_1.z.string().or(zod_1.z.number()).optional(),
    week: zod_1.z.number().optional(),
    shift: zod_1.z.string().optional(),
    line: zod_1.z.string().optional(),
    section: zod_1.z.string().or(zod_1.z.number()).optional(),
    flavor: zod_1.z.string().optional(),
    concentration: zod_1.z.string().or(zod_1.z.number()).optional(),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    picture_finding: zod_1.z.string().optional(),
    quickly_action: zod_1.z.string().optional(),
    confirm: zod_1.z.string().optional(),
    score: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
    improverment_action: zod_1.z.string().optional(),
    picture_improvement: zod_1.z.string().optional(),
    notes: zod_1.z.string().optional(),
    createdAt: zod_1.z.number().optional(),
    createdBy: zod_1.z.string().optional(),
    updatedAt: zod_1.z.number().optional(),
    updatedBy: zod_1.z.string().optional(),
    Verification_Date: zod_1.z.number().optional(),
    Verified_By: zod_1.z.string().optional(),
});
const MixAudit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const need_to_update = (0, copyFile_if_modified_1.copyFile_if_modified)(datasource, destination);
        if (need_to_update) {
            try {
                const workbook = node_xlsx_1.default.parse(destination.replaceAll("\\", "/"), { raw: true });
                const worksheet = workbook.filter((item) => item.name == "MixAudit")[0];
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
                        const originalConcentration = (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(typeof validate.data.concentration == "number" ? `${(validate.data.concentration * 100).toFixed(2).replaceAll("0", "")}` : validate.data.concentration);
                        const concentration = originalConcentration
                            ? `${(originalConcentration === null || originalConcentration === void 0 ? void 0 : originalConcentration.endsWith(".")) ? originalConcentration.slice(0, originalConcentration.length - 1) : originalConcentration}%`
                            : "";
                        console.log(concentration);
                        const data_to_store = {
                            id: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.id) || "",
                            private_id: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.private_id),
                            name: validate.data.name,
                            employee_id: validate.data.employee_id,
                            date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.date),
                            week: validate.data.week,
                            shift: validate.data.shift,
                            line: validate.data.line,
                            section: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.section),
                            flavor: validate.data.flavor,
                            concentration: concentration,
                            category: validate.data.category,
                            description: validate.data.description,
                            picture_finding: validate.data.picture_finding,
                            quickly_action: validate.data.quickly_action,
                            confirm: validate.data.confirm,
                            score: validate.data.score,
                            status: validate.data.status,
                            improverment_action: validate.data.improverment_action,
                            picture_improvement: validate.data.picture_improvement,
                            notes: validate.data.notes,
                            createdAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.createdAt),
                            createdBy: validate.data.createdBy,
                            updatedAt: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.updatedAt),
                            updatedBy: validate.data.updatedBy,
                            Verification_Date: (0, excell_serialDate_to_javascriptDate_1.excell_serialDate_to_javascriptDate)(validate.data.Verification_Date),
                            Verified_By: validate.data.Verified_By,
                        };
                        yield client_1.db.sTI_Quality_All_Finding_MixAudit.upsert({
                            where: {
                                id: (0, ensure_string_or_undefined_1.ensure_string_or_undefined)(validate.data.id),
                            },
                            create: Object.assign({}, data_to_store),
                            update: Object.assign(Object.assign({}, data_to_store), { id: undefined, createdAt: undefined, createdBy: undefined }),
                        });
                        finished.push(index);
                    }
                    myLog(`Process row Mix Audit: ${finished.length} / ${data_count} (${((finished.length / data_count) * 100).toFixed(2)} %)`);
                })));
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("No update for RawDatasource/All/Finding/Mix_Audit_Clear ");
        }
    }
    catch (error) {
        console.log("Can not copy Mix_Audit_Clear file");
    }
});
exports.MixAudit = MixAudit;
